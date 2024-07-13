import React, { useEffect } from "react";
import "./HDetails.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Use in-view hook for scroll detection

import sunriseImg from "../../../assets/sunrisebg.png";
import sunsetImg from "../../../assets/sunsetbg.png";
import cloudIcon from "../../../assets/detailcloud.png";
import rainIcon from "../../../assets/1.png";
import r2 from "../../../assets/r2.png";
import r3 from "../../../assets/r3.png";
import rightarrow from "../../../assets/rightarrow.png";
import windrain from "../../../assets/windrain.png";
import fullright from "../../../assets/fullright.png";
import leftcard1 from "../../../assets/leftcard1.png";
import leftcard2 from "../../../assets/leftcard2.png";

const HDetails = () => {
  // Refs and inView states for left and right sections
  const { ref: leftRef, inView: leftInView } = useInView({
    triggerOnce: false, // Trigger animation only once
    threshold: 0.5, // Adjust as needed
  });

  const { ref: rightRef, inView: rightInView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  // useEffect to trigger animations based on scroll position
  useEffect(() => {
    if (leftInView) {
      // Animate left section
    }
    if (rightInView) {
      // Animate right section
    }
  }, [leftInView, rightInView]);

  return (
    <div className="hdetail-page">
      <motion.div
        className="hdetail-left"
        ref={leftRef}
        initial={{ opacity: 0, x: -50 }}
        animate={leftInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <h2>Today’s Weather Details</h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={leftInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum
          cursus quis Lorem ipsum dolor sit amet, consectetur adipiscing elit
          quis
        </motion.p>
        <div className="leftcards">
          <img src={leftcard1} alt="" />
          <img src={leftcard2} alt="" />
        </div>

        <div className="detail-cards">
          <motion.div
            className="detail-card"
            initial={{ opacity: 0 }}
            animate={leftInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p>Sunrise</p>
            <span>6:42 Am</span>
          </motion.div>
          <motion.div
            className="detail-card1"
            initial={{ opacity: 0 }}
            animate={leftInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p>Sunset</p>
            <span>7:15 Pm</span>
          </motion.div>
        </div>

        <motion.div
          className="detail-card-large"
          initial={{ opacity: 0 }}
          animate={leftInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <img src={windrain} alt="" />

          <div className="row">
            <div className="item">
              <img src={cloudIcon} alt="Wind" />
              <>Wind 3km/h</>
            </div>
            <div className="item">
              <img src={cloudIcon} alt="Wind" />
              <>Wind 3km/h</>
            </div>
          </div>
          <div className="row1">
            <div className="item1">
              <img src={rainIcon} alt="Rain" />
              <>Rain 78%</>
            </div>
            <div className="item1">
              <img src={rainIcon} alt="Rain" />
              <>Rain 78%</>
            </div>{" "}
            */
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        className="hdetail-right1"
        ref={rightRef}
        initial={{ opacity: 0, x: 50 }}
        animate={rightInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {/* <img src={fullright} alt="" /> */}
        {/* <img src={rightbg} alt="" /> */}
        <div className="forecast-columns">
          <div className="temp-row">
            <p>20℃</p>
            <span>20℃</span>
          </div>
          <div className="righ">
            {[cloudIcon, r2, r3, r2, rainIcon].map((icon, index) => (
              <motion.div
                key={index}
                className="forecast-column1"
                initial={{ opacity: 0, y: 20 }}
                animate={rightInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <img src={icon} alt="Weather Icon" />
                <p>24℃</p>
                <p>1:00 pm</p>
                <p>Light Rain</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="detail-end"
            initial={{ opacity: 0 }}
            animate={rightInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <div className="news-update">News Update</div>
            <motion.div
              className="news-tomorrow"
              initial={{ opacity: 0, y: 20 }}
              animate={rightInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              View Tomorrow forecast
              <img src={rightarrow} alt="" />
            </motion.div>
          </motion.div>
        </div>
        <div className="forecast-columns">
          <div className="temp-row">
            <p>20℃</p>
            <span>20℃</span>
          </div>
          <div className="righ">
            {[cloudIcon, r2, r3, r2, rainIcon].map((icon, index) => (
              <motion.div
                // key={index}
                className="forecast-column1"
                initial={{ opacity: 0, y: 20 }}
                animate={rightInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <img src={icon} alt="Weather Icon" />
                <p>24℃</p>
                <p>1:00 pm</p>
                <p>Light Rain</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="detail-end"
            initial={{ opacity: 0 }}
            animate={rightInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <div className="news-update">News Update</div>
            <motion.div
              className="news-tomorrow"
              initial={{ opacity: 0, y: 20 }}
              animate={rightInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              View Tomorrow forecast
              <img src={rightarrow} alt="" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default HDetails;

// <div className="hdetail-page">
// <motion.div
//   className="hdetail-left"
//   ref={leftRef}
//   initial={{ opacity: 0, x: -50 }}
//   animate={leftInView ? { opacity: 1, x: 0 } : {}}
//   transition={{ duration: 0.5 }}
// >
//   <h2>Today’s Weather Details</h2>
//   <motion.p
//     initial={{ opacity: 0 }}
//     animate={leftInView ? { opacity: 1 } : {}}
//     transition={{ duration: 0.5, delay: 0.2 }}
//   >
//     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum
//     cursus quis Lorem ipsum dolor sit amet, consectetur adipiscing elit
//     quis
//   </motion.p>
//   <div className="leftcards">
//     <img src={leftcard1} alt="" />
//     <img src={leftcard2} alt="" />
//   </div>
{
  /* <div className="detail-cards">
    <motion.div
      className="detail-card"
      initial={{ opacity: 0 }}
      animate={leftInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <p>Sunrise</p>
      <span>6:42 Am</span>
    </motion.div>
    <motion.div
      className="detail-card1"
      initial={{ opacity: 0 }}
      animate={leftInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <p>Sunset</p>
      <span>7:15 Pm</span>
    </motion.div>
  </div> */
}
{
  /* <motion.div
    className="detail-card-large"
    initial={{ opacity: 0 }}
    animate={leftInView ? { opacity: 1 } : {}}
    transition={{ duration: 0.5, delay: 0.8 }}
  >
    <img src={windrain} alt="" /> */
}
{
  /* <div className="row">
      <div className="item">
        <img src={cloudIcon} alt="Wind" />
        <>Wind 3km/h</>
      </div>
      <div className="item">
        <img src={cloudIcon} alt="Wind" />
        <>Wind 3km/h</>
      </div>
    </div>
    <div className="row1">
      <div className="item1">
        <img src={rainIcon} alt="Rain" />
        <>Rain 78%</>
      </div>
      <div className="item1">
        <img src={rainIcon} alt="Rain" />
        <>Rain 78%</>
      </div> */
}
{
  /* </div> */
}
{
  /* </motion.div> */
}
{
  /* </motion.div>
<motion.div
  className="hdetail-right1"
  ref={rightRef}
  initial={{ opacity: 0, x: 50 }}
  animate={rightInView ? { opacity: 1, x: 0 } : {}}
  transition={{ duration: 0.5 }}
>
  <img src={fullright} alt="" /> */
}
{
  /* <img src={rightbg} alt="" /> */
}
{
  /* <div className="forecast-columns">
    <div className="temp-row">
      <p>20℃</p>
      <span>20℃</span>
    </div>
    <div className="righ">
      {[cloudIcon, r2, r3, r2, rainIcon].map((icon, index) => (
        <motion.div
          key={index}
          className="forecast-column1"
          initial={{ opacity: 0, y: 20 }}
          animate={rightInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <img src={icon} alt="Weather Icon" />
          <p>24℃</p>
          <p>1:00 pm</p>
          <p>Light Rain</p>
        </motion.div>
      ))}
    </div>
    <motion.div
      className="detail-end"
      initial={{ opacity: 0 }}
      animate={rightInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5, delay: 1.2 }}
    >
      <div className="news-update">News Update</div>
      <motion.div
        className="news-tomorrow"
        initial={{ opacity: 0, y: 20 }}
        animate={rightInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 1.4 }}
      >
        View Tomorrow forecast
        <img src={rightarrow} alt="" />
      </motion.div>
    </motion.div>
  </div> */
}

{
  /* <div className="forecast-columns">
    <div className="temp-row">
      <p>20℃</p>
      <span>20℃</span>
    </div>
    <div className="righ">
      {[cloudIcon, r2, r3, r2, rainIcon].map((icon, index) => (
        <motion.div
          key={index}
          className="forecast-column1"
          initial={{ opacity: 0, y: 20 }}
          animate={rightInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <img src={icon} alt="Weather Icon" />
          <p>24℃</p>
          <p>1:00 pm</p>
          <p>Light Rain</p>
        </motion.div>
      ))}
    </div>
    <motion.div
      className="detail-end"
      initial={{ opacity: 0 }}
      animate={rightInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5, delay: 1.2 }}
    >
      <div className="news-update">News Update</div>
      <motion.div
        className="news-tomorrow"
        initial={{ opacity: 0, y: 20 }}
        animate={rightInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 1.4 }}
      >
        View Tomorrow forecast
        <img src={rightarrow} alt="" />
      </motion.div>
    </motion.div>
  </div> */
}
{
  /* </motion.div> */
}
{
  /* </div> */
}
