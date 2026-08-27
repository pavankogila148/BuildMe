import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import Solutions from "./components/Solutions";
import WhoWeHelp from "./components/WhoWeHelp";
import HowItWorks from "./components/HowItWorks";
import WhyBuildMe from "./components/WhyBuildMe";
import FeaturedWork from "./components/FeaturedWork";
import FinalCTA from "./components/FinalCTA";
import StartProject from "./pages/StartProject";

function App() {
  const isStartProjectPage = window.location.pathname === "/start-project";

  return (
    <div className="app">
      <Navbar />

      {isStartProjectPage ? (
        <main>
          <StartProject />
        </main>
      ) : (
        <main>
          <Hero />
          <TrustStrip />
          <Solutions />
          <WhoWeHelp />
          <HowItWorks />
          <FeaturedWork />
          <WhyBuildMe />
          <FinalCTA />
        </main>
      )}
    </div>
  );
}

export default App;