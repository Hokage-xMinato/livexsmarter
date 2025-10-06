import StatusBadge from '../StatusBadge';

export default function StatusBadgeExample() {
  return (
    <div className="flex gap-4 p-8">
      <StatusBadge type="live" />
      <StatusBadge type="upcoming" />
      <StatusBadge type="completed" />
    </div>
  );
}
