import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
const Hire = () => {
  const form = useRef();
  const [fullName, setfullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [err, setErr] = useState(false);
  
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!email || !fullName || !subject) {
      setErr(true);
      setTimeout(() => {
        setErr(false)
      }, 2000);
    }
    if (!err) {
      emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, import.meta.env.VITE_PUBLIC_KEY)
        .then((result) => {
        toast.success("Thank You ! I will contact you shortly.")
          setEmail("");
          setMessage("");
          setErr(false);
          setSubject("");
          setPhone("");
        setfullName("");
      }, (error) => {
        toast.error("Unexpected Error Occured Try Again!")
      });

      
      }
  }
  
  useEffect(() => {
    console.log(process.env.VITE_SERVICE_ID,process.env.VITE_TEMPLATE_ID,process.env.VITE_PUBLIC_KEY)
  }, [])
  
  return (
    <section className="snap-start relative w-full  min-h-screen flex flex-col  items-center gap-5  mt-14">
          <h2 id='hire' 
        className='font-bold text-center text-6xl text-black dark:text-white'>Hire Me</h2>
      <Toaster/>
      <div className="relative flex flex-row items-center gap-8 h-full  bg-indigo-600 px-5 lg:px-10 py-12 w-11/12 rounded-md shadow-md">
        <div className="bg-black/40 absolute top-0 left-0 w-full h-full  rounded-md"></div>
        
        <form ref={form} className=' py-10 px-4 lg:px-8 bg-white flex flex-col z-20 gap-4 w-full lg:w-1/2 rounded-md shadow-md' onSubmit={(e)=>{
          
          handleFormSubmit(e)
        }}>
          <span className="text-2xl lg:text-2xl font-bold ">Fill up the form I will get back to you ASAP</span>
              <div className="flex flex-col  gap-2 ">
                  <label htmlFor="" className='text-sm font-bold'>Full Name</label>
            <input value={fullName} onChange={(e)=>setfullName(e.target.value)} type="text" name='user_name' placeholder='Your Full Name' className='px-3 py-2 border-2 border-gray-600/20 active:border-indigo-600 w-full rounded-md' />
            {err && !fullName && ( <span className="text-red-600 text-xs font-bold ">Please Enter Full Name</span>)}
                 
                </div>
              <div className="flex flex-col  gap-2">
                  <label htmlFor="" className='text-sm font-bold'>Email Address</label>
            <input value={email} name='user_email' onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Your Email Address' className='px-3 py-2 border-2 border-gray-600/20   w-full rounded-md' />
            {err && !email && ( <span className="text-red-600 text-xs font-bold">Please Enter Email Address</span>)}
                </div>
              <div className="flex flex-col  gap-2 ">
                  <label htmlFor="" className='text-sm font-bold'>Phone Number</label>
                  <input value={phone} name='user_phone' onChange={(e)=>setPhone(e.target.value)} type="text" placeholder='Your Phone Number' className='px-3 py-2  border-2 border-gray-600/20  w-full rounded-md' />
                </div>
              <div className="flex flex-col  gap-2 ">
                  <label htmlFor="" className='text-sm font-bold'>Subject</label>
                  <input value={subject} onChange={(e)=>setSubject(e.target.value)} type="text" placeholder='Enter the Subject' name='message_subject' className='px-3 py-2 border-2 border-gray-600/20   w-full rounded-md' />
                  {err && !subject && ( <span className="text-red-600 text-xs font-bold">Please Enter Subject</span>)}
                </div>
              <div className="flex flex-col  gap-2 ">
                  <label htmlFor="" className='text-sm font-bold'>Message</label>
                  <textarea value={message} onChange={(e)=>setMessage(e.target.value)} name='user_message'  placeholder='Leave a Message' className='px-3 py-2 border-2 border-gray-600/20   w-full rounded-md overflow-y-auto' rows={4} cols={4} />
              </div>
              <div className="flex justify-center  gap-2 ">
                  <button type="submit" className='text-white bg-indigo-600 px-8 text-center py-4 cursor-pointer hover:bg-indigo-700 w-48 rounded-md '>Submit</button>
              </div>
              
              
        </form>

        <div className="hidden lg:flex  ">
        <img src="./assets/astronaut-hero.png" className='   -rotate-6 animate-trans-bounce' alt="" />
        </div>
        

          </div>

    </section>
  )
}

export default Hire
