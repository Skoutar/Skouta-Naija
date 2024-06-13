import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './CarouselComponent.css';

const CarouselComponent = () => {
  const sections = [
    { title: 'Creative Space', images: ['images/carousel2.png', 'images/carousel3.png', 'images/carousel1.png'] },
    { title: 'Photoshoot', images: ['images/carousel2.png', 'images/carousel2.png', 'images/carousel2.png'] },
    { title: 'House', images: ['images/carousel2.png', 'images/carousel2.png', 'images/carousel3.png']},
    { title: 'Beach', images: ['images/carousel3.png', 'images/carousel2.png', 'images/carousel3.png']},
    { title: 'Studio', images: ['images/carousel1.png', 'images/carousel3.png', 'images/carousel1.png'] },
    { title: 'Expanse of Land', images: ['images/carousel1.png', 'images/carousel2.png', 'images/carousel1.png'] }
  ];

  const [activeSection, setActiveSection] = useState(0);

  const handleClick = (index) => {
    setActiveSection(index);
  };

  return (
    <div className="carousel-container">
        <h1>Find the Space That Tells The Story</h1>
      <div className="section-navigation">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`nav-item ${activeSection === index ? 'active' : ''}`}
            onClick={() => handleClick(index)}
          >
            {section.title}
          </div>
        ))}
      </div>

      <Carousel
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        centerMode={true}
        centerSlidePercentage={33.33}
      >
        {sections[activeSection].images.map((image, idx) => (
          <div key={idx} className="carousel-image">
            <img src={image} alt={`${sections[activeSection].title} ${idx + 1}`} />
          </div>
        ))}
      </Carousel>
      {/* Browse all spaces button */}
      <div className="browse-button-container">
        <button className="browse-button">Browse all spaces</button>
      </div>
    </div>
  );
};

export default CarouselComponent;
