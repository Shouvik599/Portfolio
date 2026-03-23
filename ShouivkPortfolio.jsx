import { useState, useEffect, useRef } from "react";

const data = {
  name: "Shouvik Choudhury",
  title: "Agentic AI Engineer",
  subtitle: "AWS & Python Specialist",
  location: "Purba Bardhaman, West Bengal, India",
  email: "shouviksc99@gmail.com",
  phone: "+91 7908218270",
  linkedin: "https://linkedin.com/in/shouvik-choudhury",
  summary:
    "AI Systems Engineer specializing in agentic workflows and autonomous orchestration. 3+ years building intelligent data pipelines and scalable LLM-driven applications — designing self-healing systems that leverage RAG, tool-use, and multi-agent frameworks.",
  stats: [
    { value: "3+", label: "Years Exp." },
    { value: "9.70", label: "CGPA" },
    { value: "40%", label: "Latency Cut" },
    { value: "30%", label: "Throughput ↑" },
  ],
  experience: [
    {
      role: "AWS Engineer",
      company: "Cognizant",
      period: "2022 — Present",
      bullets: [
        "Architected scalable data ingestion frameworks using Python & AWS, improving processing throughput by 30%.",
        "Engineered AI-ready data pipelines on AWS Airflow optimizing low-latency retrieval for autonomous agents.",
        "Built automated data refinement pipelines reducing latency by 40% for agentic decision-making systems.",
        "Developed workflows across AWS S3, EC2 & Glue, reducing manual intervention by 25%.",
        "Orchestrated multi-agent systems bridging siloed data ecosystems for cross-platform intelligence.",
        "Developed self-healing LLM-driven pipelines to auto-detect and correct quality issues without human input.",
      ],
    },
  ],
  skills: [
    {
      icon: "🤖",
      cat: "Agentic AI & Gen AI",
      tags: ["LLM Orchestration", "LangChain", "RAG", "Vector DBs", "Autonomous Agents", "Prompt Engineering", "Transformers", "Embeddings"],
    },
    {
      icon: "☁️",
      cat: "Cloud & Big Data",
      tags: ["AWS S3/EC2/Glue", "PySpark", "Apache Airflow", "DataStage", "Starburst", "Terraform"],
    },
    {
      icon: "📊",
      cat: "Analytics & Data",
      tags: ["ETL Development", "Data Pipeline Automation", "Data Modelling", "Data Quality Assurance"],
    },
    {
      icon: "🛠️",
      cat: "Libraries & Tools",
      tags: ["Python", "Pandas", "NumPy", "TensorFlow", "Git/GitHub", "Flask"],
    },
  ],
  projects: [
    {
      num: "01",
      title: "ShantiView",
      sub: "AI Mental Health Companion",
      tech: "Python · Generative AI · Flask · NLP · Computer Vision",
      bullets: [
        "Multimodal AI platform assessing mental well-being via facial expressions, vocal tone & questionnaires.",
        "Generative AI for personalized, region-specific feedback synthesis.",
        "LLM-powered chatbot for empathetic, context-aware emotional support.",
        "AI-powered web scraping for real-time corporate health news & statistics.",
      ],
    },
  ],
  certs: [
    { name: "AI Agent Fundamentals", issuer: "Databricks" },
    { name: "AWS Solutions Architect Associate", issuer: "Amazon Web Services" },
    { name: "Google Data Analytics Certification", issuer: "Coursera" },
  ],
  education: {
    institution: "Kalinga Institute of Industrial Technology",
    degree: "B.Tech — Computer Science & Engineering",
    cgpa: "9.70",
  },
};

/* ── tiny hook: intersection observer ── */
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Reveal({ children, delay = 0, className = "" }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s ${delay}s ease, transform 0.7s ${delay}s ease`,
      }}
    >
      {children}
    </div>
  );
}

/* ── Animated gradient blob ── */
function Blob({ style }) {
  return (
    <div
      style={{
        position: "absolute",
        borderRadius: "50%",
        filter: "blur(80px)",
        pointerEvents: "none",
        ...style,
      }}
    />
  );
}

/* ── Nav ── */
function Nav({ active, setActive }) {
  const links = ["About", "Experience", "Skills", "Projects", "Contact"];
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 999,
      display: "flex", justifyContent: "space-between", alignItems: "center",
      padding: "0 48px", height: 64,
      background: "rgba(5,8,14,0.7)",
      backdropFilter: "blur(20px)",
      borderBottom: "1px solid rgba(255,255,255,0.06)",
    }}>
      <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 15, letterSpacing: "0.2em", color: "#22d3ee" }}>
        SC<span style={{ color: "rgba(255,255,255,0.2)" }}>.</span>
      </span>
      <div style={{ display: "flex", gap: 8 }}>
        {links.map(l => (
          <button key={l} onClick={() => {
            setActive(l);
            document.getElementById(l.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
          }} style={{
            background: active === l ? "rgba(34,211,238,0.1)" : "transparent",
            border: active === l ? "1px solid rgba(34,211,238,0.3)" : "1px solid transparent",
            color: active === l ? "#22d3ee" : "rgba(255,255,255,0.4)",
            padding: "6px 16px", borderRadius: 999, cursor: "pointer",
            fontSize: 11, letterSpacing: "0.1em", fontFamily: "'DM Mono', monospace",
            transition: "all 0.2s",
          }}>{l}</button>
        ))}
      </div>
    </nav>
  );
}

/* ── Hero ── */
function Hero() {
  const [tick, setTick] = useState(0);
  useEffect(() => { const id = setInterval(() => setTick(t => t + 1), 3000); return () => clearInterval(id); }, []);
  const roles = ["Agentic AI Engineer", "AWS Specialist", "LLM Systems Builder", "Data Pipeline Architect"];
  return (
    <section id="about" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "80px 48px 60px", position: "relative", overflow: "hidden" }}>
      <Blob style={{ width: 700, height: 700, background: "radial-gradient(circle, rgba(34,211,238,0.07), transparent 70%)", top: "50%", left: "60%", transform: "translate(-50%,-50%)" }} />
      <Blob style={{ width: 400, height: 400, background: "radial-gradient(circle, rgba(139,92,246,0.05), transparent 70%)", top: "10%", right: "5%" }} />

      <div style={{ maxWidth: 860, position: "relative", zIndex: 1 }}>
        {/* Status badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          border: "1px solid rgba(34,211,238,0.25)", borderRadius: 999,
          padding: "6px 16px", marginBottom: 32,
          background: "rgba(34,211,238,0.04)",
          animation: "fadeUp 0.5s ease both",
        }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#22d3ee", display: "inline-block", boxShadow: "0 0 8px #22d3ee", animation: "pulse 2s infinite" }} />
          <span style={{ fontSize: 11, color: "#22d3ee", letterSpacing: "0.15em", fontFamily: "'DM Mono', monospace" }}>OPEN TO OPPORTUNITIES</span>
        </div>

        {/* Name */}
        <h1 style={{
          fontFamily: "'Syne', sans-serif", fontWeight: 800,
          fontSize: "clamp(52px, 8vw, 100px)", lineHeight: 0.95,
          letterSpacing: "-0.03em", marginBottom: 16,
          animation: "fadeUp 0.5s 0.1s ease both",
        }}>
          <span style={{ color: "#f0f4f8" }}>Shouvik</span><br />
          <span style={{ WebkitTextStroke: "1px rgba(34,211,238,0.35)", color: "transparent" }}>Choudhury</span>
        </h1>

        {/* Animated role */}
        <div style={{ height: 40, overflow: "hidden", marginBottom: 28, animation: "fadeUp 0.5s 0.2s ease both" }}>
          <p key={tick} style={{
            fontFamily: "'Instrument Serif', serif", fontStyle: "italic",
            fontSize: "clamp(20px, 2.5vw, 28px)", color: "rgba(255,255,255,0.45)",
            animation: "slideIn 0.4s ease",
          }}>{roles[tick % roles.length]}</p>
        </div>

        {/* Summary */}
        <p style={{
          fontSize: 14, color: "rgba(255,255,255,0.4)", maxWidth: 560,
          lineHeight: 1.9, marginBottom: 48, fontFamily: "'DM Mono', monospace",
          animation: "fadeUp 0.5s 0.3s ease both",
        }}>{data.summary}</p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 72, animation: "fadeUp 0.5s 0.4s ease both" }}>
          <a href={`mailto:${data.email}`} style={{
            background: "#22d3ee", color: "#000", padding: "13px 32px",
            borderRadius: 999, fontFamily: "'Syne', sans-serif", fontWeight: 700,
            fontSize: 12, letterSpacing: "0.1em", textDecoration: "none",
            boxShadow: "0 0 32px rgba(34,211,238,0.25)", transition: "box-shadow 0.2s, transform 0.2s",
          }}
            onMouseEnter={e => { e.target.style.boxShadow = "0 0 48px rgba(34,211,238,0.5)"; e.target.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.target.style.boxShadow = "0 0 32px rgba(34,211,238,0.25)"; e.target.style.transform = "translateY(0)"; }}
          >Hire Me</a>
          <a href={data.linkedin} target="_blank" rel="noreferrer" style={{
            border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.5)",
            padding: "13px 32px", borderRadius: 999, fontFamily: "'Syne', sans-serif",
            fontSize: 12, letterSpacing: "0.1em", textDecoration: "none", transition: "all 0.2s",
          }}
            onMouseEnter={e => { e.target.style.borderColor = "rgba(34,211,238,0.4)"; e.target.style.color = "#22d3ee"; }}
            onMouseLeave={e => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; e.target.style.color = "rgba(255,255,255,0.5)"; }}
          >LinkedIn ↗</a>
        </div>

        {/* Stats bento row */}
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap", animation: "fadeUp 0.5s 0.5s ease both" }}>
          {data.stats.map(s => (
            <div key={s.label} style={{
              flex: "1 1 100px",
              border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16,
              padding: "20px 24px", background: "rgba(255,255,255,0.02)",
              backdropFilter: "blur(10px)",
            }}>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 32, color: "#22d3ee", lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", letterSpacing: "0.12em", marginTop: 6, fontFamily: "'DM Mono', monospace" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:ital,wght@0,300;0,400;1,300&family=Instrument+Serif:ital@0;1&display=swap');
        @keyframes fadeUp { from { opacity:0; transform:translateY(28px); } to { opacity:1; transform:translateY(0); } }
        @keyframes slideIn { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin:0; background:#05080e; }
        ::-webkit-scrollbar { width:6px; } ::-webkit-scrollbar-track { background:#05080e; } ::-webkit-scrollbar-thumb { background:#1a2233; border-radius:3px; }
      `}</style>
    </section>
  );
}

/* ── Experience ── */
function Experience() {
  const exp = data.experience[0];
  return (
    <section id="experience" style={{ padding: "100px 48px", maxWidth: 1100, margin: "0 auto" }}>
      <Reveal>
        <p style={{ fontSize: 10, letterSpacing: "0.25em", color: "#22d3ee", fontFamily: "'DM Mono', monospace", marginBottom: 8 }}>// PROFESSIONAL EXPERIENCE</p>
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(36px,5vw,60px)", letterSpacing: "-0.02em", color: "#f0f4f8", marginBottom: 48 }}>
          Where I've<br /><span style={{ color: "rgba(255,255,255,0.2)" }}>made impact.</span>
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <div style={{
          borderRadius: 20, overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.07)",
          background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(34,211,238,0.02) 100%)",
          backdropFilter: "blur(10px)",
        }}>
          {/* card header */}
          <div style={{
            padding: "32px 40px", borderBottom: "1px solid rgba(255,255,255,0.05)",
            display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16,
            background: "rgba(34,211,238,0.03)",
          }}>
            <div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 22, color: "#f0f4f8" }}>{exp.role}</div>
              <div style={{ fontSize: 13, color: "#22d3ee", marginTop: 4, fontFamily: "'DM Mono', monospace" }}>@ {exp.company}</div>
            </div>
            <div style={{
              border: "1px solid rgba(34,211,238,0.2)", padding: "8px 18px",
              borderRadius: 999, fontSize: 11, color: "#22d3ee",
              fontFamily: "'DM Mono', monospace", letterSpacing: "0.1em",
              background: "rgba(34,211,238,0.05)",
            }}>{exp.period}</div>
          </div>

          {/* bullets grid */}
          <div style={{ padding: "32px 40px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {exp.bullets.map((b, i) => (
              <div key={i} style={{
                display: "flex", gap: 14, padding: "16px 20px",
                border: "1px solid rgba(255,255,255,0.04)", borderRadius: 12,
                background: "rgba(255,255,255,0.01)", transition: "border-color 0.2s",
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(34,211,238,0.2)"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.04)"}
              >
                <span style={{ color: "#22d3ee", marginTop: 2, fontSize: 12, flexShrink: 0 }}>▸</span>
                <span style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.75, fontFamily: "'DM Mono', monospace" }}>{b}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ── Skills ── */
function Skills() {
  return (
    <section id="skills" style={{ padding: "100px 48px", maxWidth: 1100, margin: "0 auto" }}>
      <Reveal>
        <p style={{ fontSize: 10, letterSpacing: "0.25em", color: "#22d3ee", fontFamily: "'DM Mono', monospace", marginBottom: 8 }}>// CORE COMPETENCIES</p>
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(36px,5vw,60px)", letterSpacing: "-0.02em", color: "#f0f4f8", marginBottom: 48 }}>
          Tech I work<br /><span style={{ color: "rgba(255,255,255,0.2)" }}>with every day.</span>
        </h2>
      </Reveal>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
        {data.skills.map((s, i) => (
          <Reveal key={s.cat} delay={i * 0.08}>
            <div style={{
              border: "1px solid rgba(255,255,255,0.07)", borderRadius: 20,
              padding: "28px", height: "100%",
              background: "rgba(255,255,255,0.02)", transition: "border-color 0.3s, transform 0.3s",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(34,211,238,0.3)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <div style={{ fontSize: 28, marginBottom: 14 }}>{s.icon}</div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 14, color: "#f0f4f8", marginBottom: 16, letterSpacing: "0.03em" }}>{s.cat}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {s.tags.map(t => (
                  <span key={t} style={{
                    fontSize: 11, padding: "4px 12px", borderRadius: 999,
                    background: "rgba(34,211,238,0.06)", border: "1px solid rgba(34,211,238,0.15)",
                    color: "rgba(34,211,238,0.8)", fontFamily: "'DM Mono', monospace", letterSpacing: "0.04em",
                  }}>{t}</span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ── Projects ── */
function Projects() {
  const p = data.projects[0];
  return (
    <section id="projects" style={{ padding: "100px 48px", maxWidth: 1100, margin: "0 auto" }}>
      <Reveal>
        <p style={{ fontSize: 10, letterSpacing: "0.25em", color: "#22d3ee", fontFamily: "'DM Mono', monospace", marginBottom: 8 }}>// PROJECTS</p>
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(36px,5vw,60px)", letterSpacing: "-0.02em", color: "#f0f4f8", marginBottom: 48 }}>
          Things I've<br /><span style={{ color: "rgba(255,255,255,0.2)" }}>built.</span>
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <div style={{
          border: "1px solid rgba(255,255,255,0.07)", borderRadius: 24,
          overflow: "hidden", position: "relative",
          background: "linear-gradient(135deg, rgba(255,255,255,0.02), rgba(139,92,246,0.04))",
          transition: "border-color 0.3s",
        }}
          onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(34,211,238,0.25)"}
          onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"}
        >
          {/* giant number watermark */}
          <div style={{ position: "absolute", top: 16, right: 32, fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 120, color: "rgba(34,211,238,0.04)", lineHeight: 1, pointerEvents: "none", userSelect: "none" }}>{p.num}</div>

          <div style={{ padding: "48px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 16, marginBottom: 24 }}>
              <div>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 28, color: "#f0f4f8", marginBottom: 4 }}>{p.title}</h3>
                <div style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontSize: 18, color: "rgba(255,255,255,0.35)", marginBottom: 12 }}>{p.sub}</div>
                <div style={{ fontSize: 11, color: "#22d3ee", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em" }}>{p.tech}</div>
              </div>
              <div style={{
                border: "1px solid rgba(139,92,246,0.3)", padding: "8px 18px",
                borderRadius: 999, fontSize: 11, color: "rgba(139,92,246,0.8)",
                fontFamily: "'DM Mono', monospace", background: "rgba(139,92,246,0.06)",
              }}>AI / NLP / CV</div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14, marginTop: 32 }}>
              {p.bullets.map((b, i) => (
                <div key={i} style={{
                  padding: "18px 20px", borderRadius: 14,
                  border: "1px solid rgba(255,255,255,0.05)",
                  background: "rgba(255,255,255,0.01)",
                  display: "flex", gap: 12, alignItems: "flex-start",
                }}>
                  <span style={{ color: "#22d3ee", fontSize: 12, marginTop: 2, flexShrink: 0 }}>✦</span>
                  <span style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: 1.75, fontFamily: "'DM Mono', monospace" }}>{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      {/* Certifications inside projects section as bento */}
      <Reveal delay={0.15}>
        <div style={{ marginTop: 24 }}>
          <p style={{ fontSize: 10, letterSpacing: "0.25em", color: "#22d3ee", fontFamily: "'DM Mono', monospace", marginBottom: 16, marginTop: 48 }}>// CERTIFICATIONS</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {data.certs.map(c => (
              <div key={c.name} style={{
                display: "flex", alignItems: "center", gap: 14,
                border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14,
                padding: "16px 24px", background: "rgba(255,255,255,0.02)",
                flex: "1 1 240px", transition: "border-color 0.2s",
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(34,211,238,0.25)"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"}
              >
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22d3ee", boxShadow: "0 0 10px #22d3ee", flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: 13, color: "#f0f4f8", fontFamily: "'DM Mono', monospace" }}>{c.name}</div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", marginTop: 2 }}>{c.issuer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ── Contact ── */
function Contact() {
  const items = [
    { icon: "✉", label: "Email", value: data.email, href: `mailto:${data.email}` },
    { icon: "📞", label: "Phone", value: data.phone, href: `tel:${data.phone}` },
    { icon: "🔗", label: "LinkedIn", value: "Shouvik Choudhury", href: data.linkedin },
    { icon: "📍", label: "Location", value: "Purba Bardhaman, India", href: null },
  ];

  return (
    <section id="contact" style={{ padding: "100px 48px", maxWidth: 1100, margin: "0 auto" }}>
      {/* Education bento */}
      <Reveal>
        <div style={{
          border: "1px solid rgba(255,255,255,0.07)", borderRadius: 20,
          padding: "36px 40px", background: "rgba(255,255,255,0.02)",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: 20, marginBottom: 24,
        }}>
          <div>
            <p style={{ fontSize: 10, letterSpacing: "0.2em", color: "#22d3ee", fontFamily: "'DM Mono', monospace", marginBottom: 8 }}>// EDUCATION</p>
            <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 18, color: "#f0f4f8" }}>{data.education.institution}</div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginTop: 4, fontFamily: "'DM Mono', monospace" }}>{data.education.degree}</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 48, color: "#22d3ee", lineHeight: 1 }}>{data.education.cgpa}</div>
            <div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", letterSpacing: "0.15em", fontFamily: "'DM Mono', monospace" }}>CGPA</div>
          </div>
        </div>
      </Reveal>

      {/* Contact section */}
      <Reveal delay={0.1}>
        <p style={{ fontSize: 10, letterSpacing: "0.25em", color: "#22d3ee", fontFamily: "'DM Mono', monospace", marginBottom: 8 }}>// CONTACT</p>
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(36px,5vw,60px)", letterSpacing: "-0.02em", color: "#f0f4f8", marginBottom: 48 }}>
          Let's build<br /><span style={{ color: "rgba(255,255,255,0.2)" }}>something great.</span>
        </h2>
      </Reveal>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14 }}>
        {items.map((item, i) => {
          const inner = (
            <div style={{
              border: "1px solid rgba(255,255,255,0.07)", borderRadius: 18,
              padding: "24px 28px", background: "rgba(255,255,255,0.02)",
              display: "flex", flexDirection: "column", gap: 8,
              transition: "border-color 0.2s, transform 0.2s",
              textDecoration: "none", cursor: item.href ? "pointer" : "default",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(34,211,238,0.3)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <div style={{ fontSize: 22 }}>{item.icon}</div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", letterSpacing: "0.15em", fontFamily: "'DM Mono', monospace" }}>{item.label}</div>
              <div style={{ fontSize: 13, color: "#f0f4f8", fontFamily: "'DM Mono', monospace" }}>{item.value}</div>
            </div>
          );
          return (
            <Reveal key={item.label} delay={i * 0.07}>
              {item.href ? <a href={item.href} target={item.href.startsWith("http") ? "_blank" : "_self"} rel="noreferrer" style={{ textDecoration: "none" }}>{inner}</a> : inner}
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

/* ── Footer ── */
function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid rgba(255,255,255,0.06)",
      padding: "24px 48px", display: "flex", justifyContent: "space-between", alignItems: "center",
      flexWrap: "wrap", gap: 12,
      fontSize: 11, color: "rgba(255,255,255,0.2)", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em",
    }}>
      <span>© 2026 Shouvik Choudhury</span>
      <span>Built with React · Agentic AI Engineer</span>
    </footer>
  );
}

/* ── Divider ── */
function Divider() {
  return <div style={{ width: "calc(100% - 96px)", margin: "0 auto", height: 1, background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }} />;
}

/* ── ROOT ── */
export default function Portfolio() {
  const [active, setActive] = useState("About");

  useEffect(() => {
    const sections = ["about", "experience", "skills", "projects", "contact"];
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) setActive(e.target.id.charAt(0).toUpperCase() + e.target.id.slice(1));
      });
    }, { threshold: 0.4 });
    sections.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <div style={{ background: "#05080e", minHeight: "100vh", color: "#f0f4f8" }}>
      <Nav active={active} setActive={setActive} />
      <Hero />
      <Divider />
      <Experience />
      <Divider />
      <Skills />
      <Divider />
      <Projects />
      <Divider />
      <Contact />
      <Footer />
    </div>
  );
}
