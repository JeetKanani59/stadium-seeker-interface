
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export interface StadiumResult {
  name: string;
  location: string;
  capacity: number;
  sports: string[];
  image: string;
  relevanceScore?: number;
  url: string;
  source?: string;
  yearBuilt?: number;
}

interface StadiumResultCardProps {
  result: StadiumResult;
}

export function StadiumResultCard({ result }: StadiumResultCardProps) {
  return (
    <Card className="result-card overflow-hidden">
      <div className="aspect-video w-full relative overflow-hidden">
        <img 
          src={result.image} 
          alt={result.name} 
          className="w-full h-full object-cover"
        />
        {result.source && (
          <Badge 
            variant="outline" 
            className="absolute bottom-2 right-2 bg-background/80 backdrop-blur-sm"
          >
            {result.source}
          </Badge>
        )}
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold truncate">{result.name}</h3>
            <p className="text-sm text-muted-foreground">{result.location}</p>
          </div>
          {result.relevanceScore && (
            <Badge variant="secondary" className="ml-2">
              {result.relevanceScore.toFixed(2)}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between text-sm mb-2">
          <span>Capacity: {result.capacity.toLocaleString()}</span>
          {result.yearBuilt && <span>Built: {result.yearBuilt}</span>}
        </div>
        <div className="flex flex-wrap gap-1 mt-2">
          {result.sports.map((sport) => (
            <Badge key={sport} variant="outline" className="bg-accent">
              {sport}
            </Badge>
          ))}
        </div>
        <a 
          href={result.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block w-full text-center text-primary text-sm mt-3 hover:underline"
        >
          View Details
        </a>
      </CardContent>
    </Card>
  );
}
