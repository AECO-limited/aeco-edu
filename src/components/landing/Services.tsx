import React, { FC } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Study abroad",
    tag: "Explore our unique study abroad opportunities",
    link: "/student-placement/study-abroad",
    image: "https://www.turing-scheme.org.uk/wp-content/uploads/2022/01/pexels-keira-burton-6146935-1-scaled.jpg",
  },
  {
    title: "International Year Programme (IYP)",
    tag: "We prepare you for the next step in education and employment.",
    image: "https://i0.wp.com/theblackexpat.com/wp-content/uploads/2022/04/Black-Students-Abroad.jpg",
    link: "/pathways/international-year-programme",
  },
  {
    title: "Study Locally",
    tag: "Make the best of your education aspirations in your region.",
    image: "https://ileiwe.com/wp-content/uploads/2021/07/STUDY-ABROAD-101.jpg",
    link: "/student-placement/local-student-placement",
  },
];
const settings = {
  dots: true,
  infinite: true,
  // centerMode: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        // dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Services: FC = () => {
  return (
    <div className="lg:-ml-[7px] md:-ml-3">
      <Slider {...settings}>
        {services.map((service, index) => {
          return (
            <div className="w-[40vw]" key={index}>
              <ServiceCard service={service} top={!!((index + 1) % 2 === 0)} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Services;
