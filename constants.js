export const METADATA = {
  author: "Haridevi Muruganatham",
  title: "Portfolio | Haridevi",
  description:
    "Haridevi is a passionate Frontend Engineer, dedicated to crafting aesthetic and modern apps that captivate and engage users.",
  siteUrl: "https://haridevi-portfolio.vercel.app/",
  keywords: [
    "Haridevi",
    "Frontend Engineer",
    "React Native Developer",
    "Software Engineer",
    "Portfolio",
    "Devfolio",
    "Folio",
  ].join(", "),
  image:
    "https://res.cloudinary.com/dywdhyojt/image/upload/v1721378510/social-preview.png",
  language: "English",
  themeColor: "#000000",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "A pragmatic Frontend Developer",
  "I build things for the web",
  "I create aesthetic and modern apps",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto: haridevimuruganantham@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/haridevi-muruganantham-003926285",
  },
  {
    name: "github",
    url: "https://github.com/HarideviMuruganantham",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/im_d.e.v.i/",
  },
];

export const SKILLS = {
  languagesAndTools: [
    "html",
    "css",
    "javascript",
    "typescript",
    "sass",
    "nodejs",
    "webpack",
    "vite",
    "firebase",
    "figma",
    "tanstack-query",
  ],
  librariesAndFrameworks: [
    "react",
    "redux",
    "nextjs",
    "tailwindcss",
    "styledcomponents",
    "antdesign",
    "chakra-ui",
  ],
  databases: ["mysql", "mongodb"],
  other: ["git", "sanity-io"],
};

export const PROJECTS = [
  {
<<<<<<< HEAD
    name: "Face recognition attendance system",
    image: "/projects/airbnb.webp",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description: "Face recognition attendance system using Tkinder + OpenCV 🛏️",
    gradient: ["#F14658", "#DC2537"],
    url: "https://github.com/HarideviMuruganantham/Face-recognition-attendacne-system",
    tech: ["react", "nextjs", "tailwindcss", "mapbox"],
  },
  {
    name: "Intrust Labs AI Website",
    image: "/projects/medium.webp",
    blurImage: "/projects/blur/medium-blur.webp",
    description: "Ai static website using HTML + Tailwind CSS ✍🏻",
    gradient: ["#FFA62E", "#EA4D2C"],
    url: "https://haridevimuruganantham.github.io/Intrust-Labs-AI-website/",
    tech: ["typescript", "react", "nextjs", "tailwindcss", "sanity.io"],
  },
  {
    name: "Cyber Security Website",
    image: "/projects/inshorts.webp",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description:
      "Cyber Security static website 🎙",
    gradient: ["#000066", "#6699FF"],
    url: "https://haridevimuruganantham.github.io/Cyber-Security/",
    tech: ["react", "chakra-ui", "alan"],
  },
  {
    name: "Data analyst portfolio",
    image: "/projects/tesla.webp",
    blurImage: "/projects/blur/tesla-blur.webp",
    description: "Data analyst portfolio sample website 🏎️",
    gradient: ["#142D46", "#2E4964"],
    url: "https://haridevi-portfolio.vercel.app/",
=======
    name: "Airbnb",
    image: "/projects/airbnb.webp",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description: "Airbnb UI clone using NextJS + Tailwind CSS 🛏️",
    gradient: ["#F14658", "#DC2537"],
    url: "https://shubh73-airbnb.vercel.app/",
    tech: ["react", "nextjs", "tailwindcss", "mapbox"],
  },
  {
    name: "Medium",
    image: "/projects/medium.webp",
    blurImage: "/projects/blur/medium-blur.webp",
    description: "Medium UI clone using NextJS + Tailwind CSS ✍🏻",
    gradient: ["#FFA62E", "#EA4D2C"],
    url: "https://shubh73-medium.vercel.app/",
    tech: ["typescript", "react", "nextjs", "tailwindcss", "sanity.io"],
  },
  {
    name: "Inshorts",
    image: "/projects/inshorts.webp",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description:
      "Conversational Voice Controlled React News Application using Alan AI 🎙",
    gradient: ["#000066", "#6699FF"],
    url: "https://shubh73-inshorts.netlify.app/",
    tech: ["react", "chakra-ui", "alan"],
  },
  {
    name: "Tesla",
    image: "/projects/tesla.webp",
    blurImage: "/projects/blur/tesla-blur.webp",
    description: "A Tesla React Native App 🏎️",
    gradient: ["#142D46", "#2E4964"],
    url: "https://github.com/shubh73/tesla",
>>>>>>> 4e31c82d4c26a2afafe0d41a89921685f5649b85
    tech: ["react"],
  },
];

export const WORK_CONTENTS = {
<<<<<<< HEAD
  DEVELOPER: [
    {
      title: "Intrust Innovation Labs",
      description:
        "•	Developing and maintaining responsive web applications using React.js, Tailwind CSS, and Chakra UI, following Atomic Design and component-based architecture.",
=======
  GRAPEVINE: [
    {
      title: "Grapevine",
      description:
        "Grapevine is your anonymous office chat, letting coworkers speak openly, share gossip and connect without filters. Building on that same belief, Round1 AI brings it to hiring using AI-driven interviews to replace guesswork with genuine and meaningful conversations.",
>>>>>>> 4e31c82d4c26a2afafe0d41a89921685f5649b85
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Connect anonymously. Share freely.
        </div>
      ),
    },
    {
<<<<<<< HEAD
      title: "FastAPI",
      description:
        "•	Implemented secure backend services using FastAPI, integrating with OAuth2, OpenID Connect, and multi-factor authentication.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          API Engineer
=======
      title: "Pioneering",
      description:
        "Hiring was broken — manual, biased, and slow. We launched Round1 AI to fix that: authentic voice interviews, built-in bias checks and real-time insights. Today, it powers thousands of interviews each week, letting teams hire smarter, faster and fairer.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Senior Frontend Engineer
>>>>>>> 4e31c82d4c26a2afafe0d41a89921685f5649b85
        </div>
      ),
    },
    {
<<<<<<< HEAD
      title: "Database Management",
      description:
        "•	Designed and optimized relational databases with PostgreSQL and managed caching layers with Redis to improve application performance.",
=======
      title: "Elevate",
      description:
        "The early web app struggled with slow performance and zero retention. I rebuilt it from the ground up with a sleek UI, faster load times and SEO-optimized. Then seeded a rich content layer to spark discovery. The payoff? 6x more impressions and 10x the organic installs all without ads, just momentum.",
>>>>>>> 4e31c82d4c26a2afafe0d41a89921685f5649b85
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Frontend Engineer
        </div>
      ),
    },
  ],
<<<<<<< HEAD
  Analyst: [
    {
      title: "Cognifiz Technologies",
      description:
        "•	Data analyst at cognifiz technologies where I worked on a customer churn prediction project to identify at-risk customers and recommend retention strategies.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Revolutionizing insights, one click at a time
=======
  DUKAAN: [
    {
      title: "Dukaan",
      description:
        "Dukaan is a platform that enables businesses to launch their online stores at ease.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Revolutionizing commerce, one click at a time
>>>>>>> 4e31c82d4c26a2afafe0d41a89921685f5649b85
        </div>
      ),
    },
    {
<<<<<<< HEAD
      title: "Web scraping",
      description:
        "•	Developed web scraping scripts using Python and BeautifulSoup to extract data from various websites, enabling data-driven decision-making.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Web data analysis
=======
      title: "Transformation",
      description:
        "Since 2023, the Dukaan Seller Dashboard struggled with technical issues and a broken user experience due to accumulated technical debt. Leading a team of two junior developers, we migrated the dashboard from CSR to SSR, redesigned the UI, and overhauled the codebase in the process. This resolved the technical debt and vastly improved the user experience, making it Dukaan's largest and most impactful migration.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Senior Frontend Engineer
        </div>
      ),
    },
    {
      title: "Evolution",
      description:
        "Recognizing the need for improved performance and user engagement, I spearheaded the migration of the Dukaan App from native to React-Native for iOS and Android platforms. This strategic move led to a X% enhancement in app performance and a Y% boost in user engagement, representing a significant milestone in the app's evolution.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Frontend Engineer
        </div>
      ),
    },
    {
      title: "Optimization",
      description:
        "Leveraging user feedback and analytics, I improved the seller web dashboard design, reducing bounce rates. Simultaneously, I overhauled the build process, slashing bundle size and boosting overall performance.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Frontend Engineer Intern
>>>>>>> 4e31c82d4c26a2afafe0d41a89921685f5649b85
        </div>
      ),
    },
  ],
<<<<<<< HEAD
=======
  // AVIATE: [
  //   {
  //     title: "Aviate",
  //     description:
  //       "Aviate is a preparation and mentorship platform for job-seekers that are seeking non-technical roles across top companies",
  //     content: (
  //       <div className="h-full w-full flex items-center justify-center text-white px-4">
  //         Finding the right job isn&apos;t fate, it&apos;s navigation
  //       </div>
  //     ),
  //   },
  //   {
  //     title: "Innovation",
  //     description:
  //       "I spearheaded the development of Q-Rate, their flagship product, a voice-based applicant screening platform. Moreover, I took initiatives to enhance user engagement and drive substantial increases in daily traffic. Additionally, I implemented an error-logging and bug reporting system, significantly diminishing user-reported bugs.",
  //     content: (
  //       <div className="h-full w-full flex items-center justify-center text-white px-4">
  //         Frontend Developer Intern
  //       </div>
  //     ),
  //   },
  // ],
  // SPACENOS: [
  //   {
  //     title: "Spacenos",
  //     description:
  //       "A dynamic startup dedicated to creating innovative products that make the world a better place.",
  //     content: (
  //       <div className="h-full w-full flex items-center justify-center text-white px-4">
  //         We build apps that solve problems for the next billion people
  //       </div>
  //     ),
  //   },
  //   {
  //     title: "Trailblazing",
  //     description:
  //       "I led the comprehensive overhaul of the Admin Portal, implementing CRUD features for all services and providers. Additionally, I architected a feature enabling precise customer location tracking and delivering insightful usage statistics. Through optimized and compressed file serving, I catalyzed a remarkable Yx increase in page speed, resulting in a X% boost in customer retention.",
  //     content: (
  //       <div className="h-full w-full flex items-center justify-center text-white px-4">
  //         Web Developer Intern
  //       </div>
  //     ),
  //   },
  // ],
>>>>>>> 4e31c82d4c26a2afafe0d41a89921685f5649b85
};

export const GTAG = "G-5HCTL2TJ5W";
