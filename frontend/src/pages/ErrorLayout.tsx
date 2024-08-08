import HeaderNavbar from "../components/HeaderNavbar.tsx";
import Error from "./Error.tsx";
import LateralNavbar from "../components/LateralNavbar.tsx";

const ErrorLayout = () => {
  return (
    <>
      <HeaderNavbar />
      <section className="container">
        <LateralNavbar />
        <Error />
      </section>
    </>
  );
};

export default ErrorLayout;