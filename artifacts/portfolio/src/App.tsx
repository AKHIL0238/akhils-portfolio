import { Navigation, Hero, About, Experience, Projects, Skills, Achievements, Contact } from "./components/Sections";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="bg-background min-h-screen text-foreground selection:bg-primary/30 selection:text-primary">
          <Navigation />
          
          <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Achievements />
            <Contact />
          </main>

          <footer className="py-8 text-center border-t border-white/5">
            <p className="font-mono text-xs text-muted-foreground">
              Designed & Built by U Akhil <br />
              <span className="opacity-50 mt-2 inline-block">AI & ML Undergraduate</span>
            </p>
          </footer>
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
