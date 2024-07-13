import React from "react";
import { motion } from "framer-motion";
import "./Home.css";
import weatherGif from "../../assets/Girl Cycling in autumn.gif";
import HPocket from "./HPocket/HPocket";
import HSan from "./HSan/HSan";
import HToday from "./HToday/HToday";
import HRecent from "./HRecent/HRecent";
import HDetails from "./HDetails/HDetails";
import HForecast from "./HForecast/HForecast";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="overlay"></div>
        <div className="home-content">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Weather Forecast for Everyone
          </motion.h1>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          >
            The forecast for today is sunny and bright, with a high of 68
            degrees. Enjoy the beautiful weather and make sure to wear
            sunscreen.
          </motion.p>
          <motion.button
            className="notification-button"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
            whileHover={{ scale: 1.1 }}
          >
            Get Notifications
          </motion.button>
        </div>
        <motion.div
          className="home-image"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <img src={weatherGif} alt="Weather GIF" />
        </motion.div>
      </div>
      <div>
        <HPocket />
        <HSan />
        <HToday />
        <HRecent />
        {/* <HDetails /> */}
        <HForecast />
      </div>
    </>
  );
};

export default Home;
