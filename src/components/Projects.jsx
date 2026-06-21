import SectionHead from "./SectionHead";
import { projects } from "../data";

export default function Projects({ theme }) {
  return (
    <section id="projects">
      <div className="wrap">
        <SectionHead
          theme={theme}
          num="04"
          eyebrow="// projects"
          title={theme === "dark" ? "Projects" : "Live, in production"}
        />
        <div className="projects-grid">
          {projects.map((p) => (
            <div className="proj-card" key={p.title}>
              {theme === "dark" && (
                <div className="proj-head">
                  <span className="proj-filename">{p.file}</span>
                  <span className="live-badge"><span className="dot-live"></span>live</span>
                </div>
              )}
              <div className="proj-body">
                {theme === "sky" && (
                  <div className="proj-top">
                    <div className="proj-title">{p.title}</div>
                    <div className="live-badge"><span className="dot-live"></span>Live</div>
                  </div>
                )}
                {theme === "dark" && <div className="proj-title">{p.title}</div>}
                <div className="proj-desc">{p.desc}</div>
                <div className="proj-tags">
                  {p.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <a className="proj-link" href={p.link} target="_blank" rel="noopener noreferrer">
                  {theme === "dark" ? (
                    "view live →"
                  ) : (
                    <>
                      View live site
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </>
                  )}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
