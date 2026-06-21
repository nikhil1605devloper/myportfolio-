import SectionHead from "./SectionHead";
import { experience } from "../data";

export default function Experience({ theme }) {
  return (
    <section id="experience">
      <div className="wrap">
        <SectionHead theme={theme} num="03" eyebrow="// experience" title="Where I've worked" />
        <div className="timeline">
          {experience.map((job, i) => (
            <div className="tl-item" key={i}>
              <div className="tl-role">{job.role}</div>
              <div className="tl-org">{job.org}</div>
              <div className="tl-date">{theme === "dark" ? job.date.toLowerCase() : job.date}</div>
              <ul className="tl-list">
                {job.points.map((pt, j) => (
                  <li key={j}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
