import React from "react";

export default function Middle() {
  return (
    <div className="w-[100%] lg:w-[60%] md:rounded-t-none rounded-2xl overflow-hidden">
      <div className="carousel w-full h-96 md:h-[100%] ">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://ng.jumia.is/cms/0-1-weekly-cps/0-2024/Week-2/New_Year_Goals/NewYearGoals712x384.png"
            alt="image"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle bg-transparent border-none backdrop-blur-xl">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle bg-transparent border-none backdrop-blur-xl">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://ng.jumia.is/cms/0-1-initiatives/flashsale/2023/Slider.png"
            className="w-full"
            alt="image"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle bg-transparent border-none backdrop-blur-xl">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle bg-transparent border-none backdrop-blur-xl">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://ng.jumia.is/cms/0-1-initiatives/jbps/updated-jbp-2022/Nivea/2024/712x3841.jpg"
            className="w-full"
            alt="image"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle bg-transparent border-none backdrop-blur-xl">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle bg-transparent border-none backdrop-blur-xl">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://ng.jumia.is/cms/0-1-initiatives/jbps/updated-jbp-2022/Tecno/Desktop_Homepage_Slider__712x384_copy_3.png"
            className="w-full"
            alt="image"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle bg-transparent border-none backdrop-blur-xl">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle bg-transparent border-none backdrop-blur-xl">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
