import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import banner from "../img/banner.png";
import mooping from "../img/mooping.jpg";
function Home() {
  return (
    <div className="Home max-w-[1400px] mx-auto">
      <Navbar></Navbar>
      <div className=" flex flex-col justify-center">
        <img src={banner}  className="mx-10" />
        <h1 className="mx-auto mt-7 font-semibold md:text-3xl">ค้นหางานพาร์ทไทม์ที่ใช่สำหรับคุณ</h1>
        <h1 className="mx-auto mt-3 font-semibold md:text-2xl">งานทั้งหมด</h1>
        <h1 className="mx-auto font-semibold md:text-2xl">จำนวน 5000 งาน</h1>
      </div>

      <h1 className="mx-10 my-4 md:text-3xl font-medium">
          งาน Part time
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 mx-10 gap-4 ">
        <div className="relative bg-fuchsia-400 ">
           <img src="https://p16-sign-sg.lemon8cdn.com/tos-alisg-i-0000/4941f405659146419d6e6f23da47dac1~tplv-sdweummd6v-shrink:1080:0:q50.webp?source=seo_feed_list&x-expires=1721109600&x-signature=fcPuXekh6Q661WrIG6RS3sHA40Y%3D" className=" w-full h-[200px] md:h-[300px] rounded-xl "/>
           <h1 className="absolute"></h1>
        </div>
        <img src="https://s.isanook.com/wo/0/ud/39/195189/f.jpg?ip/crop/w670h402/q80/jpg" className=" w-full h-[200px]  md:h-[300px] rounded-xl"/>
        <img src="https://p16-sign-sg.lemon8cdn.com/tos-alisg-i-0000/4941f405659146419d6e6f23da47dac1~tplv-sdweummd6v-shrink:1080:0:q50.webp?source=seo_feed_list&x-expires=1721109600&x-signature=fcPuXekh6Q661WrIG6RS3sHA40Y%3D" className="  w-full h-[200px]  md:h-[300px] rounded-xl"/>
        <img src="https://p16-sign-sg.lemon8cdn.com/tos-alisg-i-0000/4941f405659146419d6e6f23da47dac1~tplv-sdweummd6v-shrink:1080:0:q50.webp?source=seo_feed_list&x-expires=1721109600&x-signature=fcPuXekh6Q661WrIG6RS3sHA40Y%3D" className="  w-full h-[200px]  md:h-[300px] rounded-xl"/>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default Home;
