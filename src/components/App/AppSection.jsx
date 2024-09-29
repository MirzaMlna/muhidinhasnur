import PropTypes from "prop-types";

AppSection.propTypes = {
  id: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

const AppSection = ({
  id = "null",
  icon = "bi-question-circle-fill",
  title = "Section",
  children,
}) => {
  return (
    <section id={id} className="px-2 px-md-5 py-5">
      <div className="display-6 fw-bold text-start mb-5">
        <i className={`bi ${icon} text-mh-primary`}></i> {title}
        <div className="section-title-line"></div>
      </div>
      {children}
    </section>
  );
};

export default AppSection;
