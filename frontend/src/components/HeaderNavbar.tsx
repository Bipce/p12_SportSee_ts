import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const HeaderNavbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar__title">
        <img src={logo} alt="Logo SportSee" className="navbar__title__logo" />
      </h1>
      <Link to="/">Accueil</Link>
      <Link to="/error">Profil</Link>
      <Link to="/error">Réglage</Link>
      <Link to="error">Communauté</Link>
    </nav>
  );
};

export default HeaderNavbar;