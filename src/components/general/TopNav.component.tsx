import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, useEffect, useRef, useState } from "react";
import {
  AiOutlineMenu,
} from "react-icons/ai";
import { VscLocation } from "react-icons/vsc";
import {
  HiOutlineChevronDown,
  HiOutlineEnvelope,
  HiOutlineGlobeEuropeAfrica,
  HiOutlinePhone,
} from "react-icons/hi2";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { IoArrowForward } from "react-icons/io5";
import SmoothScroll from "./SmoothScroll";
import AmsTopWidget from "./AmsTopWidget";

type Props = {
  children?: any;
};

const navItems = [
  {
    name: "Home",
    subs: [],
    link: "/"
  },
  {
    name: "Student Placement",
    link: "/student-placement",
    subs: [

      {
        name: "Study Abroad",
        link: "/student-placement/#study-abroad",
      },
      {
        name: "Study Locally",
        link: "/student-placement/#study-locally",
      },
      {
        name: "Study Online",
        link: "/student-placement/#study-online",
      },
    ],
  },
  {
    name: "Pathways",
    link: "/pathways",
    subs: [
      {
        name: "International Year Programme (IYP)",
        link: "/pathways/#international-year-programme",
      },
      {
        name: "Partner Pathways",
        link: "/pathways/#partner-pathways",
      },
    ],
  },
  {
    name: "Language education",
    link: "/language-education",
    subs: [
      {
        name: "Exam Preparations",
        link: "/language-education/#exam-preparations",
      },
      {
        name: "Language Trainings",
        link: "/language-education/#language-trainings",
      },
    ],
  },
  {
    name: "Education services",
    link: "/education-services",
    subs: [
      {
        name: "Teachmint ISP",
        link: "/education-services/#teachmint-isp",
      },
      {
        name: "Partnership development",
        link: "/education-services/#partnership-development",
      },
      {
        name: "Student recruitment",
        link: "/education-services/#student-recruitment",
      },
    ],
  },
  {
    name: "Events",
    link: "/events",
    subs: [
      {
        name: "Upcoming Events",
        link: "/events/#upcoming-events"
      }
      , {
        name: "Recent Events",
        link: "/events/#recent-events",
      }
    ],
  }
];

const bottomNavItems = [
  {
    name: "Aeco Education",
    subs: [
      {
        name: "About Us",
        link: "/about",
      },

      {
        name: "News",
        link: "/news",
      },
      {
        name: "FAQ",
        link: "/faq",
      },
      {
        name: "Events",
        link: "/events",
      },
    ],
  },
  {
    name: "Resources",
    subs: [
      {
        name: "Entry Requirements",
        link: "/entry-requirements",
      },
      {
        name: "Partner With Us",
        link: "/partner-with-us",
      },
      {
        name: "Course Finder",
        link: "/course-finder",
      },
      {
        name: "Admissions",
        link: "/admission",
      },
    ],
  },
  {
    name: "Legal",
    subs: [
      {
        name: "Anti Slavery & Human Trafficking",
        link: "/anti-slavery-human-trafficking",
      },
      {
        name: "Student Protection Plan",
        link: "/student-protection-plan",
      },
      {
        name: "Policies & Statements",
        link: "/policies-statements",
      },
      {
        name: "Refund Policy",
        link: "/refund-policy",
      },
    ],
  },
];

const others = [
  {
    name: "Partner Portal",
    link: "https://aeco.ams4you.net/amslogin.html",
    new: "tab",
  },
  {
    name: "Student Portal",
    link: "https://aecoedu.studentpanel.net/search/academic/program",
    new: "tab",
  },
  {
    name: "Apply Now",
    link: "/apply",
  },
];

const TopNav: FC<Props> = ({ children }) => {
  const router = useRouter();
  const [active, setActive] = useState("/");
  const [cursorIn, setCursorIn] = useState(-1);
  const [hoveredNav, setHoveredNav] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const path = router.pathname;

  const buttonRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);



  useEffect(() => {
    const activePath = path.split("/")[1];
    activePath === "" ? setActive("/") : setActive(activePath);
  }, [path]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="fixed top-0 right-0 left-0 h-16 bg-[#ffffffdf] backdrop-blur-sm px-4 md:px-8 lg:px-14 z-[99999]">
        <div className="h-full w-full flex relative items-center justify-between">
          <div>
            <Link href="/">
              <Image
                src={"/assets/logo.png"}
                alt={"Logo"}
                width={100}
                height={64}
                className="w-24 md:w-32"
              />
            </Link>
          </div>
          <div className="gap-8   items-center hidden md:flex">
            <div className="flex gap-6">
              <Link
                href={"https://www.facebook.com/aecoeducation"}
                target="_blank"
              >
                <BsFacebook className=" text-[var(--primary-600)] hover:cursor-pointer hover:text-[var(--facebook)] transition-transform duration-500 hover:scale-110 relative" />
              </Link>
              <Link
                href={
                  "https://instagram.com/aecoeducation?igshid=NTc4MTIwNjQ2YQ=="
                }
                target="_blank"
              >
                <BsInstagram className=" text-[var(--primary-600)] hover:cursor-pointer hover:text-[var(--instagram)] transition-transform duration-500 hover:scale-110 relative" />
              </Link>
              <Link
                href={
                  "https://www.linkedin.com/showcase/aeco-education-services/"
                }
                target="_blank"
              >
                <BsLinkedin className=" text-[var(--primary-600)] hover:cursor-pointer hover:text-[var(--linkedin)] transition-transform duration-500 hover:scale-110 relative" />
              </Link>
            </div>
            <div className="flex gap-2">
              <Link
                href={"https://aeco.ams4you.net/amslogin.html"}
                target="_blank"
                className="btn-primary"
              >
                Partner Portal
              </Link>
              <Link target="_blank" className="btn-secondary" href={"https://aecoedu.studentpanel.net/login"}>
                Student Portal
              </Link>
            </div>
          </div>
          <div
            className="flex md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            ref={buttonRef}
          >
            <AiOutlineMenu className=" hover:cursor-pointer" />
          </div>
        </div>
        {menuOpen && (
          <div
            className="md:hidden absolute left-0 right-0 w-full bg-black text-white py-4"
            ref={menuRef}
          >
            {navItems.map((item, index) => {
              return (
                <Link key={index} href={item.link || ""}>
                  <div
                    className="mb-4 border-b border-[#2b2b2b]"
                  >
                    <div
                      className="flex gap-2 mb-2 items-center px-4 hover:cursor-pointer"
                      onClick={() =>
                        active === item.name
                          ? setActive("/")
                          : setActive(item.name)
                      }
                    >
                      <div
                        className={`${active === item.name &&
                          "text-white font-[500]"
                          }`}
                      >
                        {item.name}
                      </div>
                      {item.subs.length > 0 && (
                        <HiOutlineChevronDown
                          className={`${active === item.name &&
                            "text-[var(--primary-500)] font-[500]"
                            }`}
                        />
                      )}
                    </div>
                    {active === item.name && item.subs.length > 0 && (
                      <div className="mt-3 text-white border-t  bg-[rgba(13,15,18,0.99)] border-[#2b2b2b]">
                        {item.subs.map((sub, index) => {
                          return (
                            <div
                              key={index}
                              className="pl-10  p-4 border-b border-[#0e1720]"
                            >
                              <Link href={sub.link || ""} className="pb-4">
                                {sub.name}
                              </Link>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </Link>
              );
            })}
            {others.map((item, index) => {
              return (
                <div
                  className="mb-4 border-b border-[#2b2b2b]"
                  key={index}
                >
                  <div
                    className="flex gap-2 mb-2 items-center px-4 hover:cursor-pointer"
                    onClick={() =>
                      active === item.name
                        ? setActive("/")
                        : setActive(item.name)
                    }
                  >
                    <Link
                      href={item.link || ""}
                      target={item.new === "tab" ? "_blank" : "_parent"}
                      className={`${active === item.name &&
                        "text-[var(--primary-500)] font-[500]"
                        }`}
                    >
                      {item.name}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="hidden md:block   fixed top-16 right-0 left-0 h-16 bg-black text-white capitalize px-8 lg:px-10 z-[99999]">
        {/* {(path.match("student-placement") || path.match("education-services")) && <AmsTopWidget />} */}
        <div className="flex z-30 w-full h-full items-center justify-between">
          <div className="flex items-center">
            {navItems.map((item, index) => {
              const pathName = item.name.toLowerCase().split(" ").join("-");
              return (
                <Link
                  href={item.link || "#"}
                  key={index}
                  className={`relative flex px-4 h-16 items-center gap-[1px] lg:gap-[3px] justify-center hover:cursor-pointer hover:active-nav ${pathName === "home" && active === "/"
                    ? "active-nav"
                    : pathName === active
                      ? "active-nav"
                      : "[&>*]:font-[500]"
                    } overflow-visible`}
                  onMouseEnter={() => setHoveredNav(item.name)}
                  onMouseLeave={() => setHoveredNav("")}
                  onClick={() =>
                    item.name.toLocaleLowerCase() === "home" && router.push("/")
                  }
                >
                  <div className="font-inter capitalize truncate text-[12px] lg:text-[16px] text-white">
                    {item.name}
                  </div>
                  {item.subs.length > 0 && (
                    <HiOutlineChevronDown className="" />
                  )}
                  {hoveredNav === item.name && item.subs.length > 0 && (
                    <div
                      className={`absolute top-16 bg-black -left-4 lg:left-0 min-w-full w-fit ${item.name.toLowerCase() === "pathways" ||
                        item.name.toLowerCase() === "education services"
                        ? "w-fit"
                        : "w-fit"
                        } p-4 rounded-sm transition-transform duration-500`}
                    >
                      {item.subs.map((sub, index) => (
                        <Link href={sub.link || ""} key={index}>
                          <div className=" font-inter truncate w-fit font-light transition-all duration-500 py-2 hover:font-semibold">
                            {sub.name}
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </Link>
              );
            })}
          </div>
          <Link className="text-[var(--secondary-400)] uppercase  font-bold flex gap-x-3 items-center" href={"/apply"}>
            Apply Now <IoArrowForward className="" />
          </Link>
        </div>
      </div>

      <main className="mt-20 md:mt-32">{children}</main>
      <div className="bottom-0 right-0 left-0 bg-[var(--primary-800)] text-[var(--tetiary-500)] px-14 py-12 z-[99999]">
        <div className="w-full h-full gap-2">
          <div className=" items-center justify-center gap-4">
            <Link href={"/"}>
              <Image
                src={"/assets/brand_logo.png"}
                height={124}
                width={124}
                alt="brand"
              />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-7 gap-x-2 md:gap-x-10 lg:gap-x-28 gap-y-10">
            <div className="grid gap-2 col-span-2 mt-8 [&>*]:hover:cursor-pointer">
              <Link
                className="relative flex gap-3 w-fit hover:text-[var(--secondary-500)]"
                href="tel:+237650663001"
                onMouseEnter={() => setCursorIn(0)}
                onMouseLeave={() => setCursorIn(-1)}
              >
                <HiOutlinePhone size={24} className="text-[#b8bec0]" />
                <div className="relative text-[#b8bec0] font-inter">
                  (+237) 650 663 001{" "}
                  <span
                    className={`absolute -bottom-0 left-[2px] w-[90%] ${cursorIn === 0 ? "scale-x-10" : "scale-x-0"
                      } h-[2px] bg-[var(--secondary-500)] transform transition-transform duration-500 origin-left`}
                  />
                </div>
              </Link>
              <Link
                className="flex gap-3 w-fit hover:text-[var(--secondary-500)]"
                href="mailto:info@aecoedu.com"
                onMouseEnter={() => setCursorIn(1)}
                onMouseLeave={() => setCursorIn(-1)}
              >
                <HiOutlineEnvelope size={24} className="text-[#b8bec0]" />
                <div className="relative text-[#b8bec0] font-inter">
                  info@aecoedu.com
                  <span
                    className={`absolute -bottom-0 left-[2px] w-[90%] ${cursorIn === 1 ? "scale-x-10" : "scale-x-0"
                      } h-[2px] bg-[var(--secondary-500)] transform transition-transform duration-500 origin-left`}
                  />
                </div>
              </Link>
              <Link
                href=""
                className="flex gap-3 w-fit hover:text-[var(--secondary-500)]"
                onMouseEnter={() => setCursorIn(2)}
                onMouseLeave={() => setCursorIn(-1)}
              >
                <VscLocation size={24} className="text-[#b8bec0]" />
                <div className="relative text-[#b8bec0] font-inter">
                  No. 237 Rue Dibombé{" "}
                  <span
                    className={`absolute -bottom-0 left-[2px] w-[90%] ${cursorIn === 2 ? "scale-x-10" : "scale-x-0"
                      } h-[2px] bg-[var(--secondary-500)] transform transition-transform duration-500 origin-left`}
                  />
                </div>
              </Link>
              <Link
                className="flex gap-3 w-fit hover:text-[var(--secondary-500)]"
                onMouseEnter={() => setCursorIn(3)}
                onMouseLeave={() => setCursorIn(-1)}
                href=""
              >
                <HiOutlineGlobeEuropeAfrica
                  size={24}
                  className="text-[#b8bec0]"
                />
                <div className="relative text-[#b8bec0] font-inter">
                  Douala, Cameroon{" "}
                  <span
                    className={`absolute -bottom-0 left-[2px] w-[90%] ${cursorIn === 3 ? "scale-x-10" : "scale-x-0"
                      } h-[2px] bg-[var(--secondary-500)] transform transition-transform duration-500 origin-left`}
                  />
                </div>
              </Link>
            </div>
            <div className="grid col-span-1 md:col-span-5  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10">
              {navItems.map((item, index) => {
                const unique = 4 * (index + 1);
                if (item.name.toLowerCase() == "home" || index == 2 || index > 4) return;
                return (
                  <div
                    className="col-span-1 [&>*]:hover:cursor-pointer w-fit"
                    key={index}
                  >
                    <div className="mb-8 text-[var(--tetiary-500)]  font-inter font-semibold">
                      {item.name.toUpperCase()}
                    </div>
                    <div className="grid gap-2">
                      {item.subs.map((sub, index) => {
                        return (
                          <div
                            className="flex gap-3 w-fit"
                            key={index}
                            onMouseEnter={() => setCursorIn(unique + index)}
                            onMouseLeave={() => setCursorIn(-1)}
                          >
                            <Link href={sub.link || ""}>
                              <div className="relative text-[#b8bec0] font-inter hover:text-[var(--secondary-500)]">
                                {sub.name}
                                <span
                                  className={`absolute -bottom-0 left-[2px] w-[90%] ${cursorIn === unique + index
                                    ? "scale-x-10"
                                    : "scale-x-0"
                                    } h-[2px] bg-[var(--secondary-500)] transform transition-transform duration-500 origin-left`}
                                />
                              </div>
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* <div className="grid grid-cols-1 gap-y-6 md:grid-cols-5 lg:grid-cols-7 gap-x-2 md:gap-x-10 lg:gap-x-28 w-full items-center font-inter text-[var(--neutral-600)] [&>*]:hover:cursor-pointer p-2 mt-8">
          <Link href="" className="grid gap-2 col-span-2 text-[#b8bec0] hover:text-[var(--secondary-500)]  font-inter">
            Contact Us
          </Link>
          <div className="grid col-span-1 md:col-span-5 grid-cols-1 gap-y-6 lg:grid-cols-3">
            <Link
              className="text-[#b8bec0] hover:text-[var(--secondary-500)]  font-inter"
              href={"/contact-us"}
            >
              <div>Privacy Policy</div>
            </Link>
            <Link
              className="text-[#b8bec0] hover:text-[var(--secondary-500)]  font-inter"
              href={"/cookie-policy"}
            >
              <div>Cookie Policy</div>
            </Link>

            <Link
              className="text-[#b8bec0] hover:text-[var(--secondary-500)]  font-inter"
              href={"/environmental-policies"}
            >
              <div>Environmental Policies</div>
            </Link>
          </div>

        </div> */}
        <hr className="mt-10 mb-2 border-t border-[#055b5be3] opacity-70" />
        <span className="font-light ">
          AECO Education  ©  {(new Date()).getFullYear()}
        </span>
      </div>
    </div >
  );
};

export default TopNav;
