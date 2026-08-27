function WhoWeHelp() {
  const groups = [
    {
      number: "01",
      title: "Small Businesses",
      text: "Websites, business tools and custom digital solutions for shops, gyms, salons, restaurants and local businesses.",
    },
    {
      number: "02",
      title: "Students",
      text: "College projects, portfolios and working web applications for students.",
    },
    {
      number: "03",
      title: "Individuals",
      text: "Personal websites, family trees, memory pages and other ideas you want to bring online.",
    },
    {
      number: "04",
      title: "Startups & Teams",
      text: "MVPs, internal tools and custom web solutions for new ideas and growing teams.",
    },
  ];

  return (
    <section className="who-we-help" id="who-we-help">
      <div className="who-header">
        <div>
          <p className="section-label">WHO WE HELP</p>

          <h2>
            Built for people
            <br />
            with a need.
          </h2>
        </div>

        <p className="who-intro">
          You don't need to be a technology expert. Tell us what
          you want to build and our team will help turn the idea
          into a working digital solution.
        </p>
      </div>

      <div className="who-grid">
        {groups.map((group) => (
          <div className="who-card" key={group.number}>
            <span className="who-number">{group.number}</span>

            <h3>{group.title}</h3>

            <p>{group.text}</p>

            <span className="who-arrow">↗</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhoWeHelp;