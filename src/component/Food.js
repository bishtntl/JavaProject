import React, { useContext } from "react";
import { Store } from "../Store/Data";
import { NavLink } from "react-router-dom";

function Food() {
    const [fooddata] = useContext(Store)
    return (

        <>
            <h1 className="foodheading">Food</h1>
            <div className="foodtop">
                {fooddata.filter((item) => item.id > 48 && item.id <= 51).map((item, index) => {
                    return (
                        <div className="fooddata" key={index} >
                            <h1 className="headingfood">{item.name}</h1>
                            <NavLink className='navlinktwo' to={`/details/${item.id}` }>     <img src={item.image} className="imagefoodtop" alt="error"/></NavLink>
                            <p className="foodpara">{item.para.slice(0, 190)}...</p>
                        </div>
                    )
                })}
            </div>
            <div className="foodone">

                <div>
                    <h2 className="foodtopstories">Top Stories</h2>

                    {fooddata.filter((item) => item.category === 'Food').map((item, index) => {
                        return (
                            <div key={index} className="foodunderdiv">
                                <h1 className="underdivheadingfood">{item.name}</h1>
                                <NavLink className='navlinktwo' to={`/details/${item.id}` }>  <img src={item.image} className="underdivimagefood"alt="error" /></NavLink>
                                <p className="underdivparafood">{item.para}</p>
                            </div>
                        )
                    })}
                </div>


                <div>
                    <h2 className="foodtoppost"> Top Postes</h2>
                    {fooddata.filter((item) => item.id >=46 && item.id < 61).map((item, index) => {
                        return (
                            <div key={index} className="underdivtwofood">
                                <h1 className="underdivheadingtwofood">{item.name}</h1>
                                <NavLink className='navlinktwo' to={`/details/${item.id}` }>   <img className="underdivimagetwofood" src={item.image} alt="error"/></NavLink>
                                <p className="underdivparatwofood" >{item.para.slice(0, 105)}... <h3>{index +1}</h3></p>


                            </div>
                        )

                    })}
                    <div className="advissmentfood">Advertisement</div>
                </div>


            </div>






            <div className="footerfood">


<img className="logo" src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png" alt="error"/>
<img className="logo" src="http://1000logos.net/wp-content/uploads/2017/02/New-Instagram-logo.jpg"alt="error"/>
<img className="logo" src="https://www.aps.edu/sapr/images/pnglot.comtwitterbirdlogopng139932.png/image" alt="error"/>
<img className="logo" src="https://sguru.org/wp-content/uploads/2018/02/Logo-LinkedIn-Round.png"alt="error"/>

<div className="location">  <img className="logoone" src="https://tse2.mm.bing.net/th?id=OIP.jI9rruGSAQNGmMicjyVJFAHaI7&pid=Api&P=0&h=180" alt="error"/></div> <span className="loc">Gurgaon Haryana</span>




<img className="logoone phone" src="https://tse2.mm.bing.net/th?id=OIP.MT6QS99KpW4roKRd3i1G7QHaHa&pid=Api&P=0&h=180" alt="error"/><span className="pho">123467890</span>


<img className="logoone mail" src="https://cdn5.vectorstock.com/i/1000x1000/12/04/mail-icon-in-flat-style-email-symbol-in-flat-style-vector-28061204.jpg" alt="error"/><span className="email">balambisht467@gmail.com</span>

</div>



















        </>
    )
}
export default Food;