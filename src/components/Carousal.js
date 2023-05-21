import React, { useState } from 'react';
import c1 from '../assets/c1.jpg'
import c2 from '../assets/c2.jpg'
import c3 from '../assets/c3.jpg'
import '..//App.css';


function Carousal() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  };

  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
      
      
      <div className="carousel-inner" id="carousel">
      
      <div className='carousel-caption' style={{zIndex: "7"}}>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-success" type="submit">Search</button>
      </form>

      </div>
        <div className={`carousel-item${activeIndex === 0 ? ' active' : ''}`}>
          <img src={c1} className="d-block w-100" alt="Slide 1" />
        </div>
        <div className={`carousel-item${activeIndex === 1 ? ' active' : ''}`}>
          <img src={c2} className="d-block w-100" alt="Slide 2" />
        </div>
        <div className={`carousel-item${activeIndex === 2 ? ' active' : ''}`}>
          <img src={c3} className="d-block w-100" alt="Slide 3" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next" onClick={handleNext}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousal;
