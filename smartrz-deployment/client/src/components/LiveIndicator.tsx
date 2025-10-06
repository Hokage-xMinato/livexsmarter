export default function LiveIndicator() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-chart-1 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-chart-1"></span>
      </div>
      <span className="text-xs font-medium uppercase tracking-wide text-chart-1">Live</span>
    </div>
  );
}
