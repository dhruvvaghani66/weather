import React, { useState } from "react";
import "./ClimateChange.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import climate_sunIcon from "../../../assets/climate_sun.png";
import divide from "../../../assets/divider.png";
import MyChart from "../../chart/MyChart";

const ClimateChange = () => {
  const [activeButton, setActiveButton] = useState("temperature");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const renderActiveImage = () => {
    switch (activeButton) {
      case "temperature":
        return (
          <div className="active-image">
            <MyChart />
          </div>
        );
      case "precipitation":
        return (
          <div className="active-image">
            <MyChart />
          </div>
        );
      case "wind":
        return (
          <div className="active-image">
            <MyChart />
          </div>
        );
      default:
        return null;
    }
  };

  const [titleRef, titleInView] = useInView({
    triggerOnce: false,
    // rootMargin: "-100px 0px",
  });
  const [detailsRef, detailsInView] = useInView({
    triggerOnce: false,
    // rootMargin: "-100px 0px",
  });
  const [buttonsRef, buttonsInView] = useInView({
    triggerOnce: false,
    // rootMargin: "-100px 0px",
  });
  const [chartRef, chartInView] = useInView({
    triggerOnce: false,
    // rootMargin: "-100px 0px",
  });

  return (
    <>
      <motion.div
        className="climate-change"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.1 }}
      >
        <div className="bg">
          <motion.h1
            ref={titleRef}
            initial={{ x: -100, opacity: 0 }}
            animate={titleInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Climate Change
          </motion.h1>
        </div>
      </motion.div>
      <div className="content">
        <motion.div
          className="content-text"
          initial={{ y: -50, opacity: 0 }}
          animate={titleInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          Today’s Weather Details
        </motion.div>
        <motion.div
          className="main-row"
          ref={detailsRef}
          initial={{ opacity: 0 }}
          animate={detailsInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
        >
          <motion.img
            initial={{ x: -60, opacity: 0 }}
            animate={detailsInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
            src={climate_sunIcon}
            alt="Sun Icon"
            className="sun-icon"
          />
          <div className="weather-details">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={detailsInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
              className="city"
            >
              San Francisco
            </motion.div>
            <div className="day-condition">
              <motion.span
                initial={{ x: -40, opacity: 0 }}
                animate={detailsInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }}
              >
                Monday, May 23
              </motion.span>
              <motion.span
                initial={{ x: -40, opacity: 0 }}
                animate={detailsInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }}
              >
                Partly Cloudy
              </motion.span>
            </div>
          </div>
          <div className="additional-details">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={detailsInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.9 }}
            >
              Precipitation: 0%
            </motion.div>
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={detailsInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.9 }}
            >
              Humidity: 51%
            </motion.div>
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={detailsInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.9 }}
            >
              Wind: 16 km/h
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          className="content-buttons"
          // ref={buttonsRef}
          // initial={{ opacity: 0 }}
          // animate={buttonsInView ? { opacity: 1 } : {}}
          // transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
        >
          <motion.button
            ref={buttonsRef}
            initial={{ y: -70, opacity: 0 }}
            animate={buttonsInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.9 }}
            className={activeButton === "temperature" ? "active" : ""}
            onClick={() => handleButtonClick("temperature")}
          >
            Temperature
          </motion.button>
          <motion.div
            ref={buttonsRef}
            initial={{ y: -70, opacity: 0 }}
            animate={buttonsInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.9 }}
            className="div"
          >
            <img src={divide} alt="" />
          </motion.div>
          <motion.button
            ref={buttonsRef}
            initial={{ y: -70, opacity: 0 }}
            animate={buttonsInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.9 }}
            className={activeButton === "precipitation" ? "active" : ""}
            onClick={() => handleButtonClick("precipitation")}
          >
            Precipitation
          </motion.button>
          <motion.div
            ref={buttonsRef}
            initial={{ y: -70, opacity: 0 }}
            animate={buttonsInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.9 }}
            className="div"
          >
            <img src={divide} alt="" />
          </motion.div>
          <motion.button
            ref={buttonsRef}
            initial={{ y: -70, opacity: 0 }}
            animate={buttonsInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.9 }}
            className={activeButton === "wind" ? "active" : ""}
            onClick={() => handleButtonClick("wind")}
          >
            Wind
          </motion.button>
        </motion.div>
        <motion.div
          className="active-image-container"
          ref={chartRef}
          initial={{ x: -100, opacity: 0 }}
          animate={chartInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
        >
          {renderActiveImage()}
        </motion.div>
      </div>
    </>
  );
};

export default ClimateChange;
