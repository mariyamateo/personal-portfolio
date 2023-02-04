import React from "react";

const DisClaimer = ({ show, close }) => {
  return (
    <>
      {show && (
        <div className="relative p-16 text-center bg-black h-screen">
          <h6
            className="absolute top-16 right-16 cursor-pointer text-slate-600 hover:text-slate-500"
            onClick={close}
          >
            CLOSE
          </h6>
          <div className="flex flex-col items-center justify-center space-y-5 h-full m-auto text-slate-300">
            <h5>CONTENT DISCLAIMER</h5>
            <p>
              Developer represents and warrants that developer has the
              knowledge, skill and experience necessary to produce the works.
              Projects are intellectual property of each client or employer.
              This site was created to showcase the skills, trade, profession
              and expertise of the developer.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default DisClaimer;
