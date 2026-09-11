/**
 * ==============================================================================
 * BEST FRIEND APOLOGY & MEMORIES - CONTENT CONFIGURATION
 * ==============================================================================
 * Updated with all your real photos and requested songs!
 */

// 1. HERO SECTION DATA
export const heroData = {
  greeting: "Hey Bestie... ??",
  subtitle: "I made something just for you.",
  tagline: "Because some things are easier to say when you put your heart into them.",
  ctaButtonText: "Open This For Me ??",
  badge: "Dedicated to our friendship ?",
  heroPhoto: "/photos/bestie_red_smiles.jpg"
};

// 2. MAIN APOLOGY LETTER DATA
export const apologyLetterData = {
  badge: "From My Heart",
  title: "I'm Really Sorry ????",
  date: "A letter for you",
  letterPhoto: "/photos/bestie_warm_hug.jpg",
  paragraphs: [
    "I know I may have hurt you, disappointed you, or made you feel like I didn't care, and I'm genuinely sorry for that. That was never what I wanted.",
    "You mean so much to me, and our friendship means more to me than I sometimes know how to express. I don't want one misunderstanding or one bad moment to erase all the beautiful memories we've created together.",
    "I'm not writing this to make excuses. I'm writing this because I truly care, and because I don't want to lose someone as special as you.",
    "I'm sorry for my mistakes.\nI'm sorry for the moments I could have handled better.\nAnd most importantly, I'm sorry if I made you feel unimportant.",
    "You deserve a proper apology, so here it is — from my heart. ??"
  ],
  signoff: "Forever your best friend,",
  senderName: "With All My Love ??"
};

// 3. PHOTO GALLERY DATA (Featuring all 9 real uploaded photos!)
export const photosData = [
  {
    id: 1,
    url: "/photos/bestie_warm_hug.jpg",
    caption: "The warmest hug ????",
    date: "A moment I'll forever hold close",
    rotation: "-rotate-2",
    tapeColor: "pink"
  },
  {
    id: 2,
    url: "/photos/bestie_red_smiles.jpg",
    caption: "Dressed up & smiling bright ?",
    date: "Twinning in red & pure happiness",
    rotation: "rotate-3",
    tapeColor: "lavender"
  },
  {
    id: 3,
    url: "/photos/bestie_tree.jpg",
    caption: "One of my favourite memories ??",
    date: "Golden hour, fresh air & endless giggles",
    rotation: "-rotate-1",
    tapeColor: "pink"
  },
  {
    id: 4,
    url: "/photos/bestie_store.jpg",
    caption: "Us being us ??",
    date: "Shopping chaos & spontaneous mirror selfies",
    rotation: "rotate-2",
    tapeColor: "lavender"
  },
  {
    id: 5,
    url: "/photos/bestie_filter_fun.jpg",
    caption: "Our silly filter moments ???",
    date: "No one else gets our goofy humor",
    rotation: "-rotate-3",
    tapeColor: "pink"
  },
  {
    id: 6,
    url: "/photos/bestie_traditional.jpg",
    caption: "Jhumkas & traditionals ??",
    date: "Dressed up and feeling pretty",
    rotation: "rotate-1",
    tapeColor: "lavender"
  },
  {
    id: 7,
    url: "/photos/bestie_saree.jpg",
    caption: "My stunning bestie ??",
    date: "Looking absolutely radiant in yellow",
    rotation: "-rotate-2",
    tapeColor: "pink"
  },
  {
    id: 8,
    url: "/photos/bestie_red_vibes.jpg",
    caption: "Matching vibes always ????",
    date: "Always on the exact same wavelength",
    rotation: "rotate-3",
    tapeColor: "lavender"
  },
  {
    id: 9,
    url: "/photos/bestie_mirror.jpg",
    caption: "Somehow we always end up laughing.",
    date: "To a million more memories together",
    rotation: "-rotate-1",
    tapeColor: "pink"
  }
];

// 4. THINGS I LOVE ABOUT OUR FRIENDSHIP
export const friendshipReasons = [
  {
    id: 1,
    title: "Your random conversations",
    description: "From 2 AM existential talks to completely unhinged theories that only we understand.",
    icon: "MessageCircleHeart",
    accentColor: "from-pink-100 to-rose-100 text-rose-500"
  },
  {
    id: 2,
    title: "Our stupid jokes",
    description: "The ones that aren't even funny to anyone else, but make our stomachs hurt from laughing.",
    icon: "Smile",
    accentColor: "from-purple-100 to-pink-100 text-purple-600"
  },
  {
    id: 3,
    title: "How we can laugh about literally anything",
    description: "A single look across the room is all it takes for us to burst into uncontrollable giggles.",
    icon: "Sparkles",
    accentColor: "from-amber-100 to-rose-100 text-amber-600"
  },
  {
    id: 4,
    title: "All the memories we've created",
    description: "Every silly adventure, every shared secret, and every quiet moment we've lived through together.",
    icon: "Camera",
    accentColor: "from-rose-100 to-purple-100 text-pink-600"
  },
  {
    id: 5,
    title: "The way you always manage to make things better",
    description: "Even when the world feels overwhelming, knowing you're in my corner gives me strength.",
    icon: "HeartHandshake",
    accentColor: "from-pink-100 to-indigo-100 text-rose-500"
  },
  {
    id: 6,
    title: "Simply having you in my life",
    description: "Life is so much softer, brighter, and warmer with you as my best friend. I never take that for granted.",
    icon: "Heart",
    accentColor: "from-fuchsia-100 to-pink-100 text-fuchsia-600"
  }
];

// 5. TIMELINE / OUR LITTLE STORY DATA
export const timelineData = [
  {
    id: 1,
    title: "The Day We Met",
    date: "Chapter 01",
    description: "Where it all started. Who would have guessed back then that you'd become my closest confidant and favorite person?",
    icon: "Sparkles",
    thumbnail: "/photos/bestie_store.jpg"
  },
  {
    id: 2,
    title: "First Proper Conversation",
    date: "Chapter 02",
    description: "That moment when we realized we were on the exact same wavelength and clicked like we'd known each other forever.",
    icon: "MessageSquareHeart",
    thumbnail: "/photos/bestie_mirror.jpg"
  },
  {
    id: 3,
    title: "Our Funniest Memory",
    date: "Chapter 03",
    description: "Tears in our eyes, can't breathe, wheezing on the floor. I still smile every single time I think about it.",
    icon: "Laugh",
    thumbnail: "/photos/bestie_filter_fun.jpg"
  },
  {
    id: 4,
    title: "Our Most Chaotic Moment ??",
    date: "Chapter 04",
    description: "Plans went totally off the rails, everything went wrong, and yet it turned into one of the best stories we have.",
    icon: "Flame",
    thumbnail: "/photos/bestie_red_vibes.jpg"
  },
  {
    id: 5,
    title: "One Memory I'll Never Forget",
    date: "Chapter 05",
    description: "A moment when you were truly there for me, showing me what genuine friendship really looks like.",
    icon: "Star",
    thumbnail: "/photos/bestie_warm_hug.jpg"
  },
  {
    id: 6,
    title: "Today ??",
    date: "Right Now",
    description: "Me standing here, admitting my mistakes, and hoping we can write a hundred more wonderful chapters together.",
    icon: "Heart",
    thumbnail: "/photos/bestie_red_smiles.jpg"
  }
];

// 6. PLAYLIST DATA (Requested Songs with Best Friend Covers)
export const songsData = [
  {
    id: 1,
    title: "Chalo Jaane Do",
    artist: "Amitabh Bachchan, Juhi Chawla",
    src: "/songs/chalo_jaane_do.mp3",
    duration: "3:15",
    cover: "/photos/bestie_warm_hug.jpg"
  },
  {
    id: 2,
    title: "Maafi",
    artist: "Pritam, Pedro",
    src: "/songs/maafi.mp3",
    duration: "3:40",
    cover: "/photos/bestie_tree.jpg"
  },
  {
    id: 3,
    title: "Sang Rahiyo",
    artist: "Jasleen Royal",
    src: "/songs/sang_rahiyo.mp3",
    duration: "3:25",
    cover: "/photos/bestie_red_smiles.jpg"
  },
  {
    id: 4,
    title: "Ami Tomake",
    artist: "MC Headshot",
    src: "/songs/ami_tomake.mp3",
    duration: "2:50",
    cover: "/photos/bestie_traditional.jpg"
  }
];

// 7. SPECIAL ENVELOPE LETTER DATA
export const specialLetterData = {
  sectionTitle: "One Last Thing...",
  sectionSubtitle: "Click the envelope to open a secret letter",
  letterHeader: "Dear Bestie,",
  letterPhoto: "/photos/bestie_tree.jpg",
  paragraphs: [
    "If I could go back and change that moment, I would.",
    "But since I can't, all I can do is say I'm sorry and remind you how much our friendship means to me.",
    "Thank you for all the memories.\nThank you for all the laughs.\nThank you for being there.",
    "I really hope we can leave the bad moment behind and make many more beautiful memories together."
  ],
  closing: "I'm sorry, bestie. ??",
  signature: "Your friend always"
};

// 8. FINAL APOLOGY CONFIRMATION SECTION
export const finalSectionData = {
  title: "Can We Be Okay Again? ????",
  subtitle: "I don't expect everything to magically become perfect.\n\nI just hope you know that I'm genuinely sorry, and that I care about you and our friendship.",
  buttonYes: "Yes, We're Okay ??",
  buttonHug: "Give Me A Hug ??",
  responseMessage: "Thank you for giving us another chance. ??",
  responseSubtext: "You mean the world to me. Let's make today a fresh, happy start together!",
  hugPhoto: "/photos/bestie_warm_hug.jpg"
};

// 9. FOOTER DATA
export const footerData = {
  loveNote: "Made with love, memories & a very sorry heart. ??",
  quote: "Best friends are worth fighting for."
};
