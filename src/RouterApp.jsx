import {  Route, Routes } from "react-router-dom";
import ProyectosContainer from "../src/pages/Work/ProyectosContainer";
import Contact from "../src/pages/Contact/Contact"; 
import About from "../src/pages/About/About";
import Home from "./pages/Home/Home";
import video from "../src/assets/videos/Ink.mp4"
import HabsSkill from "./Components/HabSkill/HabSkill";

const RouterApp = () => {
    return (
		<>
		<div className="container-fluid">
			<video autoPlay loop muted>
		    	<source src={video} type='video/mp4' />
		</video>
		</div>
		<Routes>
			<Route path="/" element={<Home/>}/>
			<Route path="/Me" element={ <About/>}/>
			<Route path="/Skills" element={ <HabsSkill/>}/>
			<Route path="/Work" element={ <ProyectosContainer/>}/>
			<Route path="/Contact" element={ <Contact/>}/>
		</Routes>
		</>
    )
}

export default RouterApp;