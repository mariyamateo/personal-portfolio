import axios from "axios";
import React, { useState } from "react";
import { ContactButton } from "../Cards";

const Contact = ({ onClick }) => {
  const [quote, setQuote] = useState("");
  const getQuote = () => {
    axios
      .get("https://api.quotable.io/random")
      .then((res) => {
        setQuote(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='bg-[url("/images/contact.jpg")] bg-fixed bg-no-repeat bg-bottom bg-cover relative'>
      <div className="bg-black opacity-80 py-16 flex flex-col items-center justify-center md:justify-start text-center h-screen md:py-32 md:justify-center">
        <h2 className="w-2/3 text-[#FF8E5E]">
          Are you a business seeking for a web presence or{" "}
          <br className="hidden md:block" /> an employer looking to hire?
        </h2>
        <div className="flex flex-col mt-12 space-y-6 md:space-y-10 md:mt-16">
          <ContactButton
            link={"mailto:ma.clarissepmateo@gmail.com"}
            image={"/images/svg/mail.gif"}
            caption={"Shoot me an email"}
          />
          <ContactButton
            link={"https://www.linkedin.com/in/maclarisse-mateo/"}
            image={"/images/svg/linkedin.gif"}
            caption={"Connect via LinkedIn"}
          />
        </div>
        <div className="px-5 py-1 absolute bottom-0 left-0 bg-[#1E1E1E] w-full text-left">
          <div className="flex flex-col space-y-2 items-center xl:space-y-0 xl:flex-row justify-between">
            <div className="flex flex-col space-y-2 xl:space-y-0 xl:flex-row items-center space-x-1">
              <h6>Copyright © 2023 Ma. Clarisse Mateo </h6>
              <h6 className="hidden xl:block">•</h6>
              <span
                className="cursor-pointer hover:text-slate-300 text-base"
                onClick={onClick}
              >
                <h6>Disclaimer</h6>
              </span>
              <h6 className="hidden xl:block">•</h6>
              <span
                className="cursor-pointer hover:text-slate-300 text-base"
                onClick={() => window.open('/games/guess-my-number', "_blank")}
              >
                <h6>Games</h6>
              </span>
            </div>
            <div>
              {quote ? (
                <h6 className="text-center">{quote}</h6>
              ) : (
                <button
                  onClick={getQuote}
                  className="flex flex-row items-center space-x-1 group"
                >
                  <img
                    className="w-5"
                    src="/images/png/star.png"
                    alt="tap-here"
                    draggable={false}
                  />
                  <h6 className="text-yellow-100 group-hover:text-yellow-300">
                    Surprise!
                  </h6>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
