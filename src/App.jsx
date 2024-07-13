import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import News from "./Components/Tabs/News/News";
import Map from "./Components/Tabs/Map/Map";
import Gallery from "./Components/Tabs/Gallery/Gallery";
import Contact from "./Components/Tabs/Contact/Contact";
import ClimateChange from "./Components/Tabs/ClimateChange/ClimateChange";
import Thunder from "./Components/Tabs/News/Thunder/Thunder";
import MapDetail from "./Components/Tabs/Map/MapDetail/MapDetail";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="climate-change" element={<ClimateChange />} />
          <Route path="news" element={<News />} />
          <Route path="map" element={<Map />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="thunder" element={<Thunder />} />
          <Route path="maps-detail" element={<MapDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
