function TrustStrip() {
  const points = [
    {
      icon: "01",
      title: "Real People",
      description: "Talk to a real person, not a bot.",
    },
    {
      icon: "02",
      title: "5-Min Response",
      description: "We contact you within 5 minutes.",
    },
    {
      icon: "03",
      title: "End-to-End Service",
      description: "From requirement to deployment.",
    },
    {
      icon: "04",
      title: "Built for You",
      description: "Solutions based on your needs.",
    },
  ];

  return (
    <section className="trust-strip">
      <div className="trust-container">
        {points.map((point) => (
          <div className="trust-item" key={point.icon}>
            <div className="trust-icon">{point.icon}</div>

            <div className="trust-text">
              <h3>{point.title}</h3>
              <p>{point.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrustStrip;