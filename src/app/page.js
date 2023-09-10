"use client";
import Image from "next/image";

import { BsSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import { BsFillChatQuoteFill } from "react-icons/bs";
import {
  SlSocialLinkedin,
  SlSocialInstagram,
  SlSocialGoogle,
  SlSocialGithub,
} from "react-icons/sl";
import { FiExternalLink } from "react-icons/fi";
import { useEffect } from "react";
import { useTheme, useSetTheme } from "./theme.store";

export default function Home() {
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
  return (
    <>
      <div className=" flex flex-col bg-white museo dark:bg-black  dark:text-white text-black">
        <nav className="md:px-12 md:h-[7rem] h-[5rem] w-screen flex justify-between items-center p-8 	">
          <Image
            className="hover:grayscale	hover:scale-110 t-slomo"
            src="SHIBIN.svg"
            height={150}
            width={150}
          />
          <div className=" flex gap-8">
            <button className="md:block hidden dark:bg-white hover:rounded-3xl t-slomo p-4 px-10  bg-black text-white dark:text-black">
              Let's Talk
            </button>
            <div>
              <button onClick={setTheme}>
                <div className=" w-12 h-12 p-2 rounded-full  dark:text-white hover:scale-150 t-slomo text-black t-white flex flex-wrap justify-center items-center">
                  {theme === "light" ? <BsFillMoonStarsFill /> : <BsSunFill />}
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
              <span className="text-blue-200 text-center text-2xl">Shibin</span>
              , a full-stack developer and UI/UX designer from India, deeply
              passionate about React.js, product design, and creating innovative
              software. I thrive on turning ideas into seamless digital
              experiences.
            </p>
          </div>
          <div className="relative md:w-2/5 p-6 w-full	md:h-[20rem] h-[10rem] box-style text-center font-thin md:text-4xl opacity-90 bg-white border-[2px] dark:border-slate-500	 border-blue-200  dark:bg-black flex justify-center items-center ">
            <div className="p-2 absolute -top-2 -right-3 rounded-full flex justify-center items-center md:text-5xl text-3xl">
              <BsFillChatQuoteFill />
            </div>
            Developers are the architects of the digital world, crafting
            solutions to shape the future, one line of code at a time.
          </div>
        </div>

        <div className="md:mt-8 mt-6 flex justify-center items-center">
          <Image src="build.svg" width={700} height={100} />
        </div>
        <div className="flex flex-col">
          <h1 className=" text-4xl  text-center my-12 font-bold">Services</h1>
          <div className="grid md:grid-cols-3 grid-cols-2 gap-10 mx-auto p-6 text-sm text-center">
            <div className="p-2 px-4 md:py-[2rem]  md:px-[4rem] border-2 ">
              Full Stack Works
            </div>
            <div className=" p-2 px-4 md:py-[2rem]  md:px-[4rem] border-2">
              Portfolio Works
            </div>
            <div className=" p-2 px-4 md:py-[2rem]  md:px-[4rem] border-2">
              API Integration
            </div>
            <div className="p-2 px-4 md:py-[2rem]  md:px-[4rem]  border-2">
              UI/UX Design
            </div>
            <div className="p-2 px-4 md:py-[2rem]  md:px-[4rem]  border-2">
              Tech Support
            </div>
            <div className="p-2 px-4 md:py-[2rem]  md:px-[4rem]  border-2">
              Testing and Debugging
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className=" text-4xl  text-center my-12 font-bold">Projects</h1>
          <div className="grid md:grid-cols-3 grid-cols-1 p-8 md:gap-x-[6rem] md:gap-y-[4rem] gap-[2rem] mx-auto">
            <div className="  hover:scale-105 t-slomo p-6 relative flex flex-col items-center justify-center h-auto w-[15rem] box-style bg-white border-[2px] dark:border-slate-500	 dark:bg-black">
              <div className="h-12 w-12 absolute -top-2 -right-2 rounded-full bg-blue-200 box-style  hover:scale-105 t-slomo flex justify-center items-center text-black  ">
                <FiExternalLink />
              </div>
              <Image
                className="rounded-full h-[6rem] w-[6rem] mb-4"
                src="/udyo.png"
                width={100}
                height={100}
              />

              <div className="text-lg font-bold">Udyo! - Jobs Portal</div>
            </div>

            <div className="  text-center hover:scale-105 t-slomo p-6 relative flex flex-col items-center justify-center  h-auto w-[15rem] box-style bg-white border-[2px] dark:border-slate-500 dark:bg-black">
              <div className="h-12 w-12 absolute -top-2 -right-2 rounded-full bg-blue-200 box-style  hover:scale-105 t-slomo flex justify-center items-center text-black  ">
                <FiExternalLink />
              </div>
              <Image
                className="rounded-full h-[6rem] w-[7rem] mb-4"
                src="/peas.png"
                width={100}
                height={100}
              />

              <div className="text-lg font-bold">
                PEAS - Stress Management Companion
              </div>
            </div>

            <div className=" hover:scale-105 t-slomo p-6 relative flex flex-col items-center justify-center  h-auto w-[15rem] box-style bg-white border-[2px] dark:border-slate-500	  dark:bg-black">
              <div className="h-12 w-12 absolute -top-2 -right-2 rounded-full bg-blue-200 box-style  hover:scale-105 t-slomo flex justify-center items-center text-black  ">
                <FiExternalLink />
              </div>
              <Image
                className="rounded-full h-[6rem] w-[6rem] mb-4"
                src="/pddrs.png"
                width={100}
                height={100}
              />

              <div className="text-lg text-center font-bold">
                PDDRS - Machine Learning
              </div>
            </div>

            <div className=" hover:scale-105 t-slomo p-6 relative flex flex-col items-center justify-center h-auto w-[15rem] box-style bg-white border-[2px] dark:border-slate-500	  dark:bg-black">
              <div className="h-12 w-12 absolute -top-2 -right-2 rounded-full bg-blue-200 box-style  hover:scale-105 t-slomo flex justify-center items-center text-black  ">
                <FiExternalLink />
              </div>
              <Image
                className="rounded-full h-[6rem] w-[6rem] mb-4"
                src="/pdfx.png"
                width={100}
                height={100}
              />

              <div className="text-lg text-center font-bold">
                pdfX - PDF Toolkit
              </div>
            </div>

            <div className=" hover:scale-105 t-slomo p-6 relative flex flex-col items-center justify-center  h-auto w-[15rem] box-style bg-white border-[2px] dark:border-slate-500	  dark:bg-black">
              <div className="h-12 w-12  absolute   -top-2 -right-2 rounded-full bg-blue-200 box-style  hover:scale-105 t-slomo flex justify-center items-center text-black  ">
                <FiExternalLink />
              </div>

              <Image
                className="rounded-full h-[6rem] w-[6rem] mb-4"
                src="/bingewatch.png"
                width={100}
                height={100}
              />

              <div className="text-lg text-center font-bold">
                Binge Watch - Movies
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className=" text-4xl  text-center my-12 font-bold">Contact</h1>
          <div className="flex flex-wrap gap-2 md:gap-[6rem] p-4 justify-center">
            <a href="https://www.linkedin.com/in/shibin-ashraf/">
              <div className="h-12 w-12  hover:scale-110  t-slomo rounded-full  flex items-center justify-center">
                <SlSocialLinkedin />
              </div>
            </a>
            <a href="https://github.com/shibinashraf">
              <div className="h-12 w-12  hover:scale-110  t-slomo  rounded-full   flex items-center justify-center">
                <SlSocialGithub />
              </div>
            </a>

            <a href="mailto: shibinashraf36@gmail.com">
              <div className="h-12 w-12  hover:scale-110 t-slomo  rounded-full  flex items-center justify-center">
                <SlSocialGoogle />
              </div>
            </a>
            <a href="https://www.instagram.com/shib1n/">
              <div className="h-12 w-12 hover:scale-110 t-slomo  rounded-full flex items-center justify-center">
                <SlSocialInstagram />
              </div>
            </a>
          </div>
        </div>
        <footer className=" flex flex-col items-center justify-center gap-4 p-4">
          <div className="p-2 px-6 bg-black rounded-md text-white  hover:scale-105 t-slomo dark:bg-white dark:text-black  flex justify-center  items-center">
            <a href="#top">
              Back to top <span>&nbsp;&#8593;</span>{" "}
            </a>
          </div>

          <div className="md:w-[25%] flex justify-center">
            © 2023 Copyright. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  );
}
