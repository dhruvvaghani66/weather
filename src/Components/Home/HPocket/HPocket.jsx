import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./HPocket.css";

import placeholderImage from "../../../assets/pocket_cloud.png";
import dropIcon from "../../../assets/p_drop.png";
import cloudyIcon from "../../../assets/p_cloud.png";
import sunIcon from "../../../assets/p_sun.png";

const HPocket = () => {
  const { ref: leftBoxRef, inView: leftBoxInView } = useInView({
    triggerOnce: false,
  });
  const { ref: rightBoxRef, inView: rightBoxInView } = useInView({
    triggerOnce: false,
  });
  const { ref: rightContentRef, inView: rightContentInView } = useInView({
    triggerOnce: false,
  });

  const data = [
    {
      img: "../../../assets/new1.png",
      city: "Cape Town",
      temperature: "13.32",
      unit: "°C",
      day: "Tuesday",
      icon: dropIcon,
      percentage: "66",
      weather: "Partly Cloudy",
      extraStats: [
        { icon: dropIcon, value: "66", unit: "%" },
        { icon: cloudyIcon, value: "14", unit: "%" },
        { icon: sunIcon, value: "20", unit: "%" },
      ],
    },
    {
      city: "Cape Town",
      temperature: "13.32",
      unit: "°C",
      day: "Tuesday",
      icon: dropIcon,
      percentage: "66",
      weather: "Partly Cloudy",
      extraStats: [
        { icon: dropIcon, value: "66", unit: "%" },
        { icon: cloudyIcon, value: "14", unit: "%" },
        { icon: sunIcon, value: "20", unit: "%" },
      ],
    },
  ];

  return (
    <div className="pocket">
      <div className="pocket-left">
        <div className="hpocket">
          {data.map((item, index) => (
            <motion.div
              key={index}
              className={`box ${index % 2 === 0 ? "right-box" : "left-box"}`}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={
                leftBoxInView
                  ? { scale: 1, opacity: 1 }
                  : { scale: 0.5, opacity: 0 }
              }
              transition={{ duration: 0.5, delay: index * 0.3 }}
              ref={leftBoxRef}
            >
              <div className="box-content">
                <div className="text-content">
                  <h2>{item.city}</h2>
                  <p>
                    {item.temperature}
                    <span className="unit">{item.unit}</span>
                  </p>
                  {item.day}
                </div>
                <div className="r">
                  <img
                    src={placeholderImage}
                    alt="Weather"
                    className="weather-image"
                  />
                  <p>{item.weather}</p>
                </div>
              </div>
              <div className="divider"></div>
              <div className="stats-row">
                {item.extraStats.map((stat, statIndex) => (
                  <div key={statIndex} className="stat-item">
                    <img src={stat.icon} alt="Icon" className="icon" />
                    <p>
                      {stat.value}
                      <span className="unit">{stat.unit}</span>
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div
        className="pocket-right"
        initial={{ opacity: 0, y: 20 }}
        animate={
          rightContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
        }
        transition={{ duration: 0.5 }}
        ref={rightContentRef}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={
            rightBoxInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ delay: 0.2 }}
          ref={rightBoxRef}
        >
          Weather in Your Pocket
        </motion.h2>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={
            rightBoxInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ delay: 0.4 }}
          ref={rightBoxRef}
        >
          Directly From Your Phone
        </motion.span>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={
            rightBoxInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ delay: 0.6 }}
          ref={rightBoxRef}
        >
          The forecast for today is sunny and bright, with a high of 68 degrees.
          Enjoy the beautiful weather and make sure to wear sunscreen.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={
            rightBoxInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ delay: 0.8 }}
          ref={rightBoxRef}
        >
          The forecast for today is sunny and bright, with a high of 68 degrees.
          Enjoy the beautiful weather and make sure to wear sunscreen.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default HPocket;
