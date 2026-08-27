function FeaturedWork() {
  const projects = [
    {
      number: "01",
      type: "Business Website",
      title: "Local Business Website",
      description:
        "A modern, mobile-friendly website designed to help a local business present its services and reach more customers.",
      tag: "Business",
    },
    {
      number: "02",
      type: "Web Application",
      title: "Custom Business System",
      description:
        "A custom web application designed around a business workflow to make daily work easier and more organized.",
      tag: "Web App",
    },
    {
      number: "03",
      type: "Student Project",
      title: "College Project Platform",
      description:
        "A complete working web application created for a college project, from development to deployment.",
      tag: "Students",
    },
  ];

  return (
    <section className="featured-work" id="projects">
      <div className="featured-header">
        <div>
          <span className="section-label">OUR WORK</span>

          <h2>
            Solutions we've
            <br />
            <span>built for real needs.</span>
          </h2>
        </div>

        <p>
          Every project starts with a requirement. We turn that requirement
          into a practical digital solution designed around the person or
          business using it.
        </p>
      </div>

      <div className="featured-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-top">
              <span className="project-number">{project.number}</span>
              <span className="project-tag">{project.tag}</span>
            </div>

            <div className="project-content">
              <span className="project-type">{project.type}</span>

              <h3>{project.title}</h3>

              <p>{project.description}</p>
            </div>

            <div className="project-bottom">
              <span>View project</span>
              <span className="project-arrow">↗</span>
            </div>
          </article>
        ))}
      </div>

      <div className="featured-note">
        <span>BUILDME</span>
        <p>
          More projects will be added as we build for businesses, students
          and individuals.
        </p>
      </div>
    </section>
  );
}

export default FeaturedWork;