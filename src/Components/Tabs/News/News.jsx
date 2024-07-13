import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import "./News.css";

import news1Image from "../../../assets/news1.png";
import news2Image from "../../../assets/news2.png";
import news3Image from "../../../assets/news3.png";

import live1Image from "../../../assets/viral1.png";
import live2Image from "../../../assets/viral2.png";
import live3Image from "../../../assets/viral3.png";

import space1Image from "../../../assets/space1.png";
import space2Image from "../../../assets/space2.png";
import space3Image from "../../../assets/space3.png";

const cardVariants = {
  offscreen: {
    y: 110,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    rotate: [0, 10, -10, 0],
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1,
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const textVariants = {
  offscreen: {
    y: 10,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.5,
    },
  },
};

const NewsCard = ({ image, time, description, link }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.8 });

  return (
    <motion.div
      className="news-card"
      ref={ref}
      initial="offscreen"
      animate={inView ? "onscreen" : "offscreen"}
      variants={cardVariants}
    >
      <img src={image} alt="News" className="news-image" />
      <motion.div className="news-text" variants={textVariants}>
        <span>{time}</span>
        <p>{description}</p>
        <Link to={link} className="read-more">
          Read More
        </Link>
      </motion.div>
    </motion.div>
  );
};

const News = () => {
  return (
    <>
      <motion.div
        className="news"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="new-bg">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            News
          </motion.h1>
        </div>
      </motion.div>
      <div className="news-content">
        <motion.h2
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Around The Weather News
        </motion.h2>
        <div className="news-cards">
          <NewsCard
            image={news1Image}
            time="2 hours ago"
            description="One of the daily rituals I often find myself doing"
            link="/news/1"
          />
          <NewsCard
            image={news2Image}
            time="3 hours ago"
            description="Some parts of the state saw scant relief, as downtown"
            link="/news/2"
          />
          <NewsCard
            image={news3Image}
            time="2 hours ago"
            description="Thunder is the sound caused by lightning."
            link="/thunder"
          />
        </div>
      </div>

      <div className="news-content">
        <motion.h2
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Viral Weather
        </motion.h2>
        <div className="news-cards">
          <NewsCard
            image={live1Image}
            time="2 hours ago"
            description="One of the daily rituals I often find myself doing"
            link="/news/1"
          />
          <NewsCard
            image={live2Image}
            time="3 hours ago"
            description="Some parts of the state saw scant relief, as downtown"
            link="/news/2"
          />
          <NewsCard
            image={live3Image}
            time="2 hours ago"
            description="Thunder is the sound caused by lightning."
            link=""
          />
        </div>
      </div>

      <div className="news-content">
        <motion.h2
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Space And Astronomy
        </motion.h2>
        <div className="news-cards">
          <NewsCard
            image={space1Image}
            time="2 hours ago"
            description="One of the daily rituals I often find myself doing"
            link="/news/1"
          />
          <NewsCard
            image={space2Image}
            time="3 hours ago"
            description="Some parts of the state saw scant relief, as downtown"
            link="/news/2"
          />
          <NewsCard
            image={space3Image}
            time="2 hours ago"
            description="Thunder is the sound caused by lightning."
            link=""
          />
        </div>
      </div>
    </>
  );
};

export default News;
