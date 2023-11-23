import Link from "next/link";
import React, { FC } from "react";
import { BsArrowRight } from "react-icons/bs";

type Props = {
  news: {
    title: string;
    date: string;
    image: string;
    body: string;
    tag: string;
  };
};

const SubNews: FC<Props> = ({ news }) => {
  return (
    <div className="grid">
      <div className="overflow-hidden w-full h-64 relative hover:cursor-pointer hover:shadow-md hover:-translate-y-1 transition-all">
        <div
          className="absolute inset-0 bg-cover bg-center grid transition-transform duration-500 "
          style={{
            backgroundImage: `url(${news.image})`,
          }}
        >
          <div className="grid inset-0 from-[#000000ea] to-transparent bg-gradient-to-t  [*>&]:transition-all [*>&]:duration-500">
            <div className="grid p-4 gap-2 bg-transparent self-end w-full">
              <div className="text-[var(--neutral-10)] font-inter text-2xl md:text-[20px] leading-6 font-bold">
                {news.title}
              </div>
              <div className="text-gray-300 font-inter  leading-6 ">
                {news.tag}
              </div>
              <div className="flex gap-2 items-center  hover:gap-x-5 transition-all">
                <Link className="btn-link mt-2 md:mt-0" href={"/"}>
                  Learn more
                </Link>
                <BsArrowRight
                  size={24}
                  className="text-center text-[var(--secondary-500)] font-bold font-inter text-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubNews;
