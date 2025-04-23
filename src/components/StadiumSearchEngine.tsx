
import { useState } from 'react';
import { SearchBar } from './SearchBar';
import { ResultTabs } from './ResultTabs';
import { StadiumResult } from './StadiumResultCard';
import { useToast } from '@/components/ui/use-toast';

// Mock data for demonstration
const mockStadiumData: Record<string, StadiumResult[]> = {
  relevance: [
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
  cluster: [
    {
      name: "Camp Nou",
      location: "Barcelona, Spain",
      capacity: 99354,
      sports: ["Football"],
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Camp_Nou_aerial_%28cropped%29.jpg/1200px-Camp_Nou_aerial_%28cropped%29.jpg",
      relevanceScore: 0.98,
      url: "#",
      source: "Cluster A",
      yearBuilt: 1957
    },
    {
      name: "Santiago Bernabéu Stadium",
      location: "Madrid, Spain",
      capacity: 81044,
      sports: ["Football"],
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/The_Santiago_Bernabeu_Stadium_-_U-g-g-B-o-y.jpg/1200px-The_Santiago_Bernabeu_Stadium_-_U-g-g-B-o-y.jpg",
      relevanceScore: 0.92,
      url: "#",
      source: "Cluster A",
      yearBuilt: 1947
    },
    {
      name: "Old Trafford",
      location: "Manchester, UK",
      capacity: 74140,
      sports: ["Football"],
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Manchester_United_Panorama_%288051523746%29.jpg/1200px-Manchester_United_Panorama_%288051523746%29.jpg",
      relevanceScore: 0.89,
      url: "#",
      source: "Cluster B",
      yearBuilt: 1910
    }
  ],
  expansion: [
    {
      name: "Allianz Arena",
      location: "Munich, Germany",
      capacity: 75000,
      sports: ["Football"],
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Allianz_Arena_zu_Beginn_des_Spiels_FCB-Real.jpeg/1200px-Allianz_Arena_zu_Beginn_des_Spiels_FCB-Real.jpeg",
      relevanceScore: 0.88,
      url: "#",
      source: "Expanded Term: Soccer",
      yearBuilt: 2005
    },
    {
      name: "Signal Iduna Park",
      location: "Dortmund, Germany",
      capacity: 81365,
      sports: ["Football"],
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Signal_Iduna_Park_frequent_BVB_choreo_sector.jpg/1200px-Signal_Iduna_Park_frequent_BVB_choreo_sector.jpg",
      relevanceScore: 0.85,
      url: "#",
      source: "Expanded Term: Bundesliga",
      yearBuilt: 1974
    }
  ],
  comparison: [
    {
      name: "Camp Nou",
      location: "Barcelona, Spain",
      capacity: 99354,
      sports: ["Football"],
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Camp_Nou_aerial_%28cropped%29.jpg/1200px-Camp_Nou_aerial_%28cropped%29.jpg",
      url: "#",
      source: "Google",
      yearBuilt: 1957
    },
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
  const [relevanceResults, setRelevanceResults] = useState<StadiumResult[]>([]);
  const [clusterResults, setClusterResults] = useState<StadiumResult[]>([]);
  const [expansionResults, setExpansionResults] = useState<StadiumResult[]>([]);
  const [comparisonResults, setComparisonResults] = useState<StadiumResult[]>([]);
  const { toast } = useToast();

  const handleSearch = async (query: string) => {
    setSearchQuery(query);
    setIsSearching(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // In a real application, you would call your API here
    // For now, we'll use mock data
    setRelevanceResults(mockStadiumData.relevance);
    setClusterResults(mockStadiumData.cluster);
    setExpansionResults(mockStadiumData.expansion);
    setComparisonResults(mockStadiumData.comparison);
    
    setIsSearching(false);
    
    toast({
      title: "Search completed",
      description: `Found ${mockStadiumData.relevance.length + mockStadiumData.cluster.length + 
                     mockStadiumData.expansion.length + mockStadiumData.comparison.length} results for "${query}"`,
    });
  };

  return (
    <div className="container mx-auto px-4">
      <div className="my-8">
        <SearchBar onSearch={handleSearch} isSearching={isSearching} />
      </div>
      
      {searchQuery && (
        <div className="mt-8">
          <ResultTabs
            relevanceResults={relevanceResults}
            clusterResults={clusterResults}
            expansionResults={expansionResults}
            comparisonResults={comparisonResults}
            isLoading={isSearching}
          />
        </div>
      )}
    </div>
  );
}
