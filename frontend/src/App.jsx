import { Route, Routes } from "react-router-dom";
import "./App.css";
import AppLayout from "./AppLayout";
import HomePage from "./Pages/HomePage";
import { Toaster } from "sonner";
import FlashCard from "./components/FlashCard";
import Notes from "./components/Notes";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <h1 className="App">
        <Navbar />
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/home" Component={AppLayout} />
          <Route path="/flashcards" Component={FlashCard} />
          <Route path="/notes" Component={Notes} />
        </Routes>

        <Toaster richColors />
      </h1>
    </>
  );
}

export default App;
