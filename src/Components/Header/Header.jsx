import React from "react";

export default function Header() {
  return (
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
  );
}
