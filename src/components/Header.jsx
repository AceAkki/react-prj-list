import imgLogo from "src/assets/react.svg"

export default function Header() {
  return (
    <header className="header">
      <nav className="nav-bar">
        <div className="logo-wrap">
          <img src={imgLogo} alt="" className="logo" />
          <span className="logo-txt">ReactFacts</span>
        </div>

        {/* <div>
          <ul className="nav-list">
            <li className="nav-item">Pricing</li>
            <li className="nav-item">About</li>
            <li className="nav-item">Contact</li>
          </ul>
        </div> */}
      </nav>
    </header>
  );
}
