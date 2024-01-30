import React from "react";
import Categorylist from "../Categorylist/Categorylist";
import Dispic from "../../Assets/images/Dispic.png";
import flightpic from "../../Assets/images/flightpic.png";
import micpic from "../../Assets/images/micpic.png";
import settingpic from "../../Assets/images/settingpic.png";

const Categorylist = [
  {
    image1: Dispic,
    Heading: "Calculated Weather",
    discription:
      "  Built Wicket longer admire do barton vanity itself do in it.",
  },
  {
    image2: flightpic,
    Heading: "Best Flights",
    discription: "Engrossed listening. Park gate sell they west hard for the.",
  },
  {
    image3: micpic,
    Heading: "Local Events",
    discription:
      "Barton vanity itself do in it. Preferd to men it engrossed listening. ",
  },
  {
    image4: settingpic,
    Heading: "Customization",
    discription: "Engrossed listening. Park gate sell they west hard for the.",
  },
];

export default function Category() {
  return (
    <>
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
        <div>
          {Categorylist.map((Category) => (
            <Categorylist Categorylist={Category} />
          ))}
        </div>
        {/* <div className="">
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
        </div> */}
      </div>
    </>
  );
}
