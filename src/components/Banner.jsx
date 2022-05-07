import React from "react";
import "../styles/Banner.css";

let bannerData = {
  title: "React Landing Page",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fuga quae fugit ea asperiores dolorem ipsam amet, praesentium corrupti. Delectus, accusantium aliquid? Impedit magnam voluptatem ut! Iste nesciunt, quos pariatur vero ex dolor rem praesentium laboriosam error a, fugit ipsam earum corrupti architecto! Doloremque explicabo dolore esse omnis ea doloribus.",
};

function Banner() {
  return (
    <div className="banner-bg">
      <div className="container">
        <div className="banner-con">
          <div className="banner-text">
            <h1>{bannerData.title}</h1>
            <p>{bannerData.desc}</p>
            <a href="#" className="banner-btn">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Banner;
