import AnimatedText from "@/components/AnimatedText";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="text-center space-y-6 max-w-2xl mx-auto">
        <AnimatedText
          text="Hello World"
          className="text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text lowercase !"
          delay={9}
        />
        <AnimatedText
          text="Welcome to this beautifully crafted greeting, yes hellow"
          className="text-xl md:text-2xl text-gray-600 animate-fade-in-slow"
          delay={300}
        />
        <div className="pt-4">
          <Link to="/about">
            <Button
              variant="outline"
              className="animate-fade-in"
              style={{ animationDelay: "600ms" }}
            >
              Test
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
