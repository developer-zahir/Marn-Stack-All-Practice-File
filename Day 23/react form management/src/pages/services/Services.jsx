import "./Services.scss";
import PageHeader from "../../components/PageHeader/PageHeader";

function Services() {
  return (
    <>
      <PageHeader
        pageName="Services"
        pageDis={`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias commodi facere quia libero temporibus quos.`}
      />

      <section className="services">
        <div className="container">
          <div className="services-title">
            <h2>Our Services</h2>
            <p>Explore our wide range of services</p>
          </div>

          <div className="services-container">
            <div className="service-box">
              <div className="icon">🚀</div>
              <h3>Service 1</h3>
              <p>Short description of service 1.</p>
            </div>
            <div className="service-box">
              <div className="icon">💡</div>
              <h3>Service 2</h3>
              <p>Short description of service 2.</p>
            </div>
            <div className="service-box">
              <div className="icon">🌐</div>
              <h3>Service 3</h3>
              <p>Short description of service 3.</p>
            </div>
            <div className="service-box">
              <div className="icon">🎨</div>
              <h3>Service 4</h3>
              <p>Short description of service 4.</p>
            </div>
            <div className="service-box">
              <div className="icon">🛠️</div>
              <h3>Service 5</h3>
              <p>Short description of service 5.</p>
            </div>
            <div className="service-box">
              <div className="icon">📈</div>
              <h3>Service 6</h3>
              <p>Short description of service 6.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
