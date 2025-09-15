import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Gallery() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);

  const photos = [
    { id: 3, src: 'photo/3.jpg' },
    { id: 4, src: 'photo/4.jpg' },
    { id: 5, src: 'photo/5.jpg' },
    { id: 6, src: 'photo/6.jpg' },
    { id: 7, src: 'photo/7.jpg' },
    { id: 2, src: 'photo/2.jpg' },
    { id: 8, src: 'photo/8.jpg' },
    { id: 9, src: 'photo/9.jpg' },
    { id: 10, src: 'photo/10.jpg' },
    { id: 11, src: 'photo/11.jpg' },
    { id: 13, src: 'photo/13.jpg' },
    { id: 14, src: 'photo/14.jpg' },
    { id: 15, src: 'photo/15.jpg' },
    { id: 16, src: 'photo/16.jpg' },
    { id: 17, src: 'photo/17.jpg' },
    { id: 18, src: 'photo/18.jpg' },
    { id: 19, src: 'photo/19.jpg' },
    { id: 20, src: 'photo/20.jpg' },
    { id: 21, src: 'photo/21.jpg' },
    { id: 22, src: 'photo/22.jpg' },
    { id: 23, src: 'photo/23.jpg' },
    { id: 24, src: 'photo/24.jpg' },
    { id: 25, src: 'photo/25.jpg' },
  ];

  const openPopup = (index) => {
    setCurrentPhotoIndex(index);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const goToNext = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const goToPrevious = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  const imgStyle = {
    width: '100%',
    height: '400px',
    objectFit: 'contain',
    cursor: 'pointer',
  };

  const thumbStyle = {
    width: '100%',
    height: '80px',
    objectFit: 'contain',
    cursor: 'pointer',
  };

  return (
    <div className="my-5 gallery-container">
      <h2 className="text-center mb-4" style={{fontFamily: 'Montserrat, sans-serif'}}>갤러리</h2>
      <Slider
        asNavFor={nav2}
        ref={sliderRef1}
        arrows={true}
        slidesToShow={1}
      >
        {photos.map((photo, index) => (
          <div key={photo.id} onClick={() => openPopup(index)}>
            <img src={photo.src} alt={`photo-${photo.id}`} style={imgStyle} />
          </div>
        ))}
      </Slider>
      <Slider
        asNavFor={nav1}
        ref={sliderRef2}
        slidesToShow={4}
        swipeToSlide={true}
        focusOnSelect={true}
        arrows={false}
        className="mt-2"
      >
        {photos.map(photo => (
          <div key={photo.id}>
            <img src={photo.src} alt={`thumb-${photo.id}`} style={thumbStyle} />
          </div>
        ))}
      </Slider>

      {isPopupOpen && (
        <div className="gallery-popup">
          <div className="popup-header">
            <span className="popup-title">갤러리</span>
            <button className="popup-close-btn" onClick={closePopup}>&times;</button>
          </div>
          <div className="popup-content">
            <button className="popup-nav-btn prev" onClick={goToPrevious}>&#10094;</button>
            <img src={photos[currentPhotoIndex].src} alt={`popup-photo-${photos[currentPhotoIndex].id}`} className="popup-img" />
            <button className="popup-nav-btn next" onClick={goToNext}>&#10095;</button>
          </div>
        </div>
      )}

      <style>{`
        .gallery-container .slick-prev, .gallery-container .slick-next {
            z-index: 1;
        }
        .gallery-container .slick-prev {
            left: 15px;
        }
        .gallery-container .slick-next {
            right: 15px;
        }
        .gallery-container .slick-prev:before,
        .gallery-container .slick-next:before {
            color: #333;
            font-size: 30px;
        }
        .slick-slide {
            padding: 0 5px;
        }
        .slick-list {
            margin: 0 -5px;
        }
        .gallery-popup {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.9);
          z-index: 1000;
          display: flex;
          flex-direction: column;
          color: white;
        }
        .popup-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          background-color: black;
        }
        .popup-title {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.2em;
        }
        .popup-close-btn {
          background: none;
          border: none;
          color: white;
          font-size: 2.5em;
          cursor: pointer;
          line-height: 1;
        }
        .popup-content {
          flex-grow: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          overflow: hidden; /* To ensure buttons stay within bounds */
        }
        .popup-img {
          max-width: 90vw;
          max-height: 80vh;
          object-fit: contain;
        }
        .popup-nav-btn {
          background: none;
          border: none;
          color: white;
          font-size: 3em;
          cursor: pointer;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 1001;
        }
        .popup-nav-btn.prev {
          left: 20px;
        }
        .popup-nav-btn.next {
          right: 20px;
        }

        @media (max-width: 768px) {
          .gallery-container .slick-prev:before,
          .gallery-container .slick-next:before {
            font-size: 24px;
          }
           .gallery-container .slick-prev {
            left: 5px;
          }
          .gallery-container .slick-next {
            right: 5px;
          }
          .popup-header {
            padding: 15px;
          }
          .popup-title {
            font-size: 1em;
          }
          .popup-close-btn {
            font-size: 2em;
          }
          .popup-nav-btn {
            font-size: 2em;
          }
          .popup-nav-btn.prev {
            left: 5px;
          }
          .popup-nav-btn.next {
            right: 5px;
          }
        }
      `}</style>
    </div>
  );
}

export default Gallery;