import {React, useEffect} from 'react'
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FaFacebook, FaInstagram, FaTripadvisor, FaList } from "react-icons/fa";
import { TbApps } from "react-icons/tb";
import video2 from '../../assets/video2.mp4'
import './home.css'
import Aos from 'aos';
import 'aos/dist/aos.css'
const Home = () => {

  useEffect(()=> {
    Aos.init({duration: 1000})
}, [])

  return (
    <section className='home'>
      <div className="overlay"></div>
        <video src={video2} muted autoPlay loop type="video/mp4"  ></video>
      <div className="homeContent container">
        <div className="textDiv">
          <div className="smallText">
            <span data-aos='fade-up' className='smalltex' >Our Packages</span>
            <h1 data-aos='fade-up' className="homeTitle">Search your holiday</h1>
          </div>
        </div>
        <div data-aos='fade-up' className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Search your destination city</label>
            <div className="input flex">
              <input type="text" placeholder='Enter name here' />
              <GrLocation  className='icon'/>
            </div>
          </div>
          <div className="dateInput">
            <label htmlFor="date">Select your date</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div> 
          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Max Price:</label>
              <h3 className="total">$5000</h3>
            </div>
            <div className="input flex">
              <input type="range" max={5000} min={1000} />
            </div>
          </div> 
          <div className="searchOptions flex">
            <HiFilter className='icon'/> More Filter
          </div>
        </div>
        <div data-aos='fade-up' className="homeFooterIcons flex">
          <div className="rightIcons">
          <FaFacebook className='icon'/>
          <FaInstagram className='icon'/>
          <FaTripadvisor className='icon'/>
          </div>
          <div className="lefticons">
          <FaList className='icon'/>
          <TbApps className='icon'/>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Home