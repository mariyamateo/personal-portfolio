import React from "react";
import { ContactButton } from "../Cards";

const Contact = ({ onClick }) => {
  return (
    <div className='bg-[url("/images/contact.jpg")] bg-fixed bg-no-repeat bg-bottom bg-cover relative'>
      <div className="bg-black opacity-80 py-16 flex flex-col items-center justify-start text-center h-screen md:py-32 md:justify-center">
        <h2 className="w-2/3">
          Are you a business seeking for a web presence or an employer looking
          to hire?
        </h2>
        <div className="flex flex-col space-y-4 mt-12 md:space-y-10 md:mt-16">
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
        <div className="px-5 py-3 absolute bottom-0 left-0">
          <h6>
            Copyright © 2023 Ma. Clarisse Mateo •{" "}
            <span
              className="cursor-pointer hover:text-slate-300"
              onClick={onClick}
            >
              Disclaimer
            </span>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Contact;
