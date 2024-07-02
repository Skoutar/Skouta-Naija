import CarouselComponent from '../Carousel/CarouselComponent'
import Marquee from 'react-fast-marquee'

const Landpage = () => {
  return (
    <div className="landing-page">
      {/* Discover section */}
      <div className="Discover w-full h-[957px] relative bg-banner bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center">
        <h1 className="text-white text-[28px] w-[350px] sm:w-[702px] h-[192px] sm:text-6xl font-bold text-center absolute top-[77px] sm:top-[150px] sm:leading-[96px] animate-fadeInUp">
          Discover Unique Film Locations for Your Movie Production
        </h1>
        <p className="sm:w-[750px] sm:h-[108px] text-center absolute sm:top-[487px] top-[230px] mt-[px] text-[15px] w-[330px] text-white sm:text-xl font-normal leading-9 animate-fadeInUpDelay">
          Find the perfect backdrop for your film or TV project with our extensive collection of unique and diverse locations. From historic buildings to breathtaking landscapes, we have it all.
        </p>
        <div className='w-full h-[400px] sm:w-[1153px] sm:h-[120px] sm:flex justify-between items-center rounded-lg absolute top-[470px] sm:top-[739px] text-center animate-fadeInUpDelay p-4 bg-white'>
          <div className='x1:flex w-full flex-col items-center sm:justify-center'>
            <input type="text" className='w-[300px] p-[5px] m-[10px] h-[50px] sm:w-56 sm:h-16 sm:py-4 sm:px-10 rounded-md border border-purple-600 sm:ml-2' placeholder='Enter Location' />
            <input type="text" className='w-[300px] p-[5px] m-[10px] h-[50px] sm:w-56 sm:h-16 sm:py-4 sm:px-10 rounded-md border border-purple-600 sm:ml-2' placeholder='What are you planning?' />
            <input type="text" className='w-[300px] p-[5px] m-[10px] h-[50px] sm:w-56 sm:h-16 sm:py-4 sm:px-10 rounded-md border border-purple-600 sm:ml-2' placeholder='Enter Start Date' />
            <input type="text" className='w-[300px] p-[5px] m-[10px] h-[50px] sm:w-56 sm:h-16 sm:py-4 sm:px-10 rounded-md border border-purple-600 sm:ml-2' placeholder='Enter End Date' />
          </div>
          <button className='w-32 mt-[20px] h-16 p-5 gap-3 rounded-lg text-white bg-purple-600 border-0'>
            <i className="bi bi-search"></i> Search
          </button>
        </div>
      </div>
      {/* Discover section done */}
      {/* Marquee section start */}
      <div className='h-[113] w-full sm:w-full p-10 bg-gray-100 flex flex-col items-center mt-32'>
      <h3 className='text-[20px] sm:text-lg font-medium text-gray-600 mb-5 animate-fadeInUp animate-fadeInUpDelay'>Recently Shot With Us</h3>
        <Marquee className='flex justify-between items-center w-full '>
          <div className=' '>
            <img src="images/disney_logo.svg.png" alt="brand" className='w-[122px] h-[24px] x1:w-40 x1:m-8 ml-[50px]'/>
          </div>
          <div className=' sm:w-40 sm:m-8'>
            <img src="images/ebonylife_studios_logo.png.png" alt="brand" className='w-[122px] h-[24px] x1:w-40 x1:m-8 ml-[50px]'/>
          </div>
          <div className=' sm:w-40 sm:m-8'>
            <img src="images/filmancc_logo.png.png" alt="brand" className='w-[122px] h-[24px] x1:w-40 x1:m-8 ml-[50px]'/>
          </div>
          <div className=' sm:w-40 sm:m-8'>
            <img src="images/Logo.png.png" alt="brand" className='w-[122px] h-[24px] sm:w-40 x1:m-8 x1-[50px] ml-[50px]'/>
          </div>
          <div className=' sm:w-40 sm:m-8'>
            <img src="images/netflix_logo.svg.png" alt="brand" className='w-[122px] h-[24px] x1:w-40 xl:m-8 x1-[50px] ml-[50px]'/>
          </div>
          <div className=' sm:w-40 sm:m-8'>
            <img src="images/nollywood_gists_logo.png.png" alt="brand" className='w-[122px] h-[24px] x1:w-40 x1:m-8 x1-[50px] ml-[50px]' />
          </div>
          <div className='sm:w-40 sm:m-8'>
            <img src="images/tecnomobile_logo.svg.png" alt="brand" className='w-[122px] h-[24px] x1:w-40 x1:m-8 x1-[5px] ml-[50px]'/>
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
          <h1 className='text-[28px] sm:text-[60px] font-bold leading-6 text-gray-900'>Created With Skoutar</h1>
          <p className='text-[18px] mt-[10px] sm:text-base font-normal leading-6 text-gray-600 mx-auto sm:mt-10'>Better Locations, Endless Possibilities</p>
        </div>
        <div className='flex items-center ml-[10px] w-full sm:mt-[80px]'>
          <div className='flex flex-col items-center justify-center'>
            <div className='max-w-2xl mx-auto mt-10 text-left'>
              <h4 className='text-[20px] w-[170px] sm:w-auto sm:text-2xl font-bold leading-6 text-gray-900 transition-colors duration-300 hover:text-indigo-600 cursor-pointer'>Discover Amazing Film Locations</h4>
              <p className='text-[16px] sm:text-base leading-normal text-gray-700 mt-5 w-[170px] sm:w-[586px]'>Our advanced search filters allow you to find the perfect film location for your next project. Explore verified locations with ease and read user reviews to make informed decisions.</p>
            </div>
            <div className='max-w-2xl mx-auto mt-10 text-left'>
              <h4 className='text-[20px] w-[170px] sm:w-auto sm:text-2xl font-bold leading-6 text-gray-900 transition-colors duration-300 hover:text-indigo-600 cursor-pointer'>Verified Locations</h4>
              <p className='text-[16px] sm:text-base leading-normal text-gray-700 mt-5 w-[170px] sm:w-[586px]'>We ensure that all our film locations are verified to meet the highest standards. You can trust that the locations listed on our platform are reliable and suitable for your needs.</p>
            </div>
            <div className='max-w-2xl mx-auto mt-10 text-left'>
              <h4 className='text-[20px] w-[170px] sm:w-auto sm:text-2xl font-bold leading-6 text-gray-900 transition-colors duration-300 hover:text-indigo-600 cursor-pointer'>User Reviews</h4>
              <p className='text-[16px] sm:text-base leading-normal text-gray-700 mt-5 w-[170px] sm:w-[586px]'>Read honest and unbiased reviews from other filmmakers who have used our platform. Their experiences will help you make the right choice for your film production.</p>
            </div>
          </div>
          <img src="images/created.png" alt="" className="w-[190px] h-[908px] sm:w-[628px] sm:h-[588px] rounded-lg m-5" />
        </div>

      </div>
      {/* How skoutar works */}
      <div className='w-full h-[1336px] bg-white flex flex-col items-center justify-center py-15'>
        <h1 className='text-6xl font-bold leading-[96px] text-center text-[#0E0E0E]'>How Skouta Works</h1>
        <p className='w-[870px] h-[160px] text-base font-normal leading-[30px] text-center'>We love production and are committed to simplifying it, starting with film locations. Skouta’s marketplace connects thousands of producers and agencies with spaces to create commercials, films, and branded content throughout Nigeria.</p>
        <div className='relative flex w-[1280px] h-[944px]'>
          <div className='w-[672px] h-[782px] absolute top-[81px] bg-[rgb(248,248,248)] rounded-lg shadow-[0px_2px_2px_2px_#22222214]'>
            <div className='flex w-[594px] h-[174px] ml-[15px] mt-[70px]'>
              <img src="images/howicon1.png" alt="" className='w-[64px] h-[64px] text-[#6B6B6B] mt-[50px]' />
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
          <div className='w-[400px] h-[300px] p-[32px] bg-purple-600 ml-5'>
            <p className='w-[362px] h-[90px] text-base font-normal leading-30 text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros </p>
            <div className='w-[293px] h-[78px] flex mt-[45px]'>
              <img src="images/user.png" alt="" className='w-[64px] h-[64px] border-[2px] border-white bg-white p-[10px] rounded-full mt-[10px]' />
              <div className='w-[400px] ml-5 h-[78px] my-[12px]'>
                <h4 className='w-[200px] h-[36px] text-2xl font-semibold leading-36 text-gray-900'>John Smith</h4>
                <p className='text-base font-normal leading-30text-left'>Creative Director Netflix</p>
              </div>
            </div>
          </div>
          <div className='w-[386px] h-[400px] p-[32px] bg-purple-600 ml-5'>
            <p className='w-[360px] h-[90px] text-base font-normal leading-30 text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
            <div className='w-[293px] h-[78px] flex mt-[45px]'>
              <img src="images/user.png" alt="" className='w-[64px] h-[64px] border-[2px] border-white bg-white p-[10px] rounded-full mt-[10px]' />
              <div className='w-[400px] ml-5 h-[78px] my-[12px]'>
                <h4 className='w-[200px] h-[36px] text-2xl font-semibold leading-36 text-gray-900'>Funke Akindele</h4>
                <p className='text-base font-normal leading-30text-left'>Prime Video</p>
              </div>
            </div>
          </div>
          <div className='w-[386px] h-[300px] p-[32px] bg-purple-600 ml-5'>
            <p className='w-[362px] h-[90px] text-base font-normal leading-30 text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros </p>
            <div className='w-[293px] h-[78px] flex mt-[45px]'>
              <img src="images/user.png" alt="" className='w-[64px] h-[64px] border-[2px] border-white bg-white p-[10px] rounded-full mt-[10px]' />
              <div className='w-[400px] ml-5 h-[78px] my-[12px]'>
                <h4 className='w-[200px] h-[36px] text-2xl font-semibold leading-36 text-gray-900'>Natalie Adeniyi</h4>
                <p className='text-base font-normal leading-30text-left'>Sourcing Director EbonyLifeTV</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Question */}
      <div className='w-full h-[1044px] mt-[180px] bg-[#F8F8F8] flex flex-col items-center'>
        <div className='w-[838px] h-[262px] mt-[64px]'>
          <h1 className='w-[838px] h-[192px] text-[60px] font-bold leading-[90px] tracking-[0.02em] text-center'>Frequently Asked Questions (FAQs)</h1>
          <p className='w-full h-[42px] text-[25px] font-normal leading-[42px] text-center text-[#4E4E4E] mt-[10px]'>Any questions? We got you.</p>
        </div>
        <div className='w-4/5 flex items-center'>
          <div className=''>
            <select name="" id="" className='w-[813px] h-[90px] mt-[15px] left-[80px] p-[24px_46px_24px_32px] bg-white'>
              <option value="" className='w-[448px] h-[42px] top-[24px] left-[32px] text-[28px] font-medium leading-[42px] text-left text-[#1F1F1F]'>
                How do i list my space on Skouta?
              </option>
              {/* <option value="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros, consectetur adipiscing elit. Suspendisse</option> */}
            </select>
            <select name="" id="" className='w-[813px] h-[90px] mt-[15px] left-[80px] p-[24px_46px_24px_32px] bg-white'>
              <option value="" className='w-[40px] h-[72px] mt-[78px] text-[20px] font-normal leading-[36px] text-left'>How do i list my space on Skouta?</option>
              {/* <option value="" className='question-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros, consectetur adipiscing elit. Suspendisse</option> */}
            </select>
            <select name="" id="" className='w-[813px] h-[90px] mt-[15px] left-[80px] p-[24px_46px_24px_32px] bg-white'>
              <option value="" className='w-[448px] h-[42px] top-[24px] left-[32px] text-[28px] font-medium leading-[42px] text-left text-[#1F1F1F]'>
                How do i list my space on Skouta?
              </option>
              {/* <option value="" className='question-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros, consectetur adipiscing elit. Suspendisse</option> */}
            </select>
            <select name="" id="" className='w-[813px] h-[90px] mt-[15px] left-[80px] p-[24px_46px_24px_32px] bg-white'>
              <option value="" className='w-[448px] h-[42px] top-[24px] left-[32px] text-[28px] font-medium leading-[42px] text-left text-[#1F1F1F]'>
                How do i list my space on Skouta?
              </option>
              {/* <option value="" className='question-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros, consectetur adipiscing elit. Suspendisse</option> */}
            </select>
            <select name="" id="" className='w-[813px] h-[90px] mt-[15px] left-[80px] p-[24px_46px_24px_32px] bg-white'>
              <option value="" className='w-[448px] h-[42px] top-[24px] left-[32px] text-[28px] font-medium leading-[42px] text-left text-[#1F1F1F]'>
                How do i list my space on Skouta?
              </option>
              {/* <option value="" className='question-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros, consectetur adipiscing elit. Suspendisse</option> */}
            </select>
          </div>
          <div className='w-[1000px] h-[500px] top-[386px] left-[949px] bg-white p-[21px] flex flex-col items-center justify-around'>
            <img src="images/message.png" alt="" className='w-[100px] h-[100px]' />
            <h4 className='w-[350px] text-[28px] font-bold leading-[px] text-center'>Do you have more questions?</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in </p>
            <button className='w-[228px] h-auto p-[20px_8px] gap-[8px] rounded-[8px] bg-[#6200EE] text-white'>Shoot a direct mail</button>
          </div>
        </div>
      </div>
      {/* Stay Update */}
      <div className='bg-white w-full h-[500px] flex items-center justify-center'>
        <div className='flex items-center'>
          <div className='updated-A w-[586px] h-auto mr-[40px]'>
            <h4 className='w-[586px] text-[40px] font-bold leading-[60px] text-left'>Stay Updated with Skouta’s Newsletter</h4>
            <p className='w-[586px] text-[20px] font-normal leading-[36px] text-left'>Find Your Perfect Film Location. Discover unique and stunning film locations for your next project</p>
          </div>
          <div className='w-[639px] ml-[40px]'>
            <p className='w-[628px] text-[20px] font-normal leading-[36px] text-left'>Subscribe to our newsletter for the latest updates, special offers, and to join us on our journey.</p>
            <div className='form-input w-[639px] h-[64px] relative mt-[20px] rounded-[8px]'>
              <input type="text" placeholder='Your Email Address' className='w-[411px] h-auto p-[22px_256px_18px_16px] rounded-[8px] bg-[#E2E2E2]' />
              <button className='w-[228px] h-auto p-[20px_8px] gap-[8px] rounded-[8px] bg-[#6200EE] text-white'>Subcribe</button>
              <p className='w-[628px] text-[20px] font-normal leading-[36px] text-left mt-[10px]'>By subscribing, you agree to our Terms and Conditions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landpage
