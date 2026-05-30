import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Code, Terminal, Zap, Briefcase, GraduationCap, Mail, Menu, X, ChevronRight } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-xl font-bold font-mono text-primary flex items-center gap-2 group">
          <Terminal size={24} />
          <span>akhil.sh</span>
          <motion.div
            className="w-2 h-5 bg-primary"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
            >
              <span className="text-primary/50 text-xs">0{i + 1}.</span>
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-muted-foreground hover:text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-white/5 shadow-xl"
        >
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            {navItems.map((item, i) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-mono text-foreground hover:text-primary transition-colors flex items-center gap-3 py-2 border-b border-white/5 last:border-0"
              >
                <span className="text-primary/50 text-xs">0{i + 1}.</span>
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
}

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.div variants={fadeUp} className="font-mono text-primary mb-4 flex items-center gap-2">
            <ChevronRight className="w-4 h-4" />
            <span>Hello, World. I am</span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-bold mb-4 tracking-tight text-foreground">
            U Akhil.
          </motion.h1>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-bold mb-8 tracking-tight text-muted-foreground">
            I build serious AI products.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl leading-relaxed">
            I'm a focused, ambitious CS student from Hyderabad. I specialize in fine-tuning LLMs, shipping agentic systems, and leading teams to build intelligent solutions that matter.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
            <a href="#projects" className="bg-transparent border border-primary text-primary px-8 py-4 font-mono text-sm uppercase tracking-wider hover:bg-primary/10 transition-colors">
              View My Work
            </a>
            <a href="#contact" className="bg-primary text-primary-foreground px-8 py-4 font-mono text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors">
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="py-24 relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold font-sans">
              <span className="font-mono text-primary text-2xl mr-2">01.</span>
              About Me
            </h2>
            <div className="h-px bg-white/10 flex-grow" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I'm a B.Tech AI & ML Undergraduate at Geethanjali College of Engineering and Technology, constantly pushing the boundaries of what's possible with artificial intelligence.
              </p>
              <p>
                I don't just study concepts; I build real systems. Whether it's training custom models, integrating agentic workflows, or optimizing web performance, my goal is to craft efficient, intelligent software.
              </p>
              <div className="p-6 bg-card border border-white/5 mt-8">
                <h3 className="font-mono text-primary mb-4">{"{ Current Status }"}</h3>
                <ul className="space-y-3 font-mono text-sm">
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Location:</span>
                    <span className="text-foreground">Hyderabad, India</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">CGPA:</span>
                    <span className="text-foreground">7.5/10</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Focus:</span>
                    <span className="text-foreground text-right">LLMs, RAG, Web Dev</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <GraduationCap className="text-primary" /> Education
              </h3>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
                
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full border border-primary bg-background shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow shrink-0 z-10">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.5rem)] p-4 border border-white/5 bg-white/5 hover:border-primary/50 transition-colors">
                    <div className="font-mono text-primary text-xs mb-1">2023–2027</div>
                    <div className="font-bold text-foreground">B.Tech (AI & ML)</div>
                    <div className="text-sm text-muted-foreground mt-1">Geethanjali College of Eng. & Tech</div>
                  </div>
                </div>

                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full border border-white/20 bg-background shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow shrink-0 z-10">
                    <div className="w-2 h-2 bg-white/20 rounded-full"></div>
                  </div>
                  <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.5rem)] p-4 border border-white/5 bg-white/5 hover:border-primary/50 transition-colors">
                    <div className="font-mono text-primary text-xs mb-1">2021–2023</div>
                    <div className="font-bold text-foreground">Intermediate (MPC)</div>
                    <div className="text-sm text-muted-foreground mt-1">Narayana Junior College (97.6%)</div>
                  </div>
                </div>

                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full border border-white/20 bg-background shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow shrink-0 z-10">
                    <div className="w-2 h-2 bg-white/20 rounded-full"></div>
                  </div>
                  <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.5rem)] p-4 border border-white/5 bg-white/5 hover:border-primary/50 transition-colors">
                    <div className="font-mono text-primary text-xs mb-1">2020–2021</div>
                    <div className="font-bold text-foreground">Class 10</div>
                    <div className="text-sm text-muted-foreground mt-1">Ekashila Public School (GPA 10.0)</div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Experience() {
  const experiences = [
    {
      role: "Tech Lead",
      company: "Viswan AI (Swecha)",
      date: "May 2025 – July 2025",
      points: [
        "Led and mentored AI developer interns on robust R&D projects.",
        "Contributed 80+ hours to rigorous corpus data collection, annotation, and preprocessing.",
        "Fine-tuned LLMs for complex, domain-specific applications, optimizing AI workflows."
      ]
    },
    {
      role: "Web Dev & Digital Marketing Intern",
      company: "BVBM (EdTech Startup)",
      date: "Feb 2025 – Mar 2025",
      points: [
        "Architected and customized a WordPress platform to dramatically improve online presence.",
        "Optimized site performance with a responsive, user-centric design approach.",
        "Implemented SEO best practices, yielding measurable search engine ranking improvements."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 relative bg-card/50 border-y border-white/5">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold font-sans">
              <span className="font-mono text-primary text-2xl mr-2">02.</span>
              Where I've Worked
            </h2>
            <div className="h-px bg-white/10 flex-grow" />
          </div>

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div key={i} className="group relative pl-8 border-l border-white/10 hover:border-primary transition-colors">
                <div className="absolute w-3 h-3 bg-background border-2 border-primary rounded-full -left-[7px] top-2" />
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {exp.role} <span className="text-primary">@ {exp.company}</span>
                    </h3>
                  </div>
                  <div className="font-mono text-sm text-muted-foreground mt-2 md:mt-0">
                    {exp.date}
                  </div>
                </div>
                <ul className="space-y-3">
                  {exp.points.map((point, j) => (
                    <li key={j} className="text-muted-foreground flex gap-3">
                      <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Projects() {
  const projects = [
    {
      title: "Legal Advisor",
      tech: ["Fine-tuning", "Gemma-3", "Hugging Face", "NLP"],
      description: "Fine-tuned LLM trained on 454 constitutional articles (English). Features precise Q&A on constitutional provisions, summarization, paraphrasing, and serves as a vital legal education tool.",
      link: "akhil0238/MyGemmaNPC",
      featured: true
    },
    {
      title: "Shopping Agent",
      tech: ["LangChain", "LLMs", "Python", "Browser Automation"],
      description: "AI-powered agent providing intelligent product discovery and one-click automated purchasing across multiple e-commerce platforms. Smart recommendation pipeline analyzes queries, preferences, and budget.",
      link: "#",
      featured: true
    },
    {
      title: "Crop Recommendation System",
      tech: ["Streamlit", "Mistral AI", "Scikit-Learn", "Python"],
      description: "End-to-end web app integrating ML models (Decision Tree, Random Forest, KNN, Logistic Regression) with an interactive chatbot interface for insightful recommendations.",
      link: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl font-bold font-sans">
              <span className="font-mono text-primary text-2xl mr-2">03.</span>
              Some Things I've Built
            </h2>
            <div className="h-px bg-white/10 flex-grow" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className={`bg-card p-8 flex flex-col border border-white/5 hover:border-primary/50 transition-colors group relative overflow-hidden ${project.featured ? 'md:col-span-2 lg:col-span-2' : ''}`}
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                  <Code className="w-16 h-16 text-primary" />
                </div>
                
                <div className="flex justify-between items-center mb-8 relative z-10">
                  <Briefcase className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors relative z-10">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-8 flex-grow relative z-10">
                  {project.description}
                </p>
                
                <div className="mt-auto relative z-10">
                  <ul className="flex flex-wrap gap-3 font-mono text-xs text-primary/70">
                    {project.tech.map((t, j) => (
                      <li key={j}>{t}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Skills() {
  const skillCategories = [
    {
      title: "Core Languages",
      skills: ["Python", "Java", "C", "JavaScript", "HTML/CSS"]
    },
    {
      title: "AI & ML Specializations",
      skills: ["NLP", "RAG", "LLM Fine-tuning", "Deep Learning APIs", "Cloud AI"]
    },
    {
      title: "ML Ecosystem",
      skills: ["TensorFlow", "PyTorch", "Keras", "Scikit-Learn", "Pandas", "NumPy"]
    },
    {
      title: "Engineering",
      skills: ["REST APIs", "Backend Dev", "API Integration", "Streamlit", "Firebase"]
    }
  ];

  return (
    <section id="skills" className="py-24 relative bg-card/30 border-y border-white/5">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold font-sans">
              <span className="font-mono text-primary text-2xl mr-2">04.</span>
              Technical Arsenal
            </h2>
            <div className="h-px bg-white/10 flex-grow" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((cat, i) => (
              <div key={i} className="border border-white/10 p-6 bg-background relative overflow-hidden group hover:border-primary/40 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="font-mono text-primary mb-4 flex items-center gap-2">
                  <Zap className="w-4 h-4" /> {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, j) => (
                    <span key={j} className="px-3 py-1 text-sm bg-white/5 border border-white/10 text-muted-foreground group-hover:border-primary/20 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Achievements() {
  const achievements = [
    "Runner-up in 'Code Crunch' (Logic-building coding competition)",
    "Runner-up in 'CODEZAP' (Coding competition)",
    "Active Hackathon Participant building rapid AI prototypes"
  ];

  return (
    <section id="achievements" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold font-sans">
              <span className="font-mono text-primary text-2xl mr-2">05.</span>
              Achievements
            </h2>
            <div className="h-px bg-white/10 flex-grow" />
          </div>

          <div className="grid gap-4">
            {achievements.map((achievement, i) => (
              <div key={i} className="p-6 border border-white/5 bg-card flex items-start gap-4 hover:border-primary/30 transition-colors">
                <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center shrink-0">
                  <Zap className="w-4 h-4 text-primary" />
                </div>
                <p className="text-foreground pt-1">{achievement}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-32 relative text-center">
      <div className="container mx-auto px-6 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-primary mb-4">06. What's Next?</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
          <p className="text-muted-foreground text-lg mb-12">
            I'm currently looking for new opportunities to build intelligent systems and push the envelope in AI. Whether you have a question, an opportunity, or just want to talk tech, my inbox is always open.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a 
              href="mailto:23r11a66r2@gcet.edu.in" 
              className="bg-primary text-primary-foreground px-8 py-4 font-mono text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <Mail className="w-4 h-4" /> Say Hello
            </a>
            <div className="font-mono text-muted-foreground">
              +91-9390325696
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
