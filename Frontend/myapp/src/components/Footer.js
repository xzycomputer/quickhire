import React from 'react'
import logo from "../img/logo.png";
import facebook from "../img/facebook.png";
import line from "../img/line.png";
import tiktok from "../img/tiktok.png";
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3  mx-12 md:mx-7 text-xs gap-2 mt-10 bg-cyan-900 text-white rounded-t-2xl p-4'>
        <div className='flex flex-col md:px-36  '>
             <img src ={logo} className='w-28  -mt-7'></img>
            <h1>ที่อยู่ : มหาวิทยาลับขอนแก่น</h1>
            <h1>ติดต่อสอบถาม :  quickhire@gmail.com</h1>
        </div>
        <div className='flex flex-col mx-4 md:px-24 gap-y-3 '>
            <h1 className=' text-lg'>ติดตาม Quickhire ได้ที่</h1>
            <div className='flex gap-2 items-center mx-6'>
            <img src ={facebook} className='w-6  '></img>
                <Link to="https://www.facebook.com/profile.php?id=100095083393781&mibextid=ZbWKwL"><h1>quickhire</h1></Link>
            </div>
            <div className='flex gap-2 items-center mx-6'>
            <img src ={line} className='w-6  '></img>
                <h1>@quickhire</h1>
            </div>
            <div className='flex gap-2 items-center mx-6'>
            <img src ={tiktok} className='w-6  '></img>
                <h1>quickhire tiktok</h1>
            </div>

        </div>
        <div className='flex flex-col gap-2  md:mx-auto '>
            <h1 className=' text-lg'>ช่วยเหลือ</h1>
            <h1>ติดต่อเรา</h1>
            <h1>คำถามที่พบบ่อย</h1>
            <h1>วิธีใช้งาน</h1>
        </div>
    </div>
  )
}

export default Footer