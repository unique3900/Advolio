import React, { useState } from "react";
import Typewriter from "./TypeWriter";
import { FaGithub,FaInstagram,FaYoutube,FaLinkedin     } from "react-icons/fa";
import {FiDownload} from "react-icons/fi"
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { SiWebmoney } from "react-icons/si";
import ParticlesBg from 'particles-bg'

const Home = () => {
  const [typeText, setTypeText] = useState("Full Stack Web Developer");
  return (
    <section id="home" className="snap-start w-full  min-h-screen flex flex-col items-center gap-4 lg:flex-row lg:justify-between lg:items-center lg:gap-10 mt-10 lg:-mt-14 px-2 lg:px-[50px] overflow-x-hidden ">
     
      <div className="flex flex-col gap-6 w-full lg:w-2/3">
        <h1 className="font-bold text-[58px] lg:text-9xl text-center lg:text-start leading-[75px] text-black dark:text-white">
          Parashar <span className="text-indigo-600">Neupane</span>
        </h1>

        <span className="text-xl lg:text-2xl font-bold text-center lg:text-start leading-[45px] text-black dark:text-white">
          {" "}
          <Typewriter text={"Full Stack Web Developer"} delay={50} />
        </span>

        <p className="leading-[29px]  lg:text-justify text-black dark:text-white">
        I'm Parashar Neupane, a Kathmandu-based full-stack web developer specializing in MERN stack development. Proficient in MongoDB, Express.js, React, and Node.js, I bring a focused expertise to create robust and scalable web applications. Open to freelance, remote, or onsite opportunities, I'm eager to contribute my MERN stack skills to innovative projects. Let's collaborate and bring your web development ideas to life.
        </p>

        <div className="flex flex-col lg:flex-row lg:justify-center items-center gap-5 ">
          <div className="flex gap-4 justify-center  items-center mt-5">
            <motion.a href="./assets/Parashar Neupane Resume.pdf" download initial={{y:40}} whileInView={{y:0,opacity:1}} transition={{ type: "spring", stiffness: 100 , delay:0.2}} viewport={{once:true}} className="px-3 py-3 bg-indigo-600 cursor-pointer text-white rounded-md w-44 flex gap-2 justify-center items-center  hover:bg-indigo-700">
               Resume <FiDownload size={18} />
            </motion.a>
            <motion.a href="#hire"  initial={{y:45}} whileInView={{y:0,opacity:1}} transition={{ type: "spring", stiffness: 100 , delay:0.3}} viewport={{once:true}}className="px-3 py-3 bg-indigo-600 cursor-pointer text-white rounded-md text-center w-44 hover:bg-indigo-700">
              Hire Me!
            </motion.a>
          </div>

          {/* Socials */}
          <div className="flex items-center flex-col lg:flex-row mt-5 gap-4">
            <p className="font-bold text-xl lg:text-lg text-black dark:text-white">Follow Me:</p>

            <div className="flex items-center gap-5">
              <a href="https://github.com/unique3900" target="_blank" className="text-black dark:text-white" to={'/'} ><FaGithub size={28}/></a>
              <a  href="https://www.linkedin.com/in/parasharneupane/" target="_blank" className="text-black dark:text-white" to={'/'} ><FaLinkedin size={28}/></a>
              <a href="https://www.instagram.com/__unique.wav/" target="_blank"  className="text-black dark:text-white" to={'/'} ><FaInstagram size={28}/></a>
              <a href="https://www.youtube.com/@Lakhemusic" target="_blank" className="text-black dark:text-white"  to={'/'} ><FaYoutube size={28}/></a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex w-fit mt-10 lg:mt-0 lg:w-1/2 mb-10 ">
        <img
          src="./assets/hero-bg-future.jpg"
          alt="Parashar Neupane"
          className="rounded-bl-[200px] shadow-2xl  w-[500px] h-[500px] object-cover"
        />
        <img className="absolute z-[-10] right-0 lg:-right-14 w-[100vw] top-6" src="./assets/hero-line-shape-2.webp" alt="Hero Lines" />
        
        
      </div>
    </section>
  );
};

export default Home;
