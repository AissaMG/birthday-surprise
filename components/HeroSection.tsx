'use client';

import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Heart, Sparkles } from 'lucide-react';

// Love quotes that will appear
const loveQuotes = [
  "You are my sunshine ☀️",
  "My heart beats for you ❤️",
  "Always remember our first glance 😊",
  "With you, everything is magical ✨",
  "You're my dream come true 💫",
  "Miss you so much 🌟",
  "You are my happiness 🥰",
  "Forever by your side 👫",
  "Can't wait to see you again💝",
  "You are unique & precious 💎",
  "Every day with you is a gift 🎁",
  "You are my star 🌠",
  "With you, I'm complete 💞",
  "I'm thinking of you🌹",
];

interface FloatingQuote {
  id: number;
  text: string;
  x: number;
  y: number;
}

export default function HeroSection() {
  const [text, setText] = useState('');
  const fullText = 'Happy Birthday My HeartBeat!';
  const [isComplete, setIsComplete] = useState(false);
  const [floatingQuotes, setFloatingQuotes] = useState<FloatingQuote[]>([]);
  const [quoteIdCounter, setQuoteIdCounter] = useState(0);

  // Effet typewriter
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        setIsComplete(true);
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  // Générer des phrases d'amour qui apparaissent et disparaissent
  useEffect(() => {
    const interval = setInterval(() => {
      const randomQuote = loveQuotes[Math.floor(Math.random() * loveQuotes.length)];
      const randomX = Math.random() * 70 + 15; // Entre 15% et 85%
      const randomY = Math.random() * 70 + 15; // Entre 15% et 85%
      
      const newQuote: FloatingQuote = {
        id: quoteIdCounter,
        text: randomQuote,
        x: randomX,
        y: randomY
      };

      setFloatingQuotes(prev => [...prev, newQuote]);
      setQuoteIdCounter(prev => prev + 1);

      // Supprimer la phrase après 4 secondes
      setTimeout(() => {
        setFloatingQuotes(prev => prev.filter(q => q.id !== newQuote.id));
      }, 4000);
    }, 1800); // Nouvelle phrase toutes les 1.8 secondes

    return () => clearInterval(interval);
  }, [quoteIdCounter]);

  const triggerConfetti = () => {
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background elements - Premium Luxury */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large gradient orbs */}
        <div className="absolute -top-40 -left-40 w-[800px] h-[800px] bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-[900px] h-[900px] bg-gradient-to-tl from-amber-500/20 via-rose-500/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-violet-500/15 via-fuchsia-500/15 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Floating sparkles - more elegant */}
        <div className="absolute top-20 right-32 w-3 h-3 bg-amber-400 rounded-full animate-ping shadow-lg shadow-amber-400/50" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/3 left-20 w-2 h-2 bg-pink-400 rounded-full animate-ping shadow-lg shadow-pink-400/50" style={{ animationDelay: '0.4s' }}></div>
        <div className="absolute bottom-40 right-20 w-3 h-3 bg-purple-400 rounded-full animate-ping shadow-lg shadow-purple-400/50" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute top-1/2 right-40 w-2 h-2 bg-fuchsia-400 rounded-full animate-ping shadow-lg shadow-fuchsia-400/50" style={{ animationDelay: '1.2s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-rose-400 rounded-full animate-ping shadow-lg shadow-rose-400/50" style={{ animationDelay: '1.6s' }}></div>
        <div className="absolute top-2/3 left-1/4 w-3 h-3 bg-amber-300 rounded-full animate-ping shadow-lg shadow-amber-300/50" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Phrases d'amour flottantes */}
      {floatingQuotes.map((quote) => (
        <div
          key={quote.id}
          className="absolute pointer-events-none z-20"
          style={{
            left: `${quote.x}%`,
            top: `${quote.y}%`,
            animation: 'blurIn 1s ease-out, fadeOut 1s ease-in 3s forwards'
          }}
        >
          <div className="px-4 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-xl sm:rounded-2xl shadow-2xl backdrop-blur-xl max-w-[90vw] sm:max-w-none" style={{
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.95) 0%, rgba(236, 72, 153, 0.95) 50%, rgba(251, 191, 36, 0.95) 100%)',
            border: '2px solid rgba(255, 255, 255, 0.3)'
          }}>
            <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-extrabold whitespace-normal sm:whitespace-nowrap text-center" style={{
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 255, 255, 0.3)'
            }}>
              {quote.text}
            </p>
          </div>
        </div>
      ))}

      <div className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-16 lg:p-20 max-w-5xl w-full text-center relative z-10 shadow-2xl">
        {/* Decorative elements - Hidden on mobile for cleaner look */}
        <div className="hidden sm:flex absolute -top-6 left-1/2 transform -translate-x-1/2 gap-3">
          <div className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full blur-sm opacity-60 animate-bounce"></div>
          <div className="w-7 sm:w-8 md:w-10 h-7 sm:h-8 md:h-10 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full blur-sm opacity-60 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full blur-sm opacity-60 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>

        <div className="flex justify-center mb-6 sm:mb-8 space-x-3 sm:space-x-4 md:space-x-6">
          <Heart className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-red-500 animate-pulse drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]" fill="currentColor" style={{ animationDelay: '0s' }} />
          <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-amber-400 animate-pulse drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]" style={{ animationDelay: '0.2s' }} />
          <Heart className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-red-500 animate-pulse drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]" fill="currentColor" style={{ animationDelay: '0.4s' }} />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 md:mb-10 font-[family-name:var(--font-montserrat)] leading-tight px-2">
          <span className="gradient-text-warm drop-shadow-2xl">
            {text}
            {!isComplete && <span className="animate-pulse">|</span>}
          </span>
        </h1>

        <div className="w-24 sm:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-6 sm:mb-8 rounded-full"></div>

        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl bg-gradient-to-r from-purple-200 via-pink-200 to-amber-200 bg-clip-text text-transparent mb-10 sm:mb-12 md:mb-14 max-w-3xl mx-auto leading-relaxed font-medium px-4">
          Today is a special day, because it's YOUR day. 
          Get ready for a little surprise...
        </p>

        <button
          onClick={triggerConfetti}
          className="glass-card px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-full text-base sm:text-lg md:text-xl font-bold bg-gradient-to-r from-amber-500/20 to-pink-500/20 hover:from-amber-500/30 hover:to-pink-500/30 text-white hover:scale-105 sm:hover:scale-110 transition-all duration-500 inline-flex items-center gap-2 sm:gap-3 md:gap-4 shadow-2xl border-2 border-amber-400/30 hover:border-amber-400/60 w-auto"
        >
          <Heart className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-red-500 animate-pulse drop-shadow-[0_0_10px_rgba(220,38,38,0.8)]" fill="currentColor" />
          <span className="bg-gradient-to-r from-amber-200 via-pink-200 to-purple-200 bg-clip-text text-transparent font-extrabold whitespace-nowrap">
            Click to Celebrate!
          </span>
          <Heart className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-red-500 animate-pulse drop-shadow-[0_0_10px_rgba(220,38,38,0.8)]" fill="currentColor" />
        </button>

        {/* Decorative bottom elements - Smaller on mobile */}
        <div className="absolute -bottom-3 sm:-bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1.5 sm:gap-2">
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-amber-400 rounded-full animate-ping opacity-40"></div>
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pink-400 rounded-full animate-ping opacity-40" style={{ animationDelay: '0.3s' }}></div>
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-rose-400 rounded-full animate-ping opacity-40" style={{ animationDelay: '0.6s' }}></div>
        </div>
      </div>
    </section>
  );
}
