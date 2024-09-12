import { Outlet } from "react-router-dom";
import HeaderNavbar from "../components/HeaderNavbar";
import LateralNavbar from "../components/LateralNavbar";

const Layout = () => {
  return (
    <div className="main-container">
      <HeaderNavbar />
      <section className="container">
        <LateralNavbar />
        <Outlet />
      </section>
    </div>
  );
};

export default Layout;