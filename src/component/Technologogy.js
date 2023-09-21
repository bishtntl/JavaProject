import React, { useContext } from "react";
import { Store } from "../Store/Data";
import { NavLink } from "react-router-dom";

function TechCompo() {
    const [techdata] = useContext(Store)

    return (

        <>
            <h1 className="techheading">Technology</h1>
            <div className="techtop">
                {techdata.filter((item) => item.id >= 62 && item.id < 65).map((item, index) => {
                    return (
                        <div className="techdata"  key={index}>
                            <h1 className="headingtech">{item.name}</h1>
                          <NavLink className='navlinktwo' to={`/details/${item.id}` }>   <img src={item.image} className="imagetechtop" alt="Not Found"/></NavLink>
                            <p className="techpara">{item.para.slice(0, 190)}...</p>
                        </div>
                    )
                })}
            </div>
            <div className="techone">

                <div>
                    <h2 className="techtopstories">Top Stories</h2>

                    {techdata.filter((item) => item.category === 'Technology').map((item, index) => {
                        return (
                            <div key={index} className="techunderdiv">
                                <h1 className="underdivheadingtech">{item.name.slice(0,14)}..</h1>
                               < NavLink className='navlinktwo' to={`/details/${item.id}` }>     <img src={item.image} className="underdivimagetech" alt="Not Found"/></NavLink>
                                <p className="underdivparatech">{item.para.slice(0, 400)}</p>
                            </div>
                        )
                    })}
                </div>


                <div className="techtoppost">
                    <h2 className="techtoppostone">Top Postes</h2>
                    {techdata.filter((item) => item.id >=61 && item.id < 76).map((item, index) => {
                        return (
                            <div key={index} className="underdivtwotech">
                                <h1 className="underdivheadingtwotech">{item.name.slice(0,10)}..</h1>
                                <NavLink className='navlinktwo' to={`/details/${item.id}` }>     <img className="underdivimagetwotech" src={item.image} alt="Not Found"/></NavLink>
                                <p className="underdivparatwotech" >{item.para.slice(0, 105)}...<h3  className="number">{index +1}</h3></p>

                            </div>
                        )

                    })}
                    <div className="advissmenttech">Advertisement</div>
                </div>


            </div>





            
            <div className="footertech">


<img className="logo" src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png" alt="Not Found"/>
<img className="logo" src="http://1000logos.net/wp-content/uploads/2017/02/New-Instagram-logo.jpg" alt="Not Found"/>
<img className="logo" src="https://www.aps.edu/sapr/images/pnglot.comtwitterbirdlogopng139932.png/image" alt="Not Found"/>
<img className="logo" src="https://sguru.org/wp-content/uploads/2018/02/Logo-LinkedIn-Round.png" alt="Not Found"/>

<div className="location">  <img className="logoone" src="https://tse2.mm.bing.net/th?id=OIP.jI9rruGSAQNGmMicjyVJFAHaI7&pid=Api&P=0&h=180" alt="Not Found"/></div> <span className="loc">Gurgaon Haryana</span>




<img className="logoone phone" src="https://tse2.mm.bing.net/th?id=OIP.MT6QS99KpW4roKRd3i1G7QHaHa&pid=Api&P=0&h=180" alt="Not Found"/><span className="pho">123467890</span>


<img className="logoone mail" src="https://cdn5.vectorstock.com/i/1000x1000/12/04/mail-icon-in-flat-style-email-symbol-in-flat-style-vector-28061204.jpg" alt="Not Found"/><span className="email">balambisht467@gmail.com</span>

</div>
        </>
    )
}
export default TechCompo;