import { useState } from 'react';
import { SearchBar } from './SearchBar';
import { ResultTabs } from './ResultTabs';
import { StadiumResult } from './StadiumResultCard';
import { useToast } from '@/components/ui/use-toast';

// Mock data for demonstration
const mockStadiumData: Record<string, StadiumResult[]> = {
  myengine: [
    {
      name: "Camp Nou",
      location: "Barcelona, Spain",
      capacity: 99354,
      sports: ["Football"],
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Camp_Nou_aerial_%28cropped%29.jpg/1200px-Camp_Nou_aerial_%28cropped%29.jpg",
      relevanceScore: 0.98,
      url: "#",
      yearBuilt: 1957
    },
    {
      name: "Wembley Stadium",
      location: "London, UK",
      capacity: 90000,
      sports: ["Football", "Rugby"],
      image: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Wembley_Stadium_aerial_shot_looking_west.jpg",
      relevanceScore: 0.95,
      url: "#",
      yearBuilt: 2007
    },
    {
      name: "MetLife Stadium",
      location: "New Jersey, USA",
      capacity: 82500,
      sports: ["American Football"],
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/MetLife_Stadium_July_2019.jpg/1200px-MetLife_Stadium_July_2019.jpg",
      relevanceScore: 0.87,
      url: "#",
      yearBuilt: 2010
    },
    {
      name: "Melbourne Cricket Ground",
      location: "Melbourne, Australia",
      capacity: 100024,
      sports: ["Cricket", "Australian Rules Football"],
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/MCG_Pano_-_Australia_v_England_Boxing_Day_Test_2013.jpg/1200px-MCG_Pano_-_Australia_v_England_Boxing_Day_Test_2013.jpg",
      relevanceScore: 0.84,
      url: "#",
      yearBuilt: 1853
    }
  ],
  google: [
    {
      name: "Camp Nou",
      location: "Barcelona, Spain",
      capacity: 99354,
      sports: ["Football"],
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Camp_Nou_aerial_%28cropped%29.jpg/1200px-Camp_Nou_aerial_%28cropped%29.jpg",
      url: "#",
      source: "Google",
      yearBuilt: 1957
    }
  ],
  bing: [
    {
      name: "Wembley Stadium",
      location: "London, UK",
      capacity: 90000,
      sports: ["Football", "Rugby"],
      image: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Wembley_Stadium_aerial_shot_looking_west.jpg",
      url: "#",
      source: "Bing",
      yearBuilt: 2007
    }
  ]
};

export function StadiumSearchEngine() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [myEngineResults, setMyEngineResults] = useState<StadiumResult[]>([]);
  const [googleResults, setGoogleResults] = useState<StadiumResult[]>([]);
  const [bingResults, setBingResults] = useState<StadiumResult[]>([]);
  const { toast } = useToast();

  const handleSearch = async (query: string) => {
    setSearchQuery(query);
    setIsSearching(true);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // In a real application, replace this with your API calls and dynamic data extraction!
    setMyEngineResults(mockStadiumData.myengine);
    setGoogleResults(mockStadiumData.google);
    setBingResults(mockStadiumData.bing);

    setIsSearching(false);

    toast({
      title: "Search completed",
      description: `Found ${mockStadiumData.myengine.length + mockStadiumData.google.length + mockStadiumData.bing.length} results for "${query}"`,
    });
  };

  // Clear results when component mounts (page refresh)
  useState(() => {
    setMyEngineResults([]);
    setGoogleResults([]);
    setBingResults([]);
    setSearchQuery("");
  });

  return (
    <div className="container mx-auto px-4">
      <div className="my-8">
        <SearchBar onSearch={handleSearch} isSearching={isSearching} />
      </div>
      
      {searchQuery && (
        <div className="mt-8">
          <ResultTabs
            myEngineResults={myEngineResults}
            googleResults={googleResults}
            bingResults={bingResults}
            isLoading={isSearching}
          />
        </div>
      )}
    </div>
  );
}
