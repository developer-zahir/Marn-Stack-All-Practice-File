import "./PageHeader.scss"
import PropTypes from "prop-types";

const PageHeader = ({ pageName, pageDis }) => {
  return (
    <>
      <section className="page-banner">
        <div className="container">
          <div className="page-banner-left">
            {pageName ? <h2>{pageName}</h2> : null}
            <p>{pageDis}</p>
          </div>
          <div className="page-banner-left"></div>
        </div>
      </section>
    </>
  );
};

PageHeader.propTypes = {
  pageName: PropTypes.string, // Assuming pageName should be a string, adjust accordingly
  pageDis: PropTypes.string.isRequired, // Assuming pageDis is a required string, adjust accordingly
};

export default PageHeader;
