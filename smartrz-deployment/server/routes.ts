import type { Express } from "express";
import { createServer, type Server } from "http";
import { getClassesByType, startPeriodicFetch } from "./class-fetcher";

export async function registerRoutes(app: Express): Promise<Server> {
  startPeriodicFetch(60000);

  app.get('/api/classes/:type', (req, res) => {
    const { type } = req.params;
    
    if (type !== 'live' && type !== 'up' && type !== 'completed') {
      return res.status(400).json({ error: 'Invalid type. Must be live, up, or completed.' });
    }

    const classes = getClassesByType(type);
    res.json(classes);
  });

  const httpServer = createServer(app);

  return httpServer;
}
