import { exec } from 'child_process';
import { promisify } from 'util';
import { readFile } from 'fs/promises';
import { join } from 'path';
import type { ClassItem } from '@shared/schema';

const execAsync = promisify(exec);

interface ClassDataCache {
  live: ClassItem[];
  up: ClassItem[];
  completed: ClassItem[];
  lastUpdated: Date;
}

let cache: ClassDataCache = {
  live: [],
  up: [],
  completed: [],
  lastUpdated: new Date(),
};

async function readJsonFile(type: 'live' | 'up' | 'completed'): Promise<ClassItem[]> {
  try {
    const filePath = join(process.cwd(), `output_${type}.json`);
    const content = await readFile(filePath, 'utf-8');
    const data = JSON.parse(content);
    
    if (data.status === false) {
      console.error(`Error in ${type} data:`, data.error);
      return [];
    }
    
    if (Array.isArray(data)) {
      return data as ClassItem[];
    }
    
    if (data.status === true && Array.isArray(data.data)) {
      return data.data as ClassItem[];
    }
    
    return [];
  } catch (error) {
    console.error(`Failed to read ${type} data:`, error);
    return [];
  }
}

export async function fetchClasses(): Promise<void> {
  try {
    console.log('Running bash script to fetch classes...');
    const scriptPath = join(process.cwd(), 'server', 'fetch-classes.sh');
    
    await execAsync(`bash "${scriptPath}"`, {
      cwd: process.cwd(),
      timeout: 30000,
    });

    const [live, up, completed] = await Promise.all([
      readJsonFile('live'),
      readJsonFile('up'),
      readJsonFile('completed'),
    ]);

    cache = {
      live,
      up,
      completed,
      lastUpdated: new Date(),
    };

    console.log(`Classes updated: ${live.length} live, ${up.length} upcoming, ${completed.length} completed`);
  } catch (error) {
    console.error('Failed to fetch classes:', error);
  }
}

export function getClassesByType(type: 'live' | 'up' | 'completed'): ClassItem[] {
  return cache[type] || [];
}

export function getAllClasses(): ClassDataCache {
  return cache;
}

export async function startPeriodicFetch(intervalMs: number = 60000): Promise<void> {
  await fetchClasses();
  
  setInterval(async () => {
    await fetchClasses();
  }, intervalMs);
}
