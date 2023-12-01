import { Link } from "react-router-dom";
import "./home.scss";

const Home = () => {
  return (
    <>
    

      <section className="banner-section">
        <div className="container">
          <div className="banner-left">
            <h1>Hello</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ipsum corporis incidunt numquam ratione. Autem cupiditate hic non cumque! Eligendi,
              assumenda maiores quae amet expedita vitae magnam harum perspiciatis voluptatibus.
            </p>
            <Link to="#">Get Started</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
