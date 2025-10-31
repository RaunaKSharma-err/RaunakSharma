import { OrbitingCircles } from "./OrbitingCircles";
import PropTypes from "prop-types"; // Import PropTypes

export function Frameworks() {
  const skills = [
    "cplusplus",
    "csharp",
    "css3",
    "git",
    "html5",
    "javascript",
    "react",
    "sqlite",
    "tailwindcss",
  ];

  const PngSkill = [
    "nodejs",
    "openaq",
    "openweather",
    "python",
    "tkinter",
    "Radix",
    "supabase",
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {PngSkill.reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.png`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);

// Prop validation for Icon component
Icon.propTypes = {
  src: PropTypes.string.isRequired, // src should be a string and is required
};

export default Frameworks;
