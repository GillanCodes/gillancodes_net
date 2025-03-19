import { BrowserRouter, Routes, Route } from "react-router";
import Landing from "../pages/Landing/Landing";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";

export default function index()
{
  return (
    <>
      <BrowserRouter>
        <Landing />
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
