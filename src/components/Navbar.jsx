import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="nav">
      <img
        className="koinx-logo-icon"
        loading="lazy"
        alt=""
        src="/1-koinx-logo@2x.png"
      />
      <div className="cardano-triangle">
        <div className="crypto-taxes">Crypto Taxes</div>
        <div className="free-tools">Free Tools</div>
        <div className="link-circle">
          <div className="resource-center">Resource Center</div>
        </div>
        <button className="get-started-wrapper">
          <div className="get-started">Get Started</div>
        </button>
      </div>
      <div className="feedback-wrapper">
        <div className="feedback">Feedback</div>
      </div>
    </header>
  );
};

export default Navbar;
