"use client";
import Image from "next/image";

import { BsSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import { BsFillChatQuoteFill } from "react-icons/bs";
import { BsLinkedin, BsGithub, BsInstagram, BsGoogle } from "react-icons/bs";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useInView,
  useTransform,
} from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { useState, useEffect, useRef } from "react";
import { useTheme, useSetTheme } from "./theme.store";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2500);
  }, []);

  const [Gray, setGray] = useState(true);

  useEffect(() => {
    setTimeout(() => setGray(false), 1000);
  }, []);

  const ref = useRef(null);

  const theme = useTheme();
  useEffect(() => {
    try {
      const localTheme = JSON.parse(localStorage.getItem("theme"));
      if (localTheme) {
        document.documentElement.setAttribute(
          "data-mode",
          localTheme.state.theme
        );
        document.documentElement.className = localTheme.state.theme;
      }
    } catch (err) {
      console.log("error loading the color theme");
    }
  }, [theme]);
  const setTheme = useSetTheme();
  const codingQuotes = [
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "The best way to predict the future is to create it.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Believe you can and you're halfway there.",
    "Your time is limited, don't waste it living someone else's life.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Success usually comes to those who are too busy to be looking for it.",
    "In the middle of every difficulty lies opportunity.",
    "The best revenge is massive success.",
    "Don't count the days, make the days count.",
    "The road to success and the road to failure are almost exactly the same.",
    "The way to get started is to quit talking and begin doing.",
    "Your attitude determines your direction.",
    "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.",
    "The harder you work for something, the greater you'll feel when you achieve it.",
    "Success is walking from failure to failure with no loss of enthusiasm.",
    "You miss 100% of the shots you don't take.",
    "Dream big and dare to fail.",
    "The only thing that stands between you and your dream is the will to try and the belief that it is actually possible.",
    "Don't let yesterday take up too much of today.",
  ];
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * codingQuotes.length);
    setQuote(codingQuotes[randomIndex]);
  }, []);
  return (
    <>
      {loading === false ? (
        <div className="  flex flex-col bg-white mont dark:bg-black  dark:text-white text-black ">
          <nav className="md:px-12 md:h-[7rem] h-[5rem] w-screen flex justify-between items-center p-8 	">
            <Image
              className="hover:grayscale	hover:scale-110 t-slomo"
              src="SHIBIN.svg"
              height={150}
              width={150}
            />
            <div className=" flex gap-8">
              <a href="#contact">
                <button className="md:block hidden dark:bg-white hover:rounded-3xl t-slomo p-4 px-10  bg-black text-white dark:text-black">
                  Let's Talk
                </button>
              </a>
              <div>
                <button onClick={setTheme}>
                  <div className=" w-12 h-12 p-2 rounded-full  dark:text-white hover:scale-150 t-slomo text-black t-white flex flex-wrap justify-center items-center">
                    {theme === "light" ? (
                      <BsFillMoonStarsFill />
                    ) : (
                      <BsSunFill />
                    )}
                  </div>
                </button>
              </div>
            </div>
          </nav>
          <div className="flex h-full justify-center items-center w-screen md:flex-row flex-col gap-4 md:mt-8 p-6  ">
            <div className=" flex-col md:w-3/5 w-full	md:h-[20rem] box-style bg-white border-[2px] dark:border-slate-500	 border-blue-200  dark:bg-black flex justify-center items-center p-6">
              <div className=" rounded-full h-[10rem] w-[10rem] ">
                <Image src="/dp.png" width={200} height={200} />
              </div>
              <p className="text-lg">
                Hi, i am
                <span className="text-blue-200 museo text-center text-2xl">
                  &nbsp;Shibin
                </span>
                , a full-stack developer and UI/UX designer from India, deeply
                passionate about React.js, product design, and creating
                innovative software. I thrive on turning ideas into seamless
                digital experiences.
              </p>
            </div>

            <div className="relative md:w-2/5 p-6 w-full museo font-medium 	md:h-[20rem] h-[10rem] box-style text-center opacity-80 md:text-4xl bg-white border-[2px] dark:border-slate-500	 border-blue-200  dark:bg-black flex justify-center items-center ">
              <div className="p-2 absolute text-blue-200 -top-2 -right-3 rounded-full flex justify-center items-center md:text-5xl text-3xl">
                <BsFillChatQuoteFill />
              </div>
              {quote}
            </div>
          </div>
          <div className="md:mt-8 mt-6 flex justify-center items-center">
            <Image src="build.svg" width={700} height={100} />
          </div>
          <div className="flex flex-col">
            <h1 className=" text-4xl  text-center my-12 font-bold">Services</h1>
            <AnimatePresence>
              <motion.div
                className=" mx-auto"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                }}
              >
                <div className="grid md:grid-cols-3 grid-cols-2 gap-10 mx-auto p-6 text-sm text-center">
                  <div className="p-4 px-6 md:py-[2rem]  md:px-[4rem] shadow-md rounded-xl border-2 border-slate-300  hover:scale-105 t-slomo">
                    Full Stack Works
                  </div>
                  <div className=" p-4 px-6 md:py-[2rem]  md:px-[4rem] shadow-md rounded-xl border-2 border-slate-300  hover:scale-105 t-slomo">
                    Portfolio Works
                  </div>
                  <div className=" p-4 px-6 md:py-[2rem]  md:px-[4rem] shadow-md rounded-xl border-2 border-slate-300  hover:scale-105 t-slomo">
                    API Integration
                  </div>
                  <div className="p-4 px-6 md:py-[2rem]  md:px-[4rem]  shadow-md rounded-xl border-2 border-slate-300  hover:scale-105 t-slomo">
                    UI/UX Design
                  </div>
                  <div className="flex items-center justify-center p-4 px-6 md:py-[2rem]  md:px-[4rem]  shadow-md rounded-xl border-2 border-slate-300  hover:scale-105 t-slomo">
                    Technical Support
                  </div>
                  <div className="p-4 px-6 md:py-[2rem]  md:px-[4rem]  shadow-md rounded-xl border-2 border-slate-300  hover:scale-105 t-slomo">
                    Testing and Debugging
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex flex-col">
            <h1 className=" text-4xl  text-center my-12 font-bold">Projects</h1>

            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                }}
                className="grid md:grid-cols-3 grid-cols-1 p-8 md:gap-x-[6rem] md:gap-y-[4rem] gap-[2rem] mx-auto"
              >
                <div className="  hover:scale-105 t-slomo p-6 relative flex flex-col items-center justify-center h-auto w-[15rem] box-style bg-white border-[2px] dark:border-slate-500	 dark:bg-black">
                  <a href="https://udyo.online">
                    {" "}
                    <div className="h-12 w-12 absolute -top-2 -right-2 rounded-full bg-blue-200 hover:scale-105 t-slomo flex justify-center items-center text-black  ">
                      <FiExternalLink />
                    </div>
                  </a>
                  <Image
                    className="rounded-full h-[6rem] w-[6rem] mb-4"
                    src="/udyo.png"
                    width={100}
                    height={100}
                  />

                  <div className="text-lg font-regular">
                    Udyo! - Jobs Portal
                  </div>
                </div>

                <div className="  text-center hover:scale-105 t-slomo p-6 relative flex flex-col items-center justify-center  h-auto w-[15rem] box-style bg-white border-[2px] dark:border-slate-500 dark:bg-black">
                  <a href="https://post-gta.vercel.app/">
                    <div className="h-12 w-12 absolute -top-2 -right-2 rounded-full bg-blue-200   hover:scale-105 t-slomo flex justify-center items-center text-black  ">
                      <FiExternalLink />
                    </div>
                  </a>
                  <Image
                    className="rounded-full h-[5rem] w-[6rem] mb-4"
                    src="/peas.png"
                    width={100}
                    height={100}
                  />

                  <div className="text-lg font-regular">
                    PEAS - Stress Management Companion
                  </div>
                </div>

                <div className=" hover:scale-105 t-slomo p-6 relative flex flex-col items-center justify-center  h-auto w-[15rem] box-style bg-white border-[2px] dark:border-slate-500	  dark:bg-black">
                  <a href="https://huggingface.co/spaces/shibinashraf36/drugrecommendationsystem">
                    <div className="h-12 w-12 absolute -top-2 -right-2 rounded-full bg-blue-200   hover:scale-105 t-slomo flex justify-center items-center text-black  ">
                      <FiExternalLink />
                    </div>
                  </a>
                  <Image
                    className="rounded-full h-[5rem] w-[5rem] mb-4"
                    src="/pddrs.png"
                    width={100}
                    height={100}
                  />

                  <div className="text-lg text-center font-regular">
                    PDDRS - Machine Learning
                  </div>
                </div>

                <div className=" hover:scale-105 t-slomo p-6 relative flex flex-col items-center justify-center h-auto w-[15rem] box-style bg-white border-[2px] dark:border-slate-500	  dark:bg-black">
                  <a href="https://pdfx.devignx.tech/">
                    <div className="h-12 w-12 absolute -top-2 -right-2 rounded-full bg-blue-200  hover:scale-105 t-slomo flex justify-center items-center text-black  ">
                      <FiExternalLink />
                    </div>
                  </a>
                  <Image
                    className="rounded-full h-[5rem] w-[5rem] mb-4"
                    src="/pdfx.png"
                    width={100}
                    height={100}
                  />

                  <div className="text-lg text-center font-regular">
                    pdfX - PDF Toolkit
                  </div>
                </div>

                <div className=" hover:scale-105 t-slomo p-6 relative flex flex-col items-center justify-center  h-auto w-[15rem] box-style bg-white border-[2px] dark:border-slate-500	  dark:bg-black">
                  <a href="https://webifyyash.vercel.app">
                    {" "}
                    <div className="h-12 w-12  absolute   -top-2 -right-2 rounded-full bg-blue-200   hover:scale-105 t-slomo flex justify-center items-center text-black  ">
                      <FiExternalLink />
                    </div>
                  </a>

                  <Image
                    className="rounded-full h-[5rem] w-[5rem] mb-4"
                    src="/bingewatch.png"
                    width={100}
                    height={100}
                  />

                  <div className="text-lg text-center font-regular">
                    Binge Watch - Movies
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex flex-col p-8">
            <AnimatePresence>
              <motion.div
                className=" mx-auto"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                }}
              >
                <h1 className=" text-4xl  text-center  mt-20 mb-10 font-bold">
                  Certifications and Achievements
                </h1>

                <ul className="text-left md:text-xl space-y-[7px] ">
                  <li>
                    &rarr;&nbsp;Completed
                    <span className="font-bold text-blue-400 dark:text-blue-200">
                      &nbsp;GoogleCloudReady Facilitator program.
                    </span>
                  </li>
                  <li>
                    &rarr;&nbsp; Completed{" "}
                    <span className="font-bold text-blue-400 dark:text-blue-200">
                      IBM SkillsBuild Internship
                    </span>{" "}
                    for Emerging Technologies in Data Analytics (DA)
                  </li>
                  <li>
                    &rarr;&nbsp;Completed agile virtual experience program by
                    cognizant.
                  </li>
                  <li>
                    &rarr;&nbsp; Completed{" "}
                    <span className="font-bold text-blue-400 dark:text-blue-200">
                      Cybersecurity Engineering Virtual Internship Program by
                      SAP - Forage.
                    </span>
                  </li>
                  <li>
                    &rarr;&nbsp; Completed Internship Programme on artifical
                    intelligence organized by{" "}
                    <span className="font-bold text-blue-400 dark:text-blue-200">
                      PaceLab, Kochi.
                    </span>
                  </li>
                  <li>
                    &rarr;&nbsp; Completed various courses offered by{" "}
                    <span className="font-bold  text-blue-400 dark:text-blue-200">
                      Coursera , EdX, Udemy on Linux, Python and latest
                      technologies.
                    </span>
                  </li>
                  <li>
                    &rarr;&nbsp; Done various activities as student member of
                    <span className="font-bold text-blue-400 dark:text-blue-200">
                      &nbsp;Institution's Innovation Council (IIC).
                    </span>
                  </li>
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex flex-col">
            <h1 id="contact" className=" text-4xl  text-center mt-20 font-bold">
              Contact
            </h1>
            <p className=" flex justify-center md:p-8 p-4 font-thin md:text-lg text-sm text-center">
              If you're interested in collaborating or have any questions, feel
              free to get in touch. I'd love to hear from you!
            </p>

            <div className="flex flex-wrap gap-2 md:gap-[6rem] p-4 justify-center">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/shibin-ashraf/"
              >
                <div className="p-4 drop-shadow-md	text-xl bg-blue-200 dark:bg-white text-blue-800 hover:scale-110  t-slomo rounded-full  flex items-center justify-center">
                  <BsLinkedin />
                </div>
              </a>
              <a target="_blank" href="https://github.com/shibinashraf">
                <div className="p-4 drop-shadow-md	text-xl bg-blue-200 dark:bg-white text-red-800  hover:scale-110  t-slomo  rounded-full   flex items-center justify-center">
                  <BsGithub />
                </div>
              </a>

              <a target="_blank" href="mailto: shibinashraf36@gmail.com">
                <div className="p-4 drop-shadow-md	text-xl bg-blue-200  dark:bg-white  text-green-800  hover:scale-110 t-slomo  rounded-full  flex items-center justify-center">
                  <BsGoogle />
                </div>
              </a>
              <a target="_blank" href="https://www.instagram.com/shib1n/">
                <div className="p-4 drop-shadow-md	text-xl bg-blue-200  dark:bg-white text-purple-800  hover:scale-110 t-slomo  rounded-full flex items-center justify-center">
                  <BsInstagram />
                </div>
              </a>
            </div>
          </div>
          <footer className="mt-8 flex flex-col items-center justify-center gap-4 p-4">
            <div className="p-2  px-4 bg-black rounded-md text-white text-sm   hover:scale-105 t-slomo dark:bg-white dark:text-black  flex justify-center  items-center">
              <a href="#top">
                Back to top <span>&nbsp;&#8593;</span>{" "}
              </a>
            </div>

            <div className="md:w-[25%] flex justify-center">
              © 2023 Copyright. All rights reserved.
            </div>
          </footer>
        </div>
      ) : (
        <>
          <div className="h-screen w-screen dark:bg-black bg-white flex justify-center items-center">
            {Gray === true ? (
              <Image
                className="grayscale 	hover:scale-110 t-slomo"
                src="SHIBIN.svg"
                height={150}
                width={150}
              />
            ) : (
              <Image
                className="ease-in-out  t-slomo"
                src="SHIBIN.svg"
                height={150}
                width={150}
              />
            )}
          </div>
        </>
      )}
    </>
  );
}
