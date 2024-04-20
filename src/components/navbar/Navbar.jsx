import "./Navbar.scss";

export const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <div className="wrapper">
        <span>Daniel Budiansky</span>
        <div className="social">
          <a href="#">
            <img src="/facebook.png" alt="facebook logo" />
          </a>
          <a href="#">
            <img src="/instagram.png" alt="instagram logo" />
          </a>
          <a href="#">
            <img src="/youtube.png" alt="youtube logo" />
          </a>
          <a href="#">
            <img src="/github-mark.webp" alt="github logo" />
          </a>
        </div>
      </div>
    </div>
  );
};
