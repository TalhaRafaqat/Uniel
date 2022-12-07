import React, { Component } from 'react'
import Pic from "./pics/social.svg"
export default class Hero extends Component {
  render() {
    return (
      <div>

        <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 py-6  hero' >
          <div className='pic'>

            <img src={Pic} className="" />

          </div>
          <div className=' flex flex-col justify-around'>
            <h1 className=' ml-5 font-bold text-gray-700 lg:text-6xl md:text-5xl sm:text-5xl text-3xl'>We Design & <br /> Build Creative <br /> Brands</h1>
            <p className=' ml-5 lg:text-xl md:text-xl sm:text-lg text-md'>Duis aute irure dolor reprehenderit <br /> voluptate velit esse dolore nulla pariatur</p>
            <button className='ml-5 bg-red-500 text-white w-48 h-12 hover:bg-red-700 font-bold'>LEARN MORE</button>
          </div>
        </div>

      </div>


    )
  }
}
