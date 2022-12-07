import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Slider from "./Slider";
import Counter from "./Counter";
import About from "./About";
import Services_card from "./Services_card";
import Services_team from "./Services_team";
import ServiceCard from "./ServiceCard";
import Footer from "./footer";
import { Route, Routes } from "react-router-dom"
// import Slider from "./Slider";



export default class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={
                        <Hero />

                    } />
                    <Route path="/projectx" element={<Slider />} />
                </Routes>
                < Slider />
                <div>
                    <Services_card />
                </div>
                <About />
                <Counter />
                <Services_team />
                <ServiceCard />
                < Footer />




            </div>

        )
    }
}