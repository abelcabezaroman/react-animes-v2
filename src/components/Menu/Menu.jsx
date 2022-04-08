import { Link } from "react-router-dom";
import BackgroundPlayer from "../BackgroundPlayer/BackgroundPlayer";
import "./Menu.scss";

export default function Menu() {
  return (
    <nav className="c-menu">
      <div className="container d-flex justify-content-between align-items-center">
        <div>
          <div className="d-flex align-items-center">
            <Link className="c-menu__link" to="/">
              <div className="d-flex align-items-center">
                <img className="me-2 c-menu__logo" src="skull.png" alt="logo" />
                Waranime
              </div>
            </Link>
            <Link className="c-menu__link" to="/animes">
              Animes
            </Link>
            <Link className="c-menu__link" to="/contact">
              Contact
            </Link>
          </div>
        </div>
        <div>
          <BackgroundPlayer />
        </div>
      </div>
    </nav>
  );
}
