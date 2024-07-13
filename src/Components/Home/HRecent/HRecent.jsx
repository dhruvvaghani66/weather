import React from "react";
import "./HRecent.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import card1 from "../../../assets/card1.png";
import card2 from "../../../assets/card2.png";

const HRecent = () => {
  // UseInView hook for triggering animations for the title and paragraph
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: false,
    // rootMargin: "-100px 0px",
  });

  // UseInView hook for triggering animations for the cards
  const { ref: cardRef, inView: cardInView } = useInView({
    triggerOnce: false,
    // rootMargin: "-100px 0px",
  });

  return (
    <div className="hrecent">
      <div className="left-side">
        <motion.h1
          ref={titleRef}
          initial={{ opacity: 0, y: 50 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Recent
          <br /> Search
          <br /> Weather
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={titleInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum vestibulum.
        </motion.p>
      </div>
      <div className="right-side11">
        <motion.div
          ref={cardRef}
          className="card-container11"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={cardInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
        >
          <motion.img
            src={card1}
            alt="Cloud Icon"
            initial={{ opacity: 0, y: 20 }}
            animate={cardInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeIn", delay: 0.6 }}
          />
          <motion.img
            src={card2}
            alt="Rain Icon"
            className="card2img"
            initial={{ opacity: 0, y: 20 }}
            animate={cardInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeIn", delay: 0.8 }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HRecent;
