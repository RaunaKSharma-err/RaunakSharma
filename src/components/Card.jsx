import { motion } from "motion/react";
import PropTypes from "prop-types"; // Import PropTypes

const Card = ({ style, text, image, containerRef }) => {
  return image && !text ? (
    <motion.img
      className="absolute w-15 cursor-grab"
      src={image}
      style={style}
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
    />
  ) : (
    <motion.div
      className="absolute px-1 py-4 text-xl text-center rounded-full ring ring-gray-700 font-extralight bg-storm w-[12rem] cursor-grab"
      style={style}
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
    >
      {text}
    </motion.div>
  );
};

// Add PropTypes validation
Card.propTypes = {
  style: PropTypes.object, // The style should be an object (for inline styles)
  text: PropTypes.string, // The text prop should be a string
  image: PropTypes.string, // The image prop should be a string (URL of the image)
  containerRef: PropTypes.object, // The containerRef should be an object (ref object)
};

export default Card;
