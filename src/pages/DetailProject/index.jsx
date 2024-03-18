import React from "react";
import { useParams } from "react-router-dom";
import Barrel from "./Sections/Barrel";
import MasilCoffee from "./Sections/MasilCoffee";

const DetailProject = () => {
  const { id } = useParams();

  console.log(id);
  return (
    <div>
      <Barrel projectId={id} />
      <MasilCoffee projectId={id} />
    </div>
  );
};

export default DetailProject;
