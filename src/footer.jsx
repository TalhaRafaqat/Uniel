import React, { Component } from 'react'
import { ImFacebook } from 'react-icons/im';
import { FaInstagram } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BiBasketball } from 'react-icons/bi';
import { BsYoutube } from 'react-icons/bs';

export default class Footer extends Component {
  render() {
    return (
      <div>
        
        <div className=" grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 py-10">
          <div className="flex flex-col justify-evenly py-5">
            <h1 className='ml-5 text-gray-600 font-semibold text-xl py-6'>LET'S TALK</h1>

            <h1 className='ml-5 text-gray-700 font-bold lg:text-6xl md:text-5xl sm:text-4xl text-3xl'>Contact</h1>
            <p className='ml-5 text-gray-500 w-[72%] py-6'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum eu fugia.</p>
            <p className='ml-5 font-bold lg:text-xl md:text-xl sm:text-lg text-md text-gray-700 py-3'>Phone: <span className='text-red-500'><u>55-873-1234</u></span></p>
            <p className='ml-5 font-bold  lg:text-xl md:text-xl sm:text-lg text-md text-gray-700'>Email: <span className='text-red-500'><u>info@uniel.com</u></span></p>
         
          </div>
          
          
          
          
          <div className="flex justify-center">
 
          <div className="w-[75%] bg-red-500 flex justify-center py-3">
          <div className="w-[80%] h-[35rem] flex flex-col justify-around">
          <h1 className='text-white font-bold text-lg'>SEND US A MESSAGE</h1>
          <input className='bg-transparent w-[100%] py-3 border border-white' type="text" placeholder='Full Name' />
          <input className='bg-transparent w-[100%] py-3 border border-white' type="text" placeholder='Email Adress' />
          <input className='bg-transparent w-[100%] py-3 border border-white' type="text" placeholder='Reason for contacting us' />
          <input className='bg-transparent w-[100%] h-[6rem] border border-white' type="text" placeholder='Message' />
          <button className='bg-white lg:w-[43%] lg:h-[10%] md:w-[43%] md:h-[10%] sm:w-[43%] sm:h-[10%] w-[40%] h-[10%] lg:text-lg md:text-md sm:text-md text-sm font-semibold text-gray-600'>SEND MESSAGE</button>
          </div>
          </div>

          </div>
        </div>


          <div className=" bg-red-500  py-5">
            <ul className='flex font-bold justify-evenly text-white lg:w-[35rem] md:w-[32rem] sm:w-[28rem] w-[23rem]  py-5'>
              <li>PROJECTS</li>
              <li>CLIENTS</li>
              <li>SERVICE</li>
              <li>CONTACT</li>
            </ul>

          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 mt-10">
            <div className="ml-5 ">
           <h1 className='text-white text-3xl py-2 font-bold'>Uniel</h1>
            <p className='text-white'>Made by Unbound Studio in Guatemala City.</p>
          </div>
          
          
          <div className=" ">
            <div className="flex w-[13rem] mt-11 h-[2rem]  justify-evenly">
          <ImFacebook className='text-white text-2xl hover:text-gray-400'/>
          <FaInstagram className='text-white text-2xl hover:text-gray-400'/>
          <AiOutlineTwitter className='text-white text-2xl hover:text-gray-400'/>
          <BiBasketball className='text-white text-2xl hover:text-gray-400'/>
          <BsYoutube className='text-white text-2xl hover:text-gray-400'/>
          </div>
          </div>
          
          
          </div>
          </div>



      </div>
    )
  }
}
