import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroImage from "@/assets/beach-hero-bg.jpg";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-[60vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/10"></div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Find Your Perfect<br />Beach
        </h1>
        
        <div className="flex items-center text-white mb-8 justify-center">
          <div className="w-5 h-5 bg-tropical-green rounded-full flex items-center justify-center mr-2">
            <span className="text-white text-xs">✓</span>
          </div>
          <span className="text-lg">No Sign-Up, No Fees — Just Useful Info.</span>
        </div>
        
        <div className="relative max-w-2xl mx-auto">
          <Input 
            placeholder="Search by city, state or beach"
            className="pl-4 pr-14 py-6 text-lg bg-white/90 backdrop-blur-sm border-0 rounded-full shadow-hero placeholder:text-gray-500"
          />
          <Button 
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-ocean-primary hover:bg-ocean-secondary text-white rounded-full w-10 h-10"
          >
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;