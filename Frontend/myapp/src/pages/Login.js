import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onFinish = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/validatePassword", { email, password })
      .then((res) => {
        if (res.data.validation) {
          localStorage.setItem("accessToken", "Logged In");
          localStorage.setItem("user", email);
          window.location.replace("/");
        } else {
          alert("Your password is incorrect");
        }
      });
  };

  return (
    <div className="grid grid-cols-1 justify-center items-center md:grid-cols-2 md:min-h-screen">
      <div className="flex flex-col justify-center m-10">
        
        <h1 className=" font-medium mx-auto">เข้าสู่ระบบผู้สมัครงาน</h1>

        <form className=" " onSubmit={onFinish}>
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-gray-600 peer"
              placeholder=" "
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <label
              for="floating_email"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              อีเมล
            </label>
          </div>

          <div class="relative z-0 w-full mb-6 group">
            <input
              type="password"
              name="floating_password"
              id="floating_password"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
              placeholder=" "
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
            <label
              for="floating_password"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              รหัสผ่าน
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-slate-500 hover:bg-slate-600 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center  "
          >
            เข้าสู่ระบบ
          </button>
        </form>



      </div>

      {/* 2 */}
      <div className="flex flex-col justify-center mx-10">
        <h1 className="font-medium mx-auto">ยินดีต้อนรับสู่ Quickhire</h1>
        <Link to="/Register" className="border-2 border-black rounded-3xl px-4 py-2 mt-4 mx-auto">
            สมัครใช้งาน
        </Link>
      </div>
    </div>
  );
}



