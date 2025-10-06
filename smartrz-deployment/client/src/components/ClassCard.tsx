import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Play } from 'lucide-react';
import StatusBadge from './StatusBadge';
import LiveIndicator from './LiveIndicator';
import type { ClassItem } from '@shared/schema';

type StatusType = 'live' | 'upcoming' | 'completed';

interface ClassCardProps {
  item: ClassItem;
  status: StatusType;
}

export default function ClassCard({ item, status }: ClassCardProps) {
  const borderColorClass = 
    status === 'live' ? 'border-l-chart-1' :
    status === 'upcoming' ? 'border-l-chart-3' :
    'border-l-muted';

  return (
    <Card className={`border-l-4 ${borderColorClass} hover-elevate transition-all duration-200`} data-testid={`card-class-${status}`}>
      <CardHeader className="flex flex-row items-start justify-between gap-2 space-y-0 pb-3">
        <div className="flex-1 min-w-0">
          {status === 'live' && <LiveIndicator />}
        </div>
        <StatusBadge type={status} />
      </CardHeader>
      <CardContent className="space-y-3">
        {item.image && (
          <div className="w-full h-32 rounded-md overflow-hidden bg-muted">
            <img 
              src={item.image} 
              alt={item.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        )}
        <h3 className="font-medium text-lg leading-tight line-clamp-2" data-testid="text-class-title">
          {item.title}
        </h3>
        {item.batch && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <BookOpen className="w-4 h-4" />
            <span data-testid="text-batch">{item.batch}</span>
          </div>
        )}
      </CardContent>
      <CardFooter className="pt-0">
        <Button 
          className="w-full" 
          variant={status === 'live' ? 'default' : 'outline'}
          onClick={() => window.open(item.link, '_blank')}
          data-testid="button-view-class"
        >
          <Play className="w-4 h-4 mr-2" />
          {status === 'live' ? 'Join Now' : status === 'upcoming' ? 'View Details' : 'Watch Recording'}
        </Button>
      </CardFooter>
    </Card>
  );
}
