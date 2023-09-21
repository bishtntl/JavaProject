import BollyWood from "../component/Bollywood";
import HollyWood from "../component/Hollywood";
import HomeCompo from "../component/Home";
import FitNess from "../component/Fitness";
import Food from "../component/Food";
import TechCompo from "../component/Technologogy";
import ContextStore from "../Store/Data";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import './style.css'
import DetailCompo from "../component/Details";
import NewDetails from "../component/AddnewDetails";


function Display(){

    return(
<>
<div className="navbar">
    <span className="route">The</span><span style={{fontSize:'3em' ,fontWeight:'bolder',fontFamily:'Georgia, Times New Roman, Times, serif',position:'relative',left:'45vw'}}>Siren</span>
    </div>
 
<BrowserRouter>
<div className="box">
<NavLink style={({isActive})=>({color:isActive ? 'grey':'black'})} className="navlink" to='/'>Home</NavLink>
<NavLink style={({isActive})=>({color:isActive ? 'grey':'black'})} className="navlink" to='/holly'>Hollywood</NavLink>
<NavLink style={({isActive})=>({color:isActive ? 'grey':'black'})} className="navlink" to='/bolly'>Bollywood</NavLink>
<NavLink style={({isActive})=>({color:isActive ? 'grey':'black'})} className="navlink" to='/fitness'>Fitness</NavLink>
<NavLink style={({isActive})=>({color:isActive ? 'grey':'black'})} className="navlink" to='/food'>Food</NavLink>
<NavLink style={({isActive})=>({color:isActive ? 'grey':'black'})} className="navlink" to='/tech'>Technology</NavLink>
</div>


<ContextStore>
<Routes>
    <Route path="/" element={<HomeCompo/>}></Route>
    <Route path="/holly" element={<HollyWood/>}></Route>

    <Route path="/bolly" element={<BollyWood/>}></Route>

    <Route path="/fitness" element={<FitNess/>}></Route>
    <Route path="/food" element={<Food/>}></Route>

   <Route path="tech" element={<TechCompo/>}></Route>
    <Route path='/details/:id' element={<DetailCompo/>}></Route>
    <Route path='/newdetails/:id' element={<NewDetails/>}></Route>

</Routes>
</ContextStore>
</BrowserRouter>
</>



    )
}
export default Display;
