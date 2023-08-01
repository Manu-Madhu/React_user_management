import Home from "../Components/Home";
import Nav from "../Components/Nav";
import "../App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./Profile";

const Main = () => {
  return (
    <div className="background w-screen bg-gradient-to-r h-screen flex flex-col items-center justify-center">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Main;
