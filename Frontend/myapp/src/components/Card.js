import React from "react";
import map from "../img/map.png";
import money from "../img/money.png";
import job from "../img/user.png";

function Card({ restaurantName, location, position, hourlyIncome }) {
  return (
    <div className="max-w-xs mx-auto">
      <div className="flex flex-col shadow-xl relative group  rounded-b-xl">
        <div className="image-container ">
          <img
            src="https://d1sag4ddilekf6.cloudfront.net/compressed_webp/items/THITE2022092218213217268/detail/menueditor_item_ea6a58cc79924c1e8598395fa6a0cf65_1663950941357936556.webp"
            alt="Restaurant"
            className="w-full h-[200px] md:h-[300px] transition-opacity duration-300 ease-in-out rounded-t-xl "
          />
          <div className="overlay absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-in-out rounded-b-xl rounded-t-xl"></div>
        </div>
        <div className="p-4 bg-white rounded-b-xl text-xs md:text-base">
          <h2 className="text-lg font-bold mb-2 md:text-xl">{restaurantName}</h2>
          <div className="flex items-center py-1">
            <img src={map} alt="Location" className="w-6 h-6 mr-4" />
            <p className="text-gray-600">{location}</p>
          </div>
          <div className="flex items-center py-1 ">
            <img src={job} alt="Position" className="w-6 h-6 mr-4" />
            <p className="text-gray-600">{position}</p>
          </div>
          <div className="flex items-center pt-1">
            <img src={money} alt="Hourly Income" className="w-6 h-6 mr-4" />
            <p className="text-gray-600">${hourlyIncome}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
