import React from 'react';
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const AnimatedText = ({ text, className, delay = 0 }: AnimatedTextProps) => {
  return (
    <div 
      className={cn(
        "animate-fade-in opacity-0",
        className
      )}
      style={{ 
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards'
      }}
    >
      {text}
    </div>
  );
};

export default AnimatedText;