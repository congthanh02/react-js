import React from "react";
import Slider from "react-slick";

import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";
//import ava04 from "../../../assets/images/ava-4.jpg";

import "../../../styles/slider.css";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className="review__text">
          "Chất Lượng Ở Quán Rất Tốt, Giá Cả Hợp Lý Còn Đảm Bảo Chất Lượng. Chúng Tôi Luôn Theo Các Bạn 😘😊!"
        </p>
        <div className=" slider__content d-flex align-items-center gap-3 ">
          <img src={ava01} alt="avatar" className=" rounded" />
          <h6>Khánh</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          "Sản Phẩm Ở Đây Rất Tốt, Chúng Tôi Rất Tin Tưởng Và Ủng Hộ Các Bạn🥰🥰!"
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava02} alt="avatar" className=" rounded" />
          <h6>Huy Đỗ</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          "Tôi Đã Thử Các Thức Uống Ở Đây Và Bây Giờ Tôi Đã Ghiền Nó Mất Rồi.🤣🤣!"
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava03} alt="avatar" className=" rounded" />
          <h6>Thanh Lee</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
