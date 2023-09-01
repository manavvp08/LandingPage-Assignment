import React from "react";
import SmallIcon from "./writing.png";
import SmallIcon2 from "./stock.png";
import Stars from "./starss.png";
import biohazard from "./biohazard.png";
import wifi from "./wifi.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import Play from "./playButton.png";

const MainComponent = () => {
  return (
    <>
      <div className="main-container">
        {/* TestimonialBox */}
        <div className="testimonial-box">Testimonials</div>

        <div className="gradient-text">
          <span className="blue-underline">Loved From</span>{" "}
          <span className="blue-gradient-text">Customers</span>
        </div>

        <div className="random-text">
          We are thrilled to share the stories of clients who have embraced our
          creations and found value, efficiency, and delight in our solutions.
          Their feedback fuels our drive to innovate and develop with unwavering
          dedication to client satisfaction.
        </div>

        {/* Divider */}
        <div className="divider"></div>

        {/* ClientProjectsInfo */}
        <div className="client-projects-info">
          <div className="column">
            <img src={SmallIcon} alt="Small Icon" />
            <div className="big-blue-text">10+</div>
            <div className="normal-text">clients and projects</div>
          </div>
          <div className="column-divider"></div>
          <div className="column">
            <img src={SmallIcon2} alt="Small Icon2" />
            <div className="big-blue-text">4.8/5</div>
            <img className="star1" src={Stars} alt="Stars" />
          </div>
        </div>

        <div>
          <a className="btn btn-primary" href="./" role="button">
            See Reviews on <br /> GMB
          </a>
          <button type="button" className="btn btn-outline-primary">
            <img className="playbtn" src={Play} alt="Icon" /> View Promotion
          </button>
        </div>
      </div>

      <div className="container">
  <div className="content">
    
    <div className="left-content">
      <img className="biohazard" src={biohazard} alt="Biohazard"></img>
    </div>
  </div>
  <div className="right-content">
  <div className="stars">
      {/* Add stars here */}
      <FontAwesomeIcon icon={faStar} className="star orange" />
      <FontAwesomeIcon icon={faStar} className="star orange" />
      <FontAwesomeIcon icon={faStar} className="star orange" />
      <FontAwesomeIcon icon={faStar} className="star orange" />
      <FontAwesomeIcon icon={faStar} className="star orange" />
      {/* Add more stars as needed */}
    </div>
    <div className="text">
      <p>
        Five stars all the way for Knowtorial and for their website
        development, I was blown away by their exceptional web designing
        skills and top-notch service. They took the time to understand my
        business needs and delivered a website that perfectly reflects our
        brand identity.
      </p>
    </div>
  </div>
</div>


      <div className="container2">
        
      <div className="left-content">
        <div className="wifi">
          <img src={wifi} alt="wifi" />
          </div>
        </div>

        <div className="right-content">
  <div className="stars">
      {/* Add stars here */}
      <FontAwesomeIcon icon={faStar} className="star orange" />
      <FontAwesomeIcon icon={faStar} className="star orange" />
      <FontAwesomeIcon icon={faStar} className="star orange" />
      <FontAwesomeIcon icon={faStar} className="star orange" />
      <FontAwesomeIcon icon={faStar} className="star orange" />
      {/* Add more stars as needed */}
    </div>
        <div className="text">
          <p>
            They requested us to leave a review for them on Google, and here is
            my honest review One of the finest website development companies,
            all the meeting were done remotely and online, still there was no
            communication gap between us I am completely content with their
            work. The team was highly cooperative and responsive. If you are
            looking to create your website, I wholeheartedly recommend
            Knowtorial without any hesitation
          </p>
        </div>
        </div>
      </div>
    </>
  );
};

export default MainComponent;
