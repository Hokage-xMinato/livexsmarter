import { Clock, CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

type StatusType = 'live' | 'upcoming' | 'completed';

interface StatusBadgeProps {
  type: StatusType;
}

export default function StatusBadge({ type }: StatusBadgeProps) {
  if (type === 'live') {
    return (
      <Badge className="bg-chart-1 text-white border-chart-1 hover:bg-chart-1">
        LIVE
      </Badge>
    );
  }
  
  if (type === 'upcoming') {
    return (
      <Badge className="bg-chart-3 text-white border-chart-3 hover:bg-chart-3">
        <Clock className="w-3 h-3 mr-1" />
        UPCOMING
      </Badge>
    );
  }
  
  return (
    <Badge variant="secondary">
      <CheckCircle2 className="w-3 h-3 mr-1" />
      COMPLETED
    </Badge>
  );
}
