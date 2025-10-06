import { Inbox } from 'lucide-react';

interface EmptyStateProps {
  message: string;
}

export default function EmptyState({ message }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
      <div className="rounded-full bg-muted p-6 mb-4">
        <Inbox className="w-12 h-12 text-muted-foreground" />
      </div>
      <p className="text-muted-foreground" data-testid="text-empty-message">{message}</p>
    </div>
  );
}
