import React, { useState } from "react";
import Switch from "react-switch";
import TeamProjects from "./ProjectsComponents/TeamProjects";
import PersonalProjects from "./ProjectsComponents/PersonalProjects";
import EtcRepo from "./ProjectsComponents/Etc";

const Projects = () => {
  const [showTeamProjects, setShowTeamProjects] = useState(false);
  const [showPersonalProjects, setShowPersonalProjects] = useState(false);
  const [showEtcs, setShowEtcs] = useState(false);

  const toggleTeamProjects = () => {
    setShowTeamProjects(!showTeamProjects);
  };

  const togglePersonalProjects = () => {
    setShowPersonalProjects(!showPersonalProjects);
  };

  const toggleEtcs = () => {
    setShowEtcs(!showEtcs);
  };

  return (
    <div>
      <div className="mb-14">
        <h1 className="text-blue-500 text-4xl font-bold">PROJECTS</h1>
        <span className="text-gray-500 text-sm">
          특정 프로젝트 클릭 시 github repository로 이동
        </span>
      </div>
      {/* TEAM PROJECTS */}
      <div className="mt-14 flex justify-between items-center">
        <div className="text-blue-900 text-2xl font-bold ml-10">
          Team Projects
        </div>
        <div className="mr-10">
          <Switch
            onChange={toggleTeamProjects}
            checked={showTeamProjects}
            offColor="#6b7280"
            onColor="#2563eb"
            checkedIcon={false}
            uncheckedIcon={false}
          />
        </div>
      </div>
      <hr className="mt-6" />
      {showTeamProjects && <TeamProjects />}

      {/* PERSONAL PROJECT */}
      <div className="mt-14 flex justify-between items-center">
        <div className="text-blue-900 text-2xl font-bold ml-10">
          Personal Projects
        </div>
        <div className="mr-10">
          <Switch
            onChange={togglePersonalProjects}
            checked={showPersonalProjects}
            offColor="#6b7280"
            onColor="#2563eb"
            checkedIcon={false}
            uncheckedIcon={false}
          />
        </div>
      </div>
      <hr className="mt-6" />
      {showPersonalProjects && <PersonalProjects />}

      {/* ETC PROJECT */}
      <div className="mt-14 flex justify-between items-center">
        <div className="text-blue-900 text-2xl font-bold ml-10">Etc</div>
        <div className="mr-10">
          <Switch
            onChange={toggleEtcs}
            checked={showEtcs}
            offColor="#6b7280"
            onColor="#2563eb"
            checkedIcon={false}
            uncheckedIcon={false}
          />
        </div>
      </div>
      <hr className="mt-6" />
      {showEtcs && <EtcRepo />}
    </div>
  );
};

export default Projects;
