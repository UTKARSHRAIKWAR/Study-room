import { Route, Routes } from "react-router-dom";
import "./App.css";
import AppLayout from "./AppLayout";
import HomePage from "./Pages/HomePage";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <h1 className="App">
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/home" Component={AppLayout} />
        </Routes>

        <Toaster richColors />
      </h1>
    </>
  );
}

export default App;
