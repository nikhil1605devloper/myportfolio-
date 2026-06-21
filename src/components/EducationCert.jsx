import SectionHead from "./SectionHead";
import { education, certifications } from "../data";

export default function EducationCert({ theme }) {
  return (
    <section id="education-cert">
      <div className="wrap">
        <SectionHead theme={theme} num="05" eyebrow="// background" title="Education & certifications" />
        <div className="ed-cert-grid">
          <div className="ec-card">
            {theme === "dark" ? (
              <div className="ec-card-head">education.log</div>
            ) : (
              <h4 className="ec-h4">Education</h4>
            )}
            <div className={theme === "dark" ? "ec-body" : ""}>
              <div className="ec-item">
                <div className="t">{education.degree}</div>
                <div className="s">{education.detail}</div>
              </div>
            </div>
          </div>
          <div className="ec-card">
            {theme === "dark" ? (
              <div className="ec-card-head">certifications.log</div>
            ) : (
              <h4 className="ec-h4">Certifications</h4>
            )}
            <div className={theme === "dark" ? "ec-body" : ""}>
              {certifications.map((c, i) => (
                <div className="ec-item" key={i}>
                  <div className="t">{c.title}</div>
                  <div className="s">{c.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
