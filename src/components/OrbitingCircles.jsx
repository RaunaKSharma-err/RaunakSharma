import { twMerge } from "tailwind-merge";
import React from "react";
import PropTypes from "prop-types"; // Import PropTypes

export function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
  ...props
}) {
  const calculatedDuration = duration / speed;

  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="absolute inset-0 pointer-events-none size-full"
        >
          <circle
            className="stroke-1 stroke-white/10"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
          />
        </svg>
      )}
      {React.Children.map(children, (child, index) => {
        const angle = (360 / React.Children.count(children)) * index;
        return (
          <div
            style={{
              "--duration": calculatedDuration,
              "--radius": radius,
              "--angle": angle,
              "--icon-size": `${iconSize}px`,
            }}
            className={twMerge(
              `absolute flex size-[var(--icon-size)] transform-gpu animate-orbit items-center justify-center rounded-full ${
                reverse ? "[animation-direction:reverse]" : ""
              }`,
              className
            )}
            {...props}
          >
            {child}
          </div>
        );
      })}
    </>
  );
}

// Prop validation for OrbitingCircles component
OrbitingCircles.propTypes = {
  className: PropTypes.string, // className should be a string (optional)
  children: PropTypes.node.isRequired, // children is required and should be a React node
  reverse: PropTypes.bool, // reverse should be a boolean (optional)
  duration: PropTypes.number, // duration should be a number (optional)
  radius: PropTypes.number, // radius should be a number (optional)
  path: PropTypes.bool, // path should be a boolean (optional)
  iconSize: PropTypes.number, // iconSize should be a number (optional)
  speed: PropTypes.number, // speed should be a number (optional)
};
