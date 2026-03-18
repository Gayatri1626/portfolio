import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useParams, useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const RotatingText = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsExiting(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setIsExiting(false);
      }, 500);
    }, 3000);
    return () => clearInterval(timer);
  }, [words.length]);

  return (
    <span className="rotating-text-wrapper">
      <span className={`rotating-text-item ${isExiting ? 'exit' : 'enter'}`} style={{ color: 'var(--accent)' }}>
        {words[index]}
      </span>
    </span>
  );
};

const resumeData = {
  name: "Gayatri Vikas Ghorpade",
  summary: "Innovative AI/ML enthusiast with hands-on experience in software development and solution building. Proficient in designing, developing, and deploying machine learning, computer vision, and NLP solutions, along with full-stack development.",
  experience: [
    {
      company: "Beautiful Destinations",
      role: "AI Engineer",
      period: "Aug 2025 – Present",
      responsibilities: [
        "Developed AI-powered automation tools using Python, Flask, Node.js and GCP to streamline internal workflows and reduce manual operational effort.",
        "Built Retrieval-Augmented Generation (RAG) applications using OpenAI embeddings, Claude Sonnet, and LlamaIndex for context-aware responses.",
        "Engineered LLM-powered content generation pipelines integrating Gemini and OpenAI APIs to automate caption creation.",
        "Implemented semantic search systems using vector embeddings and FAISS to improve knowledge retrieval speed and accuracy.",
        "Designed scalable backend APIs using Flask and REST architecture to integrate AI capabilities into internal applications.",
        "Developed data extraction pipelines through web scraping and OpenAI-based entity mapping for structured insights.",
        "Managed scalable data storage and retrieval using Supabase and Google Cloud Storage for media files and application datasets.",
        "Improved application performance by debugging systems, optimizing backend processes, and implementing UI features.",
        "Collaborated with cross-functional teams to deploy AI-driven features and continuously enhance internal automation tools."
      ],
      skills: ["Automation", "API Integration", "Google Cloud Run", "Flask", "Data Scraping", "RAG Systems", "LLM Engineering", "Next.js", "Node.js", "GCP"]
    },
    {
      company: "Artiset",
      role: "Software Engineer Intern",
      period: "June 2024 – May 2025",
      responsibilities: [
        "Led development of a real-time Resume Builder Platform by architecting scalable backend services using Python and Flask, reducing response time by 30%.",
        "Directed a cross-functional team in implementing core platform features and system architecture, enabling scalable application growth.",
        "Engineered high-performance backend APIs and microservices using Flask and REST architecture for real-time data processing.",
        "Conducted R&D to design scalable system architectures and automated workflows, reducing production downtime by 25%.",
        "Built AI-powered resume intelligence features using NLP techniques and Google Gemini API for intelligent text processing."
      ],
      skills: ["Problem Solving", "Flask", "JSON", "Back-End Web Development", "Gen AI", "MongoDB", "REST APIs", "Session Management", "AWS", "NLP"]
    }
  ],
  projects: [
    {
      slug: "agentic-ai",
      title: "Agentic AI (Ops Chatbot)",
      tech: "Next.js, LlamaIndex, Supabase, Gemini, OpenAI",
      description: "AI-powered Operations Chatbot with RAG, multimodal OCR, and autonomous agent workflows for complex doc processing.",
      details: {
        subtitle: "Intelligent Operations Automation",
        overview: "An AI-powered Operations Chatbot built with Next.js, Supabase, and LlamaIndex. This system allows administrators to upload PDF documents and enables users to query that knowledge base using a Retrieval-Augmented Generation (RAG) approach.",
        technologies: [
          { name: "Next.js", desc: "App Router & Server Actions for seamless full-stack performance." },
          { name: "LlamaIndex.ts", desc: "Advanced RAG orchestration and agentic tool-calling logic." },
          { name: "Supabase", desc: "PostgreSQL with pgvector for high-performance semantic search." },
          { name: "Gemini AI", desc: "Multimodal OCR and high-dimensional vector embeddings." }
        ],
        highlights: [
          { title: "Hybrid OCR Parsing", desc: "Combines standard text extraction with Gemini Flash for image-based PDFs." },
          { title: "Agentic Workflows", desc: "OpenAIAgent with automated fallback to native search for missing local data." },
          { title: "Optimized Retrieval", desc: "Truncated 1536-dim embeddings for sub-second database response times." }
        ]
      }
    },
    {
      slug: "conversational-ai",
      title: "VIKA: Conversational AI Interview System",
      tech: "Python, Gemini API, YOLOv8, TensorFlow, FAISS, Flask",
      description: "AI-driven technical interview platform that simulates real-world interviewers with emotion analysis and adaptive difficulty.",
      details: {
        subtitle: "Emotion-Aware Technical Interviewer",
        overview: "VIKA is a sophisticated, AI-driven technical interview platform designed to simulate a real-world human interviewer. It goes beyond simple Q&A by analyzing the candidate's code quality, emotional state, and adapting the interview difficulty in real-time.",
        technologies: [
          { name: "Google Gemini", desc: "Natural language reasoning, empathetic interaction, and multimodality." },
          { name: "Computer Vision", desc: "YOLOv8 and Custom CNNs for real-time face and emotion detection." },
          { name: "FAISS (RAG)", desc: "Retrieval-Augmented Generation for context-aware technical questions." },
          { name: "Static Analysis", desc: "AST Fingerprinting and Radon for structural code quality metrics." }
        ],
        highlights: [
          { title: "Real-time Emotion Analysis", desc: "Calculates a Stress Score based on weighted emotional triggers using webcam feed." },
          { title: "Adaptive Difficulty", desc: "Dynamically tunes coding challenge complexity based on candidate performance and panic levels." },
          { title: "Empathetic Feedback", desc: "LLM-driven responses that adjust tone based on the candidate's emotional state." }
        ]
      }
    },
    {
      slug: "resume-builder",
      title: "Resume AI & AI Career Coach",
      tech: "Python, Flask, MongoDB, Gemini 2.0 Flash, spaCy",
      description: "AI-powered platform for resume generation, career gap analysis, and personalized coaching using Gemini 2.0 Flash.",
      details: {
        subtitle: "AI Career Guidance & Document Engineering",
        overview: "A comprehensive platform for AI-powered resume generation, analysis, and career guidance. This project leverages advanced LLMs and NLP techniques to help users build professional resumes and navigate their career paths.",
        technologies: [
          { name: "Gemini 2.0 Flash", desc: "High-speed reasoning for content generation and career coaching." },
          { name: "Flask & MongoDB", desc: "Scalable backend and storage for user profiles and resume drafts." },
          { name: "NLP Engine", desc: "Custom spaCy NER and text parsing for deep resume extraction." },
          { name: "Document Automation", desc: "LibreOffice-based conversion for high-fidelity PDF/DOCX exports." }
        ],
        highlights: [
          { title: "AI-Driven Builder", desc: "Generates tailored responsibilities and skills across 11+ professional templates." },
          { title: "Smart Analyzer", desc: "Identifies career gaps and suggests keyword optimizations for ATS performance." },
          { title: "AI Career Coach", desc: "Step-by-step learning paths, interview prep, and certification advice." }
        ]
      }
    },
    {
      slug: "gesture-recognition",
      title: "SignDetection: Gesture and Face Authentication",
      tech: "Python, OpenCV, TensorFlow, Twilio, pandas",
      description: "Computer Vision system integrating hand gesture recognition with face authentication and automated notifications.",
      details: {
        subtitle: "AI-Powered Hand Tracking & Automation",
        overview: "A sophisticated Sign Detection system that combines hand tracking with secure facial authentication. Recognizes specific gestures to trigger automated actions like SMS alerts and voice calls.",
        technologies: [
          { name: "OpenCV & cvzone", desc: "Precise hand tracking and face identification algorithms." },
          { name: "TensorFlow/Keras", desc: "Custom-trained classification models for gesture recognition." },
          { name: "Twilio API", desc: "Automated triggers for SMS and Voice call notifications." },
          { name: "Logging & TTS", desc: "Excel-based auditing and real-time Text-to-Speech feedback." }
        ],
        highlights: [
          { title: "Secure Authentication", desc: "Face-recognition gated entry ensures only authorized users can trigger actions." },
          { title: "Automated Assistance", desc: "Triggers calls to technicians or cleaners automatically via hand signs." },
          { title: "Audit Trail", desc: "Comprehensive logging system captures every interaction for security and verification." }
        ]
      }
    }
  ],
  education: {
    degree: "Bachelor of Technology in AI and Data Science",
    school: "Dr. D. Y. Patil School of Science and Technology, Pune",
    period: "2021 – 2025",
    cgpa: "9.8"
  },
  skills: {
    languages: ["Python", "JavaScript"],
    databases: ["MongoDB", "SQL", "PostgreSQL", "Supabase"],
    ai_ml: ["NLP", "Computer Vision", "Deep Learning", "LLMs"],
    devops: ["Docker", "Kubernetes", "Git", "GCP"]
  },
  achievements: [
    {
      title: "Student Excellence Award (2024)",
      issuer: "Dr. D.Y. Vidyapeeth, Pune",
      description: "Recognized with the Student Achievement Award for maintaining a high GPA and active involvement in extracurricular and research activities."
    },
    {
      title: "IBM SkillsBuild State Level Hackathon",
      issuer: "Feb 2025",
      description: "Secured Top 10 Position in the IBM SkillsBuild Maharashtra State Level Hackathon 2025 for an innovative AI-driven educational solution."
    }
  ],
  blogs: [
    {
      slug: "future-of-agentic-ai",
      title: "The Shift from RAG to Agentic Workflows",
      date: "March 2025",
      readTime: "5 min read",
      excerpt: "Why simple retrieval isn't enough anymore, and how autonomous agents are redefining software engineering.",
      image: "/assets/agentic-ai-hero.png",
      content: "As someone building Ops Chatbots and Conversational systems, I've noticed a major shift: users don't just want answers; they want actions. RAG (Retrieval-Augmented Generation) was the first step—giving LLMs a brain full of your data. But Agentic AI is the second step—giving that brain 'hands' through tool-calling.\n\nIn my recent projects, I've focused on LlamaIndex agents that can autonomously decide to search the web or query a database, bridging the gap between passive info and active problem-solving. This shift is critical for the next wave of IT automation. We are moving away from 'Chat with your PDF' toward 'Agents that manage your infrastructure.'\n\nTransitioning to an agentic architecture requires a few core components:\n\n1. Tool-Centric Design: LLMs need a standardized interface to interact with the world.\n2. Reasoning Loops: The ability to reflect on output and retry if a tool fails.\n3. Memory Integration: Maintaining state across complex, multi-step tasks.\n\nFor engineers, this means our focus is shifting from prompt engineering to 'tool engineering'—building the robust APIs that these agents use to get real work done."
    },
    {
      slug: "ai-interview-ethics",
      title: "Ethics of Emotion-Aware AI in Hiring",
      date: "Feb 2025",
      readTime: "4 min read",
      excerpt: "Exploring the balance between data-driven assessment and candidate empathy in automated interview systems.",
      image: "/assets/ai-ethics-hero.png",
      content: "With the development of VIKA, my conversational AI interview system, the most common question I get is: 'Is it ethical to monitor stress?' The goal isn't to penalize panic, but to foster empathy. Human interviewers naturally adjust their tone when they see a candidate is nervous; AI should be no different. By using computer vision to detect stress, we can actually make automated systems *more* human-centric by lowering the difficulty or providing encouragement when the candidate needs it most."
    }
  ],
  contact: {
    phone: "+91 9623520301",
    email: "gayatrighorpade409@gmail.com",
    linkedin: "https://www.linkedin.com/in/gayatri-ghorpade-778797274/",
    github: "https://github.com/gayatrikghorpade"
  }
};

const Home = ({ theme, toggleTheme }) => {
  const words = ["AI Solutions", "Computer Vision", "Natural Language Processing", "Agentic AI"];
  return (
    <div className="portfolio">
      <aside className="sidebar">
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <div>
              <h2 style={{ fontSize: '1rem', fontWeight: 700, letterSpacing: '0.1em', marginBottom: '0.25rem' }}>GAYATRI GHORPADE</h2>
              <p className="text-subtle" style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>AI/ML Engineer</p>
            </div>
            <button 
              onClick={toggleTheme} 
              className="theme-toggle"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? '☼' : '☾'}
            </button>
          </div>
          
          <nav className="sidebar-nav">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#education">Education</a>
            <a href="#achievements">Achievements</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-subtle" style={{ fontSize: '0.8rem' }}>LinkedIn</a>
          <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" className="text-subtle" style={{ fontSize: '0.8rem' }}>GitHub</a>
          <a href="#contact" className="btn btn-primary" style={{ fontSize: '0.8rem', padding: '0.6rem' }}>Let's Talk</a>
        </div>
      </aside>

      <a href="#blog" className="top-right-blog-btn">
        BLOG
      </a>

      <main className="main-content">
        <section id="about" className="section fade-in" style={{ paddingTop: '8rem' }}>
          <div style={{ maxWidth: '800px' }}>
            <h1 className="section-title" style={{ marginBottom: '2rem', fontSize: '2.5rem', lineHeight: 1.2, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Building the future <br /> with <RotatingText words={words} />
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '3rem' }}>
              I'm <span style={{ color: 'var(--text)', fontWeight: 600 }}>Gayatri Ghorpade</span>, an <span style={{ color: 'var(--accent)', fontWeight: 600 }}>AI/ML Engineer</span> dedicated to architecting 
              intelligent autonomous systems. From agentic workflows to conversational AI, I bridge the gap between 
              complex data and seamless, automated solutions.
            </p>
          </div>
        </section>

        <section id="skills" className="section">
          <h2 style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '4rem' }}>Technical Expertise</h2>
          <div className="bento-grid">
            <div className="bento-item large">
              <div className="skill-category">
                <h3>AI & Machine Learning</h3>
                <div className="skill-tags" style={{ marginTop: '1rem' }}>
                  {resumeData.skills.ai_ml.map((s, i) => (
                    <div key={i} className="skill-tag-featured">
                       {s}
                    </div>
                  ))}
                </div>
                <p style={{ marginTop: '2rem', color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  Specializing in Large Language Models, RAG architectures, and autonomous agent workflows.
                </p>
              </div>
            </div>
            
            <div className="bento-item wide">
              <div className="skill-category">
                <h3>Languages</h3>
                <div className="skill-tags">
                  {resumeData.skills.languages.map((s, i) => <span key={i} className="skill-tag-simple">{s}</span>)}
                </div>
              </div>
            </div>

            <div className="bento-item">
              <div className="skill-category">
                <h3>Databases</h3>
                <div className="skill-tags">
                  {resumeData.skills.databases.slice(0, 2).map((s, i) => <span key={i} className="skill-tag-simple">{s}</span>)}
                </div>
              </div>
            </div>

            <div className="bento-item">
              <div className="skill-category">
                <h3>Cloud</h3>
                <div className="skill-tags">
                  <span className="skill-tag-simple">GCP</span>
                  <span className="skill-tag-simple">AWS</span>
                </div>
              </div>
            </div>

            <div className="bento-item wide">
              <div className="skill-category">
                <h3>DevOps & Tools</h3>
                <div className="skill-tags">
                  {resumeData.skills.devops.map((s, i) => <span key={i} className="skill-tag-simple">{s}</span>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <h2 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '3rem' }}>Selected Projects</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem' }}>
            {resumeData.projects.map((project, i) => (
              <Link to={`/projects/${project.slug}`} key={i} className="card-link">
                <div className="card">
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{project.title}</h3>
                  <p className="highlight-pill" style={{ display: 'inline-block', marginBottom: '1.5rem' }}>{project.tech}</p>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{project.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section id="blog" className="section">
          <h2 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '3rem' }}>AI & Tech Insights</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            {resumeData.blogs.map((blog, i) => (
              <Link to={`/blog/${blog.slug}`} key={i} className="card-link">
                <div className="card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <span className="year">{blog.date}</span>
                    <span className="text-subtle" style={{ fontSize: '0.7rem' }}>{blog.readTime}</span>
                  </div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{blog.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>{blog.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <h2 style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4rem' }}>Professional Experience</h2>
          <div className="timeline">
            {resumeData.experience.map((exp, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div>
                    <h3 style={{ marginBottom: '0.5rem' }}>{exp.company}</h3>
                    <p className="text-subtle" style={{ fontWeight: 500 }}>{exp.period}</p>
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 600, marginBottom: '1.25rem' }}>{exp.role}</h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                      {exp.skills.map((skill, k) => (
                        <span key={k} className="skill-pill">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <ul style={{ listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {exp.responsibilities.map((res, j) => (
                        <li key={j} style={{ color: 'var(--text-muted)', lineHeight: 1.6, position: 'relative', paddingLeft: '1.5rem' }}>
                          <span style={{ position: 'absolute', left: 0, top: '0.6rem', width: '4px', height: '4px', borderRadius: '50%', background: 'var(--text)', opacity: 0.2 }}></span>
                          {res}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="education" className="section">
          <h2 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '3rem' }}>Academic Background</h2>
          <div className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{resumeData.education.school}</h3>
              <p style={{ fontSize: '1rem', fontWeight: 500 }}>{resumeData.education.degree}</p>
              <p className="text-subtle" style={{ marginTop: '0.5rem' }}>{resumeData.education.period}</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{ fontSize: '2.5rem', fontWeight: 700 }}>{resumeData.education.cgpa}</p>
              <p className="text-subtle" style={{ fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em' }}>CGPA</p>
            </div>
          </div>
        </section>

        <section id="achievements" className="section">
          <h2 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '3rem' }}>Achievements & Awards</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem' }}>
            {resumeData.achievements.map((ach, i) => (
              <div key={i} className="card">
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{ach.title}</h3>
                <p style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '1rem' }}>{ach.issuer}</p>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{ach.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section" style={{ borderBottom: 'none', marginBottom: '4rem' }}>
          <div className="card" style={{ padding: '6rem 4rem', textAlign: 'center', background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)' }}>
            <h2 className="section-title" style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'var(--text)' }}>Let's work together.</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '3.5rem', maxWidth: '600px', margin: '0 auto 3.5rem' }}>
              I'm currently open to new opportunities in AI & ML. Whether you have a question or just want to say hi, my inbox is always open.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <a href={`mailto:${resumeData.contact.email}`} className="btn btn-primary" style={{ padding: '1rem 2.5rem' }}>
                Get In Touch
              </a>
              <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-subtle" style={{ fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>LinkedIn</a>
                <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" className="text-subtle" style={{ fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>GitHub</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = resumeData.projects.find(p => p.slug === slug);

  if (!project) return <div className="project-page">Project not found</div>;

  return (
    <div className="project-page">
      <nav className="project-nav">
        <Link to="/" className="back-link">
          <span className="arrow">←</span> Back to projects
        </Link>
      </nav>

      <div className="project-container">
        <header className="project-header fade-in">
          <div className="header-meta">
            <span className="year">2025</span>
            <span className="status-pill">LIVE - PRODUCTION READY</span>
          </div>
          <h1 className="project-title">{project.title}</h1>
          <p className="project-subtitle">{project.details?.subtitle || project.tech}</p>
          <div className="project-overview-container">
            <p className="project-overview-text">
              {project.details?.overview || project.description}
            </p>
          </div>

          <div className="tech-pills">
            {project.tech.split(',').map((t, idx) => (
              <span key={idx} className="tech-pill">{t.trim()}</span>
            ))}
          </div>
        </header>

        {project.details && (
          <>
            <section className="project-section fade-in">
              <h2 className="section-label">Technology</h2>
              <h3 className="section-heading">Built with modern tools</h3>
              <div className="tech-grid">
                {project.details.technologies.map((tech, idx) => (
                  <div key={idx} className="tech-card">
                    <h4>{tech.name}</h4>
                    <p>{tech.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="project-section fade-in">
              <h2 className="section-label">Highlights</h2>
              <h3 className="section-heading">What makes it special</h3>
              <div className="highlights-grid">
                {project.details.highlights.map((h, idx) => (
                  <div key={idx} className="highlight-item">
                    <h4>{h.title}</h4>
                    <p>{h.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        <footer className="project-footer">
          <div className="contact-card">
            <h3>HAVE A SIMILAR PROJECT IN MIND?</h3>
            <div style={{ marginTop: '2rem' }}>
              <a href={`mailto:${resumeData.contact.email}`} className="btn btn-primary">Let's Talk</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

const BlogDetail = () => {
  const { slug } = useParams();
  const blog = resumeData.blogs.find(b => b.slug === slug);

  if (!blog) return <div className="project-page">Article not found</div>;

  return (
    <div className="blog-page">
      <header className="blog-floating-header">
        <div className="blog-logo">GAYATRIGHORPADE AI BLOG</div>
        <div className="blog-btn-group">
          <Link to="/" className="blog-back-btn">RETURN TO CORE</Link>
          <a href={`mailto:${resumeData.contact.email}`} className="blog-contact-btn">GET IN TOUCH</a>
        </div>
      </header>

      <section className="blog-hero" style={{ backgroundImage: `url(${blog.image})` }}>
        <div className="blog-hero-overlay">
          <div className="blog-hero-content">
            <h1 className="blog-hero-title">{blog.title}</h1>
            <div className="blog-hero-meta">
              <div className="meta-item">
                <span className="meta-label">AUTHOR_ID</span>
                <span className="meta-value">GAYATRIGHORPADE</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">READ_TIME</span>
                <span className="meta-value">{blog.readTime.split(' ')[0]}M</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">SECTOR</span>
                <span className="meta-value">AI / TECH</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">TIMESTAMP</span>
                <span className="meta-value">{blog.date.toUpperCase()}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="blog-detail-container fade-in">
        <article className="blog-article-content">
          <p style={{ whiteSpace: 'pre-wrap' }}>{blog.content}</p>
        </article>
        
        <footer className="blog-footer">
          <div className="contact-card">
            <h3>WHAT DO YOU THINK?</h3>
            <p style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>I'd love to hear your perspective on this trend.</p>
            <div style={{ marginTop: '2rem' }}>
              <a href={`mailto:${resumeData.contact.email}`} className="btn btn-primary">Share Thoughts</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  
  useEffect(() => {
    document.documentElement.className = theme === 'light' ? 'light-mode' : '';
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
      </Routes>
    </Router>
  );
};

export default App
