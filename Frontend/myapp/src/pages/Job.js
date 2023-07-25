import React, { useState } from 'react';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Card from '../components/Card';

const Job = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Sample data for the cards
  const cardData = [


    {restaurantName:"ก๋วยเตี๋ยวเปรี้ยวปาก", location:"หลังมอ ขอนแก่น", position:"พนักงานเสิร์ฟ", hourlyIncome:40, img:"https://inwfile.com/s-gi/oawsno.jpg"},
    {restaurantName:"หมูปิ้งป้าแจ่ม", location:"หลังมอ ขอนแก่น", position:"ย่างหมูปิ้ง", hourlyIncome:35, img:"https://images.deliveryhero.io/image/fd-th/LH/owjr-hero.jpg"},
    {restaurantName:"ชาบูโลมา", location:"หลังมอ ขอนแก่น", position:"ล้างจาน", hourlyIncome:45, img:"https://mpics.mgronline.com/pics/Images/564000010107801.JPEG"},
    {restaurantName:"ซูชินิโฮะ", location:"หลังมอ ขอนแก่น", position:"พนักงานเสิร์ฟ", hourlyIncome:45, img:"https://inwfile.com/s-cu/osu8i9.jpg"},
    {restaurantName:"คอหมูย่างจิ้มแจ่วหลังมอ", location:"หลังมอ ขอนแก่น", position:"ย่างหมู", hourlyIncome:35, img:"https://d.line-scdn.net/lcp-prod-photo/20210512_89/1620819569433jdaO1_JPEG/PWUU9PTH25FYIHENDULSZPX7TQY32O.jpg"},
    {restaurantName:"พระจันทร์มันไก่", location:"หลังมอ ขอนแก่น", position:"ทำความสะอาด", hourlyIncome:40, img:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/2013_Khao_man_kai_Chiang_Mai.jpg/640px-2013_Khao_man_kai_Chiang_Mai.jpg"},
    {restaurantName:"ปังก้อนกลม", location:"หลังมอ ขอนแก่น", position:"บาร์นํ้า", hourlyIncome:40, img:"https://p16-sign-sg.lemon8cdn.com/tos-alisg-v-a3e477-sg/c4f04735fcb240deab6fea3986432d56~tplv-sdweummd6v-shrink:1080:0:q50.webp?source=seo_feed_list&x-expires=1720742400&x-signature=ig3rBxheSptxJe2Q32OI7%2BR0SXA%3D"},
    {restaurantName:"กาแฟคุณปู่", location:"หลังมอ ขอนแก่น", position:"บาร์นํ้า", hourlyIncome:40, img:"https://www.gourmetandcuisine.com/Images/editor_upload/_editor20180917023714_original.jpg"},
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
            img={card.img}
          />
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Job;
