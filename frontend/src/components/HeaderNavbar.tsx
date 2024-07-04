import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const HeaderNavbar = () => {
  return (
    <header className="header">
      <h1 className="header__title">
        <img src={logo} alt="Logo SportSee" className="header__title__logo" />
      </h1>
      <Link to="/">Accueil</Link>
      <Link to="/user/:id">Profil</Link>
      <Link to="/">Réglage</Link>
      <Link to="/">Communauté</Link>
    </header>
  );
};

export default HeaderNavbar;