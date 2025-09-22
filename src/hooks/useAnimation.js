import { useState, useEffect } from 'react';

export const useAnimation = (duration = 2000) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationCount, setAnimationCount] = useState(0);

  const toggleAnimation = () => {
    setIsAnimating(prev => !prev);
    if (!isAnimating) {
      setAnimationCount(prev => prev + 1);
    }
  };

  const startAnimation = () => {
    setIsAnimating(true);
    setAnimationCount(prev => prev + 1);
  };

  const stopAnimation = () => {
    setIsAnimating(false);
  };

  useEffect(() => {
    let timeoutId;

    if (isAnimating) {
      const handleKeyPress = (e) => {
        if (e.code === 'Space') {
          e.preventDefault();
          stopAnimation();
        }
      };

      document.addEventListener('keydown', handleKeyPress);

      return () => {
        document.removeEventListener('keydown', handleKeyPress);
      };
    }

    return () => clearTimeout(timeoutId);
  }, [isAnimating]);

  return {
    isAnimating,
    animationCount,
    toggleAnimation,
    startAnimation,
    stopAnimation
  };
};