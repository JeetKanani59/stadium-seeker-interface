
import { StadiumSearchEngine } from "@/components/StadiumSearchEngine";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-6 border-b bg-white sticky top-0 z-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-white stadium-icon"
                >
                  <path d="M12 2v20M2 12h20M2 9V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5M2 15v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5M6 12a2 2 0 0 0-2-2 2 2 0 0 0-2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2ZM18 12a2 2 0 0 0-2-2 2 2 0 0 0-2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2Z" />
                </svg>
              </div>
              <div>
                <h1 className="font-bold text-xl">Stadium Seeker</h1>
                <p className="text-xs text-muted-foreground">Advanced Stadium Search Engine</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-sm font-medium hover:text-primary">Home</a>
              <a href="#" className="text-sm font-medium hover:text-primary">About</a>
              <a href="#" className="text-sm font-medium hover:text-primary">Advanced Search</a>
              <a href="#" className="text-sm font-medium hover:text-primary">Compare Models</a>
            </nav>
          </div>
        </div>
      </header>
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <section className="mb-10 text-center">
            <h2 className="text-3xl font-bold mb-3">Stadium Search Engine</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Search across multiple stadium databases using advanced retrieval models. 
              Compare results from relevance models, clustering algorithms, query expansion, and traditional search engines.
            </p>
          </section>
          
          <div className="search-gradient rounded-xl p-8 mb-10">
            <StadiumSearchEngine />
          </div>
        </div>
      </main>
      
      <footer className="py-6 border-t bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-muted-foreground">
                © 2025 Stadium Seeker - Advanced Stadium Search Interface
              </p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary">Terms</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
