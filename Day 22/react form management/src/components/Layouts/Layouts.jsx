import "./Layouts.scss";
import Header from "../Header/Header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet";

const Layouts = () => {
  const location = useLocation();
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Developer zahir | {location.pathname === "/" ? "Home" : location.pathname.replace("/", "").charAt(0).toUpperCase() + location.pathname.slice(1)}
        </title>
      </Helmet>

      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layouts;
