import { useQuery } from '@tanstack/react-query';
import Header from '@/components/Header';
import ClassSection from '@/components/ClassSection';
import LoadingSkeleton from '@/components/LoadingSkeleton';
import { useToast } from '@/hooks/use-toast';
import { useEffect, useState } from 'react';
import type { ClassItem } from '@shared/schema';

function IndependentClassSection({ 
  type, 
  title, 
  emptyMessage 
}: { 
  type: 'live' | 'up' | 'completed';
  title: string;
  emptyMessage: string;
}) {
  const { toast } = useToast();
  const [hasShownError, setHasShownError] = useState(false);
  
  const { data, isLoading, error } = useQuery<ClassItem[]>({
    queryKey: ['/api/classes', type],
    refetchInterval: 60000,
    retry: 2,
  });

  useEffect(() => {
    if (error && !hasShownError) {
      toast({
        title: `Failed to load ${title.toLowerCase()}`,
        description: `Unable to fetch ${title.toLowerCase()}. Other sections may still work.`,
        variant: 'destructive',
      });
      setHasShownError(true);
    }
  }, [error, hasShownError, toast, title]);

  if (isLoading) {
    return (
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl font-semibold" data-testid={`heading-${type}`}>{title}</h2>
        </div>
        <LoadingSkeleton />
      </section>
    );
  }

  if (error) {
    return (
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl font-semibold" data-testid={`heading-${type}`}>{title}</h2>
        </div>
        <div className="text-center py-8 text-muted-foreground border border-dashed rounded-lg">
          Failed to load {title.toLowerCase()}
        </div>
      </section>
    );
  }

  const statusMap = {
    'live': 'live' as const,
    'up': 'upcoming' as const,
    'completed': 'completed' as const,
  };

  return (
    <ClassSection
      title={title}
      items={data || []}
      status={statusMap[type]}
      emptyMessage={emptyMessage}
    />
  );
}

export default function Dashboard() {
  const formatLastUpdated = () => {
    const now = new Date();
    return now.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
  };

  const [lastUpdated, setLastUpdated] = useState(formatLastUpdated());

  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdated(formatLastUpdated());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header lastUpdated={lastUpdated} />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 space-y-12">
        <IndependentClassSection
          type="live"
          title="Live Now"
          emptyMessage="No live classes at the moment"
        />
        
        <IndependentClassSection
          type="up"
          title="Upcoming Classes"
          emptyMessage="No upcoming classes scheduled"
        />
        
        <IndependentClassSection
          type="completed"
          title="Recorded Classes"
          emptyMessage="No recorded classes available"
        />
      </main>
      
      <footer className="border-t mt-auto py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-muted-foreground">
            Auto-updates every minute • Last updated: {lastUpdated}
          </p>
        </div>
      </footer>
    </div>
  );
}
