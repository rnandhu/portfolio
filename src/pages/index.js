import Head from "next/head";
import Curve from "@/components/Layout/Curve";
import Logo from "./../assets/3.jpeg";
import Selva from "./../assets/Selva.png";
import Selva2 from "./../assets/Selva2.png";
import img1 from "./../assets/1.png";
import img2 from "./../assets/2.png";
// import img3 from "./../assets/3.png";
import img4 from "./../assets/4.png";
import img5 from "./../assets/5.png";
// import img6 from "./../assets/6.png";
import img7 from "./../assets/7.png";
import img8 from "./../assets/8.png";
import img9 from "./../assets/9.png";
import Arrow from "./../assets/arrow.png";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { compareAsc, format } from "date-fns";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  wrap,
} from "framer-motion";
import Link from "next/link";
import { scale } from "@/components/header/anim";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import SocialMediaIcons from "./SocialMediaIcons";

// import Slider from "react-slick";
// import Image from "next/image";

const SimpleSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    pauseOnHover: true,
  };

  const overlayClasses =
    "absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 hover:opacity-50 flex justify-center items-center transition-opacity duration-300";

  return (
    <div className=" bg-white w-full h-full overflow-hidden rounded-lg">
      <Slider
        adaptiveHeight={true}
        {...settings}
        className="h-full  mt-[17%]  overflow-hidden"
      >
        <div className="relative  flex justify-center items-center overflow-hidden h-full w-full">
          <Image
            src={img9}
            alt={""}
            className="object-contain  h-[100%] w-[100%]"
          />
          <div className={overlayClasses}>
            <Link href="/work" className="text-black   text-xl font-bold">
              Go to work
            </Link>
          </div>
        </div>
        <div className="relative  flex justify-center items-center overflow-hidden h-full w-full">
          <Image
            src={img1}
            alt={""}
            className="object-contain  h-[100%] w-[100%]"
          />
          <div className={overlayClasses}>
            <Link href="/work" className="text-black  text-xl font-bold">
              Go to work
            </Link>
          </div>
        </div>
        <div className="relative  flex justify-center items-center overflow-hidden h-full w-full">
          <Image
            src={img7}
            alt={""}
            className="object-contain  h-[100%] w-[100%]"
          />
          <div className={overlayClasses}>
            <Link href="/work" className="text-black text-xl font-bold">
              Go to work
            </Link>
          </div>
        </div>
        <div className="relative  flex justify-center items-center overflow-hidden h-full w-full">
          <Image
            src={img8}
            alt={""}
            className="object-contain  h-[100%] w-[100%]"
          />
          <div className={overlayClasses}>
            <Link href="/work" className="text-black   text-xl font-bold">
              Go to work
            </Link>
          </div>
        </div>
        <div className="relative  flex justify-center items-center overflow-hidden h-full w-full">
          <Image
            src={img2}
            alt={""}
            className="object-contain  h-[100%] w-[100%]"
          />
          <div className={overlayClasses}>
            <Link href="/work" className="text-black   text-xl font-bold">
              Go to work
            </Link>
          </div>
        </div>
        <div className="relative  flex justify-center items-center overflow-hidden h-full w-full">
          <Image
            src={img4}
            alt={""}
            className="object-contain  h-[100%] w-[100%]"
          />
          <div className={overlayClasses}>
            <Link href="/work" className="text-black text-xl font-bold">
              Go to work
            </Link>
          </div>
        </div>
        <div className="relative  flex justify-center items-center overflow-hidden h-full w-full">
          <Image
            src={img5}
            alt={""}
            className="object-contain  h-[100%] w-[100%]"
          />
          <div className={overlayClasses}>
            <Link href="/work" className="text-black   text-xl font-bold">
              Go to work
            </Link>
          </div>
        </div>
      </Slider>
    </div>
  );
};

const FlipText = ({ children }) => {
  return (
    <motion.p
      initial="initial"
      whileHover="whileHover"
      className="relative whitespace-nowrap overflow-hidden block uppercase font-black"
    >
      <motion.span
        variants={{
          initial: {
            y: 0,
          },
          whileHover: {
            y: "-100%",
          },
        }}
      >
        {children}
      </motion.span>
      <motion.span
        variants={{
          initial: {
            y: 0,
          },
          whileHover: {
            y: "-100%",
          },
        }}
      >
        {children}
      </motion.span>
    </motion.p>
  );
};

function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
}

export default function Home() {
  const [enter, setEnter] = useState(false);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const setIntervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(setIntervalId);
    };
  }, []);

  function formatTime() {
    let hour = time.getHours();

    const minute = time.getMinutes();

    const second = time.getSeconds();

    const meridian = hour >= 12 ? "PM" : "AM";
    hour = hour % 12 || 12;
    return `${padZero(hour)}:${padZero(minute)}:${padZero(second)} ${meridian}`;
  }

  function padZero(time) {
    return (time < 10 ? "0" : "") + time;
  }

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const name = "Selva Ganesh G"
    .split("")
    .map((char) => (char === " " ? "\u00A0" : char));

  return (
    <>
      <Head>
        <title>Selva Ganesh Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Curve>
        <div className="body p-[80px] md:h-screen  flex flex-col justify-center">
          <div className="flex flex-col md:flex-row w-full h-full">
            <div className="flex flex-col h-full w-full md:w-[65%] mr-0 md:mr-10">
              <motion.div
                onMouseEnter={() => setEnter(true)}
                onMouseLeave={() => setEnter(false)}
                className={`w-full flex justify-around hover:cursor-pointer flex-row h-[30%] p-4 rounded-xl ${
                  enter ? "border border-white" : ""
                } bg-white overflow-hidden relative`}
              >
                <motion.div
                  initial={{
                    x: 0,
                    y: 0,
                  }}
                  animate={{
                    scale: enter ? 4 : 1,
                    x: 1,
                    y: 1,
                    backgroundColor: enter ? "#000" : "#fff",
                    border: "1px solid #fff",
                    borderColor: "#fff",
                  }}
                  exit={{
                    x: 0,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute w-full h-full top-0 left-0 z-10"
                />
                <div className="h-full border-r w-[30%] relative z-20">
                  <motion.div
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                    }}
                    className="h-[100%] w-[100%]"
                  >
                    <Image
                      src={enter ? Selva2 : Selva}
                      className="object-cover h-[100%] w-[100%]"
                      alt=""
                    />
                  </motion.div>
                </div>
                <motion.div className="overflow-hidden h-full w-[70%] flex flex-col mx-8 relative z-20">
                  <div className="w-full h-[50%] flex justify-end text-right">
                    <motion.p
                      animate={{
                        color: enter ? "#fff" : "#000",
                      }}
                      className="tracking-widest font-[orbitron] text-black h-[100%] flex justify-start items-center w-[100%] text-[24px] md:text-[54px] text-right uppercase"
                    >
                      SELVA
                    </motion.p>
                  </div>
                  <div className="w-full h-[50%] flex justify-end text-right">
                    <motion.p
                      animate={{
                        color: enter ? "#fff" : "#000",
                      }}
                      transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                      }}
                      className="tracking-widest font-[orbitron] h-[100%] flex justify-end items-center w-[100%] text-[24px] md:text-[54px] text-right uppercase"
                    >
                      Ganesh G
                    </motion.p>
                  </div>
                </motion.div>
              </motion.div>

              <div className="w-full h-[70%] pt-4 flex flex-col md:flex-row md:overflow-hidden">
                <div className="rounded-xl w-full md:w-1/2 h-[50%] md:h-full mr-0 md:mr-2 mb-2 md:mb-0">
                  <div className="h-full">
                    <SimpleSlider />
                  </div>
                </div>
                <div className="w-full md:w-[50%] h-[50%] md:h-full ml-0 md:ml-2  flex flex-col">
                  <div className="w-full h-[50%] md:h-[50%] rounded-xl bg-white mb-2 text-black">
                    <div className=" flex flex-col justify-center items-center  rounded-xl rounded-r h-full">
                      <div className=" relative text-white text-[50px] md:text-[55px] font-bold font-mono">
                        <div className=" text-gray-900 ">{formatTime()}</div>
                        {/* <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 blur-lg opacity-50 rounded-xl"></div> */}
                        <div className=" mt-3 text-xl md:text-3xl font-semibold text-center  text-gray-900">
                          {format(time, "eee, dd MMM")}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-[50%] md:h-[50%] rounded-xl bg-white mt-2">
                    <div className="h-full  flex w-full justify-around items-center flex-col">
                      <h3 className=" text-4xl text-black uppercase   font-[orbitron]">
                        Contact Me
                      </h3>
                      {/* <h3 className=" text-3xl text-gray-900 uppercase font-bold  font-[orbitron]">Contact Me</h3> */}
                      <Link href={"/contact"}
                  
                         className="bg-white border border-black h-16 w-16 justify-center flex items-center rounded-full hover:cursor-pointer transform transition-transform duration-500 hover:rotate-[310deg] hover:scale-110"
                     
                      >
                     
                        <Image src={Arrow} alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-full w-full md:w-[35%] flex flex-col">
              <motion.div className="bg-white mb-2 rounded-xl h-[50%] md:h-[70%] w-full overflow-hidden">
                <Image
                  src={Selva}
                  className="object-cover w-full h-full rounded-xl"
                  alt=""
                />
              </motion.div>
              <div className="bg-white mt-2 h-[50%] md:h-[30%] rounded-xl w-full">
                <div className="h-full  flex w-full text-black justify-around items-center flex-col">
                <h3 className=" text-4xl text-black uppercase   font-[orbitron]">
                        Social Me
                      </h3>
<SocialMediaIcons />

                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <ParallaxText baseVelocity={-5}>Software Developer</ParallaxText>
            <ParallaxText baseVelocity={5}>Mobile App Developer</ParallaxText>
          </div>
        </div>
      </Curve>
    </>
  );
}
