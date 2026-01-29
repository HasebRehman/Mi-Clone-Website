  import './App.css';
  import PreNavbar from './components/PreNavbar';
  import Navbar from './components/Navbar';
  import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
  import Slider from './components/slider';
  import data from './data/data.json';
  import Offers from './components/offers';
  import Heading from './components/Heading';
  import StarProduct from './components/StarProduct';
  import HotAccessoriesMenu from './components/HotAccessoriesMenu';
  import HotAccessories from './components/HotAccessories';

  const {banner} = data;
  const {offer} = data;
  const {starProduct} = data;
  const {hotAccessories} = data;
  const {hotAccessoriesCover} = data;

  function App() {
    return (
      <Router>
        <PreNavbar />
        <Navbar />
        <Slider start={banner.start} />
        <Offers offer={offer} />
        <Heading text="STAR PRODUCTS" />
        <StarProduct starProduct={starProduct} />
        <Heading text="HOT ACCESSORIES" />
        <HotAccessoriesMenu />

        <Routes>
          <Route
            path='/music'
            element={
              <HotAccessories music={hotAccessories.music} musicCover={hotAccessoriesCover.music}/>
            }
          />
        </Routes>

        <Routes>
          <Route
            path='/smartDevice'
            element={
              <HotAccessories smartDevice={hotAccessories.smartDevice} smartDeviceCover={hotAccessoriesCover.smartDevice}/>
            }
          />
        </Routes>

        <Routes>
          <Route
            path='/home'
            element={
              <HotAccessories home={hotAccessories.home} homeCover={hotAccessoriesCover.home}/>
            }
          />
        </Routes>

        <Routes>
          <Route
            path='/lifestyle'
            element={
              <HotAccessories lifeStyle={hotAccessories.lifeStyle} lifeStyleCover={hotAccessoriesCover.lifeStyle}/>
            }
          />
        </Routes>

        <Routes>
          <Route
            path='/mobileAccessories'
            element={
              <HotAccessories mobileAccessories={hotAccessories.mobileAccessories} mobileAccessoriesCover={hotAccessoriesCover.mobileAccessories}/>
            }
          />
        </Routes>
        
        <Heading text="PRODUCT REVIEWS"/>
      </Router>
    );
  }

  export default App;
