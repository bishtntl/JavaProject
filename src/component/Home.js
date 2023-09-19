import React, { useContext } from "react";
import { Store } from "../Store/Data";
import { NavLink } from "react-router-dom";


function HomeCompo() {
    const [datahome] = useContext(Store)
    console.log(datahome)

    return (
        <>
            <div className="top">
                <div >
                    {datahome.filter((item) => item.id === 76).map((item, index) => {
                        return (
                            <div key={index} >

                              <img src={item.image} className="imagetopone"alt="error" />  
                            </div>
                        )

                    })}
                </div>
                <div>
                    {datahome.filter((item) => item.id === 77).map((item, index) => {
                        return (
                            <div key={index} >
                                <img src={item.image} className="imagetoptwo"alt="error" />
                            </div>
                        )

                    })}
                </div>
                <div>
                    {datahome.filter((item) => item.id === 78).map((item, index) => {
                        return (
                            <div  key={index} >
                                <img src={item.image}className="imagetopthree" alt="error" />
                            </div>
                        )

                    })}
                </div>
            </div>
            <h1 className="latest">The Latest</h1>
            <div className="secondtop">


                {datahome.filter((item) => item.id % 25 === 0).map((item, index) => {
                    return (

                        <div className="underdivfirst" key={index}>
                            <h1 >{item.name}</h1>
                            <NavLink to={`/details/${item.id}`}><img className="homeimage" src={item.image} alt="error" style={{ width: 360, borderRadius: 20 }} /></NavLink>
                            <span className="parahome" style={{ display: "inline-block" }}>{item.para.slice(0,250)}...</span>
                        </div>
                    )
                })}


            </div>




            <div className="thirdtop">
                <div className="topstories">
                    <h2 className="tops">Top Stories</h2>
                    {datahome.filter((item) => item.id % 9 === 0).map((item, index) => {
                        return (
                            <>

                                <div key={index} >

                                    <div className="datatwo">


                                        <span className="headingone">{item.name.slice(0, 20)}</span>

                                        <span className="paraone">{item.para.slice(0, 225)}...</span>
                                        <NavLink className='navlinktwo' to={`/details/${item.id}` }>     <img src={item.image} className="imageone" alt="error"/></NavLink>
                                    </div>
                                </div>
                            </>

                        )
                    })}
                </div>

                <div className="toppost">
                    <h2 className="post">Top Postes</h2>
                    {datahome.filter((item) => item.id % 12 === 0).map((item, index) => {
                        return (
                            <>

                                <div key={index}>

                                    <div className="data">
                                        <span className="headingtwo">{item.name.slice(0, 15)}</span>
                                        <NavLink className='navlinktwo' to={`/details/${item.id}` }>         <img src={item.image} className="imagetwo" alt="error"/></NavLink>
                                        <span className="paratwo">{item.para.slice(0, 100)}... <h3 className="number">{index +1}</h3></span>

                                    </div>
                                </div>
                            </>


                        )
                    })}
                    <div className="advisment">Advertisement</div>

                </div>

            </div>




            <div className="footer">


<img className="logo" src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png" alt="error"/>
<img className="logo" src="http://1000logos.net/wp-content/uploads/2017/02/New-Instagram-logo.jpg" alt="error"/>
<img className="logo" src="https://www.aps.edu/sapr/images/pnglot.comtwitterbirdlogopng139932.png/image" alt="error"/>
<img className="logo" src="https://sguru.org/wp-content/uploads/2018/02/Logo-LinkedIn-Round.png"alt="error"/>

<div className="location">  <img className="logoone" src="https://tse2.mm.bing.net/th?id=OIP.jI9rruGSAQNGmMicjyVJFAHaI7&pid=Api&P=0&h=180"alt="error"/></div> <span className="loc">Gurgaon Haryana</span>




<img className="logoone phone" src="https://tse2.mm.bing.net/th?id=OIP.MT6QS99KpW4roKRd3i1G7QHaHa&pid=Api&P=0&h=180"alt="error"/><span className="pho">123467890</span>


<img className="logoone mail" src="https://cdn5.vectorstock.com/i/1000x1000/12/04/mail-icon-in-flat-style-email-symbol-in-flat-style-vector-28061204.jpg"alt="error"/><span className="email">balambisht467@gmail.com</span> 

 </div>



          



        </>
    )

}
export default HomeCompo;