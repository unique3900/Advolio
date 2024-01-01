import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineIcon,
  Typography,
  TimelineHeader,
} from "@material-tailwind/react";
import { BiSolidBusSchool } from "react-icons/bi";
import { FaSchool } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";
import { GiNetworkBars } from "react-icons/gi";

import { motion } from "framer-motion";
import { FaAddressBook } from "react-icons/fa";

export function ActivitiesTimeline() {
  return (
    <div  className="lg:w-[55rem]">
      <Timeline>
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{once:true}}
          transition={{ duration: 0.4 }}
        >
          <TimelineItem className="h-40">
            <TimelineConnector className="!w-[78px]" />
            <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
              <TimelineIcon className="p-3" color="indigo" variant="ghost">
                <BiSolidBusSchool className="h-5 w-5" />
              </TimelineIcon>
              <div className="flex flex-col gap-1">
                <Typography className="text-lg" variant="h3" color="blue-gray">
                  Secondary Level Education
                </Typography>
                <Typography
                  variant="large"
                  color="gray"
                  className="font-normal"
                >
                  North East English Secondary School
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  2005 AD - 2017 AD
                </Typography>
              </div>
            </TimelineHeader>
          </TimelineItem>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x:60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{once:true}}
           transition={{ duration: 0.6 }}
        >
          <TimelineItem className="h-40">
            <TimelineConnector className="!w-[78px]" />
            <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
              <TimelineIcon className="p-3" variant="ghost" color="red">
                <FaSchool className="h-5 w-5" />
              </TimelineIcon>
              <div className="flex flex-col gap-1">
                <Typography className="text-lg" variant="h3" color="blue-gray">
                  Higher - Secondary Level
                </Typography>
                <Typography
                  variant="large"
                  color="gray"
                  className="font-normal"
                >
                  Chanakya College of Management
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  2017 AD - 2019 AD
                </Typography>
              </div>
            </TimelineHeader>
          </TimelineItem>
        </motion.div>

        <motion.div
                     initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
                  viewport={{once:true}}
                     transition={{ duration: 0.8 }}
        >
          <TimelineItem className="h-44">
            <TimelineConnector className="!w-[78px]" />
            <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
              <TimelineIcon className="p-3" variant="ghost" color="purple">
                <IoSchoolSharp className="h-5 w-5" />
              </TimelineIcon>
              <div className="flex flex-col gap-1">
                <Typography className="text-lg" variant="h3" color="blue-gray">
                  Bachelors Level
                </Typography>
                <Typography
                  variant="large"
                  color="gray"
                  className="font-normal"
                >
                  Bhaktapur Multiple Campus
                </Typography>
                <Typography
                  variant="large"
                  color="gray"
                  className="font-normal"
                >
                  BCA (Bachelors of Computer Application)
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  2019 AD - Present
                </Typography>
              </div>
            </TimelineHeader>
          </TimelineItem>
        </motion.div>

        <motion.div
                     initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{once:true}}
                     transition={{ duration: 0.8}}
        >
          <TimelineItem className="h-44 ">
            <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
              <TimelineIcon className="p-3" variant="ghost" color="green">
                <GiNetworkBars className="h-5 w-5" />
              </TimelineIcon>
              <div className="flex flex-col gap-1">
                <Typography className="text-lg" variant="h3" color="gray">
                  Internship
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  Yoddha Lab Private Limited
                </Typography>
                <Typography
                  variant="large"
                  color="gray"
                  className="font-normal"
                >
                  Front - End Web Developer
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  2023 (September - December)
                </Typography>
              </div>
            </TimelineHeader>
          </TimelineItem>
        </motion.div>
      </Timeline>
    </div>
  );
}
