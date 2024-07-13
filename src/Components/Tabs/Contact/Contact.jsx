import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./Contact.css";
import mapimg from "../../../assets/map.png";
import contactImg from "../../../assets/maptouch.png"; // Update the path as needed

const Contact = () => {
  const contactBgRef = useRef(null);
  const contactBgInView = useInView(contactBgRef, { once: false });

  const mapIframeRef = useRef(null);
  const mapIframeInView = useInView(mapIframeRef, { once: false });

  const mapTouchRef = useRef(null);
  const mapTouchInView = useInView(mapTouchRef, { once: false });

  const subscribeRef = useRef(null);
  const subscribeInView = useInView(subscribeRef, { once: false });

  return (
    <>
      <div className="contact">
        <motion.div
          className="contact-bg"
          ref={contactBgRef}
          initial={{ opacity: 0, y: -50 }}
          animate={
            contactBgInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }
          }
          transition={{ duration: 0.6 }}
        >
          <h1>Contact Us</h1>
        </motion.div>
      </div>
      <div className="contact-content">
        <div className="image" ref={mapIframeRef}>
          <motion.iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.54586608885!2d72.73989448226327!3d21.159180203496195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1715934472526!5m2!1sen!2sin"
            width="100%"
            height="400"
            initial={{ opacity: 0, y: 50 }}
            animate={
              mapIframeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
            }
            transition={{ duration: 0.6 }}
          ></motion.iframe>
        </div>
        <motion.div
          className="map-touch"
          ref={mapTouchRef}
          initial={{ opacity: 0, y: 50 }}
          animate={
            mapTouchInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
          }
          transition={{ duration: 0.6 }}
        >
          <h2>GET IN TOUCH</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan.
          </p>
          <div className="map-touch-content">
            <motion.div
              className="map-touch-left"
              initial={{ opacity: 0, x: -100 }}
              animate={
                mapTouchInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
              }
              transition={{ duration: 0.6 }}
            >
              <img src={contactImg} alt="Contact" />
            </motion.div>
            <motion.div
              className="map-touch-right"
              initial={{ opacity: 0, x: 100 }}
              animate={
                mapTouchInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }
              }
              transition={{ duration: 0.6 }}
            >
              <div className="input-row">
                <input type="text" placeholder="Enter your first name" />
                <input type="text" placeholder="Enter your last name" />
              </div>
              <div className="input-row">
                <input type="text" placeholder="Phone number" />
                <input type="email" placeholder="Email address" />
              </div>
              <div className="text-area">
                <textarea placeholder="Your message"></textarea>
              </div>
              <div className="text-btn">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          className="subscribe"
          ref={subscribeRef}
          // initial={{ opacity: 0, y: 50 }}
          // animate={
          //   subscribeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
          // }
          // transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={
              subscribeInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
            }
            transition={{ duration: 0.6 }}
            className="left"
          >
            <p>Subscribe Our </p>
            <p>Newsletter For Weather </p>
            <p>Update</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={
              subscribeInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }
            }
            transition={{ duration: 0.6 }}
            className="right"
          >
            <input type="email" className="email-input" placeholder="Email " />
            <input type="phone" className="phone-input" placeholder="Phone " />
            <div className="submit-btn">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Submit
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Contact;
