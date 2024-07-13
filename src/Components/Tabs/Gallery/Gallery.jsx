import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import "./Gallery.css";

import galleryimg1 from "../../../assets/gallery1.png";
import galleryimg2 from "../../../assets/gallery2.png";
import galleryimg3 from "../../../assets/gallery3.png";
import galleryimg4 from "../../../assets/gallery4.png";
import galleryimg5 from "../../../assets/gallery5.png";
import galleryimg6 from "../../../assets/gallery6.png";
import galleryimg7 from "../../../assets/gallery7.png";
import galleryimg8 from "../../../assets/gallery8.png";
import galleryimg9 from "../../../assets/gallery9.png";
import galleryimg10 from "../../../assets/gallery10.png";
import galleryimg11 from "../../../assets/gallery11.png";
import galleryimg12 from "../../../assets/gallery12.png";
import galleryimg13 from "../../../assets/gallery13.png";
import galleryimg14 from "../../../assets/gallery14.png";
import galleryimg15 from "../../../assets/gallery15.png";
import galleryimg16 from "../../../assets/gallery16.png";
import locimg from "../../../assets/gallerylocation.png";

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const images = [
    { src: galleryimg1, caption: "Lightning", location: "India / 1 Year Ago" },
    { src: galleryimg2, caption: "Mountain", location: "India / 1 Year Ago" },
    { src: galleryimg3, caption: "Rain", location: "India / 1 Year Ago" },
    { src: galleryimg4, caption: "Lightning", location: "India / 1 Year Ago" },
    {
      src: galleryimg5,
      caption: "Storms on Land",
      location: "India / 1 Year Ago",
    },
    {
      src: galleryimg6,
      caption: "Morbi vel tellus ac risus",
      location: "India / 1 Year Ago",
    },
    {
      src: galleryimg7,
      caption: "Phasellus ut ex ultrices",
      location: "India / 1 Year Ago",
    },
    {
      src: galleryimg8,
      caption: "Fusce tempor orci",
      location: "India / 1 Year Ago",
    },
    {
      src: galleryimg9,
      caption: "Sunrises and Sunsets",
      location: "India / 1 Year Ago",
    },
    {
      src: galleryimg10,
      caption: "Aenean commodo orci",
      location: "India / 1 Year Ago",
    },
    {
      src: galleryimg11,
      caption: "Rainbows, Halos & Reflections",
      location: "India / 1 Year Ago",
    },
    { src: galleryimg12, caption: "Lightning", location: "India / 1 Year Ago" },
    { src: galleryimg13, caption: "Lightning", location: "India / 1 Year Ago" },
    { src: galleryimg14, caption: "Mountain", location: "India / 1 Year Ago" },
    { src: galleryimg15, caption: "Rain", location: "India / 1 Year Ago" },
    { src: galleryimg16, caption: "Lightning", location: "India / 1 Year Ago" },
  ];

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToPreviousImage = () => {
    setSelectedImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToNextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const showMoreRef = React.useRef(null);
  const isInView = useInView(showMoreRef, { once: false, amount: 0.2 });

  return (
    <>
      <div className="gallery">
        <div className="gallery-bg">
          <h1> Gallery</h1>
        </div>
      </div>
      <div className="gallery-content">
        <div className="gallery-text">
          <h2>Weather Photos Around The World</h2>
        </div>
        {Array.from({ length: 4 }).map((_, rowIndex) => (
          <div className="img-row" key={rowIndex}>
            {images
              .slice(rowIndex * 4, rowIndex * 4 + 4)
              .map((image, index) => (
                <motion.div
                  className="gallery-img"
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.6,
                        delay: (rowIndex * 4 + index) * 0.2,
                      },
                    },
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={image.src}
                    alt="gallery"
                    onClick={() => openModal(rowIndex * 4 + index)}
                  />
                  <p>{image.caption}</p>
                  <div className="gall-loc">
                    <img src={locimg} alt="" />
                    <span>{image.location}</span>
                  </div>
                </motion.div>
              ))}
          </div>
        ))}
      </div>
      {isModalOpen && (
        <div className="modal">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <span className="prev" onClick={goToPreviousImage}>
            &#10094;
          </span>
          <img
            className="modal-content"
            src={images[selectedImageIndex].src}
            alt="gallery"
          />
          <span className="next" onClick={goToNextImage}>
            &#10095;
          </span>
        </div>
      )}
      <motion.div
        className="gallery-btn"
        ref={showMoreRef}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <button>Show More</button>
      </motion.div>
    </>
  );
};

export default Gallery;
