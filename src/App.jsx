import React, { useState, useEffect } from 'react';

// --- Icons as Inline SVGs (No dependencies required) ---
const Icons = {
  Trophy: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  ),
  Sparkles: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M9 5H5" />
      <path d="M19 19v-4" />
      <path d="M15 19h4" />
    </svg>
  ),
  Video: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m22 8-6 4 6 4V8Z" />
      <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
    </svg>
  ),
  Heart: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  ),
  Utensils: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
      <path d="M7 2v20" />
      <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
    </svg>
  ),
  Star: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  Users: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  Crown: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
    </svg>
  ),
  ArrowDown: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </svg>
  ),
  Menu: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  ),
  X: ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
};

// --- Data Configuration ---
const categories = [
  {
    id: 'comedy',
    title: 'Comedy, Drama & Storytime',
    subtitle: "Who needs Netflix when you have these cousins?",
    icon: <Icons.Sparkles className="w-6 h-6" />,
    awards: [
      {
        title: "Funniest Cousin",
        data: [
          { name: "Devashish", votes: 3 },
          { name: "Money", votes: 3 },
          { name: "Ritika", votes: 1 }
        ]
      },
      {
        title: "Best Story-time",
        data: [
          { name: "Devashish", votes: 3 },
          { name: "Nidhi", votes: 2 },
          { name: "Anurag", votes: 2 }
        ]
      },
      {
        title: "Most Changed This Year",
        data: [
          { name: "Nidhi", votes: 3 },
          { name: "Devashish", votes: 1 },
          { name: "Ritika", votes: 1 }
        ]
      }
    ]
  },
  {
    id: 'survival',
    title: 'Survival, Chaos & Calls',
    subtitle: "Who survives the zombie apocalypse vs. who is just multitasking?",
    icon: <Icons.Video className="w-6 h-6" />,
    awards: [
      {
        title: "Most Resourceful",
        data: [
          { name: "Anurag", votes: 8 },
          { name: "Gaurav", votes: 2 }
        ]
      },
      {
        title: "Wild Survival Squad",
        data: [
          { name: "Anurag", votes: 4 },
          { name: "Mayank", votes: 4 },
          { name: "Money", votes: 1 },
          { name: "Aditya", votes: 1 }
        ]
      },
      {
        title: "Video Call Legend",
        data: [
          { name: "Riya", votes: 5 },
          { name: "Nishant", votes: 2 },
          { name: "Aditya", votes: 1 },
          { name: "Ritika", votes: 1 }
        ]
      }
    ]
  },
  {
    id: 'heart',
    title: 'Heart, Help & Inspiration',
    subtitle: "The real ones keeping the family together.",
    icon: <Icons.Heart className="w-6 h-6" />,
    awards: [
      {
        title: "Glue of the Family",
        data: [
          { name: "Money", votes: 6 },
          { name: "Nishant", votes: 2 }
        ]
      },
      {
        title: "Most Inspiring",
        data: [
          { name: "Honey", votes: 2 },
          { name: "Ritika", votes: 2 },
          { name: "Nishant", votes: 2 },
          { name: "Others", votes: 4 }
        ]
      },
      {
        title: "Most Helpful",
        data: [
          { name: "Honey", votes: 4 },
          { name: "Mayank", votes: 3 },
          { name: "Money", votes: 2 }
        ]
      }
    ]
  },
  {
    id: 'foodies',
    title: 'Foodies & Troublemakers',
    subtitle: "From masterchefs to master troublemakers.",
    icon: <Icons.Utensils className="w-6 h-6" />,
    awards: [
      {
        title: "Biggest Foodie",
        data: [
          { name: "Muskan", votes: 6 },
          { name: "Aditya", votes: 1 },
          { name: "Nidhi", votes: 1 },
          { name: "Anurag", votes: 1 },
          { name: "Devashish", votes: 1 }
        ]
      },
      {
        title: "Most Creative Artist",
        data: [
          { name: "Honey", votes: 7 },
          { name: "Muskan", votes: 1 },
          { name: "Riya", votes: 1 }
        ]
      },
      {
        title: "Naughtiest Cousin",
        data: [
          { name: "Devashish", votes: 8 },
          { name: "Anurag", votes: 1 },
          { name: "Riya", votes: 1 }
        ]
      }
    ]
  },
  {
    id: 'love',
    title: 'Love & Fame',
    subtitle: "Who is next in line for the wedding bells?",
    icon: <Icons.Star className="w-6 h-6" />,
    awards: [
      {
        title: "Most Likely To Be Famous",
        data: [
          { name: "Honey", votes: 3 },
          { name: "Devashish", votes: 1 },
          { name: "Muskan", votes: 1 },
          { name: "Nishant", votes: 1 }
        ]
      },
      {
        title: "Next To Get Married",
        data: [
          { name: "Devashish", votes: 4 },
          { name: "Mayank", votes: 2 },
          { name: "Money", votes: 2 },
          { name: "Nishant", votes: 1 }
        ]
      },
      {
        title: "Changed After Marriage",
        data: [
          { name: "Ritika", votes: 3 },
          { name: "Muskan", votes: 3 },
          { name: "Nidhi", votes: 1 },
          { name: "Aditya", votes: 1 }
        ]
      }
    ]
  },
  {
    id: 'politics',
    title: 'Sanskaar & Politics',
    subtitle: "The official hierarchy of favorites.",
    icon: <Icons.Users className="w-6 h-6" />,
    awards: [
      {
        title: "Most Obedient",
        data: [
          { name: "Honey", votes: 3 },
          { name: "Money", votes: 2 },
          { name: "Aditya", votes: 2 },
          { name: "Muskan", votes: 1 }
        ]
      },
      {
        title: "Param's Favorite",
        data: [
          { name: "Muskan", votes: 2 },
          { name: "Nidhi", votes: 2 },
          { name: "Honey", votes: 2 },
          { name: "Nishant", votes: 1 }
        ]
      },
      {
        title: "Dadi's Favorite (Suspected)",
        data: [
          { name: "Money", votes: 3 },
          { name: "Honey", votes: 2 },
          { name: "Aditya", votes: 1 },
          { name: "Gaurav", votes: 1 }
        ]
      }
    ]
  }
];

// --- Sub-Components ---

const SplashScreen = ({ onFinish }) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // Stage 1: Icon pop
    setTimeout(() => setStage(1), 500);
    // Stage 2: Text slide up
    setTimeout(() => setStage(2), 1200);
    // Stage 3: Date fade in
    setTimeout(() => setStage(3), 2000);
    // Stage 4: Exit
    setTimeout(() => setStage(4), 3000);
    // Complete
    setTimeout(onFinish, 3600);
  }, [onFinish]);

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
        stage === 4 ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'
      }`}
    >
      <div className={`relative transition-all duration-700 transform ${stage >= 1 ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
        <div className="absolute inset-0 bg-yellow-500/20 blur-[60px] rounded-full animate-pulse"></div>
        <Icons.Trophy className="w-24 h-24 md:w-32 md:h-32 text-yellow-500 drop-shadow-[0_0_25px_rgba(234,179,8,0.8)] relative z-10" />
      </div>
      
      <div className="mt-8 text-center overflow-hidden">
        <h1 
          className={`text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-200 font-display tracking-widest transition-all duration-700 transform ${
            stage >= 2 ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          GADDHON
        </h1>
      </div>

      <div 
        className={`mt-4 flex items-center gap-4 transition-all duration-700 ${
          stage >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <div className="h-px w-8 md:w-16 bg-gradient-to-r from-transparent to-yellow-600"></div>
        <span className="text-yellow-600 font-bold tracking-[0.5em] text-sm md:text-lg">2025</span>
        <div className="h-px w-8 md:w-16 bg-gradient-to-l from-transparent to-yellow-600"></div>
      </div>
    </div>
  );
};

const WinnerBadge = () => (
  <span className="flex items-center gap-1 text-[10px] uppercase tracking-wider font-bold text-yellow-900 bg-gradient-to-r from-yellow-200 to-yellow-500 px-2 py-0.5 rounded-full shadow-[0_0_10px_rgba(234,179,8,0.5)] animate-pulse shrink-0">
    <Icons.Crown className="w-3 h-3 fill-yellow-900" /> Winner
  </span>
);

const ChartBar = ({ name, votes, totalVotes, maxVotes, index }) => {
  const percentage = (votes / totalVotes) * 100;
  const isWinner = votes === maxVotes;
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setWidth(percentage);
    }, index * 100 + 200);
  }, [percentage, index]);

  return (
    <div className="mb-4 group relative">
      <div className="flex justify-between items-end mb-1.5">
        <div className="flex items-center gap-2 max-w-[85%]">
          <span className={`font-bold text-sm truncate ${isWinner ? 'text-yellow-400' : 'text-slate-300'}`}>
            {name}
          </span>
          {isWinner && <WinnerBadge />}
        </div>
        <span className="text-xs font-mono text-slate-500 shrink-0">{votes} votes</span>
      </div>
      
      <div className="h-2.5 md:h-3 bg-slate-800/50 rounded-full overflow-hidden backdrop-blur-sm border border-slate-800">
        <div 
          className={`h-full rounded-full transition-all duration-1000 ease-out relative ${
            isWinner 
              ? 'bg-gradient-to-r from-yellow-600 to-yellow-300 shadow-[0_0_15px_rgba(234,179,8,0.4)]' 
              : 'bg-slate-600 group-hover:bg-slate-500'
          }`}
          style={{ width: `${width}%` }}
        >
          {isWinner && (
            <div className="absolute inset-0 bg-white/30 w-full animate-[shimmer_2s_infinite]"></div>
          )}
        </div>
      </div>
    </div>
  );
};

const AwardCard = ({ title, data }) => {
  const totalVotes = data.reduce((sum, item) => sum + item.votes, 0);
  const maxVotes = Math.max(...data.map(item => item.votes));

  return (
    <div className="bg-slate-900/40 border border-slate-800 p-4 md:p-5 rounded-xl hover:border-yellow-900/50 transition-colors duration-300 hover:bg-slate-900/60 backdrop-blur-sm">
      <h3 className="text-base md:text-lg font-bold text-slate-100 mb-4 border-l-4 border-yellow-500 pl-3 leading-tight">
        {title}
      </h3>
      <div className="space-y-1">
        {data.map((item, idx) => (
          <ChartBar 
            key={idx} 
            {...item} 
            totalVotes={totalVotes} 
            maxVotes={maxVotes}
            index={idx} 
          />
        ))}
      </div>
    </div>
  );
};

const Section = ({ category }) => {
  return (
    <section id={category.id} className="py-12 md:py-20 min-h-[40vh] md:min-h-[50vh] flex flex-col justify-center scroll-mt-20">
      <div className="mb-8 md:mb-10 text-center px-2">
        <div className="inline-flex items-center justify-center p-3 rounded-full bg-yellow-500/10 text-yellow-500 mb-4 ring-1 ring-yellow-500/20">
          {category.icon}
        </div>
        <h2 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400 mb-2 font-display">
          {category.title}
        </h2>
        <p className="text-slate-400 text-sm md:text-base max-w-lg mx-auto italic font-light">
          "{category.subtitle}"
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {category.awards.map((award, idx) => (
          <AwardCard key={idx} title={award.title} data={award.data} />
        ))}
      </div>
    </section>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 z-50 relative">
            <Icons.Trophy className="text-yellow-500 w-5 h-5 md:w-6 md:h-6 shrink-0" />
            <span className="font-bold text-base md:text-lg tracking-wider text-white truncate">GADDHON<span className="text-yellow-500">2025</span></span>
          </div>
          
          {/* Desktop Nav - Switched to lg to prevent overlap on medium screens */}
          <div className="hidden lg:flex gap-6">
            {categories.map(cat => (
              <button 
                key={cat.id}
                onClick={() => scrollTo(cat.id)}
                className="text-xs font-medium uppercase tracking-widest text-slate-400 hover:text-yellow-400 transition-colors"
              >
                {cat.id}
              </button>
            ))}
          </div>

          {/* Mobile Toggle - Visible on lg and below */}
          <button className="lg:hidden text-white p-2 z-50 relative" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <Icons.X className="w-6 h-6" /> : <Icons.Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 bg-black pt-24 px-6 space-y-4 transition-transform duration-300 lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
         {categories.map(cat => (
            <button 
              key={cat.id}
              onClick={() => scrollTo(cat.id)}
              className="block w-full text-left py-4 text-xl font-medium text-slate-300 border-b border-slate-800 active:text-yellow-500"
            >
              {cat.title}
            </button>
          ))}
      </div>
    </>
  );
};

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="bg-black min-h-screen text-slate-200 font-sans selection:bg-yellow-500/30 selection:text-yellow-200 overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&display=swap');
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .font-display { font-family: 'Playfair Display', serif; }
      `}</style>
      
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}

      <Nav />

      {/* Hero */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900 via-black to-black opacity-80"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>
        
        {/* Spotlights - Adjusted size for mobile */}
        <div className="absolute top-[-10%] left-[10%] w-64 h-64 md:w-96 md:h-96 bg-yellow-500/10 blur-[80px] md:blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[10%] w-64 h-64 md:w-96 md:h-96 bg-purple-900/20 blur-[80px] md:blur-[120px] rounded-full"></div>

        <div className="relative z-10 text-center max-w-4xl mx-auto transform transition-transform duration-700">
          <div className="inline-block mb-4 md:mb-6 animate-[bounce_3s_infinite]">
            <Icons.Trophy className="w-12 h-12 md:w-16 md:h-16 text-yellow-500 drop-shadow-[0_0_15px_rgba(234,179,8,0.5)]" />
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 via-yellow-500 to-yellow-800 mb-4 md:mb-6 drop-shadow-2xl font-display tracking-tight leading-tight">
            GADDHON<br/>AWARDS NIGHT
          </h1>
          
          <div className="flex items-center justify-center gap-3 md:gap-4 mb-6 md:mb-8">
            <div className="h-px w-8 md:w-12 bg-yellow-800"></div>
            <span className="text-yellow-600 font-bold tracking-[0.3em] text-xs md:text-base">2025 EDITION</span>
            <div className="h-px w-8 md:w-12 bg-yellow-800"></div>
          </div>

          <p className="text-lg md:text-2xl text-slate-400 font-light max-w-2xl mx-auto leading-relaxed px-4">
            Honoring the Chaos, The Love, and The Absolute Madness of Our Family.
          </p>
          
          <button 
            onClick={() => document.getElementById('comedy').scrollIntoView({ behavior: 'smooth' })}
            className="mt-12 md:mt-16 group flex flex-col items-center gap-2 text-slate-500 hover:text-yellow-400 transition-colors mx-auto cursor-pointer"
          >
            <span className="text-[10px] md:text-xs uppercase tracking-widest">Start the Show</span>
            <Icons.ArrowDown className="w-4 h-4 md:w-5 md:h-5 animate-bounce" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pb-24 space-y-4 md:space-y-12">
        {categories.map(cat => (
          <Section key={cat.id} category={cat} />
        ))}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-8 md:py-12 bg-black">
        <div className="text-center px-4">
          <p className="text-yellow-600 font-display text-xl md:text-2xl mb-2">Gaddhon Awards Committee</p>
          <p className="text-slate-600 text-xs md:text-sm">Designed with Chaos • © 2025</p>
        </div>
      </footer>
    </div>
  );
}