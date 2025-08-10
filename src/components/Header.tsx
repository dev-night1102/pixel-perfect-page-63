import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-4 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
            <div className="w-8 h-8 bg-gradient-to-br from-ocean-primary to-ocean-secondary rounded-full flex items-center justify-center">
              <div className="text-white text-sm font-bold">🏝️</div>
            </div>
          </div>
          <span className="text-white font-bold text-xl hidden sm:block">Beachory</span>
        </div>
        
        <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </header>
  );
};

export default Header;