import React from "react";

export const SkillCards = ({ desc }) => {
  return (
    <div
      key={desc.id}
      style={{ borderColor: desc.border }}
      className="border-l-8 pl-4 py-6 rounded"
    >
      <h4 className="pb-4">{desc.title}</h4>
      <h6>{desc.caption}</h6>
    </div>
  );
};

export const TechCards = ({ skills }) => {
  return (
    <div key={skills.id} className="flex flex-col items-center space-y-2">
      <img
        className="w-12 h-12 m-0"
        src={skills.image}
        alt={skills.name}
        draggable={false}
      />
      <h6 className="text-slate-500 text-sm text-center">{skills.name}</h6>
    </div>
  );
};

export const WorkCards = ({ work }) => {
  return (
    <div key={work.id}>
      <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
        <h4>{work.company}</h4>
        <h6>({work.date})</h6>
      </div>
      <h6 className="pt-1">{work.role}</h6>
      <div className="flex flex-col space-y-1 pt-3">
        {work.work.map((item) => (
          <h6>• {item}</h6>
        ))}
      </div>
    </div>
  );
};

export const DeliverablesCard = ({ proj }) => {
  return (
    <div className="relative w-3/4 lg:w-full mx-auto">
      <div
        className="overflow-hidden overscroll-none rounded-[16px] shadow-[0px_1px_32px_7px_#131313] relative group"
        key={proj.id}
      >
        <h2 className="absolute right-4 bottom-8 lg:right-12 text-[#FF8E5E] group-hover:hidden">
          {proj.name}
        </h2>
        <div className="backdrop-blur-sm bg-black opacity-10 transition-all ease-linear hover:opacity-80 w-full overflow-x-hidden h-96">
          <img src={proj.image} alt={proj.name} draggable={false} />
        </div>
      </div>
      <div
        className="absolute -bottom-4 -right-4"
        onClick={() => window.open(proj.link, "_blank")}
      >
        <img
          className="h-12 cursor-pointer shadow-[0px_1px_32px_7px_#131313] rounded-full"
          src="/images/svg/link.svg"
          alt="link"
          draggable={false}
        />
      </div>
    </div>
  );
};
