import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

type Props = {
  partner: {
    image: string;
    logo: string;
    name: string;
    tag: string;
    body: string;
    link: string;
  };
};
const PartnerCard: FC<Props> = ({ partner }) => {
  return (
    <div className="grid  self-center bg-white rounded border-[1px]  hover:cursor-pointer transition-all duration-500">
      <div className="flex border-b-1 p-4 pt-6 gap-2 items-center w-full">
        <img
          src={partner.logo}
          alt="logo"
          className={"h-12 object-contain"}
        />
        <p className="font-inter font-semibold text-[var(--neutral-500)] text-[16px] leading-[18px]">
          {partner.name}
        </p>
      </div>
      <img
        className="w-full h-56 object-cover"
        src={partner.image}
      />
      <div className="grid p-4 px-6 py-6">
        <p className="py-2 lg:h-16 font-inter font-bold text-[20px] leading-6 text-[var(--neutral-600)">
          {partner.tag}
        </p>
        <p className="font-inter text-[15px] text-[var(--neutral-600)] overflow-hidden whitespace-normal line-clamp-5 truncate">
          {partner.body}
        </p>
        <Link
          className="btn-primary w-[100%] text-[12px] lg:text-[15px] p-4  mt-5 mb-3"
          href={partner.link}
          target="_blank"
        >
          Learn more
        </Link>
      </div>
    </div>
  );
};

export default PartnerCard;
