import React, { useEffect } from "react";
import "./HForecast.css";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import forecast1Image from "../../../assets/forecast1.png";
import forecast2Image from "../../../assets/forecast2.png";
import forecast3Image from "../../../assets/forecast3.png";

const HForecast = () => {
  // Intersection observer hooks for title and paragraph
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: false, // Trigger animation once
    threshold: 0.5, // 50% threshold before triggering
  });
  const { ref: paragraphRef, inView: paragraphInView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  // Animation controls for title and paragraph
  const titleControls = useAnimation();
  const paragraphControls = useAnimation();

  // Effect to animate title when in view or on scroll
  useEffect(() => {
    if (titleInView) {
      titleControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      });
    } else {
      titleControls.start({ opacity: 0, y: 20 });
    }
  }, [titleControls, titleInView]);

  // Effect to animate paragraph when in view or on scroll
  useEffect(() => {
    if (paragraphInView) {
      paragraphControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: 0.2 },
      });
    } else {
      paragraphControls.start({ opacity: 0, y: 20 });
    }
  }, [paragraphControls, paragraphInView]);

  // Intersection observer hooks for forecast cards
  const { ref: card1Ref, inView: card1InView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });
  const { ref: card2Ref, inView: card2InView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });
  const { ref: card3Ref, inView: card3InView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  // Animation controls for forecast cards
  const card1Controls = useAnimation();
  const card2Controls = useAnimation();
  const card3Controls = useAnimation();

  // Effect to animate forecast cards when in view or on scroll
  useEffect(() => {
    if (card1InView) {
      card1Controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: 0.6 },
      });
    } else {
      card1Controls.start({ opacity: 0, y: 20 });
    }
  }, [card1Controls, card1InView]);

  useEffect(() => {
    if (card2InView) {
      card2Controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: 0.8 },
      });
    } else {
      card2Controls.start({ opacity: 0, y: 20 });
    }
  }, [card2Controls, card2InView]);

  useEffect(() => {
    if (card3InView) {
      card3Controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: 1 },
      });
    } else {
      card3Controls.start({ opacity: 0, y: 20 });
    }
  }, [card3Controls, card3InView]);

  return (
    <div>
      <div className="forecast-content">
        {/* Title with motion animation */}
        <motion.h2
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={titleControls}
        >
          Weather Forecast News
        </motion.h2>
        <div className="pa">
          {/* Paragraph with motion animation */}
          <motion.p
            ref={paragraphRef}
            initial={{ opacity: 0, y: 20 }}
            animate={paragraphControls}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum
            cursus quis Lorem ipsum dolor sit amet, consectetur adipiscing elit
            quis
          </motion.p>
        </div>
        <div className="forecast-cards">
          {/* Forecast cards with motion animations */}
          <motion.div
            ref={card1Ref}
            className="forecast-card"
            initial={{ opacity: 0, y: 20 }}
            animate={card1Controls}
          >
            <img src={forecast1Image} alt="News 1" className="forecast-image" />
            <div className="forecast-text">
              <span>19th jan, 2022 </span>
              <p>One of the daily rituals I often find myself doing</p>
              <Link to="" className="forecastread-more">
                Read More
              </Link>
            </div>
          </motion.div>
          <motion.div
            ref={card2Ref}
            className="forecast-card"
            initial={{ opacity: 0, y: 20 }}
            animate={card2Controls}
          >
            <img src={forecast2Image} alt="News 2" className="forecast-image" />
            <div className="forecast-text">
              <span>19th jan, 2022 </span>
              <p>Some parts of the state saw scant relief, as downtown</p>
              <Link to="" className="forecastread-more">
                Read More
              </Link>
            </div>
          </motion.div>
          <motion.div
            ref={card3Ref}
            className="forecast-card"
            initial={{ opacity: 0, y: 20 }}
            animate={card3Controls}
          >
            <img src={forecast3Image} alt="News 3" className="forecast-image" />
            <div className="forecast-text">
              <span>19th jan, 2022 </span>
              <p>Thunder is the sound caused by lightning.</p>
              <Link to="" className="forecastread-more">
                Read More
              </Link>
            </div>
          </motion.div>
        </div>
        {/* Button with motion animation */}
        <motion.button
          className="read-more-btn"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          Read More
        </motion.button>
      </div>
    </div>
  );
};

export default HForecast;
