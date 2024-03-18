import React, { useState } from "react";
import Switch from "react-switch";
import TeamProjects from "./ProjectsComponents/TeamProjects";
import PersonalProjects from "./ProjectsComponents/PersonalProjects";

const Projects = () => {
  const [showTeamProjects, setShowTeamProjects] = useState(false);
  const [showPersonalProjects, setShowPersonalProjects] = useState(false);

  const toggleTeamProjects = () => {
    setShowTeamProjects(!showTeamProjects);
  };

  const togglePersonalProjects = () => {
    setShowPersonalProjects(!showPersonalProjects);
  };

  return (
    <div>
      <div className="text-blue-500 text-2xl font-bold mb-14">PROJECTS</div>

      {/* TEAM PROJECTS */}
      <div className="mt-14 flex justify-between items-center">
        <div className="text-blue-900 text-xl font-bold ml-10">
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
        <div className="text-blue-900 text-xl font-bold ml-10">
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
    </div>
  );
};

export default Projects;
