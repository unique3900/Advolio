import React from 'react'
import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineIcon,
    Typography,
    TimelineHeader,
} from "@material-tailwind/react";
import { ActivitiesTimeline } from './AboutTimeline';
  
const AboutMe = () => {
  return (
    <section id='about' className=" w-full  min-h-screen flex flex-col  items-center gap-5  mt-14">
      <h2 className='font-bold text-center text-6xl text-black dark:text-white'>About Me</h2>

          <div className="w-3/4">
              <p className="leading-[29px] text-center lg:text-justify text-black dark:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia beatae tempora impedit, hic illo ea nam id ratione distinctio obcaecati enim accusamus minima animi. Ipsum omnis accusamus accusantium consequatur voluptatum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores voluptatibus quibusdam omnis fugit. Iure, odio saepe tempora velit nesciunt cumque!
              </p>
              
          </div>

    <ActivitiesTimeline/>
    </section>
  )
}

export default AboutMe
