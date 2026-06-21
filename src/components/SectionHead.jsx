export default function SectionHead({ theme, num, eyebrow, title }) {
  if (theme === "dark") {
    return (
      <div className="sec-head sec-head-dark">
        <span className="tag">{num}</span>
        <h2>{title}</h2>
        <div className="line"></div>
      </div>
    );
  }

  return (
    <div className="sec-head sec-head-sky">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
    </div>
  );
}
