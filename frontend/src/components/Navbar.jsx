function Navbar() {
  return (
    <header className="navbar">
      <a className="logo" href="/">
        <span className="logo-name">BuildMe</span>
        <span className="logo-tagline">Digital Solutions</span>
      </a>

      <nav className="nav-links">
        <a href="/#services">Services</a>
        <a href="/#how-it-works">How It Works</a>
        <a href="/#about">About</a>
        <a href="/#contact">Contact</a>
      </nav>

      <a href="/start-project" className="nav-cta">
        Start a Project
      </a>
    </header>
  );
}

export default Navbar;