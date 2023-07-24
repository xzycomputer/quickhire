import { Link } from 'react-router-dom';
import { useState } from 'react';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import logo from "../img/logo.png";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };



  return (
    <div className="Navbar flex justify-center relative md:justify-between items-center  m-10 rounded-xl bg-cyan-900 flex-wrap">
        
        <div className='flex gap-5 md:gap-10 mx-10 items-center text-white'>
        <Link to="/Home"  class="transition duration-300 hover:scale-125"> <img src ={logo} className='w-24'></img></Link>
        <div className='md:flex gap-5 md:gap-10 items-center hidden'>
          <Link to="/Home"  class="transition duration-300 hover:rotate-12"> <h1>หน้าแรก</h1></Link>
          <Link to="/Profile"  class="transition duration-300 hover:rotate-12"> <h1>โปรไฟล์</h1></Link>
          <Link to="/Job"  class="transition duration-300 hover:rotate-12"> <h1>ค้นหางาน</h1></Link>
          <Link to="/Contact"  class="transition duration-300 hover:rotate-12"> <h1>ติดต่อเรา</h1></Link>
        </div>
        {/* <div className='mt-[0.5px]'><WorkRoundedIcon></WorkRoundedIcon></div> */}
        </div>

        <div className='md:flex gap-5 md:gap-10 items-center mx-10 text-white hidden'>
          
          <Link to="/" onClick={handleLogout} class="transition duration-300 hover:scale-125">ออกจากระบบ</Link>
        </div>

          <div className="md:hidden mx-10 absolute right-0 top-0 translate-y-8">
          <button className="text-white" onClick={toggleMenu}>
            <span className="sr-only">Toggle menu</span>
            <div className={`w-6 h-1 bg-white my-1 ${menuOpen ? 'rotate-45' : ''}`}></div>
            <div className={`w-6 h-1 bg-white ${menuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-1 bg-white my-1 ${menuOpen ? '-rotate-45' : ''}`}></div>
          </button>
        </div>

          {menuOpen && (
          <div className="flex basis-full flex-col items-center flex-wrap gap-5 text-white mb-10">
            <Link to="/Home" >หน้าแรก</Link>
            <Link to="/Profile">โปรไฟล์</Link>
            <Link to="/Job" >ค้นหางาน</Link>
            <Link to="/Contact" >ติดต่อเรา</Link>
            <Link to="/" onClick={handleLogout} >ออกจากระบบ</Link>
          </div>
        )}


    </div>
  )
}

export default Navbar