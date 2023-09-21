import React, { useContext } from "react";
import { Store } from "../Store/Data";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import './style.css'


function DetailCompo() {
    //    const id=useParams()
    //    const [ContextDta]= useContext(Store)
    const Navi = useNavigate()
    //    console.log(id)




    const [contextdata] = useContext(Store);

    const { id } = useParams();
    const dynamicImg = contextdata[id].category;
    console.log(dynamicImg)

    const selectedItem = contextdata.find((item) => item.id === parseInt(id));
    console.log(selectedItem.image)


    return (
        <>
            <div className="detailinnerdiv">
                <img src={selectedItem.image} alt='Not Found' className="detailimage" />
                <h1 className="detailheading">{selectedItem.name}</h1>
                <p className="detailpara">{selectedItem.para}</p>
            </div>





            <div className="detailsthree">
                {contextdata.filter((item) => (item.category === dynamicImg) && (item.id % 5 === 1 || item.id % 3 === 2 || item.id % 3 === 0)).slice(0, 3).map((element, index) => {
                    return (
                        <div key={index}>
                            <div >
                            <NavLink className='navlinktwo' to={`/details/${element.id}` }>
                                    <img src={element.image} alt="Not Found" className="detailsimage" />
                                </NavLink>
                                <h1 className="detaisheadingone">{element.name}</h1>
                                <p className="detailsparaone" >{element.para.slice(0,150)}</p>
                            </div>
                        </div>
                    )
                })}
            </div>


            <button className="btngoback" onClick={() => Navi('/')}>Go To Home</button>


            <div className="footer">


                <img className="logo" src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png" alt="Not Found" />
                <img className="logo" src="http://1000logos.net/wp-content/uploads/2017/02/New-Instagram-logo.jpg" alt="Not Found" />
                <img className="logo" src="https://www.aps.edu/sapr/images/pnglot.comtwitterbirdlogopng139932.png/image" alt="Not Found" />
                <img className="logo" src="https://sguru.org/wp-content/uploads/2018/02/Logo-LinkedIn-Round.png" alt="Not Found" />

                <div className="location">  <img className="logoone" src="https://tse2.mm.bing.net/th?id=OIP.jI9rruGSAQNGmMicjyVJFAHaI7&pid=Api&P=0&h=180" alt="Not Found" /></div> <span className="loc">Gurgaon Haryana</span>




                <img className="logoone phone" src="https://tse2.mm.bing.net/th?id=OIP.MT6QS99KpW4roKRd3i1G7QHaHa&pid=Api&P=0&h=180" alt="Not Found" /><span className="pho">123467890</span>


                <img className="logoone mail" src="https://cdn5.vectorstock.com/i/1000x1000/12/04/mail-icon-in-flat-style-email-symbol-in-flat-style-vector-28061204.jpg" alt="Not Found" /><span className="email">balambisht467@gmail.com</span>

            </div>



        </>


    )
}
export default DetailCompo