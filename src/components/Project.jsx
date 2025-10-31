import  { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  setPreview,
}) => {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <>
      <div
        className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        <div>
          <p className="text-2xl">{title}</p>
          <div className="flex gap-5 mt-2 text-sand">
            {tags.map((tag) => (
              <span key={tag.id}>{tag.name}</span>
            ))}
          </div>
        </div>
        <button
          onClick={() => setIsHidden(true)}
          className="flex items-center gap-1 cursor-pointer hover-animation"
        >
          Read More
          <img src="assets/arrow-right.svg" className="w-5" />
        </button>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent p-[10px] h-[1px] w-full" />
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

// Prop validation for Project component
Project.propTypes = {
  title: PropTypes.string.isRequired, // title should be a required string
  description: PropTypes.string.isRequired, // description should be a required string
  subDescription: PropTypes.string, // subDescription is optional and should be a string
  href: PropTypes.string.isRequired, // href should be a required string
  image: PropTypes.string.isRequired, // image should be a required string (URL)
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired, // tag id should be a required string
      name: PropTypes.string.isRequired, // tag name should be a required string
    })
  ).isRequired, // tags should be an array of objects with id and name
  setPreview: PropTypes.func.isRequired, // setPreview should be a required function
};

export default Project;
