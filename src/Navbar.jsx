import React, { Component } from "react";
import { Link } from "react-router-dom"
export default class Navbar extends Component {
  render() {
    return (
      <div>


        <header class="text-gray-600 body-font">
          <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
            <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">

              <span class="ml-3 text-3xl text-gray-700 font-home">Uniel</span>
            </a>
            <nav class="md:ml-auto flex flex-wrap items-center text-base justify-evenly name">

              <Link to="/">
                <li class="mr-5  font-semibold text-red-500">HOME</li>

              </Link >
              <Link to="/project">
                <li class="mr-5  font-semibold hover:text-red-500">PROJECT</li>

              </Link>
              <li class="mr-5 hover:text-red-500 font-semibold">SERVICE</li>
              <li class="mr-5 hover:text-red-500 font-semibold">ABOUT</li>
              <li class="mr-5 hover:text-red-500 font-semibold">TEAM</li>
              <li class="mr-5 hover:text-red-500 font-semibold">CLIENT</li>
              <li class="mr-5 hover:text-red-500 font-semibold">CONTACT</li>
            </nav>

          </div>
        </header>

      </div>


    );
  }
}
