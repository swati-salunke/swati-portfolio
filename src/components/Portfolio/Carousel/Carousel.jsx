// src/components/Carousel.js
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './index.scss'

const Carousel = ({ projects }) => {
  const scrollToFullImage = (e) => {
    const imageElement = e.target.closest('.view-button'); 
    const scrollToElement = imageElement.querySelector('img');
  
    // Scroll to image with an offset for better visibility
    scrollToElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',  // Ensure the image is at the top of the viewport
      inline: 'nearest',
    });
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows:false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      {projects.map((project, index) => (
        <div key={index} className="view-button">
          <div className="image-container">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img 
                src={project.image} 
                alt={project.title} 
                onClick={scrollToFullImage} // Trigger smooth scroll
              />
            </a>
          </div>
          <button>View</button>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
