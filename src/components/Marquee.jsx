import { twMerge } from "tailwind-merge";
import PropTypes from "prop-types"; // Import PropTypes

export default function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}) {
  return (
    <div
      {...props}
      className={twMerge(
        `group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)] ${
          vertical ? "flex-col" : "flex-row"
        }`,
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={twMerge(
              "flex shrink-0 justify-around [gap:var(--gap)]",
              vertical
                ? "animate-marquee-vertical flex-col"
                : "animate-marquee flex-row",
              pauseOnHover && "group-hover:[animation-play-state:paused]",
              reverse && "[animation-direction:reverse]"
            )}
          >
            {children}
          </div>
        ))}
    </div>
  );
}

// Prop validation for Marquee component
Marquee.propTypes = {
  className: PropTypes.string, // className should be a string (optional)
  reverse: PropTypes.bool, // reverse should be a boolean (optional)
  pauseOnHover: PropTypes.bool, // pauseOnHover should be a boolean (optional)
  children: PropTypes.node, // children should be any renderable React node
  vertical: PropTypes.bool, // vertical should be a boolean (optional)
  repeat: PropTypes.number, // repeat should be a number (optional)
};

