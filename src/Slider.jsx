import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";



// import required modules
import { Navigation } from "swiper";

// Import Swiper styles
import './index.css';

export default () => {
    return (
        <>

            {/* <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide className="">
                    <div className="comtainer border border-red-500 ">
                        <div className="row">
                            <div className="img col-6 border h-[40vh] w-[100%]"></div>
                            <div className="text col-6">
                                <h3></h3>
                                <h1></h1>
                                <p></p>
                                <h2></h2>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
            </Swiper> */}
        </>
    );
};