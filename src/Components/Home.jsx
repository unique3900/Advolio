import React, { useState } from "react";
import Typewriter from "./TypeWriter";
import { FaGithub,FaInstagram,FaYoutube   } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { SiWebmoney } from "react-icons/si";

const Home = () => {
  const [typeText, setTypeText] = useState("Full Stack Web Developer");
  return (
    <section id="home" className=" w-full  min-h-screen flex flex-col items-center gap-4 lg:flex-row lg:justify-between lg:items-center lg:gap-10 mt-10 lg:-mt-14 px-2 lg:px-[50px] ">
      <div className="flex flex-col gap-6 w-full lg:w-2/3">
        <h1 className="font-bold text-[58px] lg:text-9xl text-center lg:text-start leading-[75px] text-black dark:text-white">
          Parashar <span className="text-indigo-600">Neupane</span>
        </h1>

        <span className="text-xl lg:text-2xl font-bold text-center lg:text-start leading-[45px] text-black dark:text-white">
          {" "}
          <Typewriter text={"Full Stack Web Developer"} delay={50} />
        </span>

        <p className="leading-[29px] text-center lg:text-justify text-black dark:text-white">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur
          similique, recusandae animi, accusamus nam iste molestias facilis unde
          esse eum consectetur, aspernatur voluptatum veniam inventore ad
          eveniet. Laborum, exercitationem dolore.
        </p>

        <div className="flex flex-col lg:flex-row lg:justify-center items-center gap-5 ">
          <div className="flex gap-4 justify-center items-center mt-5">
            <motion.button initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}

              transition={{ type: "spring", stiffness: 100,delay:0.3 }} className="px-3 py-3 bg-indigo-600 cursor-pointer text-white rounded-md w-44">
              Get in Touch
            </motion.button>
            <motion.button  initial={{y:200,opacity:0}} animate={{y:0,opacity:1}} transition={{ type: "spring", stiffness: 100 , delay:0.5}} className="px-3 py-3 bg-indigo-600 cursor-pointer text-white rounded-md w-44">
              Hire Me!
            </motion.button>
          </div>

          {/* Socials */}
          <div className="flex items-center flex-col lg:flex-row mt-5 gap-4">
            <p className="font-bold text-xl lg:text-lg text-black dark:text-white">Follow Me:</p>

            <div className="flex items-center gap-5">
              <Link className="text-black dark:text-white" to={'/'} ><FaGithub size={28}/></Link>
              <Link  className="text-black dark:text-white" to={'/'} ><FaInstagram size={28}/></Link>
              <Link className="text-black dark:text-white"  to={'/'} ><FaYoutube size={28}/></Link>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex mt-10 lg:mt-0    lg:w-1/2 mb-10 ">
        <img
          src="./assets/hero-bg-future.jpg"
          alt=""
          className="rounded-bl-[200px] shadow-2xl  w-[500px] h-[500px] object-cover"
        />
        <img className="absolute z-[-10] right-0 lg:right-0 top-6" src="./assets/hero-line-shape-2.webp" alt="" />
        
        
      </div>
    </section>
  );
};

export default Home;
