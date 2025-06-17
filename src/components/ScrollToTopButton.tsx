
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Button
      onClick={scrollToTop}
      className="fixed bottom-24 right-6 h-12 w-12 rounded-full bg-blue-500 hover:bg-blue-600 shadow-lg z-40"
      size="icon"
    >
      <ArrowUp className="h-5 w-5 text-white" />
    </Button>
  );
};

export default ScrollToTopButton;
