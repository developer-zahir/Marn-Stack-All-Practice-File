import { LuLogIn } from "react-icons/lu";
import { Link, useLocation } from "react-router-dom";
import "./Header.scss";
import { checkRoute } from "../../helpers/Helpers";

const Header = () => {
  const location = useLocation();

  return (
  
        <>
          <header>
            <div className="container">
              <div className="header-left">
                <div className="header-left-inner">
                  <div className="log">
                    <Link to="/">
                      <img src="https://websitedemos.net/hope-02/wp-content/uploads/sites/1410/2023/10/logo-black-1.png" alt="" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="header-right">
                <div className="header-right-inner">
                  <ul className="menu">
                    <li>
                      <Link to="/" className={location.pathname === "/" ? "active" : ""}>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>
                        About
                      </Link>
                    </li>
                    <li>
                      <Link to="/services" className={location.pathname === "/services" ? "active" : ""}>
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog" className={location.pathname === "/blog" ? "active" : ""}>
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link to="/admin" className={checkRoute(location.pathname, "admin") ? "active" : ''}>
                        <div style={{ display: "flex", alignItem: "center", gap: "10px" }}>
                          <span style={{ display: "inline-block", marginTop: "3px" }}>
                            <LuLogIn />
                          </span>
                          Login
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </header>
    
    </>
  );
};

export default Header;
