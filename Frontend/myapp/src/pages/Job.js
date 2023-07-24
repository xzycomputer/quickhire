import React, { useState } from 'react';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Card from '../components/Card';

const Job = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Sample data for the cards
  const cardData = [
    { restaurantName: "หมูปิ้งป้าแจ่ม", location: "หลังมอ ขอนแก่น", position: "ล้างจาน", hourlyIncome: 40 },
    { restaurantName: "หมาปิ้งป้าใจ", location: "หลังมอ ขอนแก่น", position: "ล้างจาน", hourlyIncome: 40 },
    { restaurantName: "แมวปิ้งป้าโจ๋น", location: "หลังมอ ขอนแก่น", position: "ล้างจาน", hourlyIncome: 40 },
    { restaurantName: "ฮิปโปปิ้งป้าเจ๋ง", location: "หลังมอ ขอนแก่น", position: "ล้างจาน", hourlyIncome: 40 },
    { restaurantName: "หมีป้าจุ๊", location: "หลังมอ ขอนแก่น", position: "ล้างจาน", hourlyIncome: 40 },
    // Add other card data as needed
  ];

  // Filter the cards based on the search term
  const filteredCards = cardData.filter((card) =>
    card.restaurantName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='Job max-w-[1400px] mx-auto'>
      <Navbar></Navbar>
      <div className='flex justify-between mx-10 my-4 md:text-3xl font-medium items-center '>
          <h1>
            งาน Part time
          </h1>
          <div className="flex items-center justify-center ">
            <input
              type="text"
              placeholder="Search by restaurant name"
              className="border rounded-lg px-4 py-2 focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
      </div>
      
      
      <div className="grid grid-cols-2 md:grid-cols-4 mx-6 md:gap-10 gap-y-12 ">
        {filteredCards.map((card, index) => (
          <Card
            key={index}
            restaurantName={card.restaurantName}
            location={card.location}
            position={card.position}
            hourlyIncome={card.hourlyIncome}
          />
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Job;
