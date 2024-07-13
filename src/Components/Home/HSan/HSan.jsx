import React, { useRef } from "react";
import "./HSan.css";
import { motion, useInView } from "framer-motion";
import windIcon from "../../../assets/swind.png";
import rainIcon from "../../../assets/srain.png";
import weatherIcon from "../../../assets/scel.png";

const HSan = () => {
  const data = {
    date: "Monday, May 23",
    updateTime: "Update As Of 2:45 PM",
    windSpeed: 3,
    rainPercentage: 78,
    temperature: {
      min: 23,
      max: 31,
    },
  };

  const refLeftSide = useRef(null);
  const refRightSide = useRef(null);
  const isInViewLeftSide = useInView(refLeftSide, { triggerOnce: true });
  const isInViewRightSide = useInView(refRightSide, { triggerOnce: true });

  return (
    <div className="san">
      <div className="weather-page">
        {/* Left side */}
        <motion.div
          ref={refLeftSide}
          initial={{ x: -100, opacity: 0 }}
          animate={isInViewLeftSide ? { x: 0, opacity: 1 } : {}}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            y: { type: "spring", stiffness: 60 },
          }}
          className="left-side1"
        >
          <h2>San Francisco</h2>
          <div className="row1">
            <span>{data.date}</span>
            <span>{data.updateTime}</span>
          </div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={isInViewLeftSide ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            className="box1"
          >
            <div className="cloud">
              <div className="row2">
                <img src={windIcon} alt="Wind Icon" />
                Wind
                <p>{data.windSpeed}km/h</p>
              </div>
              <div className="row2">
                <img src={windIcon} alt="Wind Icon" />
                Wind
                <p>{data.windSpeed}km/h</p>
              </div>
            </div>
            <div className="rain">
              <div className="row3">
                <img src={rainIcon} alt="Rain Icon" />
                Rain
                <p>{data.rainPercentage}%</p>
              </div>
              <div className="row4">
                <img src={rainIcon} alt="Rain Icon" />
                <span>Rain</span>
                <p>{data.rainPercentage}%</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
        {/* Right side */}
        <motion.div
          ref={refRightSide}
          initial={{ x: 100, opacity: 0 }}
          animate={isInViewRightSide ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="right-side1"
        >
          <img src={weatherIcon} alt="Weather Icon" />
          <p>{data.temperature.min}℃</p>
          <span>
            {data.temperature.min}℃ - {data.temperature.max}℃
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default HSan;
