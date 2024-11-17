import AnimatedText from "@/components/AnimatedText";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="text-center space-y-6 max-w-2xl mx-auto">
        <AnimatedText
          text="Hello World"
          className="text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text"
          delay={0}
        />
        <AnimatedText
          text="Welcome to this beautifully crafted greeting"
          className="text-xl md:text-2xl text-gray-600 animate-fade-in-slow"
          delay={300}
        />
      </div>
    </div>
  );
};

export default Index;