'use client';

import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import LockScreen from '@/components/LockScreen';

export default function Home() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  return (
    <div className="min-h-screen">
      {isUnlocked ? (
        <HeroSection />
      ) : (
        <LockScreen onUnlock={() => setIsUnlocked(true)} />
      )}
    </div>
  );
}
