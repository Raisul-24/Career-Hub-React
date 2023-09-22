// import React from 'react';

import { NavLink } from "react-router-dom";

const Banner = () => {
        return (
                <div className="header-background ">
                        <div className="container mx-auto pt-10">
                                <div className="flex justify-between">
                                        <div className="">
                                                <h1 className="text-7xl font-extrabold text-black mt-24 mb-10">
                                                        One Step <br /> Closer To Your <br /><span className={"liner-text"}>Dream Job</span>
                                                </h1>
                                                <p className="text-lg mb-10">Explore thousands of job opportunities with all the <br /> information
                                                        you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>

                                                <button><NavLink className={"btn-linear"}>Get Started</NavLink></button>
                                        </div>
                                        <div className="">
                                                <img src="/src/assets/images/user.png" alt="" className="max-h-[620px]" />
                                        </div>

                                </div>
                        </div>

                </div>
        );
};

export default Banner;