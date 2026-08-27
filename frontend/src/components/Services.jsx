function Services() {
  const services = [
    {
      number: "01",
      title: "Business Websites",
      description:
        "Professional websites for shops, gyms, salons, restaurants, supermarkets and small businesses.",
    },
    {
      number: "02",
      title: "Web Applications",
      description:
        "Custom web applications built around your business needs, workflows and ideas.",
    },
    {
      number: "03",
      title: "College Projects",
      description:
        "Mini projects, major projects and complete web applications for students.",
    },
    {
      number: "04",
      title: "Portfolio Websites",
      description:
        "Professional personal and student portfolios to showcase skills, work and achievements.",
    },
    {
      number: "05",
      title: "Personal Websites",
      description:
        "Family trees, friends trees, memory pages and other personal digital experiences.",
    },
    {
      number: "06",
      title: "Custom Solutions",
      description:
        "Have something different in mind? Tell us your requirement and we will find a solution.",
    },
  ];

  return (
    <section className="services" id="services">
      <div className="section-header">
        <p className="section-label">WHAT WE DO</p>

        <h2>
          Digital solutions
          <br />
          built for your needs.
        </h2>

        <p className="section-description">
          From simple business websites to custom web applications,
          BuildMe helps turn your requirements into working digital
          solutions.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.number}>
            <span className="service-number">{service.number}</span>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

            <span className="service-arrow">→</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;