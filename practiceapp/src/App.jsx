import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Tasks from "./components/Tasks";
import LifeCycleEx1 from "./components/LifeCycleEx1";
import FunC from "./components/FunC";
import ListCycleEx2 from "./components/ListCycleEx2";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Nav from "./Pages/Nav";
import Footer from "./components/Footer";
Footer
function App() {
  const [show, setShow] = useState(true);

  return (
    <>
      {/* <Tasks/> */}
      {/* <button
        className="border rounded-lg max-w-sm px-4 bg-sky-500 hover:bg-sky-800 transition duration-900" onClick={() => setShow(!show)}>
        {/* {show ? "Hide" : "Show"}
      </button> */}
      {/* {show && <LifeCycleEx1 />} */}
      {/* {show && <ListCycleEx2/>} */}
      {/* {show && <FunC />} */}
      <BrowserRouter>
        <div  className="justify-between border rounded-lg max-w-full min-h-[45px] px-6 bg-sky-500 hover:bg-sky-800 transition duration-900" ><Nav /> </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
