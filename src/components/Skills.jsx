import SectionHead from "./SectionHead";
import { skillGroups } from "../data";

export default function Skills({ theme }) {
  return (
    <section id="skills">
      <div className="wrap">
        <SectionHead theme={theme} num="02" eyebrow="// skills" title="Tools I build with" />
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.label}>
            <h4 className={theme === "dark" ? "label-comment" : ""}>
              {theme === "dark" ? group.label.toLowerCase().replace(/ /g, "_") : group.label}
            </h4>
            <div className="chips">
              {group.skills.map((s) => (
                <div className="chip" key={s}>{s}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
