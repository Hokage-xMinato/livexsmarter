import ThemeToggle from './ThemeToggle';
import LiveIndicator from './LiveIndicator';

interface HeaderProps {
  lastUpdated?: string;
}

export default function Header({ lastUpdated }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-md bg-primary text-primary-foreground">
            <span className="text-xl font-bold">S</span>
          </div>
          <div>
            <h1 className="text-xl font-bold" data-testid="text-app-name">SmartRZ</h1>
            <p className="text-xs text-muted-foreground">Live Classes</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          {lastUpdated && (
            <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <LiveIndicator />
                <span className="hidden md:inline">Auto-updating</span>
              </div>
              <span className="hidden md:inline">•</span>
              <span className="text-xs" data-testid="text-last-updated">
                Updated {lastUpdated}
              </span>
            </div>
          )}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
