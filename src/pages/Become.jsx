import Homenav from "../Components/navbar/Homenav"

const Become = () => {
  return (
    <div>
      <Homenav />
      <div className="w-[100%] h-full ">
        <div className="flex items-center justify-center px-[5%] mt-10 gap-10  w-full ">
          <div className="w-[522px] h-auto flex flex-col">
            <h1 className="w-[477px] h-auto text-[48px] text-[#222222] font-[700]">Earn Money When You Host Productions on Skoutar</h1>
            <p className="w-[519px] h-auto mt-5 font-[400] text-[20px] text-[#6B6B6B] leading-8">The most recognised brands are filming now, make your home part of their production!
              Join thousands of others on Skoutar renting their space for movie productions, photoshoot, and many others</p>
            <h3 className="w-[433px] font-[500] text-[25px] text-[#1F1F1F] text-center mt-4">What type of space do you have?</h3>
            <input className="w-[519px] h-[64px] border rounded px-3 mt-3" type="text" placeholder="Apartment, Photo Studio, Gallery Event space" />
            <button className="border w-[200px] mt-5 bg-[#6200EE] rounded text-[#ffff] h-[50px]">Get Started</button>
          </div>
          <img className="w-[700px] shadow-[#0000004D] rounded h-[700px]" src="images/Becomb.png" alt="" />
        </div>
        {/* decide */}
        <div className="bg-[#F8F8F8] flex flex-col justify-center pb-[50px] w-full px-[5%] mt-[100px]">
          <div className="flex flex-col items-center justify-center mt-5">
            <h3 className="w-[700px] h-auto text-[48px] text-center text-[#222222] font-[700]">Decide on how you share</h3>
            <p className="w-[740px] mt-4 text-[18px] text-center font-[400] font-500 text-[#6B6B6B]">You love your space, so you control how you share it. Get movie production booking all day long – whatever works best for you</p>
          </div>
          <div className="flex items-center justify-center mt-5">
            <img src="images/decide.png" className="relative mr-[45%]" alt="" />
            <div className="absolute border h-[461px] ml-[37%] pl-5 pt-5  bg-[#fff]">
              <p className="w-[300px] h-[24px] font-[500] text-[16px] text-[#6200EE]">Featured Host Experience</p>
              <p className="w-[740px] mt-4 text-[18px] font-[400] font-500 text-[#6B6B6B]">I’ve been hosting movie production and Skoutar was by far the most amazing user experience I’ve had. Their quality renters and amazing customer support made this as easy as can be</p>
              <p className="w-[300px] h-[24px] font-[500] text-[16px] mt-3 text-[#1F1F1F]">Daryl Ndubusi</p>
              <p className="w-[300px] h-[24px] font-[500] text-[16px] mt-3 text-[#4E4E4E]">Lagos, Nigeria</p>
              <div className="flex items-center mt-5 gap-1">
                <div  className="rounded-full w-3 h-3 border bg-[#E9E9E9]"></div>
                <div className="h-2 rounded w-8 bg-[#6200EE]"></div>
                <div  className="rounded-full w-3 h-3 border bg-[#E9E9E9]"></div>
              </div>
              <button className="border w-[200px] mt-5 bg-[#6200EE] rounded text-[#ffff] h-[50px]">List your space</button>
              <p></p>
            </div>
          </div>
        </div>
        {/* why host on skoutar */}
        <div className="flex flex-col items-center justify-center mt-[100px] px-[5%]">
        <h3 className="w-[700px] h-auto text-[48px] text-center text-[#222222] font-[700]">Why host on Skoutar</h3>
        <div className="flex items-center justify-items-center">
          <div className="flex flex-col items-center mt-[50px]">
            <img src="images/house.png" className="w-[64px] h-[64px]" alt="" />
            <p className="w-[433px] font-[500] text-[25px] text-[#1F1F1F] text-center mt-4">Complete Autonomy</p>
            <p className="w-[410px] text-center mt-4 text-[18px] font-[400] font-500 text-[#6B6B6B]">On skoutar, you have complete control over your property search and listing process. Our platform empowers you to make informed decisions without any intermediary interference.</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="images/house.png" className="w-[64px] h-[64px]" alt="" />
            <p className="w-[433px] font-[500] text-[25px] text-[#1F1F1F] mt-4 text-center">Fully Insured</p>
            <p className="w-[410px] text-center mt-4 text-[18px] font-[400] font-500 text-[#6B6B6B]">Skoutar collects mandatory security deposits for any minor damages. Your home is also covered by the production’s insurance policy.</p>
          </div>
          <div className="flex flex-col items-center mt-[50px]">
            <img src="images/camera.png" className="w-[64px] h-[64px]" alt="" />
            <p className="w-[433px] font-[500] text-[25px] text-[#1F1F1F] text-center mt-4">Production Sizes</p>
            <p className="w-[410px] text-center mt-4 text-[18px] font-[400] font-500 text-[#6B6B6B]">Skoutar specialises in any kind of movie productions (commercials, music videos, and branded content). You are able to set the number of guests expected in a crew at your location.</p>
          </div>
        </div>

        </div>
        {/* type of production */}
        <div className="flex flex-col items-center justify-center mt-[100px] px-[5%]">
        <h3 className="w-[1000px] h-auto text-[48px] text-center text-[#222222] font-[700]">What types of production can I host?</h3>
        <div className="flex items-center h-[258px] mt-[20px]">
          <div className="flex flex-col items-center mt-[50px]">
            <img src="images/speed.png" className="w-[64px] h-[64px]" alt="" />
            <p className="w-[433px] font-[500] text-[25px] text-[#1F1F1F] text-center mt-4">Photoshoot</p>
            <p className="w-[410px] text-center mt-4 text-[18px] font-[400] font-500 text-[#6B6B6B]">Photoshoots are short, simple and low impact. They typically last a few hours and include a cast and crew of less than 15 people.</p>
          </div>
          <div className="flex flex-col items-center mt-[30px]">
            <img src="images/Vector.png" className="w-[64px] h-[64px]" alt="" />
            <p className="w-[433px] font-[500] text-[25px] text-[#1F1F1F] mt-4 text-center">TV Shows</p>
            <p className="w-[410px] text-center mt-4 text-[18px] font-[400] font-500 text-[#6B6B6B]">TV shows shoots come in all shapes and sizes. On average, they last about a day and require a crew of 15-30 people.</p>
          </div>
          <div className="flex flex-col items-center mt-[50px]">
            <img src="images/camera.png" className="w-[64px] h-[64px]" alt="" />
            <p className="w-[433px] font-[500] text-[25px] text-[#1F1F1F] text-center mt-4">Movie Production</p>
            <p className="w-[410px] text-center text-[18px] font-[400] mt-4 font-500 text-[#6B6B6B]">Big budget productions shoot over multiple days and require larger crews. They also pay the best and give you the best chance to spot an A-lister.</p>
          </div>
        </div>

        </div>
        {/* How hosting works */}
        <div className="flex flex-col items-center justify-center mt-[100px] px-[5%]">
        <h3 className="w-[1000px] h-auto text-[48px] text-center text-[#222222] font-[700]">How hosting works</h3>
        <div className="flex items-center h-[258px] mt-[50px]">
          <div className="flex flex-col items-center mt-[50px]">
            <img src="images/space1.png" className="w-[80px] h-[80px]" alt="" />
            <p className="w-[433px] font-[500] text-[25px] text-[#1F1F1F] text-center mt-4">List your space for free</p>
            <p className="w-[410px] text-center mt-4 text-[18px] font-[400] font-500 text-[#6B6B6B]">If you own a property, you can host it on Skoutar. Simply create a new listing, add some basic info like price, photos and details, and then click ‘Publish’. Then your listing is ready to be seen by millions of people searching for space.</p>
          </div>
          <div className="flex flex-col items-center mt-[60px]">
            <img src="images/space2.png" className="w-[80px] h-[80px]" alt="" />
            <p className="w-[433px] font-[500] text-[25px] text-[#1F1F1F] mt-4 text-center">Welcome guests to your space</p>
            <p className="w-[410px] text-center mt-4 text-[18px] font-[400] font-500 text-[#6B6B6B]">Skoutar collects payment from production teams before the shoot date. To protect your space we collect a security deposit to cover any minor damages. Skoutar holds these funds in escrow until the end of the shoot. Your payout is directly deposited after each booking, minus our service fee.</p>
          </div>
          <div className="flex flex-col items-center mt-[50px]">
            <img src="images/space3.png" className="w-[80px] h-[80px]" alt="" />
            <p className="w-[433px] font-[500] text-[25px] text-[#1F1F1F] text-center mt-4">Get paid every time</p>
            <p className="w-[410px] text-center text-[18px] font-[400] mt-4 font-500 text-[#6B6B6B]">Skoutar collects payment from production teams before the shoot date. To protect your space we collect a security deposit to cover any minor damages. Skoutar holds these funds in escrow until the end of the shoot. Your payout is directly deposited after each booking, minus our service fee.</p>
          </div>
        </div>
        </div>
        {/*  */}
      </div>
    </div>
  )
}

export default Become