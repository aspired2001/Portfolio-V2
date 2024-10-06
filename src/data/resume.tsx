import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Wajahat Ali",
  initials: "SA",
  url: "https://wajahatali.xyz",
  location: "Bengaluru, Karnataka",
  locationLink: "https://maps.app.goo.gl/EoxEvx1ryt8MYEKt8",
  description:
    "Software Engineer. I love building things and helping people. Very active on GitHub.",
  summary:
    "I'm currently pursuing a B.Tech in Computer Science and Engineering, focusing on web development with React and Next.js. I've successfully won 3 hackathons, showcasing my ability to create innovative solutions.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Postgres",
    "MySQL",
    "Docker",
    "Kubernetes",
    "Socket.Io",
    "AWS",
    "C",
    "TailwindCSS",
    "Framer Motion",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "wajhoor2001@gmail.com",
    tel: "+919820908809",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/aspired2001",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/wajahat-ali-mern/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/AliWajahat2452",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "wajhoor2001@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Rework AI",
      href: "https://rework.club/",
      badges: [],
      location: "Remote",
      title: "React.js Developer",
      logoUrl: "/rework.png",
      start: "Feb, 2024",
      end: "Present",
      description:
        "Currently working in a frontend developer role at Rework AI, where I code and deploy applications in React.js and Next.js.",
    },
    {
      company: "Abhyaz",
      href: "https://www.abhyaz.com/",
      badges: [],
      location: "Remote",
      title: "Frontend Developer",
      logoUrl: "/soshals.jpg",
      start: "May, 2023",
      end: "August, 2023",
      description:
        "As a Frontend Developer at Abhyaz in May 2023, I worked remotely on Next.js and developed 6 user profile templates within a month.",
    },
    {
      company: "Celebal Technologies",
      href: "https://celebaltech.com/",
      badges: [],
      location: "Remote",
      title: "Software Developer",
      logoUrl: "/celebal.png",
      start: "Jan, 2023",
      end: "May, 2023",
      description:
        "As a Software Developer Intern at Celebal Technologies, Jaipur, from Jan 2023 to May 2023, I Developed a real-time chat app using Socket.io, Express.js, and MongoDB during the internship.",
    },
  ],
  education: [
    {
      school: "PwC",
      href: "https://www.pwc.in/",
      degree: "Agile, SQL, Cloud, AWS",
      logoUrl: "/pwc.png",
      start: "Feb, 2024",
      end: "Jun, 2024",
    },
    {
      school: "Bangalore Institute of Technology",
      href: "https://bit-bangalore.edu.in/",
      degree: "Bachelor's in Technology, B.Tech (EEE)",
      logoUrl: "/college.png",
      start: "2020",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "SixthSense",
      href: "https://sixthsense.vercel.app/",
      dates: "3rd Year",
      active: true,
      description:
        "A web-based application that uses machine learning algorithms to predict stock market trends. It provides users with real-time data and forecasts, helping them make informed investment decisions.",
      technologies: [
        "React",
        "NodeJs",
        "Express",
        "MongoDB",
        "Javascript",
        "Tailwind",
        "Framer Motion",
        "React ChartJs2",
      ],
      links: [
        {
          type: "Website",
          href: "https://sixthsense.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/videos/sixthsense.mp4",
    },
    {
      title: "Hackodex Website",
      href: "https://hackodex.codex-iter.in/",
      dates: "3rd Year",
      active: true,
      description:
        "A website for hosting the Hackodex month-long open-source event. Features GitHub authentication for student registration and progress tracking, allowing participants to track their contributions and achievements throughout the event.",
      technologies: [
        "React",
        "NodeJs",
        "Express",
        "MongoDB,Tailwind",
        "Framer Motion",
      ],
      links: [
        {
          type: "Website",
          href: "https://hackodex.codex-iter.in/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/videos/hackodex.mp4",
    },
    {
      title: "Samriddhi",
      href: "https://samriddhiapp.vercel.app/",
      dates: "3rd Year",
      active: true,
      description:
        "A comprehensive financial app offering digital payments, fund management, insurance, and robust security, winner of Technex 24 IIT BHU Hackathon, built with MERN stack.",
      technologies: [
        "React",
        "NodeJs",
        "Express",
        "MongoDB",
        "Typescript",
        "Tailwind",
        "Framer Motion",
        "Aceternity UI",
        "Atropos",
      ],
      links: [
        {
          type: "Website",
          href: "https://samriddhiapp.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/aspired2001/Samriddhi",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/videos/samriddhi.mp4",
    },
    {
      title: "Saarthi",
      href: "https://github.com/whysosaket/Saarthi",
      dates: "3rd Year",
      active: true,
      description:
        "A comprehensive educational platform with features like OCR, grade checking, feedback, real-time tracking, plagiarism detection, and classroom management, designed to enhance teaching and learning experiences.",
      technologies: [
        "React",
        "NodeJs",
        "Express",
        "MongoDB",
        "Typescript",
        "Tailwind",
        "Framer Motion",
        "React Plx",
        "Atropos",
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/whysosaket/Saarthi",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/videos/saarthi.mp4",
    },
    {
      title: "LinkMyLinks",
      href: "https://linkmylinks.vercel.app/",
      dates: "2nd Year",
      active: true,
      description:
        "A personalized link management tool that goes beyond basic sharing. Organize links into categories, mark them as private, and create private groups for added security. Easily retrieve important links with just your login credentials.",
      technologies: [
        "React",
        "NodeJs",
        "Express",
        "MongoDB",
        "Typescript",
        "Tailwind",
        "Framer Motion",
      ],
      links: [
        {
          type: "Website",
          href: "https://linkmylinks.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/videos/linkmylinks.mp4",
    },
    {
      title: "Doctor-Dashboard",
      href: "https://doctor-dashboard-three.vercel.app/",
      dates: "3rd Year",
      active: true,
      description:
        "A responsive frontend dashboard designed for doctors. Features customizable components and a user-friendly interface to efficiently manage patient data, appointments, and other medical tasks.",
      technologies: [
        "NextJs",
        "Tailwind CSS",
        "Framer Motion",
        "React ChartJs 2",
      ],
      links: [
        {
          type: "Website",
          href: "https://doctor-dashboard-three.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
    {
      title: "Codeberg",
      href: "https://codeberg.vercel.app/",
      dates: "3rd Year",
      active: true,
      description:
        "A deployable container solution for hosting coding competitions. Features user registration, login, admin functionality, question submission, and code writing/running capabilities.",
      technologies: [
        "React",
        "NodeJs",
        "Express",
        "MongoDB",
        "Typescript",
        "Tailwind",
      ],
      links: [
        {
          type: "Website",
          href: "https://codeberg.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },

    {
      title: "FindMyMovies",
      href: "https://findmymovie.onrender.com/",
      dates: "1st Year",
      active: true,
      description:
        "A web application using EJS, Node, and Express to fetch movie and web series data from MoviesDB API. Displays details, categories, search functionality, season information, and similar recommendations.",
      technologies: ["EJS", "Movies API", "NodeJs", "Bootstrap"],
      links: [
        {
          type: "Website",
          href: "https://findmymovie.onrender.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/whysosaket/FindMyMovie",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
    {
      title: "Musicart",
      href: "https://musicartnew.netlify.app/",
      dates: "3rd Year",
      active: true,
      description:
        "An online music store selling headphones and other music items, developed during an internship at Cuvette. Features a user-friendly interface for browsing, purchasing, and managing orders.",
      technologies: [
        "React",
        "NodeJs",
        "Express",
        "MongoDB",
        "Javascript",
        "Vanilla CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://musicartnew.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
    {
      title: "Quizzie",
      href: "https://quizzie-client.vercel.app/",
      dates: "3rd Year",
      active: true,
      description:
        "An online quiz and polling platform with a timer. Features various quiz types, real-time scoring, and customizable options. Developed during an internship at Cuvette.",
      technologies: [
        "React",
        "NodeJs",
        "Express",
        "MongoDB",
        "Javascript",
        "Vanilla CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://quizzie-client.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
    {
      title: "GreenMe",
      href: "",
      dates: "3rd Year (Hackathon)",
      active: true,
      description:
        "A mobile app promoting sustainable living. Tracks user activities, offers real-time suggestions, gamifies eco-friendly behaviors, and fosters a community for environmental awareness.",
      technologies: ["Flutter", "NodeJs", "Express", "MongoDB", "Typescript"],
      links: [
        {
          type: "Source",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
    {
      title: "Codex Backend",
      href: "https://codex-iter.in/",
      dates: "3rd Year",
      active: true,
      description:
        "A Spring Boot application serving as the backend for the Codex Iter website. Provides endpoints for managing event data and member information, designed for seamless integration with the Codex ITER frontend.",
      technologies: ["Spring Boot"],
      links: [
        {
          type: "Website",
          href: "https://codex-iter.in/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "HackItOut, 2024 - IIT (BHU)",
      dates: "March 15th - 17th, 2024",
      location: "Winner",
      description:
        "Developed Samriddhi, a full-stack financial application which aims to revolutionize financial services by offering digital payments, fund management, insurance integration, and enhanced security features.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5gS_1ccUP32BzjZVROJeI_4fQRLKikl0boA&s",
      links: [
        {
          title: "Live",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://samriddhiapp.vercel.app/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "",
        },
        {
          title: "Certificate",
          icon: <Icons.googleDrive className="h-4 w-4" />,
          href: "",
        },
      ],
    },
    {
      title: "E-Summit’24 - MANIT (NIT-Bhopal)",
      dates: "February 2nd - 3rd, 2024",
      location: "Winner",
      description:
        "Developed Saarthi, an innovative educational platform designed to provide a seamless and enhanced experience for both educators and students.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDSaSwrvz9KcffmW_CCX6ruVQzhvgjDm7tVg&s",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "",
        },
        {
          title: "Post",
          icon: <Icons.linkedin className="h-4 w-4" />,
          href: "",
        },
      ],
    },
    {
      title: "Tri-NIT'24, NIT Trichy",
      dates: "March 8th - 10th, 2024",
      location: "Finalist",
      description:
        "Developed Lingua Connect, that is designed to facilitate language learning by providing a platform where learners can find suitable teachers, schedule classes, and engage in personalized learning experiences.",
      image:
        "https://upload.wikimedia.org/wikipedia/en/8/8b/National_Institute_of_Technology_Trichy_Logo.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "",
        },
        {
          title: "Certificate",
          icon: <Icons.googleDrive className="h-4 w-4" />,
          href: "",
        },
      ],
    },
    {
      title: "Data Prophet, 2024 - IIT (BHU)",
      dates: "March 15th - 17th, 2024",
      location: "Runner Up",
      description: "Stock Market Prediction and Sentimental Analysis",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5gS_1ccUP32BzjZVROJeI_4fQRLKikl0boA&s",
      links: [
        {
          title: "Leaderboard",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.kaggle.com/competitions/stock-market-prediction-and-sentimental-analysis/leaderboard?",
        },
      ],
    },
    {
      title: "Hack For Climate 2.0, 2023 - ICT Mumbai",
      dates: "December 2nd, 2023",
      location: "Winner",
      description: "Stock Market Prediction and Sentimental Analysis",
      image:
        "https://upload.wikimedia.org/wikipedia/en/1/13/Institute_of_Chemical_Technology_logo.png",
      links: [
        {
          title: "Certificate",
          icon: <Icons.googleDrive className="h-4 w-4" />,
          href: "",
        },
        {
          title: "Leaderboard",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.kaggle.com/competitions/swanirvahan-hack-for-climate-20-ict-ioc/leaderboard",
        },
      ],
    },
    {
      title: "Symposium, 2023 - ITER, SOA",
      dates: "May 27, 2023",
      location: "Winner",
      description:
        "Developed SixthSense, a stock market prediction simulator. It provides an engaging environment for users to experiment with various market scenarios and predictions.",
      image: "/soa.png",
      links: [
        {
          title: "Live",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://sixthsense.vercel.app/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/whysosaket/SixthSense",
        },
        {
          title: "Certificate",
          icon: <Icons.googleDrive className="h-4 w-4" />,
          href: "",
        },
      ],
    },
  ],
} as const;
