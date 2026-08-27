function WhyBuildMe() {
  const reasons = [
    {
      number: "01",
      title: "Talk to Real People",
      text: "You can explain your idea directly to our team. We focus on understanding the requirement before we start building.",
    },
    {
      number: "02",
      title: "Simple Communication",
      text: "No complicated technical language. Tell us what you need in your own words and we'll help define the solution.",
    },
    {
      number: "03",
      title: "Built Around You",
      text: "We don't force every customer into the same solution. The project is shaped around the requirement we agree on.",
    },
    {
      number: "04",
      title: "One Team, End to End",
      text: "From understanding the requirement to development, testing and deployment, BuildMe handles the complete process.",
    },
  ];

  return (
    <section className="why-buildme" id="about">
      <div className="why-header">
        <div>
          <p className="section-label">WHY BUILDMЕ</p>

          <h2>
            Technology
            <br />
            made simple.
          </h2>
        </div>

        <p className="why-intro">
          You shouldn't need to understand technology to turn an
          idea into something useful. That's where BuildMe comes in.
        </p>
      </div>

      <div className="why-list">
        {reasons.map((reason) => (
          <div className="why-row" key={reason.number}>
            <span className="why-number">{reason.number}</span>

            <h3>{reason.title}</h3>

            <p>{reason.text}</p>

            <span className="why-arrow">↗</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyBuildMe;