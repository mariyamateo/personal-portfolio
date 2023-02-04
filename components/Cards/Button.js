import React from "react";

export const Button = ({ label, disabled }) => {
  return (
    <button
      className="flex flex-row items-center justify-center space-x-2 w-fit rounded-full px-7 py-4 bg-[#FF8E5E] text-black"
      disabled={disabled}
    >
      <h5>{label}</h5>
    </button>
  );
};

export const ContactButton = ({ link, image, caption }) => {
  return (
    <button
      className="flex flex-row items-center justify-center space-x-2 w-full rounded-full px-6 py-2 bg-white text-black transition-all ease-linear duration-300 hover:shadow-lg hover:shadow-[#FF8E5E] transition-all ease-linear duration-300"
      onClick={() => window.open(link, "_blank")}
    >
      <img src={image} alt="button" draggable={false} />
      <h3>{caption}</h3>
    </button>
  );
};
