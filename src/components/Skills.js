import React from 'react';
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import meter4 from "../assets/img/meter4.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";

const CustomArrowLeft = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide },
  } = rest;
  return (
    <button onClick={() => onClick()} className="custom-left-arrow">
      <img src={arrow1} alt="Arrow Left" />
    </button>
  );
};

const CustomArrowRight = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide },
  } = rest;
  return (
    <button onClick={() => onClick()} className="custom-right-arrow">
      <img src={arrow2} alt="Arrow Right" />
    </button>
  );
};

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider" 
                        customLeftArrow={<CustomArrowLeft />} 
                        customRightArrow={<CustomArrowRight />}>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Programming Languages</h5>
                                <h6>Python, SQL, Unix</h6>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Developer Tools</h5>
                                <h6>VS Code, SQL Developer</h6>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Technologies/Frameworks</h5>
                                <h6>Jenkins, Git, GitHub, JUnit, Docker</h6>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image"/>
                                <h5>Communication Languages</h5>
                                <h6>English, Hindi, Marathi</h6>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
