import React, { useContext } from "react";
import { Store } from '../Store/Data'
import { NavLink } from "react-router-dom";

const BollyWood = () => {
    const [bollydata] = useContext(Store)


    return (

        <>
            <h1 className="bollyheading">Bollywood</h1>
            <div className="bollytop">
                {bollydata.filter((item) => item.id >= 0 && item.id < 4).map((item, index) => {
                    return (
                        <div className="bollydata" key={index} >
                            <h1 className="headingbolly">{item.name}</h1>
                            <NavLink className='navlinktwo' to={`/details/${item.id}` }><img src={item.image} className="imagebollytop" alt={item.error}/></NavLink>
                            <p className="bollypara">{item.para.slice(0, 190)}...</p>
                        </div>
                    )
                })}
            </div>



            <div className="bollyone">

                <div className="stories">
                    <h2 className="bollytopstories">Top Stories</h2>

                    {bollydata.filter((item) => item.category==='BollyWood').map((item, index) => {
                        return (
                         <div key={index} className="bollyunderdiv">
                                <h1 className="underdivheading">{item.name}</h1>
                                <NavLink className='navlinktwo' to={`/details/${item.id}` }><img src={item.image} className="underdivimage" alt={item.error}/></NavLink>
                                <p className="underdivpara">{item.para.slice(0, 300)}</p>
                            </div> 
                        )
                    })}
                </div>


                <div className="bollybolly">
                    <h2 className="bollytoppost">Top Postes</h2>
                    {bollydata.filter((item) => item.id >=1 && item.id < 15).map((item, index) => {
                        return (
                            <div key={index} className="underdivtwo">


                                <h1 className="underdivheadingtwo">{item.name}</h1>
                                <NavLink className='navlinktwo' to={`/details/${item.id}` }>  <img className="underdivimagetwo" src={item.image} alt={item.error}/></NavLink>
                                <p className="underdivparatwo" >{item.para.slice(0, 105)}...
                                <h3>{index +1}</h3></p>


                            </div>
                        )

                    })}
                    <div className="advissment">Advertisement</div>
                </div>


            </div>
            
            <div className="footertwo">


<img className="logo" src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png" alt="error"/>
<img className="logo" src="http://1000logos.net/wp-content/uploads/2017/02/New-Instagram-logo.jpg" alt="error"/>
<img className="logo" src="https://www.aps.edu/sapr/images/pnglot.comtwitterbirdlogopng139932.png/image" alt="error"/>
<img className="logo" src="https://sguru.org/wp-content/uploads/2018/02/Logo-LinkedIn-Round.png" alt="error"/>

<div className="location">  <img className="logoone" src="https://tse2.mm.bing.net/th?id=OIP.jI9rruGSAQNGmMicjyVJFAHaI7&pid=Api&P=0&h=180" alt="error"/></div> <span className="loc" >Gurgaon Haryana</span>




<img className="logoone phone" src="https://tse2.mm.bing.net/th?id=OIP.MT6QS99KpW4roKRd3i1G7QHaHa&pid=Api&P=0&h=180" alt="error"/><span className="pho">123467890</span>


<img className="logoone mail" src="https://cdn5.vectorstock.com/i/1000x1000/12/04/mail-icon-in-flat-style-email-symbol-in-flat-style-vector-28061204.jpg" alt="error"/><span className="email">balambisht467@gmail.com</span>

</div>

        </>
    )
}
export default BollyWood;