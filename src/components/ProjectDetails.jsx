import { motion } from "motion/react";
import PropTypes from "prop-types"; // Import PropTypes

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-[95vh] mt-2 overflow-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden backdrop-blur-sm">
      <motion.div
        className="relative max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button
          onClick={closeModal}
          className="absolute p-2 rounded-sm top-15 right-5 bg-midnight hover:bg-gray-500"
        >
          <img src="assets/close.svg" className="w-6 h-6" />
        </button>
        <img src={image} alt={title} className="w-full rounded-t-2xl" />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
          <p className="mb-3 font-normal text-neutral-400">{description}</p>
          {subDescription.map((subDesc, index) => (
            <p key={index} className="mb-3 font-normal text-neutral-400">{subDesc}</p>
          ))}
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-3">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className="rounded-lg size-10 hover-animation"
                />
              ))}
            </div>
            <a
              className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation"
              href={href} // Added href here
            >
              View Project{" "}
              <img src="assets/arrow-up.svg" className="size-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Prop validation for ProjectDetails component
ProjectDetails.propTypes = {
  title: PropTypes.string.isRequired, // title should be a required string
  description: PropTypes.string.isRequired, // description should be a required string
  subDescription: PropTypes.arrayOf(PropTypes.string).isRequired, // subDescription should be an array of strings
  image: PropTypes.string.isRequired, // image should be a required string (URL)
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired, // tag id should be a required string
      path: PropTypes.string.isRequired, // tag path (image URL) should be a required string
      name: PropTypes.string.isRequired, // tag name should be a required string
    })
  ).isRequired, // tags should be an array of objects with id, path, and name
  href: PropTypes.string.isRequired, // href should be a required string (URL)
  closeModal: PropTypes.func.isRequired, // closeModal should be a required function
};

export default ProjectDetails;
