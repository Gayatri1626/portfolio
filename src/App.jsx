import React, { useState, useEffect } from 'react'

const RotatingText = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsExiting(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setIsExiting(false);
      }, 500); // Wait for exit animation
    }, 3000); // Change word every 3s
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

const App = () => {
  const words = ["AI Solutions", "Computer Vision", "Natural Language Processing", "Agentic AI"];
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
        title: "Agentic AI (2025)",
        tech: "CrewAI, Llama, Python, JIRA",
        description: "Architected intelligent autonomous agent workflows to automate complex software development tasks."
      },
      {
        title: "Conversational AI (2025)",
        tech: "Python, Flask, OpenCV, Gemini API, FAISS",
        description: "Built an AI-driven interview assistant with adaptive questioning and emotion recognition."
      },
      {
        title: "Resume Builder Platform (2024-2025)",
        tech: "NLP, MongoDB, Gemini API, Docker, Flask",
        description: "Engineered a comprehensive resume-building website with intelligent text extraction."
      },
      {
        title: "5G Gesture Recognition (2024)",
        tech: "5G cameras, Twilio API, Roboflow",
        description: "Formulated real-time Gesture and Facial recognition system leveraging 5G technology."
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
        description: "Secured Top 10 Position in IBM Skills Build Maharashtra State Level Hackathon Showcase 2025."
      }
    ],
    contact: {
      phone: "+91 9623520301",
      email: "gayatrighorpade409@gmail.com",
      linkedin: "https://www.linkedin.com/in/gayatri-ghorpade-778797274/",
      github: "https://github.com/gayatrikghorpade"
    }
  };

  return (
    <div className="portfolio">
      <aside className="sidebar">
        <div>
          <h2 style={{ fontSize: '1rem', fontWeight: 700, letterSpacing: '0.1em', marginBottom: '0.5rem' }}>GAYATRI GHORPADE</h2>
          <p className="text-subtle" style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>AI/ML Engineer</p>
          
          <nav className="sidebar-nav">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
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
                    <div key={i} className="skill-tag" style={{ fontSize: '1.1rem', padding: '0.6rem 1.25rem', background: 'rgba(59, 130, 246, 0.1)', borderColor: 'rgba(59, 130, 246, 0.2)', color: '#60a5fa' }}>
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
                  {resumeData.skills.languages.map((s, i) => <span key={i} className="skill-tag">{s}</span>)}
                </div>
              </div>
            </div>

            <div className="bento-item">
              <div className="skill-category">
                <h3>Databases</h3>
                <div className="skill-tags">
                  {resumeData.skills.databases.slice(0, 2).map((s, i) => <span key={i} className="skill-tag">{s}</span>)}
                </div>
              </div>
            </div>

            <div className="bento-item">
              <div className="skill-category">
                <h3>Cloud</h3>
                <div className="skill-tags">
                  <span className="skill-tag">GCP</span>
                  <span className="skill-tag">AWS</span>
                </div>
              </div>
            </div>

            <div className="bento-item wide">
              <div className="skill-category">
                <h3>DevOps & Tools</h3>
                <div className="skill-tags">
                  {resumeData.skills.devops.map((s, i) => <span key={i} className="skill-tag">{s}</span>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <h2 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '3rem' }}>Selected Projects</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem' }}>
            {resumeData.projects.map((project, i) => (
              <div key={i} className="card">
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{project.title}</h3>
                <p className="highlight-pill" style={{ display: 'inline-block', marginBottom: '1.5rem' }}>{project.tech}</p>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{project.description}</p>
              </div>
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
  )
}

export default App
