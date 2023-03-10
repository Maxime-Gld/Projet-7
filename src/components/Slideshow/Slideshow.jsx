import React, { useState } from 'react';
import vector_icon from '../../assets/Images/vector_left.png';
import { useLoading } from '../../utils/hook/useLoading';
import Loader from '../Loader/Loader';

const Slideshow = ({ datas }) => {
  const { data, isLoading } = useLoading(datas);
  const slides = data;

  const [current, setCurrent] = useState(0);
  const lenght = slides.length;

  function nextSlide() {
    const isLastSlide = current === lenght - 1;
    const newIndex = isLastSlide ? 0 : current + 1;
    setCurrent(newIndex);
  }

  function prevSlide() {
    const isFirstSlide = current === 0;
    const newIndex = isFirstSlide ? lenght - 1 : current - 1;
    setCurrent(newIndex);
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  let arrowButton;
  if (lenght >= 2) {
    arrowButton = (
      <>
        <div className="btn--arrow" onClick={nextSlide}>
          <img
            src={vector_icon}
            alt="fleche pour carrousel droite"
            className="arrow arrow--right"
          />
        </div>
        <div className="btn--arrow" onClick={prevSlide}>
          <img
            src={vector_icon}
            alt="fleche pour carrousel gauche"
            className="arrow arrow--left"
          />
        </div>
      </>
    );
  }

  return !isLoading ? (
    <section className="slider">
      {arrowButton}
      <div
        style={{ backgroundImage: `url(${slides[current]})` }}
        className="slide"
      ></div>
      <div>
        <p className="slider__number">
          {[current + 1]}/{lenght}
        </p>
      </div>
    </section>
  ) : (
    <section className="slider">
      <Loader />
    </section>
  );
};

export default Slideshow;
