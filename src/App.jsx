import { useState } from "react";
import "./App.css";
import Girl from "../src/Assets/images/girl.png";
import Playbutton from "../src/Assets/images/Playbutton.png";
import stars from "../src/Assets/images/stars.png";
import Dispic from "../src/Assets/images/Dispic.png";
import flightpic from "../src/Assets/images/flightpic.png";
import micpic from "../src/Assets/images/micpic.png";
import settingpic from "../src/Assets/images/settingpic.png";
import Romepic from "../src/Assets/images/Romepic.png";
import Londonpic from "../src/Assets/images/Londonpic.png";
import Europepic from "../src/Assets/images/Europepic.png";
import boxpic from "../src/Assets/images/boxpic.png";
import carpic from "../src/Assets/images/carpic.png";
import swimpic from "../src/Assets/images/swimpic.png";
import girlmespic from "../src/Assets/images/girlmespic.png";
import boymespic from "../src/Assets/images/boymespic.png";
import threedotspic from "../src/Assets/images/threedotspic.png";
import logos from "../src/Assets/images/logos.png";
import Social from "../src/Assets/images/Social.png";
import Googleplay from "../src/Assets/images/Googleplay.png";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex w-full justify-between">
        <div className=" flex  w-2/5 text-4xl font-bold">
          <h1>Jodoo</h1>
        </div>
        <div
          className="flex  w-2/5 justify-between gap-6 items-center
        "
        >
          <ul>Desitinations</ul>
          <ul>Hotels</ul>
          <ul>Flights</ul>
          <ul>Bookings</ul>
          <ul>Login</ul>
        </div>
        <div className="flex  w-1/5 justify-center ">
          <button className="w-24 h-10 rounded-sm border-2 border-black">
            Signup
          </button>
        </div>
      </div>
      <div className="flex w-full">
        <div className="flex flex-col w-2/4 justify-between gap-x-2 mt-28">
          <div>
            <h1 className=" text-red-600">
              BEST DESTINATIONS AROUND THE WORLD
            </h1>
          </div>
          <div>
            <p className="text-7xl font-bold">
              Travel,enjoy<br></br>and live a new<br></br>and full life
            </p>
          </div>
          <div>
            <p>
              Built Wicket longer admire do barton vanity itself do in it.
              <br></br> Preferred to sportsmen it engrossed listening. Park gate
              <br></br>sell they west hard for the.
            </p>
          </div>
          <div className="flex justify-between w-96 items-center">
            <button className=" w-44 h-10 rounded-xl border-2 bg-orange-400">
              Find out more
            </button>
            <img className="items-center" src={Playbutton} alt="Playbutton" />
            <button className="text-lg">Play Demo</button>
          </div>
        </div>
        <div className="flex w-2/4  ">
          <div>
            <img src={Girl} alt="Girl" />
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col ">
        <div className="flex items-center justify-center">
          <h1 className="text-2xl">CATEGORY</h1>
        </div>
        <div className="flex w-full">
          <div
            className="flex w-4/5 justify-center 
          "
          >
            <h1 className="text-5xl font-semibold ml-60">
              We Offer Best Service
            </h1>
          </div>
          <div className=" flex w-1/5 ">
            <img className=" ml-32" src={stars} alt="stars" />
          </div>
        </div>
      </div>
      <div
        className="flex
      w-full gap-40 items-center justify-center "
      >
        <div className="">
          <img src={Dispic} alt="Dispic" />
          <p>Calculated Weather </p>
          <p>
            Built Wicket longer<br></br>admire do barton<br></br> vanity itself
            do in it.
          </p>
        </div>
        <div>
          <img src={flightpic} alt="flightpic" />
          <p>Calculated Weather </p>
          <p>
            Built Wicket longer<br></br>admire do barton<br></br> vanity itself
            do in it.
          </p>
        </div>
        <div>
          <img src={micpic} alt="micpic" />
          <p>Local Events </p>
          <p>
            Barton vanity itself do <br></br>in it. Preferd to men it<br></br>
            engrossed listening.
          </p>
        </div>
        <div>
          <img src={settingpic} alt="settingpic" />
          <p>Customization </p>
          <p>
            We deliver outsourced <br></br>aviation services for<br></br>
            military customers
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col h-auto gap-14 mt-28">
        <div className="flex justify-center">
          <h1 className="text-2xl ">Top Selling</h1>
        </div>
        <div className="flex justify-center">
          <p className="text-5xl font-semibold ">Top Destinations</p>
        </div>
        <div className="flex ">
          <img src={Romepic} alt="Romepic" />
          <img src={Londonpic} alt="Londonpic" />
          <img src={Europepic} alt="Europepic" />
        </div>
      </div>
      <div className="flex w-full h-3/5">
        <div className="flex w-2/4 flex-col gap-16 ml-10">
          <div className="">
            <p>Easy and Fast</p>
          </div>
          <div className="">
            <h1 className="text-5xl font-semibold ">
              Book Your Next Trip <br></br>In 3 Easy Steps
            </h1>
          </div>
          <div className="flex gap-5 ">
            <img src={boxpic} alt="boxpic" />
            <div>
              <h1>Choose Destination</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur <br></br>adipisicing
                elit. Molestias nisi ad nesciunt quas quod <br></br>consequatur!
                Dignissimos aperiam
              </p>
            </div>
          </div>
          <div className=" flex gap-5 ">
            <img src={swimpic} alt="swimpic" />
            <div>
              <h1>Make Payment</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur <br></br>adipisicing
                elit. Molestias nisi ad nesciunt quas quod <br></br>consequatur!
                Dignissimos aperiam
              </p>
            </div>
          </div>
          <div className="flex gap-5 ">
            <img src={carpic} alt="carpic" />
            <div>
              <h1>Reach Airport on Selected Date</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur <br></br>adipisicing
                elit. Molestias nisi ad nesciunt quas quod <br></br>consequatur!
                Dignissimos aperiam
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-2/4 justify-center items-start ">
          <img src={girlmespic} alt="girlmespic" />
        </div>
      </div>
      <div className="flex w-full">
        <div className="flex w-2/4 flex-col gap-16">
          <div>
            <p>Testimonials</p>
          </div>
          <div>
            <h1 className="text-6xl font-semibold">
              What people say<br></br> about Us.
            </h1>
          </div>
          <div>
            <img src={threedotspic} alt="threedotspic" />
          </div>
        </div>
        <div className="flex w-2/4 ">
          <img src={boymespic} alt="boymespic" />
        </div>
      </div>
      <div className="flex w-full ">
        <div className="flex w-full justify-center">
          <img src={logos} alt="logos" />
        </div>
      </div>
      <div className="flex w-full flex-col gap-24">
        <div className="flex gap-5 flex-col">
          <div className="flex justify-center">
            <h1 className="text-4xl ">
              Subscribe to get information, latest news and other
            </h1>
          </div>
          <div className="flex justify-center">
            <h1 className="text-4xl ">interesting offers about Cobham</h1>
          </div>
        </div>
        <div className="flex w-full justify-center gap-7">
          <div className="flex items-center justify-center">
            <fieldset className="flex items-center justify-center border text-center">
              <input type="email" placeholder="You email" aria-label="email" />
            </fieldset>
          </div>
          <button className=" bg-orange-600 border w-40 h-10 rounded">
            Subscribe
          </button>
        </div>
      </div>
      <div className="flex w-full gap-52">
        <div className="flex flex-col">
          <h1>Jadoo.</h1>
          <p>
            Book your trip in minute, get<br></br> full Control for much longer.
          </p>
        </div>
        <div className="flex flex-col">
          <h1>Company</h1>
          <p>About</p>
          <p>Careesr</p>
          <p>Mobile</p>
        </div>
        <div className="flex flex-col">
          <h1>Contact</h1>
          <p>Help/FAQ</p>
          <p>Press</p>
          <p>Affilates</p>
        </div>
        <div className="flex flex-col">
          <h1>More</h1>
          <p>Airlinefees</p>
          <p>Airline</p>
          <p>Low fare tips</p>
        </div>
        <div className="flex flex-col">
          <div>
            <img src={Social} alt="Social" />
            <h1>Discover our app</h1>
          </div>
          <div>
            <img src={Googleplay} alt="Googleplay" />
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center">
        <p>All rights reserved@jadoo.co</p>
      </div>
    </>
  );
}

export default App;
