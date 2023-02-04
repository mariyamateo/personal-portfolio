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
      <div className="flex flex-row items-center space-x-4">
        <h4>{work.company}</h4>
        <h6>({work.date})</h6>
      </div>
      <h6 className="pt-4">{work.role}</h6>
      <div className="flex flex-col space-y-1 pt-3">
        {work.work.map((item) => (
          <h6>• {item}</h6>
        ))}
      </div>
    </div>
  );
};
