import "./App.css";
import Footer from "./components/footer/Footer";
import Banner from "./components/header/banner/Banner";
import Keepernft from "./components/keepernft/Keepernft";
import Seller from "./components/our seller/Seller";
import Pastynft from "./components/pastyVan/Pastynft";

function App() {
  return (
    <div className="App">
      <Banner />
      <div className="back-img">
        <Keepernft />
        <Pastynft />
        <Seller />
      </div>

      <Footer />
    </div>
  );
}

export default App;
