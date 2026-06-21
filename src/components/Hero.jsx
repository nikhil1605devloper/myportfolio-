export default function Hero({ theme }) {
  if (theme === "dark") {
    return (
      <section className="hero" id="hero">
        <div className="wrap">
          <div className="file-tab">
            <span className="dot-live"></span> status: open-to-work
          </div>
          <h1 className="hero-title-dark">
            <span className="com">// software engineer, pune</span>
            <span className="kw">const</span> <span className="fn">nikhil</span> = <span className="kw">build</span>(
            <span className="str">"full-stack systems"</span>
            <span style={{ color: "var(--text)" }}>);</span>
          </h1>
          <p className="lead">
            I build and deploy production web applications with React, Django, and MySQL —
            booking platforms, payment systems, and admin tools that run live, not just in a repo.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn-primary">$ view --projects</a>
            <a href="#contact" className="btn-secondary">$ contact --me</a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="hero" id="hero">
      <div className="wrap">
        <div className="status-pill">
          <span className="dot-live"></span> Open to new opportunities
        </div>
        <h1 className="hero-title-sky">
          Building full-stack systems that <span className="accent-text">actually ship.</span>
        </h1>
        <p className="lead">
          I'm Nikhil Powar, a Software Engineer who builds and deploys production web
          applications with React, Django, and MySQL — from booking systems to payment
          integrations, end to end.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn-primary">View my work</a>
          <a href="#contact" className="btn-secondary">Get in touch</a>
        </div>

        <div className="terminal">
          <div className="terminal-bar">
            <span></span><span></span><span></span>
          </div>
          <div className="terminal-body">
            <div className="line"><span className="prompt">$</span> whoami</div>
            <div className="line">nikhil_powar — software_engineer</div>
            <div className="line"><span className="comment">// stack</span></div>
            <div className="line"><span className="prompt">$</span> stack --list</div>
            <div className="line">React.js · Django REST Framework · Python · MySQL · Razorpay API</div>
          </div>
        </div>
      </div>
    </section>
  );
}
