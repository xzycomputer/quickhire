import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import banner from "../img/banner.png";

function Home() {
  return (
    <div className="Home max-w-[1400px] mx-auto ">
      <Navbar></Navbar>
      <div className=" flex flex-col justify-center">
        <img src={banner}  className="mx-10" />
        <h1 className="mx-auto mt-7 font-semibold md:text-3xl">ค้นหางานพาร์ทไทม์ที่ใช่สำหรับคุณ</h1>
        <h1 className="mx-auto mt-3 font-semibold md:text-2xl">งานทั้งหมด</h1>
        <h1 className="mx-auto font-semibold md:text-2xl">จำนวน 8 งาน</h1>
      </div>

      <h1 className="mx-10 my-4 md:text-3xl font-medium">
          งาน Part time ล่าสุด
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 mx-6 md:gap-10 gap-y-12 ">
      <Card restaurantName="ก๋วยเตี๋ยวเปรี้ยวปาก" location="หลังมอ ขอนแก่น" position="พนักงานเสิร์ฟ" hourlyIncome={40} img="https://inwfile.com/s-gi/oawsno.jpg"/>
      <Card restaurantName="หมูปิ้งป้าแจ่ม" location="หลังมอ ขอนแก่น" position="ย่างหมูปิ้ง" hourlyIncome={35} img="https://images.deliveryhero.io/image/fd-th/LH/owjr-hero.jpg"/>
      <Card restaurantName="ชาบูโลมา" location="หลังมอ ขอนแก่น" position="ล้างจาน" hourlyIncome={45} img="https://mpics.mgronline.com/pics/Images/564000010107801.JPEG"/>
      <Card restaurantName="ซูชินิโฮะ" location="หลังมอ ขอนแก่น" position="พนักงานเสิร์ฟ" hourlyIncome={45} img="https://inwfile.com/s-cu/osu8i9.jpg"/>
      <Card restaurantName="คอหมูย่างจิ้มแจ่วหลังมอ" location="หลังมอ ขอนแก่น" position="ย่างหมู" hourlyIncome={35} img="https://d.line-scdn.net/lcp-prod-photo/20210512_89/1620819569433jdaO1_JPEG/PWUU9PTH25FYIHENDULSZPX7TQY32O.jpg"/>
      <Card restaurantName="พระจันทร์มันไก่" location="หลังมอ ขอนแก่น" position="ทำความสะอาด" hourlyIncome={40} img="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/2013_Khao_man_kai_Chiang_Mai.jpg/640px-2013_Khao_man_kai_Chiang_Mai.jpg"/>
      <Card restaurantName="ปังก้อนกลม" location="หลังมอ ขอนแก่น" position="บาร์นํ้า" hourlyIncome={40} img="https://p16-sign-sg.lemon8cdn.com/tos-alisg-v-a3e477-sg/c4f04735fcb240deab6fea3986432d56~tplv-sdweummd6v-shrink:1080:0:q50.webp?source=seo_feed_list&x-expires=1720742400&x-signature=ig3rBxheSptxJe2Q32OI7%2BR0SXA%3D"/>
      <Card restaurantName="กาแฟคุณปู่" location="หลังมอ ขอนแก่น" position="บาร์นํ้า" hourlyIncome={35} img="https://www.gourmetandcuisine.com/Images/editor_upload/_editor20180917023714_original.jpg"/>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default Home;
