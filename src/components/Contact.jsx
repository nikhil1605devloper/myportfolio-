import { profile } from "../data";

export default function Contact({ theme }) {
  return (
    <section id="contact">
      <div className="wrap">
        <div className="contact-box">
          {theme === "dark" && <span className="tag">// 06</span>}
          <h2>Let's build something together.</h2>
          <p>Open to new roles and collaborations — drop a message anytime.</p>
          <div className="contact-links">
            <a href={`mailto:${profile.email}`}>✉ {theme === "dark" ? "email" : "Email me"}</a>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>
              📞 {theme === "dark" ? "call" : profile.phone}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              in {theme === "dark" ? "linkedin" : "LinkedIn"}
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              ⌥ {theme === "dark" ? "github" : "GitHub"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
