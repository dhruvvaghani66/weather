// import React, { useRef } from "react";
// import "./HToday.css";
// import { motion, useInView } from "framer-motion";

// import cloudIcon from "../../../assets/cloudIcon.png";
// import rainIcon from "../../../assets/rainIcon.png";
// import suncloud from "../../../assets/suncloud.png";
// import rainy from "../../../assets/rainy.png";
// import sun from "../../../assets/sun.png";

// const HToday = () => {
//   const [view, setView] = React.useState("today");

//   const handleViewChange = (view) => {
//     setView(view);
//   };

//   // Refs for buttons and cards
//   const buttonTodayRef = useRef(null);
//   const buttonWeeklyRef = useRef(null);
//   const cardRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

//   // UseInView hooks for buttons and cards
//   const isInViewButtonToday = useInView(buttonTodayRef, { triggerOnce: true });
//   const isInViewButtonWeekly = useInView(buttonWeeklyRef, {
//     triggerOnce: true,
//   });
//   const isInViewCards = cardRefs.map((ref) =>
//     useInView(ref, { triggerOnce: true })
//   );

//   return (
//     <div className="htoday">
//       <motion.div
//         ref={buttonTodayRef}
//         initial={{ x: 50, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         transition={{
//           delay: 0.4,
//           y: { type: "spring", stiffness: 60 },
//           ease: "easeOut",
//           duration: 1,
//         }}
//         className="buttons"
//       >
//         <motion.button
//           className={view === "today" ? "active" : ""}
//           onClick={() => handleViewChange("today")}
//           // initial={{ x: 0, opacity: 0 }}
//           // animate={isInViewButtonToday ? { x: 0, opacity: 1 } : {}}
//           // transition={{ duration: 0.5, ease: "easeOut" }}
//         >
//           Today
//         </motion.button>
//         <motion.button
//           ref={buttonWeeklyRef}
//           className={view === "weekly" ? "active" : ""}
//           onClick={() => handleViewChange("weekly")}
//           initial={{ x: -100, opacity: 0 }}
//           animate={isInViewButtonWeekly ? { x: 0, opacity: 1 } : {}}
//           transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
//         >
//           Weekly
//         </motion.button>
//       </motion.div>
//       {view === "today" ? (
//         <div className="today-content">
//           {["cloudIcon", "rainIcon", "suncloud", "cloudIcon"].map(
//             (icon, index) => (
//               <motion.div
//                 // ref={cardRefs[index]}
//                 className="car"
//                 key={index}
//                 // initial={{ x: -100, opacity: 0 }}
//                 // animate={isInViewCards[index] ? { x: 0, opacity: 1 } : {}}
//                 // transition={{
//                 //   duration: 0.5,
//                 //   ease: "easeOut",
//                 //   delay: index * 0.2,
//                 // }}
//               >
//                 <div className={`carimg${(index % 3) + 1}`}>
//                   <img
//                     src={
//                       icon === "cloudIcon"
//                         ? cloudIcon
//                         : icon === "rainIcon"
//                         ? rainIcon
//                         : suncloud
//                     }
//                     alt="Weather Icon"
//                   />
//                 </div>
//                 <div className="row">
//                   <div className="small-box">
//                     {["Sun", "Mon", "Tue", "Wed"][index]}
//                   </div>
//                   <div className="small-box1">
//                     {["5:00PM", "6:00PM", "5:00PM", "5:00PM"][index]}
//                   </div>
//                 </div>
//                 <div className="row-c">
//                   <p>20℃</p>
//                   <span>25℃</span>
//                 </div>
//                 <div className="row01">
//                   <div className="row11">
//                     <img src={rainy} alt="Rain Icon" />
//                     <p>45Km/h</p>
//                   </div>
//                   <div className="row12">
//                     <img src={sun} alt="Sun Icon" />
//                     <p>70%</p>
//                   </div>
//                 </div>
//                 <div className="center-text">Cloudy</div>
//               </motion.div>
//             )
//           )}
//         </div>
//       ) : (
//         <div className="weekly-content">
//           <p>Weekly content goes here...</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default HToday;

import React, { useRef } from "react";
import "./HToday.css";
import { motion, useInView } from "framer-motion";

import cloudIcon from "../../../assets/cloudIcon.png";
import rainIcon from "../../../assets/rainIcon.png";
import suncloud from "../../../assets/suncloud.png";
import rainy from "../../../assets/rainy.png";
import sun from "../../../assets/sun.png";

const HToday = () => {
  const [view, setView] = React.useState("today");

  const handleViewChange = (view) => {
    setView(view);
  };

  // Refs for buttons and cards
  const buttonTodayRef = useRef(null);
  const buttonWeeklyRef = useRef(null);
  const cardRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  // UseInView hooks for buttons and cards
  const isInViewButtonToday = useInView(buttonTodayRef, { triggerOnce: true });
  const isInViewButtonWeekly = useInView(buttonWeeklyRef, {
    triggerOnce: true,
  });
  const isInViewCards = cardRefs.map((ref) =>
    useInView(ref, { triggerOnce: true })
  );

  return (
    <div className="htoday">
      <div className="buttons">
        <motion.button
          ref={buttonTodayRef}
          className={view === "today" ? "active" : ""}
          onClick={() => handleViewChange("today")}
          initial={{ x: -100, opacity: 0 }}
          animate={isInViewButtonToday ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Today
        </motion.button>
        <motion.button
          ref={buttonWeeklyRef}
          className={view === "weekly" ? "active" : ""}
          onClick={() => handleViewChange("weekly")}
          initial={{ x: 100, opacity: 0 }}
          animate={isInViewButtonWeekly ? { x: 0, opacity: 1 } : {}}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: 0.2,
            opacity: { duration: 0.2 },
          }}
        >
          Weekly
        </motion.button>
      </div>
      {view === "today" ? (
        <div className="today-content">
          {["Sun", "Mon", "Tue", "Wed"].map((day, index) => (
            <motion.div
              key={index}
              ref={cardRefs[index]}
              className="car"
              initial={{ y: 100, opacity: 0 }}
              animate={isInViewCards[index] ? { y: 0, opacity: 1 } : {}}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 0.2 * index,
              }}
            >
              <div className={`carimg${index}`}>
                <img
                  src={
                    index === 0
                      ? cloudIcon
                      : index === 1
                      ? rainIcon
                      : index === 2
                      ? suncloud
                      : cloudIcon
                  }
                  className="imgs"
                  alt={`${day} Icon`}
                />
              </div>
              <div className="row">
                <div className="small-box">{day}</div>
                <div className="small-box1">
                  {index % 2 === 0 ? "5:00PM" : "6:00PM"}
                </div>
              </div>
              <div className="row-c">
                <p>20℃</p>
                <span>25℃</span>
              </div>
              <div className="row01">
                <div className="row11">
                  <img src={rainy} alt="Rain Icon" />
                  <p>45Km/h</p>
                </div>
                <div className="row12">
                  <img src={sun} alt="Sun Icon" />
                  <p>70%</p>
                </div>
              </div>
              <div className="center-text">Cloudy</div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="weekly-content">
          <p>Weekly content goes here...</p>
        </div>
      )}
    </div>
  );
};

export default HToday;
