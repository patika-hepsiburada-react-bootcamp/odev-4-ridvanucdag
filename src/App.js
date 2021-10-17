// components
import Header from "./components/Header/Header";
import SelectMenu from "./components/SelectMenu";
import MainMenu from "./components/MainMenu";
import OtherDaysForecast from "./components/SixDaysForecast";
import Footer from "./components/Footer";
//style
import "./App.css";


function App() {
  return (
    <div className="app_root">
      <div className="app_body">
        <Header/>
        <SelectMenu />
        <MainMenu />
        <OtherDaysForecast />
        <Footer/>
      </div>
    </div>
  );
}

export default App;
