import ClassCard from './ClassCard';
import EmptyState from './EmptyState';
import { Badge } from '@/components/ui/badge';
import type { ClassItem } from '@shared/schema';

type StatusType = 'live' | 'upcoming' | 'completed';

interface ClassSectionProps {
  title: string;
  items: ClassItem[];
  status: StatusType;
  emptyMessage: string;
}

export default function ClassSection({ title, items, status, emptyMessage }: ClassSectionProps) {
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-3">
        <h2 className="text-2xl font-semibold" data-testid={`heading-${status}`}>{title}</h2>
        <Badge variant="secondary" data-testid={`badge-count-${status}`}>
          {items.length}
        </Badge>
      </div>
      
      {items.length === 0 ? (
        <EmptyState message={emptyMessage} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <ClassCard 
              key={`${status}-${index}`} 
              item={item} 
              status={status}
            />
          ))}
        </div>
      )}
    </section>
  );
}
