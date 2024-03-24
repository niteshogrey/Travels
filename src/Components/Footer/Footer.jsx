import React, {useEffect} from "react";
import "./footer.css";
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { FaTripadvisor, FaAngleRight } from "react-icons/fa";
import { AiOutlineTwitter, AiOutlineYoutube, AiOutlineInstagram } from "react-icons/ai";
import video1 from "../../assets/video.mp4";
import Aos from 'aos';
import 'aos/dist/aos.css'

const Footer = () => {

  useEffect(()=> {
    Aos.init({duration: 1000})
  }, [])

  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video1} loop autoPlay muted typeof="video/mp4"></video>
      </div>
      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos='fade-up' className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div data-aos='fade-up' className="inputDiv flex">
            <input  type="text" placeholder="Enter Email Address" />
            <button  className="btn flex" type="submit">
              SEND <FiSend className="icon" />
            </button>
          </div>
        </div>
        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
            <a href=" " className="logo flex">
              <MdOutlineTravelExplore className="icon" /> Travel.
            </a>
          </div>

          <div data-aos='fade-up' className="footerParagraph">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse harum
            possimus quae quod doloremque error nostrum est excepturi blanditiis
            corporis?
          </div>

          <div data-aos='fade-up' className="footerSocials flex">
            <AiOutlineTwitter className="icon" />
            <AiOutlineYoutube className="icon" />
            <AiOutlineInstagram className="icon" />
            <FaTripadvisor className="icon" />
          </div>
          </div>
           
           <div  className="footerLinks grid">
            <div data-aos='fade-up' data-aos-duration='3000' className="linkGroup">
              <span className="groupTitle">
                OUR AGENCY
              </span>

              <li className="footerList flex">
                <FaAngleRight className="icon" />
                Services
              </li>

              <li className="footerList flex">
                <FaAngleRight className="icon" />
                Insurance
              </li>

              <li className="footerList flex">
                <FaAngleRight className="icon" />
                Agency
              </li>

              <li className="footerList flex">
                <FaAngleRight className="icon" />
                Tourism
              </li>

              <li className="footerList flex">
                <FaAngleRight className="icon" />
                Payment
              </li>

            </div>

            <div data-aos='fade-up' data-aos-duration='4000' className="linkGroup">
              <span className="groupTitle">
                PARTNERS
              </span>

              <li className="footerList flex">
                <FaAngleRight className="icon" />
                Bookings
              </li>

              <li className="footerList flex">
                <FaAngleRight className="icon" />
                Rentcars
              </li>

              <li className="footerList flex">
                <FaAngleRight className="icon" />
                Hostelwprls
              </li>

              <li className="footerList flex">
                <FaAngleRight className="icon" />
                Trivago
              </li>

              <li className="footerList flex">
                <FaAngleRight className="icon" />
                TriAdvisor
              </li>

            </div>

            <div data-aos='fade-up' data-aos-duration='5000' className="linkGroup">
              <span className="groupTitle">
                LAST MINUTE
              </span>

              <li className="footerList flex">
                <FaAngleRight className="icon" />
                London
              </li>

              <li className="footerList flex">
                <FaAngleRight className="icon" />
                California
              </li>

              <li className="footerList flex">
                <FaAngleRight className="icon" />
                Indonesia
              </li>

              <li className="footerList flex">
                <FaAngleRight className="icon" />
                Europe
              </li>

              <li className="footerList flex">
                <FaAngleRight className="icon" />
                Oceania
              </li>

            </div>
           </div>

          <div className="footerDiv">
            <small>BEST TRAVEL WEBSITE </small>
            <small>COPYRIGHTS RESERVED - NITESH 2024</small>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Footer;
