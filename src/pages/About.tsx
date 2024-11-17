import AnimatedText from "@/components/AnimatedText";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="text-center space-y-8 max-w-2xl mx-auto">
        <AnimatedText
          text="About Us"
          className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text"
          delay={0}
        />
        <AnimatedText
          text="We're a passionate team dedicated to creating beautiful and functional web applications."
          className="text-xl md:text-2xl text-gray-600"
          delay={300}
        />
        <div className="pt-4">
          <Link to="/">
            <Button variant="outline" className="animate-fade-in" style={{ animationDelay: '600ms' }}>
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;