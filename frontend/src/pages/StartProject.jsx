import { useEffect, useState } from "react";
import "./StartProject.css";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzaFx0YX5545QB5JSGS7YxhmFAAcScYY1fFO3JuYMOaMNc0v228jwuAi9nkdBS0JVQhpw/exec";

const websiteTypes = [
  {
    slug: "family-tree",
    title: "Family Tree",
    icon: "🌳",
    description:
      "Create a beautiful website to preserve your family history and memories.",
    features: [
      "Family members",
      "Family relationships",
      "Photos and memories",
      "Family history",
      "Contact details",
    ],
  },
  {
    slug: "portfolio",
    title: "Portfolio",
    icon: "👤",
    description:
      "Show your skills, work, achievements, and experience in one place.",
    features: [
      "About you",
      "Skills",
      "Projects",
      "Resume",
      "Achievements",
      "Contact section",
    ],
  },
  {
    slug: "personal",
    title: "Personal Website",
    icon: "❤️",
    description:
      "A simple website made specially for you, your story, or your personal brand.",
    features: [
      "About me",
      "Photos",
      "Social links",
      "Contact details",
      "Personal information",
    ],
  },
  {
    slug: "friend-circle",
    title: "Friend Circle",
    icon: "👥",
    description:
      "Create a website for your friends, memories, and activities.",
    features: [
      "Member profiles",
      "Photos",
      "Memories",
      "Events",
      "Group information",
    ],
  },
  {
    slug: "temple",
    title: "Temple",
    icon: "🛕",
    description:
      "Give your temple a simple and useful online presence.",
    features: [
      "Temple information",
      "Timings",
      "Festivals and events",
      "Announcements",
      "Photo gallery",
      "Location and contact",
      "Donation section",
    ],
  },
  {
    slug: "events",
    title: "Events & Invitations",
    icon: "🎉",
    description:
      "Create a website for weddings, birthdays, functions, and other events.",
    features: [
      "Event details",
      "Date and time",
      "Venue",
      "Photos",
      "Invitation information",
      "Contact details",
    ],
  },
  {
    slug: "college",
    title: "College / Student",
    icon: "🎓",
    description:
      "Websites for students, college groups, clubs, and academic activities.",
    features: [
      "Student profiles",
      "Projects",
      "Events",
      "Achievements",
      "College information",
    ],
  },
  {
    slug: "school",
    title: "School / Education",
    icon: "🏫",
    description:
      "A website for schools, classes, educational groups, and learning services.",
    features: [
      "School information",
      "Courses",
      "Announcements",
      "Events",
      "Contact details",
    ],
  },
  {
    slug: "ngo",
    title: "Organization / NGO",
    icon: "🤝",
    description:
      "Share your organization's work, activities, people, and goals.",
    features: [
      "About organization",
      "Our work",
      "Team",
      "Events",
      "Gallery",
      "Contact",
    ],
  },
  {
    slug: "restaurant",
    title: "Restaurant / Food",
    icon: "🍽️",
    description:
      "Help customers discover your food business and what you offer.",
    features: [
      "Menu",
      "Food photos",
      "Location",
      "Opening hours",
      "Contact",
      "Special offers",
    ],
  },
  {
    slug: "professional",
    title: "Professional / Service",
    icon: "🧑‍💼",
    description:
      "A website for professionals and people providing services.",
    features: [
      "About",
      "Services",
      "Experience",
      "Work samples",
      "Contact",
    ],
  },
  {
    slug: "business",
    title: "Business",
    icon: "🏢",
    description:
      "A professional website to present your business and reach more customers.",
    features: [
      "About business",
      "Services",
      "Products",
      "Team",
      "Gallery",
      "Contact",
      "Location",
    ],
  },
  {
    slug: "shop",
    title: "Shop / Online Store",
    icon: "🛍️",
    description:
      "Create an online place to show and sell your products.",
    features: [
      "Products",
      "Product photos",
      "Prices",
      "Categories",
      "Customer enquiries",
      "Order features",
    ],
  },
  {
    slug: "custom",
    title: "Custom Website",
    icon: "🧩",
    description:
      "Have a different idea? Tell us what you need and we will discuss it with you.",
    features: [
      "Your own design",
      "Your own features",
      "Custom pages",
      "Special requirements",
      "Flexible changes",
    ],
  },
  {
    slug: "any-website",
    title: "Any Website",
    icon: "🌐",
    description:
      "Not sure which option fits? Tell us your idea and we will help you.",
    features: [
      "Website planning",
      "Custom design",
      "Custom features",
      "Mobile-friendly website",
      "Support",
    ],
  },
];

function StartProject() {
  const [selectedType, setSelectedType] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const getSelectedFromURL = () => {
    const path = window.location.pathname;
    const prefix = "/start-project/";

    if (!path.startsWith(prefix)) {
      return null;
    }

    const slug = path.replace(prefix, "").replace("/", "");

    return websiteTypes.find((website) => website.slug === slug) || null;
  };

  useEffect(() => {
    const updateFromURL = () => {
      setSelectedType(getSelectedFromURL());
      setShowForm(false);
      setSubmitted(false);
    };

    updateFromURL();

    window.addEventListener("popstate", updateFromURL);

    return () => {
      window.removeEventListener("popstate", updateFromURL);
    };
  }, []);

  const openWebsite = (website) => {
    window.history.pushState(
      {},
      "",
      `/start-project/${website.slug}`
    );

    setSelectedType(website);
    setShowForm(false);
    setSubmitted(false);

    window.scrollTo(0, 0);
  };

  const goBackToTypes = () => {
    window.history.back();
  };

  const openForm = () => {
    setShowForm(true);
    setSubmitted(false);

    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }, 100);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedType) {
      return;
    }

    setIsSubmitting(true);

    const form = event.target;

    const formData = {
      name: form.name.value.trim(),
      phone: form.phone.value.trim(),
      email: form.email.value.trim(),
      websiteType: selectedType.title,
      requirements: form.requirements.value.trim(),
      budget: form.budget.value,
    };

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(formData),
      });

      form.reset();

      setIsSubmitting(false);
      setShowForm(false);
      setSubmitted(true);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (error) {
      console.error("Form submission error:", error);

      setIsSubmitting(false);

      alert(
        "Something went wrong while sending your request. Please try again."
      );
    }
  };

  return (
    <div className="start-project-page">
      <section className="start-project-hero">
        <p className="start-project-label">START A PROJECT</p>

        <h1>
          Tell us what you want.
          <br />
          <span>We will build it.</span>
        </h1>

        <p className="start-project-subtitle">
          Choose the type of website you need. Don't see exactly what you want?
          That's okay — we can build custom websites too.
        </p>
      </section>

      {/* WEBSITE TYPES */}

      {!selectedType && !submitted && (
        <section className="website-options">
          <div className="section-heading">
            <h2>What kind of website do you need?</h2>
            <p>Choose an option to see what we can build for you.</p>
          </div>

          <div className="website-grid">
            {websiteTypes.map((website) => (
              <button
                className="website-card"
                key={website.slug}
                onClick={() => openWebsite(website)}
              >
                <div className="website-icon">{website.icon}</div>

                <h3>{website.title}</h3>

                <p>{website.description}</p>

                <span className="card-link">
                  Explore →
                </span>
              </button>
            ))}
          </div>
        </section>
      )}

      {/* SUCCESS MESSAGE */}

      {submitted && (
        <section className="project-details">
          <div className="details-card">
            <div className="details-icon">✓</div>

            <p className="details-label">REQUEST RECEIVED</p>

            <h2>Thank You! 🎉</h2>

            <p className="details-description">
              Your project request has been received successfully.
            </p>

            <div className="custom-note">
              <strong>Our team member will contact you soon.</strong>

              <p>
                We will review your requirements and get in touch with you
                shortly to discuss your project.
              </p>
            </div>

            <button
              className="continue-button"
              onClick={() => {
                setSubmitted(false);
                setSelectedType(null);
                setShowForm(false);

                window.history.pushState(
                  {},
                  "",
                  "/start-project"
                );

                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              Start Another Project →
            </button>
          </div>
        </section>
      )}

      {/* SELECTED WEBSITE */}

      {selectedType && !submitted && (
        <section className="project-details">
          <button
            className="back-button"
            onClick={goBackToTypes}
          >
            ← Back to website types
          </button>

          <div className="details-card">
            <div className="details-icon">
              {selectedType.icon}
            </div>

            <p className="details-label">YOU SELECTED</p>

            <h2>{selectedType.title}</h2>

            <p className="details-description">
              {selectedType.description}
            </p>

            <div className="features-section">
              <h3>What we can normally include</h3>

              <div className="features-grid">
                {selectedType.features.map((feature) => (
                  <div className="feature-item" key={feature}>
                    <span>✓</span>
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            <div className="custom-note">
              <strong>Need something different?</strong>

              <p>
                No problem. These are only the common features. You can tell us
                what you actually need, and you can discuss changes with our
                team before we build it.
              </p>
            </div>

            {!showForm && (
              <button
                className="continue-button"
                onClick={openForm}
              >
                Tell Us Your Requirements →
              </button>
            )}
          </div>

          {/* FORM */}

          {showForm && (
            <div className="project-form-card">
              <div className="form-heading">
                <p className="details-label">PROJECT ENQUIRY</p>

                <h2>Tell us about your project</h2>

                <p>
                  Give us a few details. Our team can discuss the rest with
                  you.
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">
                      Your Name *
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">
                      Phone Number *
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    Email *
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="requirements">
                    What do you want in your website? *
                  </label>

                  <textarea
                    id="requirements"
                    name="requirements"
                    rows="6"
                    placeholder="Tell us about your idea, features you need, pages, design, etc."
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="budget">
                    Approximate Budget
                  </label>

                  <select
                    id="budget"
                    name="budget"
                    defaultValue=""
                  >
                    <option value="">
                      Select if you have an idea
                    </option>

                    <option value="basic">
                      Basic / Low Budget
                    </option>

                    <option value="medium">
                      Medium
                    </option>

                    <option value="advanced">
                      Advanced
                    </option>

                    <option value="not-sure">
                      I'm not sure
                    </option>
                  </select>
                </div>

                <div className="form-actions">
                  <button
                    type="button"
                    className="secondary-button"
                    onClick={() => setShowForm(false)}
                    disabled={isSubmitting}
                  >
                    ← Back
                  </button>

                  <button
                    type="submit"
                    className="submit-button"
                    disabled={isSubmitting}
                  >
                    {isSubmitting
                      ? "Sending Request..."
                      : "Submit Project Request →"}
                  </button>
                </div>
              </form>
            </div>
          )}
        </section>
      )}
    </div>
  );
}

export default StartProject;