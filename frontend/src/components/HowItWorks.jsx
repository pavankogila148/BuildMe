function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Tell Us",
      text: "Tell us what you want to build. No technical knowledge is required.",
    },
    {
      number: "02",
      title: "We Understand",
      text: "A BuildMe team member contacts you and understands your exact requirement.",
    },
    {
      number: "03",
      title: "We Build It",
      text: "Our team designs, develops and tests the solution based on the agreed requirement.",
    },
    {
      number: "04",
      title: "We Deploy",
      text: "After your review and approval, we take the completed solution live.",
    },
  ];

  return (
    <section className="how-it-works" id="how-it-works">
      <div className="how-header">
        <div>
          <p className="section-label">HOW IT WORKS</p>

          <h2>
            You tell us.
            <br />
            <span>We build it.</span>
          </h2>
        </div>

        <p className="how-intro">
          Our process is simple. You explain what you need,
          and we take care of the technical work from start
          to deployment.
        </p>
      </div>

      <div className="how-steps">
        {steps.map((step, index) => (
          <div className="how-step" key={step.number}>
            <div className="how-step-top">
              <span>{step.number}</span>

              {index !== steps.length - 1 && (
                <div className="how-connector"></div>
              )}
            </div>

            <h3>{step.title}</h3>

            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;