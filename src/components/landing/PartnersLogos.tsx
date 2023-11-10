import React, { FC, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const partnerLogos = [
  {
    name: "Avila University USA",
    image: "/assets/Avila_University.png",
  },
  {
    name: "Birmingham City University",
    image: "/assets/birmingham.png"
  },
  {
    name: "Coventry University",
    image: "/assets/coventry.png"
  },
  {
    name: "De Montfort University",
    image: "/assets/demontfort.png"
  },
  {
    name: "Eu Business School",
    image: "/assets/eu_business_school.png"
  },
  {
    name: "Global College Malta",
    image: "/assets/Global_College_Malta.png",
  },

  {
    name: "Norquest College",
    image: "/assets/norquest.png",
  },

  {
    name: "Nottingham Trent University",
    image: "/assets/Nottingham_Trent_Uni.png",
  },
  {
    name: "Anglla Ruskin University",
    image: "/assets/pngwing.com (4).png",
  },
  {
    name: "Opuvia",
    image: "/assets/opuvia.png",
  },

  {
    name: "University of Greenwich",
    image: "/assets/pngwing.com (5).png",
  },
  {
    name: "BSBI - Berlin School of Business and Innovation",
    image: "/assets/bsbi.png"
  },
  {
    name: "BSBI - Berlin School of Business and Innovation",
    image: "/assets/bsbi.png"
  },
  {
    name: "Texila American University",
    image: "/assets/texila.png",
  },
  {
    name: "Ulaw - A Place for Everyone",
    image: "/assets/UniLaw_Primary_CMYK (002).png",
  },
  {
    name: "Ulster University",
    image: "/assets/ulster-university-logo-big.png",
  },
  {
    name: "ONCAMPUS",
    image: "/assets/ONCAMPUS.png",
  },
  //


];

const PartnersLogo: FC = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    initialSlide: 0,
    // cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderRef = useRef(null) as any;

  useEffect(() => {
    const slider = sliderRef.current;
    const interval = setInterval(() => {
      if (slider) {
        slider.slickNext();
      }
    }, 15000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-[100vw]">
      <Slider {...settings} ref={sliderRef}>
        {partnerLogos.map((partner, index) => {
          return (
            <div
              className="grid h-30 items-center justify-center rounded-lg "
              key={index}
            >
              <div className="w-[80] h-[80%] flex flex-col  m-auto my-4  justify-center">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="m-auto self-center h-10"
                />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default PartnersLogo;
