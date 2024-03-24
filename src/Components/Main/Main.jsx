import React, {useEffect} from "react";
import './main.css'
import img from "../../assets/bora bora.jpg";
import img2 from "../../assets/machu picchu.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import img8 from "../../assets/Taj_Mahal.jpg";
import img9 from "../../assets/Bali Island.webp";
import img7 from "../../assets/img7.jpg";
import Aos from 'aos';
import 'aos/dist/aos.css'

import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from "react-icons/hi";

const Data = [
  {
    id:1,
    imgSrc: img,
    destTitle: 'Boro Boro',
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    descreption: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro deserunt labore non similique possimus at expedita dolorem eveniet, odio veritatis debitis, maiores commodi sit nostrum, rem rerum quisquam aliquid et."
  },

  {
    id: 2,
    imgSrc: img2,
    destTitle: "Machu Picchu",
    location: "Peru",
    grade: "CULTURAL RELAX",
    fees: "$600",
    descreption: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt similique, expedita fugiat possimus cupiditate tenetur, perspiciatis praesentium neque ad nemo incidunt quam adipisci sed. Nemo soluta consequuntur quaerat placeat quas!"
  },

  {
    id: 3,
    imgSrc: img3,
    destTitle: "Great Barrier reef",
    location: "Australia",
    grade: "CULTURAL RRELAX",
    fees: "$700",
    descreption: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt similique, expedita fugiat possimus cupiditate tenetur, perspiciatis praesentium neque ad nemo incidunt quam adipisci sed. Nemo soluta consequuntur quaerat placeat quas!"
  },

  {
    id: 4,
    imgSrc: img4,
    destTitle: "Cappadocia",
    location: "Tirkey",
    grade: "CULTURAL RRELAX",
    fees: "$700",
    descreption: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt similique, expedita fugiat possimus cupiditate tenetur, perspiciatis praesentium neque ad nemo incidunt quam adipisci sed. Nemo soluta consequuntur quaerat placeat quas!"
  },

  {
    id: 5,
    imgSrc: img5,
    destTitle: "Guanajuato",
    location: "Mexico",
    grade: "CULTURAL RRELAX",
    fees: "$1100",
    descreption: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt similique, expedita fugiat possimus cupiditate tenetur, perspiciatis praesentium neque ad nemo incidunt quam adipisci sed. Nemo soluta consequuntur quaerat placeat quas!"
  },

  {
    id: 6,
    imgSrc: img6,
    destTitle: "cinque Terre",
    location: "Intaly",
    grade: "CULTURAL RRELAX",
    fees: "$840",
    descreption: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt similique, expedita fugiat possimus cupiditate tenetur, perspiciatis praesentium neque ad nemo incidunt quam adipisci sed. Nemo soluta consequuntur quaerat placeat quas!"
  },

  {
    id: 7,
    imgSrc: img7,
    destTitle: "Angkor wat",
    location: "Cambodia",
    grade: "CULTURAL RRELAX",
    fees: "$790",
    descreption: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt similique, expedita fugiat possimus cupiditate tenetur, perspiciatis praesentium neque ad nemo incidunt quam adipisci sed. Nemo soluta consequuntur quaerat placeat quas!"
  },

  {
    id: 8,
    imgSrc: img8,
    destTitle: "Taj mahal",
    location: "India",
    grade: "CULTURAL RRELAX",
    fees: "$900",
    descreption: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt similique, expedita fugiat possimus cupiditate tenetur, perspiciatis praesentium neque ad nemo incidunt quam adipisci sed. Nemo soluta consequuntur quaerat placeat quas!"
  },

  {
    id: 9,
    imgSrc: img9,
    destTitle: "Bali island",
    location: "indonesia",
    grade: "CULTURAL RRELAX",
    fees: "$500",
    descreption: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt similique, expedita fugiat possimus cupiditate tenetur, perspiciatis praesentium neque ad nemo incidunt quam adipisci sed. Nemo soluta consequuntur quaerat placeat quas!"
  },
];

const Main = () => {

  useEffect(()=> {
    Aos.init({duration: 1000})
  }, [])

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos='fade-right' className="title">Most Visisted Destination</h3>
      </div>
      <div  className="secContent grid">

        {
          Data.map(({id, imgSrc, destTitle, location, grade, fees, descreption}  )=>{
              return(
                <div  key={id} 
                data-aos='fade-up'
                className="singleDestination">
                  <div className="imageDiv">
                    <img src={imgSrc} alt={destTitle} />
                  </div>

                  <div className="cardInfo">
                    <h4 className="destTitle"> {destTitle} </h4>
                    <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                    </span>

                    <div className="fees flex">
                      <div className="grade">
                        <span>{grade} <small>+1</small> </span>
                      </div>
                      <div className="price">
                        <h5>{fees}</h5>
                      </div>
                    </div>
                    <div className="desc">
                      <p>{descreption}</p>
                    </div>
                    <button className="btn flex">
                      DETAILS <HiOutlineClipboardCheck className="icon"/>
                    </button>
                  </div>
                </div>
              )
          })
        }

      </div>
    </section>
  );
};

export default Main;
