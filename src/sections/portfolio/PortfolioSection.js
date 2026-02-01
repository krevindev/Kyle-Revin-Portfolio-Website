import { useEffect, useRef, useState } from "react";
import "./PortfolioSection.css";
import useIsElementVisible from "../../hooks/useIsElementVisible";
import useWindowSize from "../../hooks/useWindowSize";
import PortfolioItem from "./PortfolioItem";

export default function Portfolio() {
  const portRef = useRef(null);
  const isVisible = useIsElementVisible(portRef, {
    root: null,
    rootMargin: "200px",
    threshold: 0.5,
  });
  const [hasLoaded, setHasLoaded] = useState(false);

  const isMobile = useWindowSize().width <= 600;

  useEffect(() => {
    if (isVisible && !hasLoaded) {
      setHasLoaded(true);
    }
  }, [isVisible, hasLoaded]);

  const portfolioData = [
    {
      title: "Redactor: OCR-based Media Censorship",
      thumbnailFile: "redactor-ss.png",
      details:
        "A desktop application made with PySide6 that auto-censors text in images and videos using OCR.",
      techUsed: ["python"],
      sourceCodeLink: "",
      previewLink: null,
    },
    {
      title: "Lumina Dental",
      thumbnailFile: "lumina-ss.png",
      details:
        "A landing page showcasing dental services and clinic branches, featuring a clean, responsive design with interactive sections and an embedded map.",
      techUsed: ["html", "css", "javascript", "node", "react", "tailwind"],
      sourceCodeLink: "",
      previewLink: null,
    },
    // {
    //   title: "Daily News Scraper",
    //   thumbnailFile: "dailynews-ss.jpg",
    //   details:
    //     "A web scraper that collects and displays latest local news updates.",
    //   techUsed: ["react", "html", "css", "javascript", "node", "express"],
    //   sourceCodeLink: "",
    //   previewLink: "https://daily-news-scraper.onrender.com/",
    // },
    {
      title: "Notey-Fi",
      thumbnailFile: "notey-fi-ss.PNG",
      details:
        "A Facebook Chatbot: Get Google Classroom updates, activity alerts, assignments, and set task reminders effortlessly.",
      techUsed: ["javascript", "node", "mongodb", "express"],
      // sourceCodeLink: 'https://github.com/krevindev/NOTEY-FI',
      sourceCodeLink: "",
      previewLink: null,
      //   notice: "Private",
      noticeColor: "orange",
    },
    {
      title: "Anony - Anonymous Messaging App",
      thumbnailFile: "anony-ss.PNG",
      details:
        "A simple anonymous messaging web app for creating chat channels, sharing, and discussing without revealing identities",
      techUsed: ["html", "css", "javascript", "react", "node", "firebase"],
      sourceCodeLink: "https://github.com/krevindev/Anony",
      previewLink: "https://anony-post.netlify.app",
      //   notice: "",
      noticeColor: "",
    },
    // {
    //   title: "Live Video Text Censorship",
    //   thumbnailFile: "censorship-ss.jpg",
    //   details:
    //     "My Python program utilizes Optical Character Recognition (OCR) to automatically censor inappropriate words in real-time video feeds.",
    //   techUsed: ["python"],
    //   sourceCodeLink:
    //     "https://github.com/krevindev/AutoTextCensor-OpenCV-Pytesseract",
    //   previewLink: null,
    //   //   notice: "",
    // },
    {
      title: "Facebook OCR Translator",
      thumbnailFile: "fb-translator-ss.jpg",
      details:
        "A Facebook chatbot capable of translating languages from text or image attachments using PyTesseract, using the GPT-4o-mini model from the OpenRouter API for translation.",
      techUsed: ["python"],
      //   sourceCodeLink: "https://github.com/krevindev/FB-GPT",
      //   previewLink: null,
      //   notice: "Early stage",
      noticeColor: "orange",
    },
    {
      title: "Facebook Quiz Maker Chatbot",
      thumbnailFile: "quiz-maker-ss.jpg",
      details:
        "AI-powered Facebook chatbot that generates quizzes from PDF, DOCX, or TXT files, or lets users choose topics, using the Mistral model via the OpenRouter API.",
      techUsed: ["python"],
      //   sourceCodeLink: "https://github.com/krevindev/FB-GPT",
      //   previewLink: null,
      //   notice: "Early stage",
      noticeColor: "orange",
    },
    {
      title: "Facebook ChatGPT",
      thumbnailFile: "fb-gpt-ss.PNG",
      details:
        "A Q&A bot that uses OpenAI's ChatGPT API to respond to questions through Facebook Chatbot",
      techUsed: ["javascript", "node", "express"],
      sourceCodeLink: "https://github.com/krevindev/FB-GPT",
      previewLink: null,
      //   notice: "Request Limit Reached",
      noticeColor: "red",
    },
    {
      title: "MNTN",
      thumbnailFile: "mntn-ss.PNG",
      details: "A hiking guide website from a web design template with parallax effect.",
      techUsed: ["html", "css", "javascript", "react", "node"],
      sourceCodeLink: "https://github.com/krevindev/MNTN---Website",
      previewLink: "https://mntn-website.vercel.app/",
      //   notice: "Unfinished",
      noticeColor: "orange",
    },
    {
      title: "UI Design Kit Store",
      thumbnailFile: "ui-kit-ss.PNG",
      details:
        "A simple landing page from a Ari Shakur's website design template.",
      techUsed: ["html", "css", "javascript", "react", "node"],
      sourceCodeLink:
        "https://github.com/krevindev/UI-Design-Kit---Landing-Page",
      previewLink: "https://ui-design-kit.vercel.app/",
    },
    // {
    //   title: "IDK - Anonymous Posting",
    //   thumbnailFile: "idk-ss.PNG",
    //   details: `Simple anonymous posting website.`,
    //   techUsed: [
    //     "html",
    //     "css",
    //     "javascript",
    //     "react",
    //     "node",
    //     "mongodb",
    //     "express",
    //   ],
    //   sourceCodeLink: "https://github.com/krevindev/IDK---Posting",
    //   previewLink: "https://idk-posting.netlify.app/",
    //   //   notice: "Unfinished",
    //   noticeColor: "orange",
    // },
    // {
    //     title: 'TrailWise',
    //     thumbnailFile: 'trailwise-ss.PNG',
    //     details: `Find passenger vehicles to get to a target destination. (Prototype)`,
    //     techUsed: ['html', 'css', 'javascript', 'react', 'node', 'typescript', 'tailwind'],
    //     sourceCodeLink: 'https://github.com/krevindev/TrailWise',
    //     previewLink: 'https://trail-wise.vercel.app',
    //     notice: 'Prototype',
    //     noticeColor: 'orange'
    // },
    {
      title: "KR React Components Kit",
      thumbnailFile: "kr-ui-ss.PNG",
      details: `Open-source custom animated UI components with interactive and reusable designs.`,
      techUsed: ["html", "css", "javascript", "react", "node", "typescript"],
      sourceCodeLink: "https://github.com/krevindev/KR-UI-Kit",
      previewLink: "https://kr-ui.vercel.app/",
      //   notice: "Unfinished",
      noticeColor: "orange",
    },
    // {
    //   title: "Unit Converter",
    //   thumbnailFile: "converter-ss.jpg",
    //   details:
    //     "In my early days of learning JavaScript, I built a Unit Converter web page to enhance my JavaScript DOM skills. It offers conversions for 5 units: weight, time, area, volume, and length.",
    //   techUsed: ["html", "css", "javascript"],
    //   sourceCodeLink: "https://github.com/batchy-bot/unitconverter1",
    //   previewLink: "https://batchy-bot.github.io/unitconverter1/",
    //   notice: "",
    // },
    // {
    //     title: 'E-Commerce Front-End',
    //     thumbnailFile: 'e-commerce-ss.PNG',
    //     details: "I developed a one-page E-commerce website for a school activy using HTML, CSS, and Vanilla Javascript. The design was inspired by EPIC Games' website.",
    //     techUsed: ['html', 'css', 'javascript'],
    //     sourceCodeLink: null,
    //     previewLink: 'https://batchy-bot.github.io/REV-Game-Store/',
    //     notice: 'Non-Responsive',
    //     noticeColor: 'orange'
    // },
    // {
    //     title: 'Personal Vocabulary Builder',
    //     thumbnailFile: 'vocab-ss.PNG',
    //     details: `Using Python and the "Pickle" library as a micro-database, I developed a personal program to remember newly encountered words.`,
    //     techUsed: ['python'],
    //     sourceCodeLink: 'https://drive.google.com/drive/folders/1n5Df_B8cvR9VorFfR-u-7orrvQ5W0WkQ',
    //     previewLink: null,
    //     notice: ''
    // },
    // {
    //     title: 'Personal Voice Assistant',
    //     thumbnailFile: 'voice-ss.PNG',
    //     details: `Created a Python voice assistant using "pyttsx3" for text-to-speech, "speech_recognition" for voice-to-text, and "BeautifulSoup" for web scraping. It can check weather, time, play videos, open websites, terminate processes, and define words.`,
    //     techUsed: ['python'],
    //     sourceCodeLink: 'https://github.com/krevindev/Voice-Assistant',
    //     previewLink: null,
    //     notice: ''
    // }
  ];

  const portfolioItems = portfolioData.map((port, index) => {
    return (
      <PortfolioItem
        i={index}
        title={port.title}
        thumbnailFile={port.thumbnailFile}
        details={port.details}
        techUsed={port.techUsed}
        sourceCodeLink={port.sourceCodeLink}
        previewLink={port.previewLink}
        notice={port.notice}
        noticeColor={port.noticeColor}
        isMobile={isMobile}
      />
    );
  });

  return (
    <div id="portfolio-section" className="main-section" ref={portRef}>
      <div className="section-indicator"></div>
      <div className="page-title-container">
        <span>Portfolio Page</span>
      </div>
      <h1 id="portfolio-header">SOFTWARE DEVELOPMENT PORTFOLIO</h1>
      {(isVisible || hasLoaded) && (
        <div id="projects-container">{portfolioItems}</div>
      )}
    </div>
  );
}
