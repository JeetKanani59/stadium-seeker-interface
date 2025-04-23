
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { StadiumResult, StadiumResultCard } from "./StadiumResultCard";

interface ResultTabsProps {
  relevanceResults: StadiumResult[];
  clusterResults: StadiumResult[];
  expansionResults: StadiumResult[];
  comparisonResults: StadiumResult[];
  isLoading: boolean;
}

export function ResultTabs({ 
  relevanceResults, 
  clusterResults, 
  expansionResults, 
  comparisonResults,
  isLoading
}: ResultTabsProps) {
  const [activeTab, setActiveTab] = useState("relevance");
  
  const renderResults = (results: StadiumResult[]) => {
    if (isLoading) {
      return (
        <div className="flex flex-col items-center justify-center py-10">
          <div className="animate-pulse flex space-x-4 w-full max-w-md">
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-slate-200 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                  <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-slate-200 rounded"></div>
              </div>
            </div>
          </div>
          <p className="mt-4 text-muted-foreground">Loading results...</p>
        </div>
      );
    }
    
    if (results.length === 0) {
      return (
        <div className="flex flex-col items-center justify-center py-20">
          <p className="text-muted-foreground text-lg">No results found</p>
          <p className="text-sm text-muted-foreground">Try a different search term</p>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {results.map((result, index) => (
          <StadiumResultCard key={index} result={result} />
        ))}
      </div>
    );
  };

  return (
    <Tabs defaultValue="relevance" value={activeTab} onValueChange={setActiveTab} className="w-full">
      <div className="border-b sticky top-0 bg-background z-10 pb-0">
        <TabsList className="w-full h-auto bg-transparent mb-0 justify-start overflow-x-auto">
          <TabsTrigger value="relevance" className="py-3 data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">
            Relevance Model
            {relevanceResults.length > 0 && <span className="ml-2 text-xs bg-muted rounded-full px-2 py-0.5">{relevanceResults.length}</span>}
          </TabsTrigger>
          <TabsTrigger value="cluster" className="py-3 data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">
            Cluster Based
            {clusterResults.length > 0 && <span className="ml-2 text-xs bg-muted rounded-full px-2 py-0.5">{clusterResults.length}</span>}
          </TabsTrigger>
          <TabsTrigger value="expansion" className="py-3 data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">
            Query Expansion
            {expansionResults.length > 0 && <span className="ml-2 text-xs bg-muted rounded-full px-2 py-0.5">{expansionResults.length}</span>}
          </TabsTrigger>
          <TabsTrigger value="comparison" className="py-3 data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">
            Google & Bing
            {comparisonResults.length > 0 && <span className="ml-2 text-xs bg-muted rounded-full px-2 py-0.5">{comparisonResults.length}</span>}
          </TabsTrigger>
        </TabsList>
      </div>
      
      <ScrollArea className="h-[calc(100vh-250px)] px-1">
        <TabsContent value="relevance" className="mt-6 space-y-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Relevance Model Results</h2>
            <p className="text-sm text-muted-foreground">Sorted by relevance to your query</p>
          </div>
          {renderResults(relevanceResults)}
        </TabsContent>
        
        <TabsContent value="cluster" className="mt-6 space-y-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Cluster Based Results</h2>
            <p className="text-sm text-muted-foreground">Results grouped by similarity</p>
          </div>
          {renderResults(clusterResults)}
        </TabsContent>
        
        <TabsContent value="expansion" className="mt-6 space-y-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Query Expansion Results</h2>
            <p className="text-sm text-muted-foreground">Results with expanded search terms</p>
          </div>
          {renderResults(expansionResults)}
        </TabsContent>
        
        <TabsContent value="comparison" className="mt-6 space-y-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Google & Bing Results</h2>
            <p className="text-sm text-muted-foreground">Comparison with traditional search engines</p>
          </div>
          {renderResults(comparisonResults)}
        </TabsContent>
      </ScrollArea>
    </Tabs>
  );
}
