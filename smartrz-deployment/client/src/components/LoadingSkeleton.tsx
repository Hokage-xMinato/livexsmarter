import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

export default function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3].map((i) => (
        <Card key={i} className="animate-pulse">
          <CardHeader className="space-y-2">
            <div className="h-4 bg-muted rounded w-20"></div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="h-6 bg-muted rounded w-3/4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-muted rounded w-1/2"></div>
              <div className="h-4 bg-muted rounded w-2/3"></div>
            </div>
          </CardContent>
          <CardFooter>
            <div className="h-9 bg-muted rounded w-full"></div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
