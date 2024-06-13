import CarouselComponent from '../Carousel/CarouselComponent'
import './Landpage.css'
import Marquee from 'react-fast-marquee'

const Landpage = () => {
  return (
    <div className="landing-page">
      {/* Discover section */}
      <div className="Discover">
        <h1 className="Discover-header">
          Discover Unique Film Locations for Your Movie Production
        </h1>
        <p className="Discover-text">
          Find the perfect backdrop for your film or TV project with our extensive collection of unique and diverse locations. From historic buildings to breathtaking landscapes, we have it all.
        </p>
        <div className='Discover-search'>
          <div className='input-box'>
            <input type="text" className='search-input' placeholder='Enter Location' />
            <input type="text" className='search-input' placeholder='What are you planning?' />
            <input type="text" className='search-input' placeholder='Enter Start Date' />
            <input type="text" className='search-input' placeholder='Enter End Date' />
          </div>
          <button>
            <i className="bi bi-search"></i> Search
          </button>
        </div>
      </div>
      {/* Discover section done */}
      
      {/* Marquee section start */}
      <div className='marque-section'>
        <h3 className='margue-shot'>Recently Shot With Us</h3>
        <Marquee className='scroll-page'>
          <div className='Brand-logo'>
            <img src="images/disney_logo.svg.png" alt="brand" />
          </div>
          <div className='Brand-logo'>
            <img src="images/ebonylife_studios_logo.png.png" alt="brand" />
          </div>
          <div className='Brand-logo'>
            <img src="images/filmancc_logo.png.png" alt="brand" />
          </div>
          <div className='Brand-logo'>
            <img src="images/Logo.png.png" alt="brand" />
          </div>
          <div className='Brand-logo'>
            <img src="images/netflix_logo.svg.png" alt="brand" />
          </div>
          <div className='Brand-logo'>
            <img src="images/nollywood_gists_logo.png.png" alt="brand" />
          </div>
          <div className='Brand-logo'>
            <img src="images/tecnomobile_logo.svg.png" alt="brand" />
          </div>
        </Marquee>
      </div>
      {/* Marquee section ends */}
      
      {/* Find space starts */}
      <div className='find-space'>
        <CarouselComponent/>
      </div>
      {/* Find space ends */}
    </div>
  )
}

export default Landpage
