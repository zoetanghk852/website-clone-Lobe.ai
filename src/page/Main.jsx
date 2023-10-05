import React from "react";
import Hero from "./Homepage/Hero";
import Templates from "./Homepage/Templates";
import Train from "./Homepage/Train";
import Export from "./Homepage/Export";
import Carousels from "./Homepage/Carousels";
import FinalCall from "./Homepage/FinalCall";

function Main() {
  return (
    <div>
      <Hero />
      <Templates />
      <Train />
      <Export />
      <Carousels />
      <FinalCall />
    </div>
  );
}

export default Main;
