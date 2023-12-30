import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
const Projects = () => {
    const ProjectData = [
        {
            id: 1, title: "Ecommerce Application", url: "./projects/ecommerce-app.png", desc: "Built using MERN stack technology, Use of Redux for state management, Redux thunk for handling asynchronus actions, Passport JS for handling authentication. Admin panel is made so that seller can easily perform operations whereas users enjoy the user-friendly UI. ", git: "https://github.com/unique3900/ParasharShop"
        },
        {
            id: 2, title: "Hotel Booking System", url: "./projects/hotel-booking-system.png", desc: "A full stack web application built on MERN stack technologies, is a site which provides a platform for performing hotel booking operations. Use of JWT for authorization makes the system more secure.", git: "https://github.com/unique3900/Hotel-Booking-System"
        },
        {
            id: 3, title: "ChillFlix", url: "./projects/chillflix-movie.png", desc: "A simple and fun web application project built using React JS, Tailwind CSS and Firebase for user authentication/authorization. Lets user to view the trending or popular or latest movies and create a watchlist for later.", git: "https://github.com/unique3900/ChillFlix"
        },
        {
            id: 4, title: "Pharmacy Management System", url:"./projects/pharmacy-management-system.png", desc: "Front-end of this application is built on HTML, CSS, JS, JQuery and Bootstrap and PHP is used as the backend language. MYSQL Database is used to store the data. This web application provides a single plaform for managing a pharmacy shop. User management, Inventory management, Sales management, Leave Request Handling are provided. Solid platform for automating the pharmacy shop.", git: "https://github.com/unique3900/Pharmacy-Management-System"
        },
        {
            id: 5, title: "Blog Management System", url: "./projects/blog-management-system.png", desc: "A basic web application that works a blogging system. React JS and Tailwind CSS is used for the front-end development and Node JS, Express JS is used along with JWT in the backend. MYSQL Database is used to store the data. Lets the author to post the blog with proper formatting and styling.", git: "https://github.com/unique3900/Full-Stack-Blog-System-React-Node-js-Express-js-and-MYSQL"
        },
       
 
    ];
    
  return (
    <section className="w-full bg-gradient-to-br from-indigo-600 to-black/80  min-h-screen flex flex-col  items-center gap-5  mt-14">
      <h2 id='projects' className='font-bold text-center text-6xl text-white py-8'>Projects</h2>
     
      <Swiper
        pagination={{
                  dynamicBullets: true,
            
              }}
              
        modules={[Pagination]}
        className="w-11/12  bg-white"
          >
              {
                  ProjectData.map((item, index) => (
                      <SwiperSlide key={index}><div className='flex flex-col gap-4 items-stretch justify-center w-full pb-5'>
                          <img src={item.url} alt={item.title} />
                          <h3 className="font-bold text-center text-4xl cursor-pointer hover:text-indigo-600"><a href={item.git } target='_blank'>{item.title}</a> </h3>
                          <p className="px-5 text-lg text-center">{item.desc }</p>
                      </div> </SwiperSlide>
                  ))
              }
        
       
      </Swiper>
    </section>
  )
}

export default Projects
