import { useEffect ,useRef} from "react";
import Swiper, { Pagination } from "swiper";
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Slider.scss";

export default function Slider({ slides }) {

  const swiperRef = useRef();
  
  useEffect(() => {
    const swiper = new Swiper(swiperRef.current, {
      // configure Swiper to use modules
      //   modules: [Navigation, Pagination],
      modules: [Pagination],
      pagination: {
        el: ".swiper-pagination",
      },

      //   // Navigation arrows
      //   navigation: {
      //     nextEl: ".swiper-button-next",
      //     prevEl: ".swiper-button-prev",
      //   },
    });
  }, []);
  return (
    <div ref={swiperRef} className="c-slider swiper">
      <div className="swiper-wrapper">
        {slides.map((slide, index) => (
          <div key={index} className="swiper-slide">
            <img
              className="c-slider__img"
              src={
                slide.attributes.coverImage
                  ? slide.attributes.coverImage.original
                  : slide.attributes.posterImage.original
              }
              alt={"slide"}
            />
          </div>
        ))}
      </div>
      <div className="swiper-pagination"></div>
      {/* 
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div> */}
    </div>
  );
}
