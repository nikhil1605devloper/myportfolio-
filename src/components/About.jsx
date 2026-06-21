import SectionHead from "./SectionHead";
import { about, profile } from "../data";

export default function About({ theme }) {
  return (
    <section id="about">
      <div className="wrap">
        <SectionHead theme={theme} num="01" eyebrow="// about" title="About" />
        <div className="about-grid">
          <div className="about-text">
            {about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="info-card">
            {theme === "dark" && <div className="info-card-head">contact.json</div>}
            <div className="info-rows">
              <Row k="Role" v="Software Engineer I" theme={theme} />
              <Row k="Company" v="Sanpurnam Infotech" theme={theme} />
              <Row k="Location" v={profile.location} theme={theme} />
              <Row k="Email" v={profile.email} theme={theme} />
              <Row k="Phone" v={profile.phone} theme={theme} />
              <Row k="Languages" v={theme === "dark" ? "EN, HI, MR" : profile.languages} theme={theme} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ k, v, theme }) {
  return (
    <div className="info-row">
      <span className="k">{theme === "dark" ? k.toLowerCase() : k}</span>
      <span className="v">{v}</span>
    </div>
  );
}
