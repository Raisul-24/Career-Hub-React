// import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => {
        const links = <>

                <li ><NavLink to="/statistics" className={"liner-text text-base font-bold"}>Statistics</NavLink></li>
                <li><NavLink to="/applied " className={"font-bold text-base"}>Applied Job</NavLink></li>
                <li><NavLink to="/blogs" className={"font-bold text-base "}>Blog</NavLink></li>
        </>
        return (
                <div className="header-background">
                        <div className="navbar  container mx-auto">
                                <div className="navbar-start">
                                        <div className="dropdown">
                                                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                                </label>
                                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                                        {links}
                                                </ul>
                                        </div>
                                        <a className="btn btn-ghost normal-case text-2xl font-extrabold text-[#1A1919]">Career Hub</a>
                                </div>
                                <div className="navbar-center hidden lg:flex">
                                        <ul className="menu menu-horizontal px-1">
                                                {links}
                                        </ul>
                                </div>
                                <div className="navbar-end">
                                        <button><NavLink className={"btn-linear"}>Start Applying</NavLink></button>

                                </div>
                        </div>
                        

                </div>
        );
};

export default Header;