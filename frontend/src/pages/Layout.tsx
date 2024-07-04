import HeaderNavbar from "../components/HeaderNavbar";
import LateralNavbar from "../components/LateralNavbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <HeaderNavbar />
      <LateralNavbar />
      <Outlet />
    </>
  );
};

export default Layout;