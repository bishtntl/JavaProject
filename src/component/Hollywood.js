import React, { useContext } from "react";
import { Store } from "../Store/Data";
import { NavLink } from "react-router-dom";

function HollyWood() {
    const [hollydata] = useContext(Store)
    return (
        <>
            <h1 className="hollyheading">Hollywood</h1>
            <div className="hollytop">
                {hollydata.filter((item) => item.id > 26 && item.id <= 29).map((item, index) => {
                    return (
                        <div className="hollydata" key={index}>
                            <h1 className="headingholly">{item.name}</h1>
                            <NavLink className='navlinktwo' to={`/details/${item.id}` }><img src={item.image}  className="imagehollytop" alt="error" /></NavLink>
                            <p className="hollypara">{item.para.slice(0, 190)}...</p>
                        </div>
                    )
                })}
            </div>





            <div className="hollyone">

                <div>
                    <h2 className="topss" >Top Stories</h2>

                    {hollydata.filter((item) => item.category === 'Hollywood').map((item, index) => {
                        return (
                            <div key={index} className="hollyunderdiv">
                               <h1 className="underdivheading">{item.name}</h1>  
                               <NavLink className='navlinktwo' to={`/details/${item.id}` }>       <img src={item.image} className="underdivimage" alt="error"/></NavLink>
                                <p className="underdivpara">{item.para.slice(0,400)}</p>
                            </div>
                        )
                    })}
                </div>


                <div className="topone">
                    <h2 className="toppp">Top Postes</h2>
                    {hollydata.filter((item) => item.id >=15 && item.id <= 30).map((item, index) => {
                        return (
                            <div key={index} className="underdivtwo">
                                <h1 className="underdivheadingtwo">{item.name.slice(0,10)}</h1>
                                <NavLink className='navlinktwo' to={`/details/${item.id}` }>      <img className="underdivimagetwo" src={item.image} alt="error"/></NavLink>
                                <p className="underdivparatwo" >{item.para.slice(0,105)}... <h3>{index +1}</h3></p>


                            </div>
                        )

                    })}
                      <div className="advissment">Advertisement</div>
                </div>
               
              
            </div>




            
            <div className="footerthree">


<img className="logo" src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png" alt="error"/>
<img className="logo" src="http://1000logos.net/wp-content/uploads/2017/02/New-Instagram-logo.jpg" alt="error"/>
<img className="logo" src="https://www.aps.edu/sapr/images/pnglot.comtwitterbirdlogopng139932.png/image" alt="error"/>
<img className="logo" src="https://sguru.org/wp-content/uploads/2018/02/Logo-LinkedIn-Round.png" alt="error"/>

<div className="location">  <img className="logoone" src="https://tse2.mm.bing.net/th?id=OIP.jI9rruGSAQNGmMicjyVJFAHaI7&pid=Api&P=0&h=180"alt="error"/></div> <span className="loc">Gurgaon Haryana</span>




<img className="logoone phone" src="https://tse2.mm.bing.net/th?id=OIP.MT6QS99KpW4roKRd3i1G7QHaHa&pid=Api&P=0&h=180" alt="error"/><span className="pho">123467890</span>


<img className="logoone mail" src="https://cdn5.vectorstock.com/i/1000x1000/12/04/mail-icon-in-flat-style-email-symbol-in-flat-style-vector-28061204.jpg"alt="error"/><span className="email">balambisht467@gmail.com</span>

</div>
            
           
        </>
    )
}
export default HollyWood;