function Solutions() {
  const solutions = [
    {
      number: "01",
      title: "Business Websites",
      text: "Professional websites for gyms, shops, salons, restaurants, supermarkets and local businesses.",
      tag: "For Businesses",
    },
    {
      number: "02",
      title: "Web Applications",
      text: "Custom web systems designed around the way your business actually works.",
      tag: "Custom Development",
    },
    {
      number: "03",
      title: "College Projects",
      text: "Working mini projects, major projects and web applications for students.",
      tag: "For Students",
    },
    {
      number: "04",
      title: "Portfolio Websites",
      text: "Clean personal websites that showcase your skills, projects and achievements.",
      tag: "Personal",
    },
    {
      number: "05",
      title: "Personal Websites",
      text: "Family trees, friends trees, event pages, memory pages and other personal ideas.",
      tag: "Personal",
    },
    {
      number: "06",
      title: "Custom Solutions",
      text: "Have an idea that doesn't fit a category? Tell us what you need and we'll explore the right solution.",
      tag: "Let's Talk",
    },
  ];

  return (
    <section className="solutions" id="services">
      <div className="solutions-header">
        <div>
          <p className="section-label">WHAT WE BUILD</p>

          <h2>
            Solutions for
            <br />
            real needs.
          </h2>
        </div>

        <p className="solutions-intro">
          From a simple website for a local business to a custom
          application, BuildMe turns your requirement into a working
          digital solution.
        </p>
      </div>

      <div className="solutions-list">
        {solutions.map((solution) => (
          <div className="solution-row" key={solution.number}>
            <span className="solution-number">
              {solution.number}
            </span>

            <div className="solution-main">
              <h3>{solution.title}</h3>
              <p>{solution.text}</p>
            </div>

            <span className="solution-tag">
              {solution.tag}
            </span>

            <span className="solution-arrow">↗</span>
          </div>
        ))}
      </div>

      <div className="solutions-bottom">
        <span>DON'T SEE WHAT YOU NEED?</span>

        <a href="#request">
          Tell us about your idea →
        </a>
      </div>
    </section>
  );
}

export default Solutions;