import "./App.css";
import Footer from "./components/footer/Footer";
import Banner from "./components/header/banner/Banner";
import Keepernft from "./components/keepernft/Keepernft";
import Seller from "./components/our seller/Seller";
import Pastynft from "./components/pastyVan/Pastynft";
import { Routes, Route } from "react-router-dom";
import Landing from "./page/Landing";
import Login from "./components/logins/Login";
import Signup from "./components/logins/Signup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
