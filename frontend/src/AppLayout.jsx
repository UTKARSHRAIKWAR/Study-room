import React from "react";
import GPT from "./components/GPTComponent";
import Notes from "./components/Notes";
import Timer from "./components/Timer";
import FlashCard from "./components/FlashCard";
import GPTComponent from "./components/GPTComponent";
import Navbar from "./components/Navbar";

const AppLayout = () => {
  return (
    <div>
      <GPTComponent />
      <Timer />
    </div>
  );
};

export default AppLayout;
