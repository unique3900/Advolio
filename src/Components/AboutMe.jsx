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
    <section  className="snap-start w-full overflow-x-hidden min-h-screen flex flex-col  items-center gap-5  mt-14">
      <h2 id='about' className='font-bold text-center text-6xl text-black dark:text-white'>About Me</h2>

          <div className="w-3/4 flex justify-center">
              <p className="leading-[29px] text-center lg:text-justify text-black dark:text-white">My educational background and work experiences are detailed below, providing a comprehensive overview of my qualifications and professional journey.
              </p>
              
          </div>

    <ActivitiesTimeline/>
    </section>
  )
}

export default AboutMe
