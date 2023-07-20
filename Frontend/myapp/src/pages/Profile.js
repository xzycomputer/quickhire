import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Profile() {
  return (
    <div className="flex flex-col justify-center max-w-[1400px] mx-auto">
      <Navbar></Navbar>
      <div className="flex md:justify-center justify-between relative ml-10">
        <h1>โปรไฟล์ของคุณ</h1>
        <h1 className="absolute right-10 border-2 border-black rounded-3xl px-2">แก้ไขประวัติ</h1>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 m-10 gap-10">
           
            <div className="flex flex-col mx-auto justify-center md:-mt-56">
                    <img className="w-[200px] h-[200px] rounded-full mx-auto" src="https://eiga.k-img.com/images/person/90423/bfeb7fb2b1e6cf38/640.jpg?1654061646" alt="Rounded avatar"></img>
                    <h1 className="mx-auto mt-4">IU</h1>
                    <h1 className="mx-auto mt-4 text-2xl">Lee Ji-eun</h1>
                    <h1 className="mx-auto mt-4">10/10/2010 อายุ 18 ปี</h1>
                    <h1 className="mx-auto ">เพศ หญิง  สัญชาติ ไทย</h1>
            </div>

            <div className="flex flex-col mx-auto justify-center gap-8">
                <div className="relative">
                    <div className=" rounded-full bg-slate-400 p-2 w-40 text-center  absolute left-1/2 -translate-x-1/2 -top-5"><h1>ประวัติการศึกษา</h1></div>
                    <div className=" rounded-2xl bg-slate-100 h-64">
                        <h1 className="p-10">กำลังศึกษาปริญญาตรีคณะวิศวกรรมศาสตร์ มหาวิทยาลัยขอนแก่น</h1>
                    </div>
                </div>
              

                <div className="relative">
                    <div className=" rounded-full bg-slate-400 p-2 w-48 text-center  absolute left-1/2 -translate-x-1/2 -top-5"><h1>ประวัติการทำงาน / ฝึกงาน</h1></div>
                    <div className=" rounded-2xl bg-slate-100 h-64">
                        <h1 className="p-10">ไม่มีประสบการณ์ทำงาน</h1>
                    </div>
                </div>

            </div>


        </div>

        <div className="flex flex-col mx-auto justify-center gap-8 w-full ">
                <div className="relative mx-10">
                    <div className=" rounded-full bg-slate-400 p-2 w-48 text-center  absolute left-1/2 -translate-x-1/2 -top-5"><h1>ความสามารถด้านภาษา</h1></div>
                    <div className=" rounded-2xl bg-slate-100 h-32">
                        <h1 className="p-10">กำลังศึกษาปริญญาตรีคณะวิศวกรรมศาสตร์ มหาวิทยาลัยขอนแก่น</h1>
                    </div>
                </div>
                

                <div className="relative mx-10">
                    <div className=" rounded-full bg-slate-400 p-2 w-48 text-center  absolute left-1/2 -translate-x-1/2 -top-5"><h1>ความสามารถในการขับรถ</h1></div>
                    <div className=" rounded-2xl bg-slate-100 h-32">
                        <h1 className="p-10">ไม่มีประสบการณ์ทำงาน</h1>
                    </div>
                </div>
                <div className="relative mx-10">
                    <div className=" rounded-full bg-slate-400 p-2 w-48 text-center  absolute left-1/2 -translate-x-1/2 -top-5"><h1>ความสามารถพิเศษ</h1></div>
                    <div className=" rounded-2xl bg-slate-100 h-32">
                        <h1 className="p-10">ไม่มีประสบการณ์ทำงาน</h1>
                    </div>
                </div>
                <div className="relative mx-10">
                    <div className=" rounded-full bg-slate-400 p-2 w-48 text-center  absolute left-1/2 -translate-x-1/2 -top-5"><h1>พื้นที่สะดวกรับงาน</h1></div>
                    <div className=" rounded-2xl bg-slate-100 h-32">
                        <h1 className="p-10">ไม่มีประสบการณ์ทำงาน</h1>
                    </div>
                </div>
                
            </div>
            <Footer></Footer>




    </div>
  );
}

export default Profile;
