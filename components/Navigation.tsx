import React, {useRef} from "react";
import {MenuAlt1Icon, XIcon} from "@heroicons/react/solid";

export const Navigation = () => {

    const navMenu = useRef<HTMLDivElement>(null);

    const hideMenu = () => {
        if (!navMenu.current) throw Error("navMenu is not assigned");
        navMenu.current.style.left = '-100%';
    }

    const showMenu = () => {
        if (!navMenu.current) throw Error("navMenu is not assigned");
        navMenu.current.style.left = '0';
    }

    return (
        <header className="h-12 md:h-16 md:p-10 p-8 font-Montserrat text-white fixed top-0 left-0 w-full flex justify-between md:justify-around items-center bg-gray-900 z-20">

            <div>
                <h4 className="font-bold text-4xl font-Nicollast"><span className="text-yellow-500">DD</span>H</h4>
            </div>

            <MenuAlt1Icon className="h-10 w-10 cursor-pointer md:hidden" onClick={showMenu}/>

            <nav className="hidden md:flex">
                <div>
                    <ul className="flex translate-y-0 justify-center space-x-6 items-center">
                        <li className="hover:text-yellow-500 transition-all ease-in duration-150">
                            <a href="#about">
                                about
                            </a>
                        </li>
                        <li className="hover:text-yellow-500 transition-all ease-in duration-150">
                            <a href="#skills">
                                skills
                            </a>
                        </li>
                        <li className="hover:text-yellow-500 transition-all ease-in duration-150">
                            <a href="#projects">
                                projects
                            </a>
                        </li>
                        <li className="hover:text-yellow-500 transition-all ease-in duration-150">
                            <a href="#contact">
                                contact
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <nav className="md:hidden fixed -left-full top-0 bg-gray-900 w-full h-screen z-10 pt-6 pb-6 transition-all duration-500" ref={navMenu}>
                <XIcon className="h-10 w-10 absolute right-8 cursor-pointer hover:text-yellow-500" onClick={hideMenu} />

                <div className="flex flex-col justify-center text-2xl font-bold text-center items-center h-full">
                    <ul className="space-y-10">
                        <li onClick={hideMenu} className="hover:text-yellow-500 transition-all ease-in duration-150">
                            <a href="#about" >
                                about
                            </a>
                        </li>
                        <li onClick={hideMenu} className="hover:text-yellow-500 transition-all ease-in duration-150">
                            <a href="#skills">
                                skills
                            </a>
                        </li>
                        <li onClick={hideMenu} className="hover:text-yellow-500 transition-all ease-in duration-150">
                            <a href="#projects">
                                projects
                            </a>
                        </li>
                        <li onClick={hideMenu} className="hover:text-yellow-500 transition-all ease-in duration-150">
                            <a href="#contact">
                                contact
                            </a>
                        </li>
                    </ul>

                    <div className="flex bottom-10 absolute">
                        <ul className="flex space-x-6 items-center">
                            <li>
                                <a href="https://github.com/donihernandez" target="_blank" rel="noreferrer">
                                    <i className="fab fa-github"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/adonai-dominguez-hernandez/" target="_blank" rel="noreferrer">
                                    <i className="fab fa-linkedin-in text-blue-600"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://youtube.com/c/donispot" target="_blank" rel="noreferrer">
                                    <i className="fab fa-youtube text-red-500"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/donidhernandez" target="_blank" rel="noreferrer">
                                    <i className="fab fa-twitter text-blue-400"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="hidden md:flex">
                <ul className="flex space-x-6 items-center">
                    <li>
                        <a href="https://github.com/donihernandez" target="_blank" rel="noreferrer">
                            <i className="fab fa-github"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/adonai-dominguez-hernandez/" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in text-blue-600"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://youtube.com/c/donispot" target="_blank" rel="noreferrer">
                            <i className="fab fa-youtube text-red-500"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/donidhernandez" target="_blank" rel="noreferrer">
                            <i className="fab fa-twitter text-blue-400"/>
                        </a>
                    </li>
                </ul>
            </div>
        </header>

    );
}