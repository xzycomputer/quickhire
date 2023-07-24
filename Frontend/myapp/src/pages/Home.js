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
        <h1 className="mx-auto font-semibold md:text-2xl">จำนวน 5000 งาน</h1>
      </div>

      <h1 className="mx-10 my-4 md:text-3xl font-medium">
          งาน Part time ล่าสุด
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 mx-6 md:gap-10 gap-y-12 ">
      <Card restaurantName="หมูปิ้งป้าแจ่ม" location="หลังมอ ขอนแก่น" position="ล้างจาน" hourlyIncome={40}/>
      <Card restaurantName="หมูปิ้งป้าแจ่ม" location="หลังมอ ขอนแก่น" position="ล้างจาน" hourlyIncome={40}/>
      <Card restaurantName="หมูปิ้งป้าแจ่ม" location="หลังมอ ขอนแก่น" position="ล้างจาน" hourlyIncome={40}/>
      <Card restaurantName="หมูปิ้งป้าแจ่ม" location="หลังมอ ขอนแก่น" position="ล้างจาน" hourlyIncome={40}/>
      <Card restaurantName="หมูปิ้งป้าแจ่ม" location="หลังมอ ขอนแก่น" position="ล้างจาน" hourlyIncome={40}/>
      <Card restaurantName="หมูปิ้งป้าแจ่ม" location="หลังมอ ขอนแก่น" position="ล้างจาน" hourlyIncome={40}/>
      <Card restaurantName="หมูปิ้งป้าแจ่ม" location="หลังมอ ขอนแก่น" position="ล้างจาน" hourlyIncome={40}/>
      <Card restaurantName="หมูปิ้งป้าแจ่ม" location="หลังมอ ขอนแก่น" position="ล้างจาน" hourlyIncome={40}/>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default Home;
