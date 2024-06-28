import CarouselComponent from '../Carousel/CarouselComponent'
import Footer from '../Footer/Footer'
import Navbar from '../navbar/Navbar'
import Marquee from 'react-fast-marquee'

const Landpage = () => {
  return (
    <div className="landing-page">
      <Navbar/>
      {/* Discover section */}
      <div className="Discover w-full h-[957px] relative bg-banner bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center">
        <h1 className="text-white w-[702px] h-[192px] text-6xl font-bold text-center absolute top-[150px] leading-[96px]">
          Discover Unique Film Locations for Your Movie Production
        </h1>
        <p className="w-[750px] h-[108px] text-center absolute top-[487px] text-white text-xl font-normal leading-9">
          Find the perfect backdrop for your film or TV project with our extensive collection of unique and diverse locations. From historic buildings to breathtaking landscapes, we have it all.
        </p>
        <div className='w-[1153px] h-[120px] flex justify-between items-center rounded-lg absolute top-[739px] text-center p-4 bg-white'>
          <div className='flex w-full'>
            <input type="text" className='w-56 h-16 py-4 px-10 rounded-md border border-purple-600 ml-2' placeholder='Enter Location' />
            <input type="text" className='w-56 h-16 py-4 px-10 rounded-md border border-purple-600 ml-2' placeholder='What are you planning?' />
            <input type="text" className='w-56 h-16 py-4 px-10 rounded-md border border-purple-600 ml-2' placeholder='Enter Start Date' />
            <input type="text" className='w-56 h-16 py-4 px-10 rounded-md border border-purple-600 ml-2' placeholder='Enter End Date' />
          </div>
          <button className='w-32 h-16 p-5 gap-3 rounded-lg text-white bg-purple-600 border-0'>
            <i className="bi bi-search"></i> Search
          </button>
        </div>
      </div>
      {/* Discover section done */}
      {/* Marquee section start */}
      <div className='w-full p-10 bg-gray-100 flex flex-col items-center mt-32'>
        <h3 className='text-lg font-medium text-gray-600 mb-5'>Recently Shot With Us</h3>
        <Marquee className='flex justify-around items-center w-full'>
          <div className='w-40 m-8'>
            <img src="images/disney_logo.svg.png" alt="brand" />
          </div>
          <div className='w-40 m-8'>
            <img src="images/ebonylife_studios_logo.png.png" alt="brand" />
          </div>
          <div className='w-40 m-8'>
            <img src="images/filmancc_logo.png.png" alt="brand" />
          </div>
          <div className='w-40 m-8'>
            <img src="images/Logo.png.png" alt="brand" />
          </div>
          <div className='w-40 m-8'>
            <img src="images/netflix_logo.svg.png" alt="brand" />
          </div>
          <div className='w-40 m-8'>
            <img src="images/nollywood_gists_logo.png.png" alt="brand" />
          </div>
          <div className='w-40 m-8'>
            <img src="images/tecnomobile_logo.svg.png" alt="brand" />
          </div>
        </Marquee>
      </div>
      {/* Marquee section ends */}

      {/* Find space starts */}
      <div className='w-full p-10 text-center bg-white mt-10'>
        <CarouselComponent />
      </div>
      {/* Find space ends */}
      {/* Created by skoukar */}
      <div className='w-full py-24 bg-white mt-10'>
        <div className='text-center mb-10'>
          <h1 className='text-4xl font-bold leading-6 text-gray-900'>Created With Skoutar</h1>
          <p className='text-base font-normal leading-6 text-gray-600 mx-auto mt-5'>Better Locations, Endless Possibilities</p>
        </div>
        <div className='flex flex-wrap justify-center items-start mt-[80px]'>
          <div>
            <div className='max-w-2xl mx-auto mt-10 text-left'>
              <h4 className='text-2xl font-bold leading-6 text-gray-900 transition-colors duration-300 hover:text-indigo-600 cursor-pointer'>Discover Amazing Film Locations</h4>
              <p className='text-base leading-normal text-gray-700 mt-5'>Our advanced search filters allow you to find the perfect film location for your next project. Explore verified locations with ease and read user reviews to make informed decisions.</p>
            </div>
            <div className='max-w-2xl mx-auto mt-10 text-left'>
              <h4 className='text-2xl font-bold leading-6 text-gray-900 transition-colors duration-300 hover:text-indigo-600 cursor-pointer'>Verified Locations</h4>
              <p className='text-base leading-normal text-gray-700 mt-5'>We ensure that all our film locations are verified to meet the highest standards. You can trust that the locations listed on our platform are reliable and suitable for your needs.</p>
            </div>
            <div className='max-w-2xl mx-auto mt-10 text-left'>
              <h4 className='text-2xl font-bold leading-6 text-gray-900 transition-colors duration-300 hover:text-indigo-600 cursor-pointer'>User Reviews</h4>
              <p className='text-base leading-normal text-gray-700 mt-5'>Read honest and unbiased reviews from other filmmakers who have used our platform. Their experiences will help you make the right choice for your film production.</p>
            </div>
          </div>
          <img src="images/created.png" alt="" className="w-[628px] h-[588px] rounded-lg m-5" />
        </div>

      </div>
      {/* How skoutar works */}
      <div className='w-full h-[1336px] bg-white flex flex-col items-center justify-center py-15'>
        <h1 className='text-6xl font-bold leading-[96px] text-center text-[#0E0E0E]'>How Skouta Works</h1>
        <p className='w-[870px] h-[160px] text-base font-normal leading-[30px] text-center'>We love production and are committed to simplifying it, starting with film locations. Skouta’s marketplace connects thousands of producers and agencies with spaces to create commercials, films, and branded content throughout Nigeria.</p>
        <div className='relative flex w-[1280px] h-[944px]'>
          <div className='w-[672px] h-[782px] absolute top-[81px] bg-[rgb(248,248,248)] rounded-lg shadow-[0px_2px_2px_2px_#22222214]'>
            <div className='flex w-[594px] h-[174px] ml-[15px] mt-[70px]'>
              <img src="images/howicon1.png" alt="" className='w-[64px] h-[64px] text-[#6B6B6B] mt-[50px]'/>
              <div className='w-[490px] h-[174px] ml-[20px]'>
                <h4 className='w-[490px] h-[42px] text-[28px] font-bold leading-[42px] text-left text-[#6200EE]'>High Quality Listing</h4>
                <p className='w-[490px] h-[120px] text-[15px] font-normal leading-[30px] text-left mt-[5px]'>Detailed descriptions, professional photos and virtual tours. From a fully-equipped studio to a seaside mansion or abandoned warehouse, you can find your perfect fit.</p>
              </div>
            </div>
            <hr className='w-[594px] ml-[39px] border border-[#BABABA]' />
            <div className='flex w-[594px] h-[174px] ml-[15px] mt-[70px]'>
              <img src="images/howicon2.png" alt="" className='w-[64px] h-[64px] text-[#6B6B6B] mt-[50px]' />
              <div className='w-[490px] h-[174px] ml-[20px]'>
                <h4 className='w-[490px] h-[42px] text-[28px] font-bold leading-[42px] text-left text-[#6200EE]'>Secure Payment System</h4>
                <p className='w-[490px] h-[120px] text-[15px] font-normal leading-[30px] text-left mt-[5px]'>With our clear rates and no hidden charges, you will know what you are paying for, right from booking, streamlined online transactions for location fees and permits.</p>
              </div>
            </div>
            <hr className='w-[594px] ml-[39px] border border-[#BABABA]' />
            <div className='flex w-[594px] h-[174px] ml-[15px] mt-[70px]'>
              <img src="images/howicon3.png" alt="" className='w-[64px] h-[64px] text-[#6B6B6B] mt-[50px]' />
              <div className='w-[490px] h-[174px] ml-[20px]'>
                <h4 className='w-[490px] h-[42px] text-[28px] font-bold leading-[42px] text-left text-[#6200EE]'>Availability Calendar</h4>
                <p className='w-[490px] h-[120px] text-[15px] font-normal leading-[30px] text-left mt-[5px]'>Real-time availability for booking. Emergencies happen. Book locations and anything you need for any event or production with ease.</p>
              </div></div>
          </div>
          <img src="images/how (2).png" alt="" className='w-[845px] h-[944px] ml-[435px] rounded-[8px]' />
        </div>
      </div>
      {/* list your space */}
      <div className='w-full h-auto py-15 bg-white mt-10 rounded-[8px] flex items-center justify-center'>
        <div className='w-[600px] h-[728px] rounded-[8px] bg-white shadow-[0_2px_2px_2px_#22222214] m-[50px]'>
          <img src="images/list-space.png" alt="" className='w-[600px] h-[382px]' />
          <p className='w-[560px] h-auto mt-5 ml-5 text-lg font-normal text-left text-[#222222]'>Sign up and earn money when you list your space on Skouta. The most recognised brands are filming now, be a part of their production! </p>
          <button className='w-[228px] h-[64px] px-2 py-5 rounded-lg text-[#F8F8F8] bg-[#6200EE] border border-solid ml-5 mt-10 transition duration-600 hover:bg-[#290064]"'> <span>List Your Space</span></button>
        </div>
        <div className='w-[600px] h-[728px] rounded-[8px] bg-white shadow-[0_2px_2px_2px_#22222214] m-[50px]'>
          <img src="images/list-space2.png" alt="" className='w-[600px] h-[382px]' />
          <p className='w-[560px] h-auto mt-5 ml-5 text-lg font-normal text-left text-[#222222]'>We connect you with the best locations well suited to your project and your selected preference. Tell us what you’re looking for, we’re here to help!</p>
          <button className='w-[228px] h-[64px] px-2 py-5 rounded-lg text-[#F8F8F8] bg-[#6200EE] border border-solid ml-5 mt-10 transition duration-600 hover:bg-[#290064]"'><span>Get Started</span></button>
        </div>
      </div>
      {/* Covered section */}
      <div className='w-full h-[370px] px-6 sm:px-24 md:px-40 lg:px-56 pt-6 mt-[40px] bg-gray-200'>
        <div className='w-full mt-10 sm:mt-16 flex items-center justify-center'>
          <img src="images/Green.png" alt="" />
          <div className='pl-[8px] ml-[80px]'>
            <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-900'>We have you covered </h1>
            <p className='w-[800px] mt-4 h-84 text-lg font-normal leading-7 text-gray-700'>Select from our protection packages with damage protection, liability insurance, and even cancellation protection.</p>
          </div>
        </div>
      </div>
      {/* costumer reviws */}
      <div className='w-full h-[892px] mt-[180px] bg-purple-100 flex flex-col items-center justify-center'>
        <div className="w-[838px] h-[296px] relative">
          <h1 className='w-[800px] h-[auto] text-5xl font-bold leading-10 tracking-wide text-center text-gray-800'>What our customers have to say about us</h1>
          <p className='w-[700px] mt-4 text-center font-normal leading-10 text-gray-700'>Customer testimonials and reviews that validate the best quality locations providing social proof to potential clients.</p>
        </div>
        <div className='w-1206 h-auto flex'>
          <div className='w-[500px] h-[300px] p-[32px] bg-purple-600 ml-5'>
            <p className='w-[362px] h-[90px] text-base font-normal leading-30 text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros </p>
            <div className='w-[293px] h-[78px] flex mt-[45px]'>
              <img src="images/user.png" alt="" className='w-[64px] h-[64px] border-[2px] border-white bg-white p-[10px] rounded-full mt-[10px]'/>
              <div className='w-[400px] ml-5 h-[78px] my-[12px]'>
                <h4 className='w-[200px] h-[36px] text-2xl font-semibold leading-36 text-gray-900'>John Smith</h4>
                <p className='text-base font-normal leading-30text-left'>Creative Director Netflix</p>
              </div>
            </div>
          </div>
          <div className='w-[500px] h-[400px] p-[32px] bg-purple-600 ml-5'>
            <p className='w-[362px] h-[90px] text-base font-normal leading-30 text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
            <div className='w-[293px] h-[78px] flex mt-[45px]'>
              <img src="images/user.png" alt="" className='w-[64px] h-[64px] border-[2px] border-white bg-white p-[10px] rounded-full mt-[10px]'/>
              <div className='w-[400px] ml-5 h-[78px] my-[12px]'>
                <h4 className='w-[200px] h-[36px] text-2xl font-semibold leading-36 text-gray-900'>Funke Akindele</h4>
                <p className='text-base font-normal leading-30text-left'>Prime Video</p>
              </div>
            </div>
          </div>
          <div className='w-[500px] h-[300px] p-[32px] bg-purple-600 ml-5'>
            <p className='w-[362px] h-[90px] text-base font-normal leading-30 text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros </p>
            <div className='w-[293px] h-[78px] flex mt-[45px]'>
              <img src="images/user.png" alt="" className='w-[64px] h-[64px] border-[2px] border-white bg-white p-[10px] rounded-full mt-[10px]'/>
              <div className='w-[400px] ml-5 h-[78px] my-[12px]'>
                <h4 className='w-[200px] h-[36px] text-2xl font-semibold leading-36 text-gray-900'>Natalie Adeniyi</h4>
                <p className='text-base font-normal leading-30text-left'>Sourcing Director EbonyLifeTV</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Question */}
      <div className='question-part'>
        <div className='question-partA'>
          <h1>Frequently Asked Questions (FAQs)</h1>
          <p>Any questions? We got you.</p>
        </div>
        <div className='question-partB'>
          <div className='question-section'>
            <select name="" id="" className='questions'>
              <option value="" className='questions-header'>
                How do i list my space on Skouta?
              </option>
              {/* <option value="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros, consectetur adipiscing elit. Suspendisse</option> */}
            </select>
            <select name="" id="" className='questions'>
              <option value="" className='questions-header'>How do i list my space on Skouta?</option>
              {/* <option value="" className='question-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros, consectetur adipiscing elit. Suspendisse</option> */}
            </select>
            <select name="" id="" className='questions'>
              <option value="" className='questions-header'>
                How do i list my space on Skouta?
              </option>
              {/* <option value="" className='question-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros, consectetur adipiscing elit. Suspendisse</option> */}
            </select>
            <select name="" id="" className='questions'>
              <option value="" className='questions-header'>
                How do i list my space on Skouta?
              </option>
              {/* <option value="" className='question-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros, consectetur adipiscing elit. Suspendisse</option> */}
            </select>
            <select name="" id="" className='questions'>
              <option value="" className='questions-header'>
                How do i list my space on Skouta?
              </option>
              {/* <option value="" className='question-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros, consectetur adipiscing elit. Suspendisse</option> */}
            </select>
          </div>
          <div className='more-question'>
            <img src="images/message.png" alt="" />
            <h4>Do you have more questions?</h4> 
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in </p>
            <button>Shoot a direct mail</button>
          </div>
        </div>
      </div>
      {/* Stay Update */}
      <div className='stay-updated'> 
        <div className='updated'>
          <div className='updated-A'>
            <h4>Stay Updated with Skouta’s Newsletter</h4>
            <p>Find Your Perfect Film Location. Discover unique and stunning film locations for your next project</p>
          </div>
          <div className='updated-B'> 
            <p>Subscribe to our newsletter for the latest updates, special offers, and to join us on our journey.</p>
            <div className='form-input'>
              <input type="text" placeholder='Your Email Address'/>
              <button>Subcribe</button>
            </div>
            <p>By subscribing, you agree to our Terms and Conditions.</p>
          </div>
        </div>       
      </div>
      <Footer/>
    </div>
  )
}

export default Landpage
