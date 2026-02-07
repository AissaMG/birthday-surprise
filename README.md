# 🎉 Birthday Surprise - Premium Birthday Web App

A stunning animated web application to wish a happy birthday with love! ❤️

## ✨ Features

- 💖 **Typewriter Effect** - The title writes itself letter by letter
- 🎊 **Interactive Confetti** - Click the button to trigger a confetti rain
- ❤️ **Red Hearts** - All hearts are red for love
- 💬 **20 Love Quotes** - Romantic phrases that appear and disappear automatically at different locations
- 🎨 **Premium Glassmorphism** - Modern luxury design with glass effects and vibrant gradients
- 🌟 **Multi-color Gradients** - Purple, Pink, Amber & Gold color scheme
- 💫 **Advanced Animations** - Smooth, elegant animations throughout
- 📱 **100% Responsive** - Works perfectly on mobile, tablet and desktop

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## ✏️ Customization

### Change the Name

Open `components/HeroSection.tsx` and modify line 40:

```typescript
const fullText = 'Happy Birthday My Love!';
```

Replace **"My Love"** with your loved one's name.

### Modify Love Quotes

In `components/HeroSection.tsx` (lines 7-27), you can modify, add or remove phrases in the `loveQuotes` array:

```typescript
const loveQuotes = [
  "You are my sunshine ☀️",
  "I love you more than anything 💕",
  // Add your own phrases here...
];
```

## 💬 Love Quotes Included

- You are my sunshine ☀️
- I love you more than anything 💕
- My heart beats for you ❤️
- You are my reason to smile 😊
- With you, everything is magical ✨
- You're my dream come true 💫
- My love for you is infinite ∞
- You light up my life 🌟
- I'm crazy about you 💗
- You are my happiness 🥰
- Forever by your side 👫
- My heart belongs to you 💝
- You are unique & precious 💎
- Every day with you is a gift 🎁
- You are my star 🌠
- With you, I'm complete 💞
- You're my greatest story 📖
- My eternal love 💖
- You are everything to me 🌹
- I love you to infinity 🚀

## 🛠️ Technologies

- **Next.js 16** - React Framework with Turbopack
- **TypeScript** - For robust code
- **Tailwind CSS** - Modern utility-first styling
- **Framer Motion** - Smooth animations (planned)
- **Canvas Confetti** - Confetti effects
- **Lucide React** - Elegant icons
- **Google Fonts** - Inter & Montserrat

## 🎨 Design Features

- **Premium Color Palette** - Purple, Pink, Amber & Gold gradients
- **Advanced Glassmorphism** - Multi-layer glass effects with colored borders
- **Animated Gradients** - Flowing, shifting color gradients (6-8s cycles)
- **Floating Elements** - Large glowing orbs and sparkles
- **Luxury Shadows** - Multiple colored shadow layers
- **Smooth Transitions** - Cubic bezier animations (0.5s)

## 📱 Deployment

### Vercel (Free - Recommended)

1. Create an account on [vercel.com](https://vercel.com)
2. Import your project
3. Deploy in 1 click!

### Local Build

```bash
npm run build
npm start
```

## ❤️ Made with Love

This application is designed to express your feelings in a modern and creative way.

**Happy Birthday to your loved one! 🎂🎉💕**
