import yogaIcon from "../assets/navbarIcons/yogaIcon.png";
import swimmingIcon from "../assets/navbarIcons/swimmingIcon.png";
import bikeIcon from "../assets/navbarIcons/bikeIcon.png";
import weightIcon from "../assets/navbarIcons/weightIcon.png";

const LateralNavbar = () => {
  return (
    <aside className="lateral">
      <section className="lateral__icons">
        <img src={yogaIcon} alt="Icone d'une personne en position de yoga" />
        <img src={swimmingIcon} alt="Icone d'une personne en train de nager" />
        <img src={bikeIcon} alt="Icone d'une personne en train de faire du vélo" />
        <img src={weightIcon} alt="Icone d'une haltère" />
      </section>

      <p className="lateral__text">Copyright, SportSee 2020</p>
    </aside>
  );
};

export default LateralNavbar;