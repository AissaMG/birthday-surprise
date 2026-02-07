'use client';

import { useState } from 'react';
import { Heart, Lock, Unlock, Sparkles } from 'lucide-react';

interface LockScreenProps {
  onUnlock: () => void;
}

export default function LockScreen({ onUnlock }: LockScreenProps) {
  const [password, setPassword] = useState('');
  const [isShaking, setIsShaking] = useState(false);
  const [isUnlocking, setIsUnlocking] = useState(false);
  
  // Change this password to whatever you want
  const correctPassword = 'iloveyou'; // CHANGE THIS PASSWORD

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password.toLowerCase() === correctPassword.toLowerCase()) {
      setIsUnlocking(true);
      setTimeout(() => {
        onUnlock();
      }, 1500);
    } else {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
      setPassword('');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[800px] h-[800px] bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-[900px] h-[900px] bg-gradient-to-tl from-amber-500/20 via-rose-500/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-violet-500/15 via-fuchsia-500/15 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Floating sparkles */}
        <div className="absolute top-20 right-32 w-3 h-3 bg-amber-400 rounded-full animate-ping shadow-lg shadow-amber-400/50"></div>
        <div className="absolute top-1/3 left-20 w-2 h-2 bg-pink-400 rounded-full animate-ping shadow-lg shadow-pink-400/50" style={{ animationDelay: '0.4s' }}></div>
        <div className="absolute bottom-40 right-20 w-3 h-3 bg-purple-400 rounded-full animate-ping shadow-lg shadow-purple-400/50" style={{ animationDelay: '0.8s' }}></div>
      </div>

      <div className="glass rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16 max-w-md w-full text-center relative z-10 shadow-2xl">
        {/* Heart Lock Animation */}
        <div className="relative mb-8">
          <div className={`transition-all duration-1000 ${isUnlocking ? 'scale-150 opacity-0' : 'scale-100 opacity-100'}`}>
            <Heart 
              className={`w-32 h-32 sm:w-40 sm:h-40 mx-auto text-red-500 ${isShaking ? 'animate-shake' : ''} ${isUnlocking ? '' : 'animate-pulse'}`}
              fill="currentColor"
              style={{
                filter: 'drop-shadow(0 0 30px rgba(220, 38, 38, 0.6))'
              }}
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              {isUnlocking ? (
                <Unlock className="w-16 h-16 sm:w-20 sm:h-20 text-amber-400 animate-bounce" />
              ) : (
                <Lock className="w-16 h-16 sm:w-20 sm:h-20 text-white" />
              )}
            </div>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-montserrat)]">
          <span className="gradient-text-warm">
            {isUnlocking ? 'Unlocking...' : 'Unlock My Heart'}
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl bg-gradient-to-r from-purple-200 via-pink-200 to-amber-200 bg-clip-text text-transparent mb-8 leading-relaxed">
          {isUnlocking 
            ? 'Opening your surprise...'
            : 'Enter the secret password to unlock your special surprise'}
        </p>

        {!isUnlocking && (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password..."
                className={`w-full px-6 py-4 rounded-2xl text-center text-lg font-semibold bg-white/10 border-2 ${
                  isShaking ? 'border-red-500' : 'border-white/20'
                } text-white placeholder-white/50 focus:outline-none focus:border-amber-400/60 transition-all backdrop-blur-xl`}
                autoFocus
              />
              <Sparkles className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-amber-400 animate-pulse" />
            </div>

            <button
              type="submit"
              className="w-full glass-card px-8 py-4 rounded-full text-lg sm:text-xl font-bold bg-gradient-to-r from-amber-500/20 to-pink-500/20 hover:from-amber-500/30 hover:to-pink-500/30 text-white hover:scale-105 transition-all duration-500 inline-flex items-center justify-center gap-3 shadow-2xl border-2 border-amber-400/30 hover:border-amber-400/60"
            >
              <Heart className="w-6 h-6 text-red-500 animate-pulse" fill="currentColor" />
              <span className="bg-gradient-to-r from-amber-200 via-pink-200 to-purple-200 bg-clip-text text-transparent font-extrabold">
                Unlock
              </span>
              <Heart className="w-6 h-6 text-red-500 animate-pulse" fill="currentColor" />
            </button>
          </form>
        )}

        {isUnlocking && (
          <div className="flex justify-center gap-2">
            <div className="w-3 h-3 bg-amber-400 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}
