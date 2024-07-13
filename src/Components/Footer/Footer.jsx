import React, { useEffect, useState } from "react";
import "./Footer.css";
import logo from "../../assets/whitelogo.png";
import facebookIcon from "../../assets/facebook.png";
import twitterIcon from "../../assets/twit.png";
import instagramIcon from "../../assets/insta.png";
import linkedinIcon from "../../assets/link.png";
import { motion } from "framer-motion";

const Footer = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = currentScrollPos > prevScrollPos;

      setIsScrolled(isScrollingDown || currentScrollPos < 50);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <div className={`footer ${isScrolled ? "scrolled" : ""}`}>
      <motion.div
        className="footer-logo"
        initial={{ opacity: 0 }}
        animate={{ opacity: isScrolled ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <img src={logo} alt="Logo" />
      </motion.div>
      <motion.div
        className="footer-nav"
        initial={{ opacity: 0 }}
        animate={{ opacity: isScrolled ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <a href="/">Home</a>
        <a href="/climate-change">Climate Change</a>
        <a href="/news">News</a>
        <a href="/map">Map</a>
        <a href="/gallery">Gallery</a>
        <a href="/contact">Contact</a>
      </motion.div>
      <div className="footer-divider"></div>
      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0 }}
        animate={{ opacity: isScrolled ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <p>© 2022 Weathercoach. All Rights Reserved.</p>
        <div className="footer-social">
          <motion.a
            href="https://www.linkedin.com/in/dhruv-vaghani-745222219"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={linkedinIcon} alt="LinkedIn" />
          </motion.a>{" "}
          <motion.img
            src={instagramIcon}
            alt="Instagram"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
          <motion.img
            src={twitterIcon}
            alt="Twitter"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
          <motion.img
            src={facebookIcon}
            alt="Facebook"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
