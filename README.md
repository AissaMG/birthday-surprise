# 🎉 Birthday Surprise - Premium Birthday Web App

A stunning animated web application to wish a happy birthday with love! ❤️

## ✨ Features

- 🔒 **Password Protection** - Unlock screen with heart animation (default: `iloveyou`)
- 💖 **Typewriter Effect** - The title writes itself letter by letter: "Happy Birthday My HeartBeat!"
- 🎊 **Auto Confetti** - Confetti triggers automatically every 5 seconds + immediately on unlock
- ❤️ **Red Hearts** - All hearts are red for love with beautiful glow effects
- 💬 **14 Love Quotes** - Romantic phrases that float across the screen with smooth animations
- 🎨 **Premium Glassmorphism** - Modern luxury design with glass effects and vibrant gradients
- 🌟 **Multi-color Gradients** - Purple, Pink, Amber & Gold color scheme
- 💫 **Advanced Animations** - Smooth, elegant animations throughout
- ❤️ **Heart Favicon** - Custom heart icon in browser tab
- 📱 **100% Responsive** - Mobile-first design, works perfectly on all devices

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## ✏️ Customization

### 🔑 Change the Password

Open `components/LockScreen.tsx` and modify line 15:

```typescript
const correctPassword = 'iloveyou'; // CHANGE THIS PASSWORD
```

Replace **"iloveyou"** with your own password. It's case-insensitive.

### 💖 Change the Name

Open `components/HeroSection.tsx` and modify line 33:

```typescript
const fullText = 'Happy Birthday My HeartBeat!';
```

Replace **"My HeartBeat"** with your loved one's name.

### 💬 Modify Love Quotes

In `components/HeroSection.tsx` (lines 7-22), you can modify, add or remove phrases in the `loveQuotes` array:

```typescript
const loveQuotes = [
  "You are my sunshine ☀️",
  "My heart beats for you ❤️",
  // Add your own phrases here...
];
```

### 🎊 Adjust Confetti Frequency

In `components/HeroSection.tsx` (line 95), change the interval:

```typescript
}, 5000); // 5 seconds = 5000 milliseconds

// Examples:
}, 10000); // 10 seconds
}, 3000);  // 3 seconds
```

## 💬 Love Quotes Included

- You are my sunshine ☀️
- My heart beats for you ❤️
- Always remember our first glance 😊
- With you, everything is magical ✨
- You're my dream come true 💫
- Miss you so much 🌟
- You are my happiness 🥰
- Forever by your side 👫
- Can't wait to see you again 💝
- You are unique & precious 💎
- Every day with you is a gift 🎁
- You are my star 🌠
- With you, I'm complete 💞
- I'm thinking of you 🌹

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
- **Advanced Glassmorphism** - Multi-layer glass effects with animated gradient borders
- **Animated Gradients** - Flowing, shifting color gradients (6-8s cycles)
- **Floating Elements** - Large glowing orbs and animated sparkles
- **Luxury Shadows** - Multiple colored shadow layers with glow effects
- **Smooth Transitions** - Cubic bezier animations (0.5s)
- **Lock Screen** - Beautiful heart unlock animation with shake effect on wrong password
- **Auto Confetti** - Celebration every 5 seconds automatically

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

## 🎯 How It Works

1. **🔒 Lock Screen** - User enters password (`iloveyou` by default)
2. **💖 Heart Animation** - Beautiful unlock animation with heart scaling
3. **🎊 Instant Confetti** - Confetti burst immediately on unlock
4. **💬 Floating Quotes** - Love messages appear every 1.8 seconds
5. **🎉 Auto Celebration** - Confetti every 5 seconds automatically
6. **✨ Enjoy** - Beautiful birthday surprise experience!

## 🔐 Security Note

This is a **client-side only** password protection. It's perfect for a fun surprise but not for securing sensitive data. The password is stored in the code for simplicity.

## ❤️ Made with Love

This application is designed to express your feelings in a modern and creative way.

**Happy Birthday to your loved one! 🎂🎉💕**

---

**Default Password:** `iloveyou` (case-insensitive)  
**Confetti Interval:** Every 5 seconds  
**Love Quotes:** 14 romantic messages  
**Current Title:** "Happy Birthday My HeartBeat!"
