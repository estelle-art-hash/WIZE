import React from 'react'
import { FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi'

const Contact = () => {
  return (
    <div className=" bg-[#09071d] min-h-screen text-[#bfbfbf}">
     <section className="px-10 pt-28 pb-44 pb-20 max-w-7xl">
      <h1 className="text-7xl md:text-[80px]md:px-tracking-tighter mb-8">
        Say Hello
      </h1>
      <p className="text-[#acacac] text-lg md:px-14 leading-relaxed">
         Fill out the form below to get in touch with me. I'm always exicted to hear about new <br /> opportunities and I'll do my best to respond to your inquiry within 24 hours.
      </p>
     </section>

    <section className="px-10 md:px-24 mb-16 flex flex-wrap gap-4">
      <div className="flex items-center gap-2 bg-[#070707] px-5 py-3 rounded-full border border-white/5 text-sm text-gray-400">
      <FiMapPin className="text-[#C6FF00]" />Office: Jurain, Dhaka Bangladesh
      </div>
      <div className="flex items-center gap-2 bg-[#111111] px-5 py-3 rounded-full border border-white/5 text-sm text-gray-400">
      <FiPhone className="text-[#C6FF00]" /> Number: +1234321321
        </div>
        <div className="flex items-center gap-2 bg-[#111111] px-5 py-3 rounded-full border border-white/5 text-sm text-gray-400">
        <FiMail className="text-[#C6FF00]" /> Email: websitename@mail.com
        </div>
    </section>

     <section className="px-10 md:px-24 pb-32">
        <form className="max-w-6xl flex flex-col gap-10">

          <div className="grid md:grid-cols-2 gap-10">
            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium text-gray-400">Full Name</label>
              <input 
                type="text" 
                placeholder="Steve Milner" 
                className="bg-white text-black p-6 rounded-2xl outline-none focus:ring-2 focus:ring-[#C6FF00] transition"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium text-gray-400">Email Address</label>
              <input 
                type="email" 
                placeholder="hello@websitename.com" 
                className="bg-white text-black p-6 rounded-2xl outline-none focus:ring-2 focus:ring-[#C6FF00] transition"
              />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-sm font-medium text-gray-400">Your Message</label>
            <textarea 
              rows={5} 
              placeholder="Write Your message" 
              className="bg-white text-black p-6 rounded-2xl outline-none focus:ring-2 focus:ring-[#C6FF00] transition resize-none"
            ></textarea>
          </div>

          <button className="bg-[#C6FF00] text-black w-fit px-10 py-5 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition shadow-[0_10px_30px_rgba(198,255,0,0.2)]">
            Send Me Message <FiSend className="text-lg" />
          </button>
        </form>
      </section>

       <footer className="pb-10 text-center">
       <p className="mt-10 text-center text-xs text-white/60">
        © Copyright <span className="text-[#c4f000]">Wize</span> All Right Reserved.
      </p>
      </footer>
    </div>
  )
}

export default Contact
