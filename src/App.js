import logo from "./logo.svg";
import "./App.css";
import Header from "./userComponents/header/Header";
import Slider from "./userComponents/slider/Slider";
import About from "./userComponents/about/About";
import Building from "./userComponents/building/Building";
import Service from "./userComponents/service/Service";
import Instant from "./userComponents/instant/Instant";
import Footer from "./userComponents/footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./userComponents/home/Home";
import Login from "./userComponents/login/Login";
import Signup from "./userComponents/signup/Signup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Dashboard from "./userComponents/dashboard/Dashboard";
import CreatePost from "./userComponents/createPost/Create_post";
import Dashboard from "./userComponents/dashboard/Dashboard";

function App() {
  return (
    <>
      <Header />
      <ToastContainer />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/service" element={<Service />} />
        <Route exact path="/instant" element={<Instant />} />
        <Route exact path="/building" element={<Building />} />
        <Route exact path="/createpost" element={<CreatePost />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
