import { Link, Outlet, useLocation } from "react-router-dom";
import { MdAssessment, MdOutlinePostAdd, MdOutlineCategory, MdOutlineSettings } from "react-icons/md";

import "./Admin.scss";
import { checkRoute } from "../../helpers/Helpers";

const Admin = () => {
  const location = useLocation();
  return (
    <>
      <section className="dashbord-section">
        <div className="container">
          <div className="dashbord-left">
            <div className="left-inner">
              <ul>
                <li>
                  <Link to="overview" className={checkRoute(location.pathname, "overview") ? "active" : ""}>
                    {" "}
                    <span>
                      <MdAssessment />
                    </span>{" "}
                    Overview
                  </Link>
                </li>
                <li>
                  <Link to="post" className={checkRoute(location.pathname, "post") ? "active" : ""}>
                    {" "}
                    <span>
                      <MdOutlinePostAdd />
                    </span>{" "}
                    Post
                  </Link>
                </li>
                <li>
                  <Link to="category" className={checkRoute(location.pathname, "category") ? "active" : ""}>
                    <span>
                      <MdOutlineCategory />
                    </span>{" "}
                    Category
                  </Link>
                </li>
                <li>
                  <Link to="settings" className={checkRoute(location.pathname, "settings") ? "active" : ""}>
                    <span>
                      <MdOutlineSettings />
                    </span>{" "}
                    Setting
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="dashbord-right">
            <div className="right-inner">
              <Outlet />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Admin;
