import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const HeaderNavbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar__title">
        <img src={logo} alt="Logo SportSee" className="navbar__title__logo" />
      </h1>
      <Link to="/">Accueil</Link>
      <Link to="/user/:id">Profil</Link>
      <Link to="/">Réglage</Link>
      <Link to="/">Communauté</Link>
    </nav>
  );
};

export default HeaderNavbar;