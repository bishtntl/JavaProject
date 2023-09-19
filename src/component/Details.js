import React, { useContext } from "react";
import { Store } from "../Store/Data";
import { useNavigate, useParams } from "react-router-dom";
import './style.css'


function DetailCompo(){
   const id=useParams()
   const [ContextDta]= useContext(Store)
   const Navi =useNavigate()
//    console.log(id)

    return(
        <>
       <div className="main">
        {ContextDta.filter((data)=>data.id===parseInt(id.id)).map((item,index)=>{
            console.log(item)
            return(
                <div className="detailinnerdiv">
                {/* <h1 key={index}>{item.id}</h1> */}
            <h1 key={index}className="detailheading">{item.name}</h1>
          <img src={item.image} className="detailimage"alt="error"/>
          <p className="detailpara">{item.para}</p>
          </div>
            
            )
           
        })}
    


       </div>

       <div className="detailsthree">
        {ContextDta.filter((data)=>data.id>=12 && data.id<15).map((item,index)=>{
            return(
                <>
                <div>
             <h1 key={index} className="detaisheadingone">{item.name}</h1>
             <img src={item.image} className="detailsimage" alt="error"/>
             <p className="detailsparaone">{item.para}</p>
             </div>
             </>
             )

        })}
        
       </div>
       <button className="btngoback" onClick={()=>Navi('/')}>Go To Home</button>


       <div className="footer">


<img className="logo" src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png" alt="error"/>
<img className="logo" src="http://1000logos.net/wp-content/uploads/2017/02/New-Instagram-logo.jpg"alt="error"/>
<img className="logo" src="https://www.aps.edu/sapr/images/pnglot.comtwitterbirdlogopng139932.png/image"alt="error"/>
<img className="logo" src="https://sguru.org/wp-content/uploads/2018/02/Logo-LinkedIn-Round.png"alt="error"/>

<div className="location">  <img className="logoone" src="https://tse2.mm.bing.net/th?id=OIP.jI9rruGSAQNGmMicjyVJFAHaI7&pid=Api&P=0&h=180" alt="error"/></div> <span className="loc">Gurgaon Haryana</span>




<img className="logoone phone" src="https://tse2.mm.bing.net/th?id=OIP.MT6QS99KpW4roKRd3i1G7QHaHa&pid=Api&P=0&h=180" alt="error"/><span className="pho">123467890</span>


<img className="logoone mail" src="https://cdn5.vectorstock.com/i/1000x1000/12/04/mail-icon-in-flat-style-email-symbol-in-flat-style-vector-28061204.jpg" alt="error"/><span className="email">balambisht467@gmail.com</span>

</div>



       </>


    )
}
export default DetailCompo