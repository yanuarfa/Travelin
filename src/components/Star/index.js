import React from "react";

import PropTypes from "prop-types";

import "./index.scss";

export default function Star({ className, value, height, width, spacing }) {
  const decimals = Number(value) % 1;
  const star = [];
  let leftPos = 0;
  for (let i = 0; i < 5 && i < value - decimals; i++) {
    leftPos = leftPos + width;
    star.push(
      <div
        className="star"
        key={`star-${i}`}
        style={{
          left: i * width,
          height: height,
          width: width,
          marginRight: spacing,
        }}
      ></div>
    );
  }

  if (decimals > 0 && value <= 5) {
    star.push(
      <div
        className="star"
        key={`starWithDecimal`}
        style={{
          left: leftPos,
          height: height,
          width: decimals * width - spacing,
        }}
      ></div>
    );
  }

  const starPlaceholder = [];
  for (let i = 0; i < 5; i++) {
    starPlaceholder.push(
      <div
        className="star placeholder"
        key={`starPlaceholder-${i}`}
        style={{
          left: i * width,
          height: height,
          width: width,
          marginRight: spacing,
        }}
      ></div>
    );
  }

  return (
    <>
      <div
        className={["stars", className].join(" ")}
        style={{ height: height }}
      >
        {starPlaceholder}
        {star}
      </div>
    </>
  );
}

Star.propTypes = {
  className: PropTypes.string,
  value: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  spacing: PropTypes.number,
};
