import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <section className="error">
      <div>
        <h2 className="error__title">404</h2>
        <p className="error__text">{isRouteErrorResponse(error)
          ? "La page que vous demandez n'existe pas."
          : "Une erreur s'est produite."}</p>
      </div>
      <Link to="/" className="error__link"> {`<--`} Revenir à la page d'accueil</Link>
    </section>
  );
};

export default Error;