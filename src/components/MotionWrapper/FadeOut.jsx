import { motion } from "framer-motion";
import PropTypes from "prop-types";

const FadeOut = ({ children, duration = 0.5 }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
};

FadeOut.propTypes = {
  duration: PropTypes.number,
  children: PropTypes.node.isRequired,
};

export default FadeOut;
