import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

function App() {
  const token = localStorage.getItem("accessToken");
  const role = localStorage.getItem("role");

  if (!token) {
    return (
      <div className="App font-kanit">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </div>
    );
  }

  return (
    <div className="App font-kanit">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </div>
  );

  // if (role == "user") {
  //   return (
  //     <div className="App">
  //       <LocalizationProvider dateAdapter={AdapterDayjs}>
  //         <Routes>
  //           <Route path="/" element={<Home />} />
  //           <Route path="/Home" element={<Home />} />
  //           <Route path="/Chemicals" element={<Chemicals />} />
  //           <Route path="/Tools" element={<Tools />} />
  //           <Route path="/Reserve" element={<Reserve />} />
  //         </Routes>
  //       </LocalizationProvider>
  //     </div>

  //   )
  // }
  // else if (role == "admin") {
  //   return (
  //     <div className="App">
  //       <LocalizationProvider dateAdapter={AdapterDayjs}>
  //         <Routes>
  //           <Route path="/" element={<Adminhome />} />
  //           <Route path="/Home" element={<Adminhome />} />
  //           <Route path="/Chemicals" element={<AdminChemicals />} />
  //           <Route path="/Tools" element={<Tools />} />
  //           <Route path="/Reserve" element={<Reserve />} />
  //         </Routes>
  //       </LocalizationProvider>
  //     </div>

  //   )
  // }
}

export default App;
