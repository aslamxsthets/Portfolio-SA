import { useState, useEffect } from 'react';
import { soundEngine } from '../utils/sound';

export function useEasterEggs() {
  const [bountyMode, setBountyMode] = useState(false);
  const [typedChars, setTypedChars] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      setTypedChars(prev => {
        const next = (prev + e.key.toLowerCase()).slice(-10);
        if (next.includes('bounty')) {
          setBountyMode(b => !b);
          soundEngine.playWhoosh();
          return '';
        }
        return next;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleBountyMode = () => {
    soundEngine.playWhoosh();
    setBountyMode(b => !b);
  };

  return {
    bountyMode,
    toggleBountyMode
  };
}
