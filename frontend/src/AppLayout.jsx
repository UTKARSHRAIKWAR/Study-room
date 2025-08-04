import React from "react";
import GPT from "./components/GPTComponent";
import Notes from "./components/Notes";
import Timer from "./components/Timer";
import FlashCard from "./components/FlashCard";
import GPTComponent from "./components/GPTComponent";

const AppLayout = () => {
  return (
    <div>
      <GPTComponent />
      <Notes />
      <Timer />
      <FlashCard />
    </div>
  );
};

export default AppLayout;
