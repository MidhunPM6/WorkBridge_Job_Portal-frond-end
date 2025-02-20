import React from 'react'
import chatbox from '../../assets/employer-mainpage/chat-box.png'

const Chatds = () => {
  return (
    <>
      <div className='lg:flex lg:flex-row  flex flex-col  lg:h-[100vh] bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-950 via-black to-black text-white place-items-center lg:mt-0 pt-10'>
        
        <div className='lg:ml-32 lg:m-32 lg:mt-56 items-center'>
          <div className='place-items-center pb-5'>
          <h1 className="text-xl font-semibold  ">Real-Time Chat </h1>
          </div>
          
          <p className='lg:m-0 m-10 leading-loose text-lg'>
            The chat feature enables instant messaging between users, <br />
            fostering efficient communication and collaboration. Designed for{' '}
            <br />
            seamless interaction, it supports text-based conversations with{' '}
            <br />
            features like message timestamps, read receipts, and user-friendly{' '}
            <br />
            navigation. This tool is ideal for quick follow-ups, <br />
            sharing interview details, or staying connected during the <br />
            hiring process.
          </p>
        </div>
        <div>
          <img src={chatbox} alt='' className='lg:w-[32vw] lg:m-20' />
        </div>
      </div>
    </>
  )
}

export default Chatds
