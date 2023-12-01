import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <img src="https://websitedemos.net/hope-02/wp-content/uploads/sites/1410/2023/10/logo-black-1.png" alt="" />
        <p>© 2023 Hope Starter Design</p>
      </div>
    </footer>
  );
};

export default Footer;
