import React, { useContext } from "react";
import { Store } from "../Store/Data";
import { NavLink } from "react-router-dom";
// import './style.css'

function FitNess(){
    const [fitdata]=useContext(Store)

    return(

        <>
         <h1 className="fitheading">Fitness</h1>
            <div className="fittop">
                {fitdata.filter((item) => item.id >=32 && item.id < 35).map((item, index) => {
                    return (
                        <div className="fitdata" key={index}>
                            <h1 className="headingfit">{item.name}</h1>
                            <NavLink className='navlinktwo' to={`/details/${item.id}` }><img src={item.image}  className="imagefittop" alt="error"/></NavLink>
                            <p className="fitpara">{item.para.slice(0, 190)}...</p>
                        </div>
                    )
                })}
            </div>




        

            <div className="fitone">

                <div>
                    <h2 className="fitdtopstories">Top Stories</h2>

                    {fitdata.filter((item) => item.category==='Fitness').map((item, index) => {
                        return (
                            <div key={index} className="fitunderdiv">
                                <h1 className="underdivheading">{item.name.slice(0,15)}...</h1>
                                <NavLink className='navlinktwo' to={`/details/${item.id}` }>   <img src={item.image} className="underdivimage" alt="error" /></NavLink>
                                <p className="underdivpara">{item.para.slice(0, 400)}</p>
                            </div>
                        )
                    })}
                </div>


                <div>
                    <h2 className="fitdtoppost">Top Postes</h2>
                    {fitdata.filter((item) => item.id >=31 && item.id < 46).map((item, index) => {
                        return (
                            <div key={index} className="underdivtwo">
                                <h1 className="underdivheadingtwo">{item.name.slice(0,10)}...</h1>
                                <NavLink className='navlinktwo' to={`/details/${item.id}` }>    <img className="underdivimagetwo" src={item.image} alt="error"/></NavLink>
                                <p className="underdivparatwo" >{item.para.slice(0, 105)}... <h3>{index +1}</h3></p>


                            </div>
                        )

                    })}
                    <div className="advissment">Advertisement</div>
                </div>


            </div>



            
            <div className="footer">


<img className="logo" src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png" alt="error"/>
<img className="logo" src="http://1000logos.net/wp-content/uploads/2017/02/New-Instagram-logo.jpg" alt="error"/>
<img className="logo" src="https://www.aps.edu/sapr/images/pnglot.comtwitterbirdlogopng139932.png/image" alt="error"/>
<img className="logo" src="https://sguru.org/wp-content/uploads/2018/02/Logo-LinkedIn-Round.png" alt="error"/>

<div className="location">  <img className="logoone" src="https://tse2.mm.bing.net/th?id=OIP.jI9rruGSAQNGmMicjyVJFAHaI7&pid=Api&P=0&h=180" alt="error"/></div> <span className="loc">Gurgaon Haryana</span>




<img className="logoone phone" src="https://tse2.mm.bing.net/th?id=OIP.MT6QS99KpW4roKRd3i1G7QHaHa&pid=Api&P=0&h=180" alt="error"/><span className="pho">123467890</span>


<img className="logoone mail" src="https://cdn5.vectorstock.com/i/1000x1000/12/04/mail-icon-in-flat-style-email-symbol-in-flat-style-vector-28061204.jpg" alt="error"/><span className="email">balambisht467@gmail.com</span>

</div>

        </>
    )
}
export default FitNess;