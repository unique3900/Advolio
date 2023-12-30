import React from 'react'
import {motion } from 'framer-motion';
const Skills = () => {
    const skills = [
        {
        id: 1,
        title: "React JS",
        img:"./assets/react-logo.svg"
    },
        {
        id: 2,
        title: "Node JS",
        img:"./assets/node-js.png"
    },
        {
        id: 3,
        title: "Mongo DB",
        img:"./assets/mongo-db-logo.png"
    },
        {
        id: 4,
        title: "Express JS",
        img:"./assets/express-logo.png"
    },
        {
        id: 5,
        title: "MySql",
        img:"./assets/mysql-logo.png"
    },
        {
        id: 6,
        title: "PHP",
        img:"./assets/php-logo.png"
    },
        {
        id: 7,
        title: "Tailwind CSS",
        img:"./assets/tailwind-css-logo.png"
    },
        {
        id: 8,
        title: "Wordpress",
        img:"./assets/wordpress-logo.svg"
    },
        {
        id: 9,
        title: "Redux",
        img:"./assets/redux-logo.png"
    },
        {
        id: 10,
        title: "SEO",
        img:"./assets/seo-logo.png"
    },
    
    ]
  return (
    <section  className=" w-full  min-h-screen flex flex-col  items-center gap-5  mt-14">
      <h2 id='skills' className='font-bold text-center text-6xl text-black dark:text-white'>Skills</h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 items-center gap-20 ">
              {
                  skills.map((item, index) => (
                      <motion.div initial={{y:index*10,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{once:true}} transition={{delay:index *0.1}} className="flex flex-col gap-4 shadow-md justify-center items-center py-[120px] px-6 w-48 h-48 cursor-pointer hover:scale-105 duration-200" key={item.id}>
                          <img src={item.img} alt={item.title} className='' />
                          <p className="font-bold text-black dark:text-white text-lg leading-6 text-center h-full">{item.title }</p>
                      </motion.div>
                  ))
              }
    </div>
    </section>
  )
}

export default Skills
