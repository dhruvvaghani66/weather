import React from "react";
import { delay, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Thunder.css";
import thunderImage from "../../../../assets/news_thunder.png";
import trend from "../../../../assets/trendlogo.png";
import thunder1Image from "../../../../assets/trend1.png";
import thunder2Image from "../../../../assets/trend2.png";
import thunder3Image from "../../../../assets/trend3.png";
import thunder4Image from "../../../../assets/trend4.png";
import live1Image from "../../../../assets/live1.png";
import live2Image from "../../../../assets/live2.png";
import live3Image from "../../../../assets/live3.png";

const textVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },

  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      // type: "spring",
      // bounce: 0.4,
      delay: 0.2,
      duration: 0.5,
    },
  },
};

const ThunderSection = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.6,
  });

  return (
    <motion.div
      ref={ref}
      initial="offscreen"
      animate={inView ? "onscreen" : "offscreen"}
      variants={textVariants}
    >
      {children}
    </motion.div>
  );
};

const Thunder = () => {
  return (
    <div className="thunder-container">
      <div className="left-section">
        <ThunderSection>
          <motion.h1>
            Cold weather alert issued as temperatures set to plummet
          </motion.h1>
        </ThunderSection>
        <ThunderSection>
          <motion.span>
            Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc amet
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </motion.span>
        </ThunderSection>
        <ThunderSection>
          <motion.div className="main-img">
            <img src={thunderImage} alt="Thunder" className="thunder-image" />
          </motion.div>
        </ThunderSection>
        <ThunderSection>
          <p>
            Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
            Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
            lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
            elementum tellus.
          </p>
        </ThunderSection>
        <ThunderSection>
          <p>
            Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque
            quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo
            vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex
            eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus,
            porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet magna
            non ligula vestibulum eleifend. Nulla varius volutpat turpis sed
            lacinia. Nam eget mi in purus lobortis eleifend. Sed nec ante dictum
            sem condimentum ullamcorper quis venenatis nisi. Proin vitae
            facilisis nisi, ac posuere leo.
          </p>
        </ThunderSection>
        <ThunderSection>
          <p>
            Nam pulvinar blandit velit, id condimentum diam faucibus at. Aliquam
            lacus nisi, sollicitudin at nisi nec, fermentum congue felis.
            Quisque mauris dolor, fringilla sed tincidunt ac, finibus non odio.
            Sed vitae mauris nec ante pretium finibus. Donec nisl neque,
            pharetra ac elit eu, faucibus aliquam ligula. Nullam dictum, tellus
            tincidunt tempor laoreet, nibh elit sollicitudin felis, eget feugiat
            sapien diam nec nisl. Aenean gravida turpis nisi, consequat dictum
            risus dapibus a. Duis felis ante, varius in neque eu, tempor
            suscipit sem. Maecenas ullamcorper gravida sem sit amet cursus.
            Etiam pulvinar purus vitae justo pharetra consequat. Mauris id mi ut
            arcu feugiat maximus. Mauris consequat tellus id tempus aliquet.
          </p>
        </ThunderSection>
        <ThunderSection>
          <p>
            Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
            Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
            lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
            elementum tellus.
          </p>
        </ThunderSection>
      </div>

      <div className="right-section11">
        <div className="titleimg11">
          <ThunderSection>
            <img src={trend} alt="Trend" />
          </ThunderSection>
          <ThunderSection>
            <motion.h3>Trending News</motion.h3>
          </ThunderSection>
        </div>
        <ThunderSection>
          <div className="dotted-divider11"></div>
        </ThunderSection>
        {/* <ThunderSection> */}
        {[thunder1Image, thunder2Image, thunder3Image, thunder4Image].map(
          (image, index) => (
            <React.Fragment key={index}>
              <ThunderSection>
                <motion.div className="left-right-section11">
                  <div className="left11">
                    <h4>Sorem ipsum dolor sit amet ipsum, consectetur</h4>
                    <p>
                      Sorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interdum, ac aliquet odio
                      mattis. Class aptent taciti sociosqu ad litora torquent
                      per conubia nostra, per inceptos himenaeos.
                    </p>
                  </div>

                  <div className="right11">
                    <img src={image} alt="Thunder" />
                  </div>
                </motion.div>
              </ThunderSection>
              <ThunderSection>
                <div className="divider11"></div>
              </ThunderSection>
            </React.Fragment>
          )
        )}
        {/* </ThunderSection> */}
        {/* <ThunderSection> */}
        <div className="titleimg11">
          <ThunderSection>
            <img src={trend} alt="Trend" />
          </ThunderSection>
          <ThunderSection>
            <motion.h3>Live News</motion.h3>
          </ThunderSection>
        </div>
        <div className="dotted-divider11"></div>
        {[live1Image, live2Image, live3Image].map((image, index) => (
          <React.Fragment key={index}>
            <ThunderSection>
              <motion.div className="left-right-section11">
                <div className="left11">
                  <h4>Sorem ipsum dolor sit amet ipsum, consectetur</h4>
                  <p>
                    Sorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis. Class aptent taciti sociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos.
                  </p>
                </div>
                <div className="right11">
                  <img src={image} alt="Live" />
                </div>
              </motion.div>
            </ThunderSection>
            <ThunderSection>
              <div className="divider11"></div>
            </ThunderSection>
          </React.Fragment>
        ))}
        {/* </ThunderSection> */}
      </div>
    </div>
  );
};

export default Thunder;
