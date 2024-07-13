// import React from "react";
// import "./Map.css";
// import { Link } from "react-router-dom";

// import tempImage from "../../../assets/maptemp.png"; // Update the path as needed
// import cloudImage from "../../../assets/mapcloud.png"; // Update the path as needed
// import windImage from "../../../assets/mapwind.png"; // Update the path as needed

// import indiaIcon from "../../../assets/india.png"; // Update the path as needed
// import germanyIcon from "../../../assets/germany.png"; // Update the path as needed
// import denmarkIcon from "../../../assets/denmark.png"; // Update the path as needed

// import france from "../../../assets/france.png"; // Update the path as needed
// import Poland from "../../../assets/Poland.png"; // Update the path as needed
// import Switzerland from "../../../assets/Switzerland.png"; // Update the path as needed

// import netherland from "../../../assets/netherland.png"; // Update the path as needed
// import newyork from "../../../assets/new york.png"; // Update the path as needed
// import london from "../../../assets/london.png"; // Update the path as needed

// const Map = () => {
//   return (
//     <>
//       <div className="map">
//         <div className="map-bg">
//           <h1>Map</h1>
//         </div>
//       </div>
//       <div className="map-content">
//         <h2>Europe Map Finder</h2>
//         <div className="map-rows">
//           <div className="map-column">
//             <img src={tempImage} alt="Temperature Map" className="map-icon" />
//             <p>Temperature Map</p>
//           </div>
//           <div className="map-column">
//             <img src={cloudImage} alt="Cloud Map" className="map-icon" />
//             <p>Cloud Map</p>
//           </div>
//           <div className="map-column">
//             <img src={windImage} alt="Wind Map" className="map-icon" />
//             <p>Wind Map</p>
//           </div>
//         </div>
//         <div className="map-cards">
//           <div className="map-card">
//             <img src={indiaIcon} alt="India" className="country-icon" />
//             <Link to="/maps-detail" className="detail-text">
//               <p>India</p>
//             </Link>
//           </div>
//           <div className="map-card">
//             <img src={germanyIcon} alt="Germany" className="country-icon" />
//             <p>Germany</p>
//           </div>
//           <div className="map-card">
//             <img src={denmarkIcon} alt="Denmark" className="country-icon" />
//             <p>Denmark</p>
//           </div>
//         </div>

//         <div className="map-cards1">
//           <div className="map-card">
//             <img src={france} alt="India" className="country-icon" />
//             <p>France</p>
//           </div>
//           <div className="map-card">
//             <img src={Poland} alt="Germany" className="country-icon" />
//             <p>Poland</p>
//           </div>
//           <div className="map-card">
//             <img src={Switzerland} alt="Denmark" className="country-icon" />
//             <p>Switzerland</p>
//           </div>
//         </div>

//         <div className="map-cards2">
//           <div className="map-card">
//             <img src={netherland} alt="India" className="country-icon" />
//             <p>Netherland</p>
//           </div>
//           <div className="map-card">
//             <img src={newyork} alt="Germany" className="country-icon" />
//             <p>New York</p>
//           </div>
//           <div className="map-card">
//             <img src={london} alt="Denmark" className="country-icon" />
//             <p>London</p>
//           </div>
//         </div>
//       </div>

//       <div className="map-content">
//         <h2>Asia Map Finder</h2>
//         <div className="map-rows">
//           <div className="map-column">
//             <img src={tempImage} alt="Temperature Map" className="map-icon" />
//             <p>Temperature Map</p>
//           </div>
//           <div className="map-column">
//             <img src={cloudImage} alt="Cloud Map" className="map-icon" />
//             <p>Cloud Map</p>
//           </div>
//           <div className="map-column">
//             <img src={windImage} alt="Wind Map" className="map-icon" />
//             <p>Wind Map</p>
//           </div>
//         </div>
//         <div className="map-cards">
//           <div className="map-card">
//             <img src={indiaIcon} alt="India" className="country-icon" />
//             <p>India</p>
//           </div>
//           <div className="map-card">
//             <img src={germanyIcon} alt="Germany" className="country-icon" />
//             <p>Germany</p>
//           </div>
//           <div className="map-card">
//             <img src={denmarkIcon} alt="Denmark" className="country-icon" />
//             <p>Denmark</p>
//           </div>
//         </div>

//         <div className="map-cards1">
//           <div className="map-card">
//             <img src={france} alt="India" className="country-icon" />
//             <p>France</p>
//           </div>
//           <div className="map-card">
//             <img src={Poland} alt="Germany" className="country-icon" />
//             <p>Poland</p>
//           </div>
//           <div className="map-card">
//             <img src={Switzerland} alt="Denmark" className="country-icon" />
//             <p>Switzerland</p>
//           </div>
//         </div>

//         <div className="map-cards2">
//           <div className="map-card">
//             <img src={netherland} alt="India" className="country-icon" />
//             <p>Netherland</p>
//           </div>
//           <div className="map-card">
//             <img src={newyork} alt="Germany" className="country-icon" />
//             <p>New York</p>
//           </div>
//           <div className="map-card">
//             <img src={london} alt="Denmark" className="country-icon" />
//             <p>London</p>
//           </div>
//         </div>
//       </div>

//       <div className="map-content">
//         <h2>Africa Map Finder</h2>
//         <div className="map-rows">
//           <div className="map-column">
//             <img src={tempImage} alt="Temperature Map" className="map-icon" />
//             <p>Temperature Map</p>
//           </div>
//           <div className="map-column">
//             <img src={cloudImage} alt="Cloud Map" className="map-icon" />
//             <p>Cloud Map</p>
//           </div>
//           <div className="map-column">
//             <img src={windImage} alt="Wind Map" className="map-icon" />
//             <p>Wind Map</p>
//           </div>
//         </div>
//         <div className="map-cards">
//           <div className="map-card">
//             <img src={indiaIcon} alt="India" className="country-icon" />
//             <p>India</p>
//           </div>
//           <div className="map-card">
//             <img src={germanyIcon} alt="Germany" className="country-icon" />
//             <p>Germany</p>
//           </div>
//           <div className="map-card">
//             <img src={denmarkIcon} alt="Denmark" className="country-icon" />
//             <p>Denmark</p>
//           </div>
//         </div>

//         <div className="map-cards1">
//           <div className="map-card">
//             <img src={france} alt="India" className="country-icon" />
//             <p>France</p>
//           </div>
//           <div className="map-card">
//             <img src={Poland} alt="Germany" className="country-icon" />
//             <p>Poland</p>
//           </div>
//           <div className="map-card">
//             <img src={Switzerland} alt="Denmark" className="country-icon" />
//             <p>Switzerland</p>
//           </div>
//         </div>

//         <div className="map-cards2">
//           <div className="map-card">
//             <img src={netherland} alt="India" className="country-icon" />
//             <p>Netherland</p>
//           </div>
//           <div className="map-card">
//             <img src={newyork} alt="Germany" className="country-icon" />
//             <p>New York</p>
//           </div>
//           <div className="map-card">
//             <img src={london} alt="Denmark" className="country-icon" />
//             <p>London</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Map;

import React from "react";
import "./Map.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import tempImage from "../../../assets/maptemp.png";
import cloudImage from "../../../assets/mapcloud.png";
import windImage from "../../../assets/mapwind.png";

import indiaIcon from "../../../assets/india.png";
import germanyIcon from "../../../assets/germany.png";
import denmarkIcon from "../../../assets/denmark.png";

import france from "../../../assets/france.png";
import Poland from "../../../assets/Poland.png";
import Switzerland from "../../../assets/Switzerland.png";

import netherland from "../../../assets/netherland.png";
import newyork from "../../../assets/new york.png";
import london from "../../../assets/london.png";
import { Link } from "react-router-dom";

const Map = () => {
  const { ref: europeRef, inView: europeInView } = useInView({
    triggerOnce: false,
    threshold: 0.4,
  });

  const { ref: asiaRef, inView: asiaInView } = useInView({
    triggerOnce: false,
    threshold: 0.4,
  });

  const { ref: africaRef, inView: africaInView } = useInView({
    triggerOnce: false,
    threshold: 0.4,
  });

  return (
    <>
      <div className="map">
        <div className="map-bg">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Map
          </motion.h1>
        </div>
      </div>

      {/* Europe Map Finder */}
      <div className="map-content" ref={europeRef}>
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={europeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Europe Map Finder
        </motion.h2>
        <motion.div
          className="map-rows"
          initial={{ opacity: 0, y: 50 }}
          animate={europeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.div className="map-column" whileHover={{ scale: 1.1 }}>
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              animate={
                europeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.5, delay: 0.8 }}
              src={tempImage}
              alt="Temperature Map"
              className="map-icon"
            />
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={
                europeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.5, delay: 1 }}
            >
              Temperature Map
            </motion.p>
          </motion.div>
          <motion.div className="map-column" whileHover={{ scale: 1.1 }}>
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              animate={
                europeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.5, delay: 0.8 }}
              src={cloudImage}
              alt="Cloud Map"
              className="map-icon"
            />
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={
                europeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.5, delay: 1 }}
            >
              Cloud Map
            </motion.p>
          </motion.div>
          <motion.div className="map-column" whileHover={{ scale: 1.1 }}>
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              animate={
                europeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.5, delay: 0.8 }}
              src={windImage}
              alt="Wind Map"
              className="map-icon"
            />
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={
                europeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.5, delay: 1 }}
            >
              Wind Map
            </motion.p>
          </motion.div>
        </motion.div>
        <motion.div
          className="map-cards"
          initial={{ opacity: 0, y: 50 }}
          animate={europeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <motion.div className="map-card" whileHover={{ scale: 1.05 }}>
            <img src={indiaIcon} alt="India" className="country-icon" />
            {/* <p>India</p> */}
            <Link to="/maps-detail" className="detail-text">
              <p>India</p>
            </Link>
          </motion.div>
          <motion.div className="map-card" whileHover={{ scale: 1.05 }}>
            <img src={germanyIcon} alt="Germany" className="country-icon" />
            <p>Germany</p>
          </motion.div>
          <motion.div className="map-card" whileHover={{ scale: 1.05 }}>
            <img src={denmarkIcon} alt="Denmark" className="country-icon" />
            <p>Denmark</p>
          </motion.div>
        </motion.div>

        <motion.div
          className="map-cards"
          initial={{ opacity: 0, y: 50 }}
          animate={europeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <motion.div className="map-card" whileHover={{ scale: 1.05 }}>
            <img src={france} alt="France" className="country-icon" />
            <p>France</p>
          </motion.div>
          <motion.div className="map-card" whileHover={{ scale: 1.05 }}>
            <img src={Poland} alt="Poland" className="country-icon" />
            <p>Poland</p>
          </motion.div>
          <motion.div className="map-card" whileHover={{ scale: 1.05 }}>
            <img src={Switzerland} alt="Switzerland" className="country-icon" />
            <p>Switzerland</p>
          </motion.div>
        </motion.div>

        <motion.div
          className="map-cards"
          initial={{ opacity: 0, y: 50 }}
          animate={europeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          <motion.div className="map-card" whileHover={{ scale: 1.05 }}>
            <img src={netherland} alt="Netherlands" className="country-icon" />
            <p>Netherlands</p>
          </motion.div>
          <motion.div className="map-card" whileHover={{ scale: 1.05 }}>
            <img src={newyork} alt="New York" className="country-icon" />
            <p>New York</p>
          </motion.div>
          <motion.div className="map-card" whileHover={{ scale: 1.05 }}>
            <img src={london} alt="London" className="country-icon" />
            <p>London</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Asia Map Finder */}
      <div className="map-content" ref={asiaRef}>
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={asiaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Asia Map Finder
        </motion.h2>
        <motion.div
          className="map-rows"
          initial={{ opacity: 0, y: 50 }}
          animate={asiaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div className="map-column" whileHover={{ scale: 1.1 }}>
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              animate={
                asiaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.5, delay: 0.8 }}
              src={tempImage}
              alt="Temperature Map"
              className="map-icon"
            />
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={
                asiaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.5, delay: 1 }}
            >
              Temperature Map
            </motion.p>
          </motion.div>
          <motion.div className="map-column" whileHover={{ scale: 1.1 }}>
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              animate={
                asiaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.5, delay: 0.8 }}
              src={cloudImage}
              alt="Cloud Map"
              className="map-icon"
            />
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={
                asiaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.5, delay: 1 }}
            >
              Cloud Map
            </motion.p>
          </motion.div>
          <motion.div className="map-column" whileHover={{ scale: 1.1 }}>
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              animate={
                asiaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.5, delay: 0.8 }}
              src={windImage}
              alt="Wind Map"
              className="map-icon"
            />
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={
                asiaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.5, delay: 1 }}
            >
              Wind Map
            </motion.p>
          </motion.div>
        </motion.div>
        <motion.div
          className="map-cards"
          initial={{ opacity: 0, y: 50 }}
          animate={asiaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.div className="map-card" whileHover={{ scale: 1.05 }}>
            <img src={indiaIcon} alt="India" className="country-icon" />
            <p>India</p>
          </motion.div>
          <motion.div className="map-card" whileHover={{ scale: 1.05 }}>
            <img src={germanyIcon} alt="Germany" className="country-icon" />
            <p>Germany</p>
          </motion.div>
          <motion.div className="map-card" whileHover={{ scale: 1.05 }}>
            <img src={denmarkIcon} alt="Denmark" className="country-icon" />
            <p>Denmark</p>
          </motion.div>
        </motion.div>

        <motion.div
          className="map-cards"
          initial={{ opacity: 0, y: 50 }}
          animate={asiaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <motion.div className="map-card" whileHover={{ scale: 1.05 }}>
            <img src={france} alt="France" className="country-icon" />
            <p>France</p>
          </motion.div>
          <motion.div className="map-card" whileHover={{ scale: 1.05 }}>
            <img src={Poland} alt="Poland" className="country-icon" />
            <p>Poland</p>
          </motion.div>
          <motion.div className="map-card" whileHover={{ scale: 1.05 }}>
            <img src={Switzerland} alt="Switzerland" className="country-icon" />
            <p>Switzerland</p>
          </motion.div>
        </motion.div>

        <motion.div
          className="map-cards"
          initial={{ opacity: 0, y: 50 }}
          animate={asiaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <motion.div className="map-card" whileHover={{ scale: 1.05 }}>
            <img src={netherland} alt="Netherlands" className="country-icon" />
            <p>Netherlands</p>
          </motion.div>
          <motion.div className="map-card" whileHover={{ scale: 1.05 }}>
            <img src={newyork} alt="New York" className="country-icon" />
            <p>New York</p>
          </motion.div>
          <motion.div className="map-card" whileHover={{ scale: 1.05 }}>
            <img src={london} alt="London" className="country-icon" />
            <p>London</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Africa Map Finder */}
      <div className="map-content" ref={africaRef}>
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={africaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Africa Map Finder
        </motion.h2>
        <motion.div
          className="map-rows"
          initial={{ opacity: 0, y: 50 }}
          animate={africaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div className="map-column" whileHover={{ scale: 1.1 }}>
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              animate={
                africaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.5, delay: 0.8 }}
              src={tempImage}
              alt="Temperature Map"
              className="map-icon"
            />
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={
                africaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.5, delay: 1 }}
            >
              Temperature Map
            </motion.p>
          </motion.div>
          <motion.div className="map-column" whileHover={{ scale: 1.1 }}>
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              animate={
                africaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.5, delay: 0.8 }}
              src={cloudImage}
              alt="Cloud Map"
              className="map-icon"
            />
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={
                africaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.5, delay: 1 }}
            >
              Cloud Map
            </motion.p>
          </motion.div>
          <motion.div className="map-column" whileHover={{ scale: 1.1 }}>
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              animate={
                africaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.5, delay: 0.8 }}
              src={windImage}
              alt="Wind Map"
              className="map-icon"
            />
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={
                africaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.5, delay: 1 }}
            >
              Wind Map
            </motion.p>
          </motion.div>
        </motion.div>
        <motion.div
          className="map-cards"
          initial={{ opacity: 0, y: 50 }}
          animate={africaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.div className="map-card" whileHover={{ scale: 1.05 }}>
            <img src={indiaIcon} alt="India" className="country-icon" />
            <p>India</p>
          </motion.div>
          <motion.div className="map-card" whileHover={{ scale: 1.05 }}>
            <img src={germanyIcon} alt="Germany" className="country-icon" />
            <p>Germany</p>
          </motion.div>
          <motion.div className="map-card" whileHover={{ scale: 1.05 }}>
            <img src={denmarkIcon} alt="Denmark" className="country-icon" />
            <p>Denmark</p>
          </motion.div>
        </motion.div>

        <motion.div
          className="map-cards"
          initial={{ opacity: 0, y: 50 }}
          animate={africaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <motion.div className="map-card" whileHover={{ scale: 1.05 }}>
            <img src={france} alt="France" className="country-icon" />
            <p>France</p>
          </motion.div>
          <motion.div className="map-card" whileHover={{ scale: 1.05 }}>
            <img src={Poland} alt="Poland" className="country-icon" />
            <p>Poland</p>
          </motion.div>
          <motion.div className="map-card" whileHover={{ scale: 1.05 }}>
            <img src={Switzerland} alt="Switzerland" className="country-icon" />
            <p>Switzerland</p>
          </motion.div>
        </motion.div>

        <motion.div
          className="map-cards"
          initial={{ opacity: 0, y: 50 }}
          animate={africaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <motion.div className="map-card" whileHover={{ scale: 1.05 }}>
            <img src={netherland} alt="Netherlands" className="country-icon" />
            <p>Netherlands</p>
          </motion.div>
          <motion.div className="map-card" whileHover={{ scale: 1.05 }}>
            <img src={newyork} alt="New York" className="country-icon" />
            <p>New York</p>
          </motion.div>
          <motion.div className="map-card" whileHover={{ scale: 1.05 }}>
            <img src={london} alt="London" className="country-icon" />
            <p>London</p>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Map;

// import React from "react";
// import { useEffect } from "react";

// import "./Map.css";
// import { motion, useAnimation } from "framer-motion";
// import { Link } from "react-router-dom";
// import { useInView } from "react-intersection-observer";

// import tempImage from "../../../assets/maptemp.png";
// import cloudImage from "../../../assets/mapcloud.png";
// import windImage from "../../../assets/mapwind.png";

// import indiaIcon from "../../../assets/india.png";
// import germanyIcon from "../../../assets/germany.png";
// import denmarkIcon from "../../../assets/denmark.png";

// import france from "../../../assets/france.png";
// import Poland from "../../../assets/Poland.png";
// import Switzerland from "../../../assets/Switzerland.png";

// import netherland from "../../../assets/netherland.png";
// import newyork from "../../../assets/new york.png";
// import london from "../../../assets/london.png";

// const Map = () => {
//   const sectionVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: 0.5,
//         duration: 0.6,
//       },
//     },
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: i * 0.2,
//       },
//     }),
//   };

//   const sections = [
//     { title: "Europe Map Finder" },
//     { title: "Asia Map Finder" },
//     { title: "Africa Map Finder" },
//   ];

//   const { ref, inView } = useInView({
//     triggerOnce: true,
//   });

//   const controls = useAnimation();

//   useEffect(() => {
//     if (inView) {
//       controls.start("visible");
//     }
//   }, [controls, inView]);

//   return (
//     <>
//       <div className="map" ref={ref}>
//         <div className="map-bg">
//           <motion.h1
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//           >
//             Map
//           </motion.h1>
//         </div>
//       </div>

//       {sections.map((section, index) => (
//         <motion.div
//           className="map-content"
//           initial="hidden"
//           animate={controls}
//           variants={sectionVariants}
//           key={index}
//         >
//           <motion.h2
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4 }}
//           >
//             {section.title}
//           </motion.h2>
//           <div className="map-rows">
//             <motion.div
//               // whileHover={{ scale: 1.05 }}
//               initial="hidden"
//               animate={controls}
//               // custom={i}
//               variants={cardVariants}
//               // key={i}
//               className="map-column"
//               whileHover={{ scale: 1.1 }}
//             >
//               <motion.img
//                 src={tempImage}
//                 alt="Temperature Map"
//                 className="map-icon"
//               />
//               <motion.p>Temperature Map</motion.p>
//             </motion.div>
//             <motion.div className="map-column" whileHover={{ scale: 1.1 }}>
//               <motion.img
//                 src={cloudImage}
//                 alt="Cloud Map"
//                 className="map-icon"
//               />
//               <motion.p>Cloud Map</motion.p>
//             </motion.div>
//             <motion.div className="map-column" whileHover={{ scale: 1.1 }}>
//               <motion.img src={windImage} alt="Wind Map" className="map-icon" />
//               <motion.p>Wind Map</motion.p>
//             </motion.div>
//           </div>
//           <div className="map-cards">
//             {[
//               { src: indiaIcon, alt: "India", text: "India" },
//               { src: germanyIcon, alt: "Germany", text: "Germany" },
//               { src: denmarkIcon, alt: "Denmark", text: "Denmark" },
//             ].map((card, i) => (
//               <motion.div
//                 className="map-card"
//                 whileHover={{ scale: 1.05 }}
//                 initial="hidden"
//                 animate={controls}
//                 custom={i}
//                 variants={cardVariants}
//                 key={i}
//               >
//                 <motion.img
//                   src={card.src}
//                   alt={card.alt}
//                   className="country-icon"
//                 />
//                 <motion.p>{card.text}</motion.p>
//               </motion.div>
//             ))}
//           </div>
//           <div className="map-cards">
//             {[
//               { src: france, alt: "France", text: "France" },
//               { src: Poland, alt: "Poland", text: "Poland" },
//               { src: Switzerland, alt: "Switzerland", text: "Switzerland" },
//             ].map((card, i) => (
//               <motion.div
//                 className="map-card"
//                 whileHover={{ scale: 1.05 }}
//                 initial="hidden"
//                 animate={controls}
//                 custom={i + 3}
//                 variants={cardVariants}
//                 key={i}
//               >
//                 <motion.img
//                   src={card.src}
//                   alt={card.alt}
//                   className="country-icon"
//                 />
//                 <motion.p>{card.text}</motion.p>
//               </motion.div>
//             ))}
//           </div>
//           <div className="map-cards">
//             {[
//               { src: netherland, alt: "Netherlands", text: "Netherlands" },
//               { src: newyork, alt: "New York", text: "New York" },
//               { src: london, alt: "London", text: "London" },
//             ].map((card, i) => (
//               <motion.div
//                 className="map-card"
//                 whileHover={{ scale: 1.05 }}
//                 initial="hidden"
//                 animate={controls}
//                 custom={i + 6}
//                 variants={cardVariants}
//                 key={i}
//               >
//                 <motion.img
//                   src={card.src}
//                   alt={card.alt}
//                   className="country-icon"
//                 />
//                 <motion.p>{card.text}</motion.p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       ))}
//     </>
//   );
// };

// export default Map;
