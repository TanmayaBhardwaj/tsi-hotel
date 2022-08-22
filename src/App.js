import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./tsi/Contact";
import Gallery from './tsi/Gallery';

import Home from "./tsi/Home";
// import Room from "./tsi/Room";
import NavvBar from "./tsi/NavvBar";
import Room from "./tsi/Room";
// import Contact from "./tsi/Contact";
import Enquiry from './tsi/Enquiry'
import Extra from "./tsi/Extra";
import Dining from "./tsi/Dining";

import Deluxe from "./tsi/Deluxe"
import Premier from "./tsi/Premier"
import Luxury from "./tsi/Luxury"
import About from "./tsi/About"

import Thanku from './tsi/Thanku';

function App() {
  return (
    <>
 
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/gallery" element={<Gallery/>}></Route>
            <Route path="/room" element={<Room/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/back" element={<Home/>}></Route>
            <Route path="/enquiry" element={<Enquiry/>}></Route>
            <Route path="/extra" element={<Extra/>}></Route>
            <Route path="/dining" element={<Dining/>}></Route>
            <Route path="/deluxe" element={<Deluxe/>}></Route>
            <Route path="/luxury" element={<Luxury/>}></Route>
            <Route path="/premier" element={<Premier/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            
            <Route path='/thanku' element={<Thanku/>}> </Route>
        </Routes>
        </BrowserRouter>

        </>
    )
}



export default App;
