import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Navbar } from "./components/navbar/Navbar";
import { Slider } from "./components/slider/Slider";
import { Mapchart } from "./components/mapChart/Mapchart";
import { Outlet } from "./components/outlet/Outlet";
function App() {
  return (
    <>
      <Navbar />
      <Slider />
      {/* <Mapchart/> */}
      <Outlet />
    </>
  );
}

export default App;
