export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">Edu<span>port</span></div>
      <div className="navbar__links">
        <a href="#">Demos</a>
        <a href="#">Pages</a>
        <a href="#">Accounts</a>
        <a href="#">Components</a>
      </div>
      <div className="navbar__actions">
        <a href="#" className="btn btn-outline">Sign In</a>
        <a href="#" className="btn btn-primary">Sign Up</a>
        <img
          src="https://stackbros.in/eduport/landing/assets/images/avatar/01.jpg"
          alt="avatar"
          className="avatar-sm"
        />
      </div>
    </nav>
  );
}
