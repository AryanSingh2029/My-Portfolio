import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection({ imageSrc = "/mypic.jpg" }) {
const [status, setStatus] = useState<"ok" | "error" | null>(null);
const [loading, setLoading] = useState(false);

async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  setLoading(true);
  setStatus(null);

  const form = e.currentTarget;
  const data = new FormData(form);

  try {
    const res = await fetch("https://formspree.io/f/mdkwzkej", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      form.reset();
      setStatus("ok");      // ✅ now valid
    } else {
      setStatus("error");
    }
  } catch {
    setStatus("error");
  } finally {
    setLoading(false);
  }
}

  return (
    <section id="contact" className="contact-section" aria-label="Contact Aryan">
      <div className="c-bg" aria-hidden />
      <div className="c-grain" aria-hidden />

      <div className="c-wrap">
        <header className="c-head">
          <div className="pill"><span className="bead" /> Contact</div>
          <h2>Let’s build something</h2>
          <p className="sub">Tell me a bit about the project or just say hi—I'll get back to you.</p>
        </header>

        <div className="c-grid">
          {/* LEFT: Form */}
          <motion.form
            className="c-form"
            onSubmit={handleSubmit}
            initial={{ y: 18, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* success / error banner */}
            {status === "ok" && (
              <div style={{ marginBottom: 12, padding: "10px 12px", borderRadius: 10, background: "rgba(34,197,94,.15)", border: "1px solid rgba(34,197,94,.35)", color: "#eaffea" }}>
                Thanks! Your message was sent.
              </div>
            )}
            {status === "error" && (
              <div style={{ marginBottom: 12, padding: "10px 12px", borderRadius: 10, background: "rgba(239,68,68,.15)", border: "1px solid rgba(239,68,68,.35)", color: "#ffecec" }}>
                Oops—something went wrong. Please try again or email me directly.
              </div>
            )}

            <label className="c-label" htmlFor="name">Name</label>
            <input id="name" name="name" className="c-input" placeholder="Your full name" required />

            <label className="c-label" htmlFor="email">Email</label>
            <input id="email" name="email" type="email" className="c-input" placeholder="you@example.com" required />

            <label className="c-label" htmlFor="message">Message</label>
            <textarea id="message" name="message" className="c-textarea" placeholder="What are we building?" rows={5} required />

            {/* spam honeypot */}
            <input type="text" name="_gotcha" style={{ display: "none" }} />

            <button className="c-btn" type="submit" disabled={loading}>
              {loading ? "Sending…" : "Send Message"}
            </button>
            <p className="c-foot">Prefer email? <a href="mailto:aryanma20@gmail.com">aryanma20@gmail.com</a></p>
          </motion.form>

          {/* RIGHT: Photo */}
          <motion.aside
            className="c-photo"
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
          >
            <div className="c-frame">
              <img src={imageSrc} alt="Aryan portrait" onError={(e) => (e.currentTarget.style.display = 'none')} />
            </div>
          </motion.aside>
        </div>
      </div>

       
      <style>{`
        :root{ --bg:#0c0a0a; --txt:#f3eeee; --muted:#d8cfcd; --stroke:rgba(255,255,255,0.12); --glass:rgba(255,255,255,0.06); --rose:#c73b52; --ember:#f08c3e; }
        .contact-section{ position:relative; isolation:isolate; overflow:hidden; padding:56px 0 92px; background:var(--bg); color:var(--txt); }
        .c-bg{position:absolute; inset:-30% -20% -20% -20%; background:
          radial-gradient(1200px 700px at 20% 10%, rgba(240,140,62,0.12), transparent 60%),
          radial-gradient(1000px 600px at 80% 40%, rgba(199,59,82,0.1), transparent 60%);
          animation: c-pan 30s linear infinite}
        @keyframes c-pan{to{transform: translate3d(-2%,0,0)}}
        .c-grain{position:absolute; inset:0; opacity:.06; mix-blend-mode:overlay; background-image:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3"/></filter><rect width="100%" height="100%" filter="url(%23n)" opacity="0.5"/></svg>')} 

        .c-wrap{ position:relative; z-index:1; max-width:min(1280px,95vw); margin:0 auto; padding:0 clamp(24px,5vw,64px) }
        .c-head .pill{ display:inline-flex; align-items:center; gap:10px; padding:8px 12px; border-radius:999px; border:1px solid var(--stroke); background:linear-gradient(90deg, rgba(199,59,82,0.22), rgba(240,140,62,0.22)); font-size:12.5px; margin-bottom:14px }
        .c-head .bead{ width:8px; height:8px; border-radius:999px; background:conic-gradient(from 0deg, var(--rose), var(--ember)); animation:spin 3s linear infinite }
        @keyframes spin{to{transform:rotate(1turn)}}
        .c-head h2{ font-size:clamp(28px,4.8vw,42px); margin:6px 0 6px; color:var(--txt) }
        .c-head .sub{ color:var(--muted); max-width:80ch; margin:0 0 16px }

        .c-grid{ display:grid; grid-template-columns:1.1fr 0.9fr; gap:24px }
        @media (max-width: 980px){ .c-grid{ grid-template-columns:1fr; } }

        /* FORM */
        .c-form{ border:1px solid var(--stroke); border-radius:16px; background:rgba(255,255,255,0.04); padding:18px; box-shadow:0 30px 60px rgba(0,0,0,0.35) }
        .c-label{ display:block; font-size:12.5px; color:var(--txt); margin:10px 0 6px }
        .c-input,.c-textarea{ width:100%; color:#fff; background:rgba(255,255,255,0.06); border:1px solid var(--stroke); border-radius:12px; padding:12px 14px; outline:none }
        .c-input::placeholder,.c-textarea::placeholder{ color:#fff; opacity:.7 }
        .c-textarea{ resize:vertical }
        .c-btn{ margin-top:14px; height:44px; padding:0 16px; border-radius:12px; border:1px solid var(--stroke); background:linear-gradient(90deg, rgba(240,140,62,0.26), rgba(199,59,82,0.26)); color:#fff; font-weight:800 }
        .c-btn:hover{ transform:translateY(-2px); box-shadow: 0 10px 30px rgba(199,59,82,0.18), 0 8px 20px rgba(240,140,62,0.18) }
        .c-foot{ margin-top:10px; color:var(--muted) }
        .c-foot a{ color:#fff; text-decoration:underline }

        /* PHOTO */
        .c-photo{}
        .c-frame{ position:relative; width:100%; aspect-ratio: 4/5; border-radius:16px; border:1px solid var(--stroke); background:rgba(255,255,255,0.04); overflow:hidden; box-shadow:0 30px 60px rgba(0,0,0,0.35) }
        .c-frame img{ width:100%; height:100%; object-fit:cover; display:block }
        .c-note{ font-size:12.5px; color:var(--muted); margin-top:8px }
      `}</style>
    </section>
  );
}
