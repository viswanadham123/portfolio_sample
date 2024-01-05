import React from "react";

const sizeClasses = {
  txtPlayfairDisplayBold48: "font-bold font-playfairdisplay",
  txtComfortaaBold18: "font-bold font-comfortaa",
  txtNunitoBold20: "font-bold font-nunito",
  txtNunitoSemiBold16: "font-nunito font-semibold",
  txtNunitoRegular24: "font-normal font-nunito",
  txtPlayfairDisplayBold40: "font-bold font-playfairdisplay",
  txtRalewayMedium18: "font-medium font-raleway",
  txtNunitoRegular16: "font-normal font-nunito",
  txtNunitoRegular18: "font-normal font-nunito",
  txtPlayfairDisplayBold64: "font-bold font-playfairdisplay",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
