//import React, { useEffect, useState } from "react";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactSection from "./ContactSection"; // adjust path

/**
 * Single-file component: Hero + About (Studio Room Theme)
 * Tech section expanded with your full categories & items
 */
 
// trying 

/**
 * ProjectsSection — Book Flip + Inline Cards (Pop on Flip)
 * -------------------------------------------------------
 * - Flip through projects like a book (cover → pages → final → grid)
 * - On each ➜ / right-swipe, the current page DROPS into the grid below
 * - Arranged grid matches the screenshot look: dark rounded cards, soft glow, bold titles, gradient tech chips
 * - Touch-friendly swiping with guarded vertical scroll
 */

// --------- Reusable gradient helper ---------
const grad = (tag) => {
  const g = {
  React: "linear-gradient(135deg,#f7ba2b,#ea5358)",
  "Framer Motion": "linear-gradient(135deg,#f59e0b,#ef4444)",
  Node: "linear-gradient(135deg,#22d3ee,#60a5fa)",
  S3: "linear-gradient(135deg,#10b981,#3b82f6)",
  Flutter: "linear-gradient(135deg,#00c4ff,#6a00f4)",
  Firebase: "linear-gradient(135deg,#f59e0b,#f43f5e)",
  "Next.js": "linear-gradient(135deg,#0ea5e9,#6366f1)",
  PostgreSQL: "linear-gradient(135deg,#34d399,#2563eb)",
  Python: "linear-gradient(135deg,#387ef5,#34d399)",
  Streamlit: "linear-gradient(135deg,#8b5cf6,#ec4899)",
  Java: "linear-gradient(135deg,#ea5358,#f59e0b)",
  "Spring Boot": "linear-gradient(135deg,#22d3ee,#60a5fa)",
  SQLite: "linear-gradient(135deg,#64748b,#22c55e)",
  Gemini: "linear-gradient(135deg,#f59e0b,#ef4444)",
  "FastAPI": "linear-gradient(135deg,#34d399,#0ea5e9)",

  // ✅ Newly added ones
  JavaScript: "linear-gradient(135deg,#facc15,#f97316)",    // yellow-orange
  Dart: "linear-gradient(135deg,#00c4ff,#0072ff)",          // cyan-blue
  Kotlin: "linear-gradient(135deg,#ec4899,#6366f1)",        // pink-purple
  HTML: "linear-gradient(135deg,#e34c26,#f59e0b)",          // orange-red
  CSS: "linear-gradient(135deg,#2563eb,#38bdf8)",           // blue-cyan
  Tailwind: "linear-gradient(135deg,#06b6d4,#3b82f6)",      // cyan-blue
  GSAP: "linear-gradient(135deg,#22c55e,#16a34a)",          // green shades
  Jinja2: "linear-gradient(135deg,#facc15,#ef4444)",        // yellow-red
  MySQL: "linear-gradient(135deg,#2563eb,#0ea5e9)",         // blue tones
  "NoSQL Database": "linear-gradient(135deg,#9333ea,#db2777)", // purple-pink
  "Machine Learning": "linear-gradient(135deg,#10b981,#3b82f6)", // teal-blue
  "Scikit-learn": "linear-gradient(135deg,#f59e0b,#facc15)", // orange-yellow
  Pandas: "linear-gradient(135deg,#2563eb,#22d3ee)",        // blue-teal
  Plotly: "linear-gradient(135deg,#9333ea,#3b82f6)",        // purple-blue
  "Gemini Flash API": "linear-gradient(135deg,#f43f5e,#f59e0b)", // red-orange
  "Gemini API": "linear-gradient(135deg,#f97316,#ef4444)",  // orange-red
  Docker: "linear-gradient(135deg,#0ea5e9,#2563eb)",        // cyan-blue
  Render: "linear-gradient(135deg,#9333ea,#f43f5e)",        // purple-red
  Blender: "linear-gradient(135deg,#f97316,#f59e0b)",       // orange shades
  Playwright: "linear-gradient(135deg,#16a34a,#22c55e)",    // green shades
  "Web Scraping": "linear-gradient(135deg,#0ea5e9,#22d3ee)",// light blue
  BeautifulSoup: "linear-gradient(135deg,#22c55e,#84cc16)", // green-lime
  "MD-5 Hashing": "linear-gradient(135deg,#64748b,#94a3b8)", // gray metallic
  default: "linear-gradient(135deg,#64748b,#94a3b8)",
};

  return g[tag] || g.default;
};

 function ProjectsSection() {
  const items = useMemo(
    () => [
      { title: "Dropr", desc: "Dropr – Peer-to-peer campus delivery app where students help each other with notes, packages, and small tasks. Features include live order tracking, chat, role-based workflows (Needr & Dropr), and a dual confirmation system for trust.", tags: ["Flutter", "Dart","Kotlin", "NoSql Database"], link: "https://github.com/AryanSingh2029/Dropr" },
      { title: "Hustle", desc: "Hustle – A productivity app that lets you plan your day hour-by-hour or with simple daily tasks. Reflect and review your progress in both views, track habits with a 21-day streak system, and unlock AI insights to spot patterns and improve focus.", tags: ["React", "PostreSql","Docker"], link: "https://github.com/AryanSingh2029/hustlee" },
      { title: "Blog Nation", desc: "Personal blogging platform where users can write, edit, and share posts. Includes likes, comments, following authors, search, and a personal dashboard with followers and activity stats.", tags: ["Spring Boot", "MySQl","Render","Html","CSS","JS"], link: "https://github.com/AryanSingh2029/Blognation" },
      { title: "AI Interview Prep", desc: "Personalized AI-powered platform to prepare for technical interviews. Generates role-specific roadmaps, smart weekly/daily study plans, inspirational professional profiles, and curated certifications — all powered by Gemini.", tags: ["Python", "Streamlit", "Jinja2","Gemini Flash Api"], link: "https://github.com/AryanSingh2029/ai-interview-preparation" },
      { title: "MY Portfolio", desc: "A modern, immersive one-page portfolio with scroll-triggered animations, book-style project showcase, and clean responsive UI. Built to reflect creativity, motion, and engineering craft.", tags: ["React","Framer Motion","GSAP","Tailwind","Blender","Docker"], link: "#" },
      { title: "T-Shirt Price Aggregator", desc: "A Streamlit app that scrapes real-time product data from BluOrng, Bewakoof, and Souled Store using Playwright. Users can search for T-shirts and view product name, brand, price, image, and link in a clean 3-column grid with price insights.", tags: ["Python", "Streamlit","Playwright","Web Scraping"], link: "https://github.com/AryanSingh2029/t-shirt-scraping" },
      { title: "House Sense", desc: "An ML-powered real estate investment analytics dashboard for Indian properties. Features include city-wise price heatmaps, property price prediction, ROI estimation, smart property recommendations, and a luxury vs budget classifier — all built with real housing data.", tags: ["Python","Streamlit" ,"Scikit-learn","Plotly","Pandas","Machine Learning"], link: "https://github.com/AryanSingh2029/Housesense" },
      { title: "Google Pay Finance Tracker", desc: "An AI-powered finance tracking app that analyzes Google Pay transactions from Takeout exports. Provides daily, weekly, and monthly views, smart filtering, and Gemini AI–generated spending insights,Auto MD5 Hashing of uploaded files for smart caching — all in a clean Streamlit dashboard.", tags: ["Python","Streamlit","Pandas","Gemini Api","BeautifulSoup","MD-5 Hashing"], link: "https://github.com/AryanSingh2029/Google-Pay-Finance-Tracker" },
      { title: "BlogApi", desc: "This project taught me A lot of system design how to think and build scalable project.A full-stack blogging platform with a Spring Boot backend, MySQL database, and Streamlit frontend. Users can view, create, edit, and delete posts — all connected to a persistent MySQL instance and deployed seamlessly on Render & Streamlit Cloud for local later upgraded it to live in my other project blognation.", tags: ["Java","Spring Boot","MySQL","Streamlit" ,"Render"], link: "https://github.com/AryanSingh2029/blogapi" },
    ],
    []
  );

  // Modes: 'cover' | 'page' | 'grid'. Index: 0..items.length (final msg)
  const [mode, setMode] = useState("cover");
  const [index, setIndex] = useState(0);
  const [poppedCount, setPoppedCount] = useState(0);

  const bookRef = useRef(null);
  const gridRef = useRef(null);
  const startRef = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    if (mode === "page" && bookRef.current) {
      try { bookRef.current.scrollIntoView({ behavior: "smooth", block: "center" }); } catch {}
    }
    if (mode === "grid" && gridRef.current) {
      const t = setTimeout(() => {
        try { gridRef.current.scrollIntoView({ behavior: "smooth", block: "start" }); } catch {}
      }, 80);
      return () => clearTimeout(t);
    }
  }, [mode]);

  const next = () => {
    if (mode === "cover") { setMode("page"); setIndex(0); return; }
    if (mode === "page") {
      if (index < items.length) {
        if (poppedCount <= index) setPoppedCount(index + 1); // drop current into grid
        if (index < items.length - 1) {
          setIndex(index + 1); // go to next project page
        } else {
          // last project → show final message page (no auto switch to grid)
          setIndex(items.length);
        }
        return;
      }
      // at final page: do nothing on next (arrow disabled in UI)
    }
  };

  const prev = () => {
    if (mode === "grid") { setMode("page"); setIndex(items.length); return; }
    if (mode === "page") {
      if (index === items.length) { setIndex(Math.max(0, items.length - 1)); return; }
      if (index > 0) { if (poppedCount > index) setPoppedCount(index); setIndex(index - 1); }
      else { setPoppedCount(0); setMode("cover"); }
    }
  };

  const flipVariants = {
    initial: { rotateY: -96, opacity: 0, filter: "blur(1px)" },
    animate: { rotateY: 0, opacity: 1, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.22,1,0.36,1] } },
    exit: { rotateY: 96, opacity: 0, filter: "blur(1px)", transition: { duration: 0.72, ease: [0.22,1,0.36,1] } },
  };

  // swipe handlers (horizontal intent)
  const onPointerDown = (e) => {
    const p = e.touches ? e.touches[0] : e;
    startRef.current = { x: p.clientX, y: p.clientY, active: true };
  };
  const onPointerMove = (e) => {
    if (!startRef.current.active) return;
    const p = e.touches ? e.touches[0] : e;
    const dx = p.clientX - startRef.current.x;
    const dy = p.clientY - startRef.current.y;
    if (Math.abs(dx) > 14 && Math.abs(dx) > Math.abs(dy) * 1.3) e.preventDefault();
  };
  const onPointerUp = (e) => {
    if (!startRef.current.active) return;
    const p = e.changedTouches ? e.changedTouches[0] : e;
    const dx = p.clientX - startRef.current.x;
    const dy = p.clientY - startRef.current.y;
    startRef.current.active = false;
    if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy) * 1.1) return;
    if (dx < 0) next(); else prev();
  };

  return (
    <section id="projects" className="proj-section" aria-label="Projects">
      <div className="bg" aria-hidden />
      <div className="grain" aria-hidden />

      <div className="p-wrap">
        <header className="head">
          <div className="pill"><span className="bead" /> Projects</div>
          <h2>Welcome to My Projects</h2>
          <p className="sub">Please Flip the book to see my projects </p>
        </header>

        {/* BOOK */}
        <div className="book" ref={bookRef}>
          <div className="controls">
            <button className="navbtn" onClick={prev} disabled={mode === "cover"}>◀</button>
            <div className="hint">
              {mode === "cover" && "Welcome, swipe right to see my projects"}
              {mode === "page" && (index < items.length ? `Page ${index+1} of ${items.length} · Arranged: ${poppedCount}` : "Working on new projects…")}
              {mode === "grid" && "Grid view — click ◀ to pull the last one back"}
            </div>
            <button className="navbtn" onClick={next} disabled={mode === "page" && index === items.length}>➜</button>
          </div>

          <div
            className="viewport"
            onMouseDown={onPointerDown}
            onMouseMove={onPointerMove}
            onMouseUp={onPointerUp}
            onTouchStart={onPointerDown}
            onTouchMove={onPointerMove}
            onTouchEnd={onPointerUp}
          >
            <div className="persp">
              <AnimatePresence mode="wait" initial={false}>
                {mode === "cover" && (
                  <motion.div key="cover" className="page cover" variants={flipVariants} initial="initial" animate="animate" exit="exit">
                    <div className="dots"><span/><span/><span/></div>
                    <h3>Welcome</h3>
                    <p>Swipe right to see my projects.</p>
                  </motion.div>
                )}

                {mode === "page" && index < items.length && (
                  <motion.a
                    key={`p-${index}`}
                    href={items[index].link}
                    className="page project"
                    variants={flipVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    style={{ ["--background"]: grad(items[index].tags?.[0]) }}
                  >
                    <div className="glow" />
                    <div className="card-info">
                      <p className="title">{items[index].title}</p>
                      {items[index].desc && <p className="desc">{items[index].desc}</p>}
                      {items[index].tags?.length > 0 && (
                        <div className="chips">{items[index].tags.map((t) => (<span key={t} className="chip">{t}</span>))}</div>
                      )}
                    </div>
                  </motion.a>
                )}

                {mode === "page" && index === items.length && (
                  <motion.div key="final" className="page cover final" variants={flipVariants} initial="initial" animate="animate" exit="exit">
                    <div className="dots"><span/><span/><span/></div>
                    <h3>Working on new projects…</h3>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* GRID (arranged cards styled like screenshot) */}
        <div className="grid-wrap" ref={gridRef}>
          <AnimatePresence initial={false}>
            <motion.div className="grid" initial={false} animate={{ opacity: poppedCount > 0 ? 1 : 0.6 }} transition={{ duration: 0.25 }}>
              {items.slice(0, poppedCount).map((it) => (
                <motion.a
                  key={it.title}
                  href={it.link}
                  className="p-card"
                  whileHover={{ y: -3 }}
                  initial={{ opacity: 0, y: -14, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 220, damping: 22, mass: 0.6 }}
                  style={{ ["--g"]: grad(it.tags?.[0]) }}
                >
                  <span className="p-blob" />
                  <div className="p-inner">
                    <h3 className="p-title">{it.title}</h3>
                    {it.desc && <p className="p-desc">{it.desc}</p>}
                    {it.tags?.length > 0 && (
                      <div className="p-chips">
                        {it.tags.map((t) => (
                          <span key={t} className="chip" style={{ background: grad(t) }}>{t}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </AnimatePresence>
          <div className="grid-hint">{poppedCount === 0 ? "Click on the Project to see it on Github" : poppedCount < items.length ? " Click on the Project to see it on Github " : "All Projects are displayed.Click on the Project to see it on Github"}</div>
        </div>
      </div>

      <style>{`
        :root{ --bg:#111; --txt:#f3eeee; --muted:#d8cfcd; --stroke:rgba(255,255,255,0.1); --rose:#c73b52; --ember:#f08c3e; }
        .proj-section{position:relative; isolation:isolate; overflow:hidden; padding:52px 0 88px; background: var(--bg);} 
        .bg{position:absolute; inset:-35% -25% -25% -25%; background:
          radial-gradient(1200px 700px at 18% 8%, rgba(240,140,62,0.12), transparent 60%),
          radial-gradient(900px 600px at 82% 42%, rgba(199,59,82,0.1), transparent 60%);
          animation: pan 32s linear infinite}
        @keyframes pan{to{transform:translate3d(-2%,0,0)}}
        .grain{position:absolute; inset:0; opacity:.06; mix-blend-mode:overlay; background-image:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3"/></filter><rect width="100%" height="100%" filter="url(%23n)" opacity="0.5"/></svg>')}

        .p-wrap{
  position:relative;
  z-index:1;
  max-width:min(1680px,95vw);
  margin:0 auto;
  padding:0 clamp(24px,5vw,64px);
}
        .head .pill{display:inline-flex; align-items:center; gap:10px; padding:8px 12px; border-radius:999px; border:1px solid var(--stroke); background:linear-gradient(90deg, rgba(199,59,82,0.22), rgba(240,140,62,0.22)); font-size:12.5px; margin-bottom:14px}
        .head .bead{width:8px; height:8px; border-radius:999px; background:conic-gradient(from 0deg, var(--rose), var(--ember)); animation:spin 3s linear infinite}
        @keyframes spin{to{transform:rotate(1turn)}}
        .head h2{font-size:clamp(28px,4.8vw,42px); margin:6px 0 8px}
        .head .sub{color:var(--muted); max-width:88ch; margin:0 0 16px}

        /* BOOK */
        .book{position:relative; margin-top:6px}
        .controls{display:flex; align-items:center; justify-content:center; gap:10px; margin-bottom:10px}
        .navbtn{height:36px; min-width:44px; padding:0 10px; border-radius:10px; border:1px solid var(--stroke); background:rgba(255,255,255,.05); color:var(--txt); font-weight:700}
        .navbtn[disabled]{opacity:.4; pointer-events:none}
        .hint{color:var(--muted); font-size:13px}
        .viewport{position:relative; display:grid; place-items:center; touch-action:pan-y}
        .persp{perspective:1600px; perspective-origin:50% 40%; width:min(920px, 94vw)}
        .page{position:relative; width:100%; height:clamp(300px, 40vw, 420px); padding:10px; border-radius:22px; overflow:visible; box-shadow:0 50px 100px rgba(0,0,0,.36)}
        .page.cover{height:clamp(170px, 26vw, 240px)}
        .cover{background:rgba(255,255,255,.04); border:1px solid var(--stroke)}
        .cover .dots{position:absolute; top:10px; left:10px; display:flex; gap:6px}
        .cover .dots span{width:10px; height:10px; border-radius:50%; box-shadow:-5px 5px 5px rgba(0,0,0,.28)}
        .cover .dots span:nth-child(1){background:#ff605c}
        .cover .dots span:nth-child(2){background:#ffbd44}
        .cover .dots span:nth-child(3){background:#00ca4e}
        .cover h3{margin:16px 16px 6px; font-size:18px}
        .cover p{margin:0 16px; color:var(--muted); font-size:14px}
        .project{ --background: linear-gradient(to left, #f7ba2b 0%, #ea5358 100%); background: var(--background); backface-visibility:hidden; transform-style:preserve-3d }
        .project .glow{ position:absolute; content:""; top:34px; left:0; right:0; z-index:-1; height:100%; width:100%; transform:scale(.86); filter:blur(28px); background:var(--background); opacity:.9; transition:opacity .5s }
        .project:hover .glow{ opacity:0 }
        .card-info{ --color:#181818; background:var(--color); color:var(--txt); display:flex; flex-direction:column; justify-content:flex-end; align-items:flex-start; width:100%; height:100%; border-radius:14px; padding:20px }
        .title{ font-weight:900; letter-spacing:.05em; font-size:clamp(18px, 1.6vw, 22px); line-height:1.15 }
        .desc{ margin-top:10px; font-size:15.5px; opacity:.95; line-height:1.55 }
        .chips{ display:flex; flex-wrap:wrap; gap:10px; margin-top:14px }
        .chip{ font-size:12.5px; padding:7px 11px; border-radius:999px; border:1px solid rgba(255,255,255,.12); background:rgba(255,255,255,.06); color:#fff }

        /* GRID */
.grid-wrap{ margin-top:20px }

.grid{
  width:100%;
  display:grid;
  /* Force multiple columns instead of auto-fill guessing */
  grid-template-columns: repeat(3, minmax(280px, 1fr));
  gap:24px;
  align-items:start;
}

.grid-hint{
  margin-top:10px;
  color:var(--muted);
  font-size:12.5px
}

/* Inline p-card styles (screenshot look) */
.p-card{
  position:relative;
  display:block;
  color:inherit;
  text-decoration:none;
  border-radius:18px;
  background:#171717;
  border:1px solid rgba(255,255,255,.08);
  overflow:hidden;
  box-shadow:0 20px 40px rgba(0,0,0,.35), inset 0 0 0 1px rgba(255,255,255,.02)
}
.p-blob{
  position:absolute;
  inset:-10% -10% auto -10%;
  height:140%;
  filter:blur(50px);
  opacity:.25;
  z-index:0;
  background:var(--g, linear-gradient(135deg,#64748b,#94a3b8))
}
.p-inner{ position:relative; z-index:1; padding:18px; }
.p-title{ margin:2px 0 8px; font-size:1.15rem; font-weight:800; letter-spacing:.2px; color:#fff }
.p-desc{ color:var(--muted); font-size:.95rem; line-height:1.55 }
.p-chips{ display:flex; flex-wrap:wrap; gap:8px; margin-top:12px }
.p-chips .chip{
  font-size:11px; font-weight:700; padding:6px 10px; border-radius:999px;
  color:#fff; text-shadow:0 1px 2px rgba(0,0,0,.35); border:0
}

/* 2 columns on medium screens */
@media (max-width: 1100px){
  .grid{ grid-template-columns: repeat(2, minmax(260px, 1fr)); }
}

/* 1 column on small screens */
@media (max-width: 680px){
  .grid{ grid-template-columns: 1fr; }
}


      `}</style>
    </section>
  );
}


export default function HeroStudio({ imageSrc = "/myroom.jpg" }) {
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const t0 = performance.now();
    const step = (t) => {
      const p = Math.min(100, Math.floor(((t - t0) / 1200) * 100));
      setProgress(p);
      if (p < 100) raf = requestAnimationFrame(step);
      else setTimeout(() => setLoaded(true), 200);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div>
      {/* ================= HERO ================= */}
      <div className="studio-hero v2" aria-label="Hero">
        <div className="bg" />
        <div className="bg-right" aria-hidden />
        <div className="vignette" aria-hidden />
        <div className="grain" aria-hidden />

        <header className="nav">
          <div className="brand">Aryan<span className="dot">.</span></div>
          <nav className="links">
            <a href="#about">About me and My Skills</a>
           {/* <a href="#skills">Skills</a> */}
            <a href="#projects" aria-disabled>Projects</a>
            <a href="#contact" aria-disabled>Contact</a>
          </nav>
        </header>

        <main className="wrap">
          <motion.section
            className="left"
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <div className="pill"><span className="bead" /> Final‑year CS · SDE</div>
            <h1 className="title">
              Hi, I’m <span className="grad">Aryan Singh</span>
            </h1>
            <p className="lede">
              Turning ideas into reality by building scalable, impactful solutions.
            </p>
            <div className="cta">
              <a className="btn primary" href="#projects">View Projects</a>
              <a className="btn ghost" href="#contact">Get in touch</a>
            </div>
            <ul className="chips">
              <li>Full-Stack Developer</li>
              <li>AI/ML Enthusiast</li>
              <li>Cloud & DevOps Curious</li>
             { /*<li>Problem Solver</li> */}
            </ul>
          </motion.section>

          <motion.aside
            className="right"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.18 }}
          >
            <motion.div
              className="frame"
              initial={{ y: 6 }}
              animate={{ y: [6, -2, 0], rotate: [0, 0.2, 0] }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            >
              <div className="frame-inner">
                <img src={imageSrc} alt="Aryan's studio room" onError={(e) => (e.currentTarget.style.display = 'none')} />
              </div>
            </motion.div>
            <div className="floor" aria-hidden />
          </motion.aside>
        </main>

        <AnimatePresence>
          {!loaded && (
            <motion.div key="pre" className="pre" initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.45 }}>
              <div className="pre-card">
                <div className="ring"><div className="dot" /></div>
                <div className="brand-pre">Loading</div>
                <div className="meter"><div className="fill" style={{ width: `${progress}%` }} /></div>
                <div className="pct">{progress}%</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ================= ABOUT ================= */}
      <section id="about" className="about-studio" aria-label="About Aryan">
        <div className="about-bg" aria-hidden />
        <div className="about-grain" aria-hidden />

        <div className="about-wrap">
          <motion.header
            className="about-head"
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="pill"><span className="bead" /> About</div>
            <h2>“I can accept failure, but I can’t accept not trying.” <span className="by">— Michael Jordan</span></h2>
            <p className="sub"></p>
          </motion.header>

          <div className="about-grid">
            <motion.div
              className="about-left"
              initial={{ y: 18, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
            >
              <div className="card bio">
                <h3>Who am I?</h3>
                <p>
                  Hi, I’m <b>Aryan Singh</b>. I like to build things and solve problems—either mine or someone else’s. That drive keeps me sitting long hours in front of my laptop, debugging, solving, and making things work. I love that process; it gives me energy and happiness. Beyond coding My hobbies are-gym,studying quant strategies & financial systems, football, and basketball.
                </p>
              </div>

              <div className="card highlights">
                <h3>Highlights</h3>
                <div className="row">
                  <div className="kpi"><b>10+</b><span>Projects</span></div>
                  <div className="kpi"><b>500+</b><span>Coding questions</span></div>
                  <div className="kpi"><b>∞</b><span>Curiosity</span></div>
                </div>
              </div>
              <div className="links-grid">
                  <a className="extcard" href="https://github.com/AryanSingh2029?tab=repositories" target="_blank" rel="noreferrer">
                   <div className="lights"><span className="red"/><span className="yellow"/><span className="green"/></div>
                    <h4>GitHub</h4>
                       <p>Checkout all my projects .</p>
                        </a>
                        <a className="extcard" href="https://leetcode.com/u/AryanSingh729/" target="_blank" rel="noreferrer">
                         <div className="lights"><span className="red"/><span className="yellow"/><span className="green"/></div>
                        <h4>LeetCode</h4>
                         <p>DSA grind: problems solved, streaks, and badges.Current Platform that I use </p>
                       </a>
                       <a className="extcard" href="https://www.geeksforgeeks.org/user/aryanif4j/" target="_blank" rel="noreferrer">
                         <div className="lights"><span className="red"/><span className="yellow"/><span className="green"/></div>
                         <h4>GFG Profile</h4>
                         <p>My starting point in coding — see my account & solved problems</p>
                       </a>
               </div>
               {/* CENTERED SOCIALS CARD */}
<div className="socials-center">
  <div className="socialcard">
    <div className="sc-dots">
      <span className="sc-dot d1" />
      <span className="sc-dot d2" />
      <span className="sc-dot d3" />
    </div>

    <div className="sc-bg" />
    <div className="sc-logo">Socials</div>

    {/* LinkedIn */}
    <a className="sc-box sc-box1" href="https://www.linkedin.com/in/aryan-singh-18b464288/" target="_blank" rel="noreferrer">
      <span className="sc-icon">
        <svg viewBox="0 0 448 512" className="sc-svg">
          <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 53.79-54.3c29.7 0 53.79 24.2 53.79 54.3a53.79 53.79 0 0 1-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
        </svg>
      </span>
    </a>

    {/* Email */}
    <a className="sc-box sc-box2" href="mailto:aryanma20@gmail.com">
      <span className="sc-icon">
        <svg viewBox="0 0 24 24" className="sc-svg">
          <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>
        </svg>
      </span>
    </a>

    {/* X / Twitter */}
    <a className="sc-box sc-box3" href="https://x.com/your-handle" target="_blank" rel="noreferrer">
      <span className="sc-icon">
        <svg viewBox="0 0 512 512" className="sc-svg">
          <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
        </svg>
      </span>
    </a>

    {/* decorative */}
    <div className="sc-box sc-box4" />
  </div>
</div>


            </motion.div>

            <motion.aside
              className="about-right"
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              <div className="card facts">
                <div className="row">
                  <div>
                    <div className="label">Role</div>
                    <div className="value">SDE</div>
                  </div>
                  <div>
                    <div className="label">Focus</div>
                    <div className="value">Tasks that challenge me & my learning</div>
                  </div>
                </div>
                <div className="row">
                  <div>
                    <div className="label">Location</div>
                    <div className="value">India (IST)</div>
                  </div>
                  <div>
                    <div className="label">Availability</div>
                    <div className="value">Intern / Full‑time</div>
                  </div>
                </div>
              </div>

              {/* TECH I USE — Expanded */}
              <div id="skills" className="card stack expanded">
                <div className="title">Tech I use</div>

                <div className="stack-group">
                  <div className="group-title">Languages</div>
                  <ul className="chips">
                    <li>Python</li><li>Java</li><li>C++</li><li>JavaScript</li><li>HTML/CSS</li><li>Dart</li><li>Kotlin</li>
                  </ul>
                </div>

                <div className="stack-group">
                  <div className="group-title">Frameworks & Technologies</div>
                  <ul className="chips">
                    <li>React</li><li>Spring Boot</li><li>Flask</li><li>Flutter</li><li>Firebase</li><li>Streamlit</li>
                  </ul>
                </div>

                <div className="stack-group">
                  <div className="group-title">Databases</div>
                  <ul className="chips">
                    <li>MySQL</li><li>PostgreSQL</li><li>MongoDB</li><li>SQLite</li>
                  </ul>
                </div>

                <div className="stack-group">
                  <div className="group-title">AI & ML</div>
                  <ul className="chips">
                    <li>AI</li><li>Machine Learning</li><li>Deep Learning</li>
                    <li>Gemini API</li><li>NumPy</li><li>Pandas</li><li>Matplotlib</li><li>Seaborn</li><li>scikit-learn</li><li>TensorFlow</li><li>Keras</li>
                  </ul>
                </div>

                <div className="stack-group">
                  <div className="group-title">Developer Tools & Platforms</div>
                  <ul className="chips">
                    <li>Git & GitHub</li><li>Docker</li><li>Postman</li><li>VS Code</li><li>Android Studio</li><li>AWS</li>
                  </ul>
                </div>

                <div className="stack-group">
                  <div className="group-title">Creative Tools</div>
                  <ul className="chips">
                    <li>Blender</li>
                  </ul>
                </div>

                <div className="stack-group">
                  <div className="group-title">Other Libraries</div>
                  <ul className="chips">
                    <li>Plotly</li><li>Selenium</li><li>Beautiful Soup</li><li>Requests</li>
                  </ul>
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>
      <ProjectsSection />
      <ContactSection imageSrc="/mypic.jpg" email="aryanma20@gmail.com" />
      {/* ================= STYLES (Hero + About) ================= */}
      <style>{`
      
        :root{ --bg:#0c0a0a; --txt:#f3eeee; --muted:#d8cfcd; --glass:rgba(255,255,255,0.06); --stroke:rgba(255,255,255,0.1); --rose:#c73b52; --ember:#f08c3e; }
        *{box-sizing:border-box}
        html,body,#root{height:100%}
        body{margin:0; background:var(--bg); color:var(--txt); font-family:Inter, ui-sans-serif, system-ui, Segoe UI, Roboto, Arial, sans-serif}
        a{color:inherit; text-decoration:none}

        /* HERO */
        .studio-hero.v2{position:relative; min-height:100svh; overflow:hidden}
        .bg{position:absolute; inset:-25% -25% -25% -25%; background:
          radial-gradient(1200px 700px at 28% 18%, rgba(199,59,82,0.18), transparent 55%),
          radial-gradient(1000px 600px at 70% 46%, rgba(240,140,62,0.14), transparent 60%),
          linear-gradient(160deg, #0c0a0a 0%, #120f11 55%, #0c0a0a 100%);
          animation: drift 28s linear infinite}
        .bg-right{position:absolute; right:-10%; top:0; bottom:0; width:60%; pointer-events:none; background: radial-gradient(50% 60% at 60% 35%, rgba(240,140,62,0.18), rgba(199,59,82,0.08) 45%, transparent 70%); filter: blur(10px); opacity:0.9}
        @keyframes drift{to{transform:translate3d(-2%,0,0)}}
        .vignette{position:absolute; inset:0; box-shadow: inset 0 0 200px 120px rgba(0,0,0,0.7); pointer-events:none}
        .grain{position:absolute; inset:0; opacity:0.07; mix-blend-mode:overlay; background-image:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3"/></filter><rect width="100%" height="100%" filter="url(%23n)" opacity="0.5"/></svg>')}

        .nav{position:relative; z-index:2; max-width:min(1680px,95vw); margin:0 auto; padding:18px clamp(24px,5vw,64px); display:flex; align-items:center; justify-content:space-between}
        .brand{font-weight:900; letter-spacing:0.4px}
        .brand .dot{color:var(--rose)}
        .links a{opacity:0.9; margin-left:14px; padding:8px 12px; border-radius:10px; border:1px solid transparent}
        .links a:hover{border-color:var(--stroke); background:var(--glass)}

        .wrap{position:relative; z-index:2; display:grid; align-items:center; gap:48px; max-width:min(1680px,95vw); margin:0 auto; padding:40px clamp(24px,5vw,64px) 88px; grid-template-columns: 1.1fr 1.2fr}
        @media (max-width: 980px){ .wrap{grid-template-columns:1fr; gap:28px} }

        .pill{display:inline-flex; align-items:center; gap:10px; padding:8px 12px; border-radius:999px; border:1px solid var(--stroke); background:linear-gradient(90deg, rgba(199,59,82,0.22), rgba(240,140,62,0.22)); font-size:12.5px}
        .bead{width:8px; height:8px; border-radius:999px; background:conic-gradient(from 0deg, var(--rose), var(--ember)); animation: spin 3s linear infinite}
        @keyframes spin{to{transform:rotate(1turn)}}

        .title{font-size:clamp(34px,6.5vw,66px); line-height:1.04; margin:16px 0 12px; font-weight:900}
        .grad{background:linear-gradient(90deg, var(--ember), var(--rose)); -webkit-background-clip:text; background-clip:text; color:transparent}
        .lede{color:var(--muted); max-width:60ch; font-size:clamp(15px,2.1vw,18px); line-height:1.6}

        .cta{display:flex; gap:12px; margin:20px 0 10px}
        .btn{height:44px; padding:0 16px; border-radius:12px; border:1px solid var(--stroke); background:var(--glass); backdrop-filter: blur(8px); font-weight:700; display:inline-flex; align-items:center; justify-content:center; transition:transform .15s ease, box-shadow .2s ease}
        .btn:hover{transform:translateY(-2px); box-shadow: 0 10px 30px rgba(199,59,82,0.18), 0 8px 20px rgba(240,140,62,0.18)}
        .btn.primary{background:linear-gradient(90deg, rgba(240,140,62,0.26), rgba(199,59,82,0.26))}
        .btn.ghost{background:transparent}

        .chips{display:flex; gap:10px; flex-wrap:wrap; margin-top:14px; padding:0}
        .chips li{list-style:none; font-size:12.5px; padding:8px 10px; border:1px solid var(--stroke); border-radius:999px; background:rgba(255,255,255,0.03)}

        .right{position:relative}
        .frame{position:relative; width:clamp(560px, 50vw, 1100px); aspect-ratio:16/9; border-radius:20px; background:rgba(255,255,255,0.03); border:1px solid var(--stroke); box-shadow: 0 40px 80px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.03) inset; overflow:hidden}
        .frame::after{content:""; position:absolute; inset:0; pointer-events:none; border-radius:20px; padding:1px; background:linear-gradient(120deg, rgba(240,140,62,0.7), rgba(199,59,82,0.7)); -webkit-mask:linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0); -webkit-mask-composite:xor; mask-composite:exclude; opacity:0.6}
        .frame-inner{position:absolute; inset:0;}
        .frame-inner img{position:absolute; inset:0; width:100%; height:100%; object-fit:cover; display:block}

        .floor{position:absolute; left:50%; transform:translateX(-50%); bottom:-16px; width:min(900px, 70%); height:28px; background: radial-gradient(60% 100% at 50% 100%, rgba(240,140,62,0.25), transparent 70%); filter:blur(22px); opacity:0.6}

        .pre{position:fixed; inset:0; display:grid; place-items:center; background: radial-gradient(700px 500px at 50% -10%, rgba(240,140,62,0.20), transparent 60%), var(--bg); z-index:10}
        .pre-card{width:min(420px,86vw); padding:22px; border-radius:16px; background:rgba(20,16,16,0.85); border:1px solid var(--stroke); backdrop-filter: blur(8px); box-shadow:0 30px 80px rgba(0,0,0,0.55)}
        .ring{width:60px; height:60px; margin:0 auto 12px; border-radius:50%; border:3px solid rgba(255,255,255,0.1); border-top-color:var(--ember); display:grid; place-items:center; animation:spin 1.2s linear infinite}
        .ring .dot{width:12px; height:12px; border-radius:50%; background:linear-gradient(135deg, var(--ember), var(--rose))}
        .brand-pre{font-weight:900; text-align:center; letter-spacing:0.4px; margin-bottom:10px}
        .meter{position:relative; height:10px; border-radius:999px; background:rgba(255,255,255,0.06); overflow:hidden; border:1px solid var(--stroke)}
        .fill{position:absolute; inset:0 auto 0 0; background:linear-gradient(90deg, var(--ember), var(--rose)); box-shadow:0 6px 20px rgba(199,59,82,0.35)}
        .pct{margin-top:10px; text-align:right; color:var(--muted); font-variant: tabular-nums}

        /* ABOUT */
        .about-studio{position:relative; isolation:isolate; overflow:hidden; padding:48px 0 72px}
        .about-bg{position:absolute; inset:-30% -20% -20% -20%; background:
          radial-gradient(1200px 700px at 20% 10%, rgba(240,140,62,0.12), transparent 60%),
          radial-gradient(1000px 600px at 80% 40%, rgba(199,59,82,0.1), transparent 60%);
          filter:saturate(1.02); animation: pan 30s linear infinite}
        @keyframes pan{to{transform: translate3d(-2%,0,0)}}
        .about-grain{position:absolute; inset:0; opacity:0.06; mix-blend-mode:overlay; background-image:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3"/></filter><rect width="100%" height="100%" filter="url(%23n)" opacity="0.5"/></svg>')}

        .about-wrap{position:relative; z-index:1; max-width:min(1680px,95vw); margin:0 auto; padding:0 clamp(24px,5vw,64px)}
        .about-head .pill{display:inline-flex; align-items:center; gap:10px; padding:8px 12px; border-radius:999px; border:1px solid var(--stroke); background:linear-gradient(90deg, rgba(199,59,82,0.22), rgba(240,140,62,0.22)); font-size:12.5px; margin-bottom:14px}
        .about-head .bead{width:8px;height:8px;border-radius:999px;background:conic-gradient(from 0deg, var(--rose), var(--ember)); animation:spin 3s linear infinite}
        .about-head h2{font-size:clamp(28px,4.8vw,42px); margin:6px 0 8px; letter-spacing:0.2px}
        .about-head .sub{color:var(--muted); max-width:88ch; margin:0}
        .about-head .by{display:block; font-size:12.5px; color:var(--muted); margin-top:6px}

        .about-grid{display:grid; grid-template-columns: 1.1fr 1fr; gap:24px; margin-top:28px}
        @media (min-width:1280px){ .about-grid{grid-template-columns:1.15fr 1.05fr} }
        @media (max-width:980px){ .about-grid{grid-template-columns:1fr} }

        .card{position:relative; border-radius:16px; border:1px solid var(--stroke); background:rgba(255,255,255,0.04); box-shadow: 0 30px 60px rgba(0,0,0,0.35); overflow:hidden}
        .card::after{content:""; position:absolute; inset:0; pointer-events:none; border-radius:16px; padding:1px; background:linear-gradient(120deg, rgba(240,140,62,0.65), rgba(199,59,82,0.65)); -webkit-mask:linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0); -webkit-mask-composite:xor; mask-composite:exclude; opacity:0.55}
        .card h3{margin:0 0 8px; font-size:18px}
        .card p{color:var(--muted)}

        .bio{padding:18px}

        .highlights{padding:14px}
        .highlights .row{display:grid; grid-template-columns: repeat(3, minmax(110px,1fr)); gap:12px}
        .kpi{display:flex; flex-direction:column; align-items:center; justify-content:center; padding:12px; border:1px solid var(--stroke); border-radius:12px; background:rgba(255,255,255,0.03)}
        .kpi b{font-size:20px}
        .kpi span{font-size:12.5px; color:var(--muted)}

        .facts{padding:14px}
        .facts .row{display:grid; grid-template-columns:1fr 1fr; gap:12px; padding:6px 0}
        .facts .label{font-size:12.5px; color:var(--muted)}
        .facts .value{font-weight:700}

        .stack{padding:16px}
        .stack .title{font-weight:800; margin-bottom:8px}
        .stack-group{margin:10px 0}
        .group-title{font-size:12.5px; text-transform:uppercase; letter-spacing:.08em; opacity:.9; margin:4px 0 6px}
        .stack .chips{display:flex; gap:10px; flex-wrap:wrap; margin:0; padding:0}
        .stack .chips li{list-style:none; font-size:12.5px; padding:8px 10px; border:1px solid var(--stroke); border-radius:999px; background:rgba(255,255,255,0.03)}
        .stack.expanded{max-height:none}

        .links-grid{display:grid;grid-template-columns:repeat(3,minmax(160px,1fr));gap:12px;margin-top:14px}
@media (max-width:700px){.links-grid{grid-template-columns:1fr}}
.extcard{position:relative;width:100%;min-height:120px;padding:.5rem;background:rgba(198,198,198,0.09);border-radius:10px;
  backdrop-filter:blur(6px);border:1px solid var(--stroke);box-shadow:-30px 36px 30px rgba(0,0,0,.22);
  transform:skewX(8deg);transition:.35s ease;color:var(--txt);overflow:hidden}
.extcard:hover{min-height:180px;transform:skewX(0deg) translateY(-2px);box-shadow:-20px 28px 30px rgba(0,0,0,.28)}
.extcard h4{margin:1rem .8rem .4rem;font-size:16px}
.extcard p{margin:.2rem .9rem 1rem;color:var(--muted);font-size:13px}
.lights{display:flex;gap:6px;padding:.6rem .6rem 0}
.lights .red,.lights .yellow,.lights .green{width:10px;height:10px;border-radius:50%;box-shadow:-5px 5px 5px rgba(0,0,0,.28)}
.lights .red{background:#ff605c}.lights .yellow{background:#ffbd44}.lights .green{background:#00ca4e}
 
/* Centering row under the links grid */
.socials-center{
  display:flex; justify-content:center; align-items:center;
  margin-top:14px;
}

/* Card */
.socialcard{
  position:relative; width:200px; height:200px; border-radius:20px;
  background:#2a2a2a; /* sits nicely on your charcoal */
  border:1px solid var(--stroke);
  box-shadow:0 10px 30px rgba(0,0,0,.30);
  overflow:hidden; transition:transform .6s ease-in-out;
}
.socialcard:hover{ transform:scale(1.06); }

/* traffic-light dots */
.sc-dots{ position:absolute; top:12px; left:12px; display:flex; gap:6px; z-index:2 }
.sc-dot{ width:10px; height:10px; border-radius:50%; box-shadow:-5px 5px 5px rgba(0,0,0,.28) }
.sc-dot.d1{ background:#ff5f56 } .sc-dot.d2{ background:#ffbd2e } .sc-dot.d3{ background:#27c93f }

/* subtle bg layer (kept for future effects) */
.sc-bg{ position:absolute; inset:0 }

/* logo text */
.sc-logo{
  position:absolute; right:50%; bottom:50%; transform:translate(50%,50%);
  font-size:1.3em; font-weight:600; letter-spacing:3px; color:#fff;
  text-shadow:0 0 8px rgba(255,87,51,.8), 0 0 12px rgba(255,87,51,.6);
  transition:all .6s ease-in-out; z-index:2;
}

/* icon boxes */
.sc-box{
  position:absolute; padding:10px; text-align:right; z-index:1;
  background:rgba(255,255,255,.05); backdrop-filter:blur(5px);
  -webkit-backdrop-filter:blur(5px);
  border-top:1px solid rgba(255,255,255,.1);
  border-right:1px solid rgba(255,255,255,.1);
  border-radius:10% 13% 42% 0%/10% 12% 75% 0%;
  box-shadow:rgba(0,0,0,.5) -7px 7px 29px 0px;
  transform-origin:bottom left; transition:all 1s ease-in-out;
}
.sc-box::before{
  content:""; position:absolute; inset:0; border-radius:inherit; opacity:0; transition:all .5s ease-in-out;
}
.sc-icon{ display:inline-block; width:20px; height:20px }
.sc-svg{ width:100%; fill:rgba(255,255,255,.9); transition:all .5s ease-in-out }
.sc-box:hover .sc-svg{ fill:#fff }

/* sizes + stagger */
.sc-box1{ width:70%; height:70%; bottom:-70%; left:-70% }
.sc-box2{ width:50%; height:50%; bottom:-50%; left:-50%; transition-delay:.2s }
.sc-box3{ width:30%; height:30%; bottom:-30%; left:-30%; transition-delay:.4s }
.sc-box4{ width:10%; height:10%; bottom:-10%; left:-10%; transition-delay:.6s }

/* fiery gradients on hover */
.sc-box1::before{ background:radial-gradient(circle at 30% 107%, #ff5733 0%, #c70039 90%) }
.sc-box2::before{ background:radial-gradient(circle at 30% 107%, #ff6b4d 0%, #c70039 90%) }
.sc-box3::before{ background:radial-gradient(circle at 30% 107%, #ff8066 0%, #c70039 90%) }
.sc-box1:hover::before,.sc-box2:hover::before,.sc-box3:hover::before{ opacity:1 }
.sc-box1:hover .sc-svg,.sc-box2:hover .sc-svg,.sc-box3:hover .sc-svg{ filter:drop-shadow(0 0 5px #ff5733) }

/* bring boxes in on card hover; move logo up-right */
.socialcard:hover .sc-box{ bottom:-1px; left:-1px }
.socialcard:hover .sc-logo{ transform:translate(70px,-52px); letter-spacing:0 }
  /* 1) Kill horizontal overflow globally */
html, body, #root {
  width: 100%;
  overflow-x: hidden;   /* <- removes the right-side scroll + black strip */
}

/* 2) Make each big section clip its own overflow just in case */
.studio-hero.v2,
.about-studio,
.proj-book {
  overflow-x: clip;     /* better than hidden for modern browsers */
}

/* 3) The big glow/blur layers can push width by subpixels on Windows.
      Force them not to create layout overflow. */
.studio-hero.v2 .bg,
.about-studio .about-bg,
.proj-book .bg {
  contain: paint;       /* confines their painting area to the element box */
  left: 0; right: 0;    /* keep them anchored */
}

/* Optional: keep vertical scrollbar space reserved to avoid layout shift */
:root { scrollbar-gutter: stable; }


      `}</style>
    </div>
  );
}
