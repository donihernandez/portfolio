import Head from 'next/head';
import Image from 'next/image';
import {Navigation} from "../components/Navigation";

import { ChevronDoubleDownIcon } from "@heroicons/react/solid";
import {Card} from "../components/Card";

import ICard from '../interfaces/ICard';
import React, {ChangeEvent, EventHandler, useState} from "react";
import IEmail from "../interfaces/IEmail";

import Swal from 'sweetalert2';
import jump from 'jump.js';

import axios from "axios";


// Images
import Avatar from '../public/images/avatar.jpg';
import Code from '../public/images/code.jpg';
import Old_Doni_Spot from '../public/images/Old Doni Spot.png';
import Card_Columns from '../public/images/card_columns.jpg';
import Card_Profile from '../public/images/card_profile.jpg';
import RentURide from '../public/images/RentURide.png';
import Doni_Spot from '../public/images/Doni Spot.png';
import Youtube from '../public/images/Youtube Channel.png';

export default function Home() {

    const [emailData, setEmailData] = useState({
        name: '',
        from: '',
        subject: '',
        text: '',
    });

    const personalProjects: ICard[] = [
        {
            name: "Doni Spot (Youtube)",
            background: Youtube,
            url: "https://youtube.com/c/donispot",
            description: "My spanish web development channel!"
        },
        {
            name: "Doni Spot (Web)",
            background: Doni_Spot,
            url: "https://donispot.com",
            description: "Online courses marketplace in Spanish!"
        },
    ];

    const sampleProjects: ICard[] = [
        {
            name: "RentURide Web",
            background: RentURide,
            url: "https://bike-rent-app.vercel.app/",
            description: "Sample project of a bike rent service agency.",
            technologies: ['React', 'Tailwindcss', 'Firebase']
        },
        {
            name: "Stormcell E-commerce",
            background: Code,
            url: "https://github.com/donihernandez/stormcell",
            description: "Sample project in progress. The ultimate goal is to make an E-commerce.",
            technologies: ['PHP', 'Laravel', 'Vuejs', 'Jetstream']
        },
        {
            name: "Old Doni Spot Web",
            background: Old_Doni_Spot,
            url: "https://donispot.netlify.app/",
            description: "Is not currently functional. But was the previous version of my personal website.",
            technologies: ['Nuxt', 'Vuetify', 'Firebase']
        },
        {
            name: "Todo App Api",
            background: Code,
            url: "https://github.com/donihernandez/todo-app-api",
            description: "Sample project in progress. The ultimate goal is to make a Trello clone.",
            technologies: ['PHP', 'Laravel']
        },
        {
            name: "E2E Puppeter Testing",
            background: Code,
            url: "https://github.com/donihernandez/e2e-puppeter-testing",
            description: "Sample testing project.",
            technologies: ['Puppeteer', 'Mocha', 'Chai']

        },
        {
            name: "Profile Card Component",
            background: Card_Profile,
            url: "https://doni-profile-card-component.netlify.app/",
            description: "FrontendMentor Challenge. Profile Card Component using HTML and CSS.",
            technologies: ['HTML', 'CSS']

        },
        {
            name: "3 Column Preview Card",
            background: Card_Columns,
            url: "https://card-components.netlify.app/",
            description: "FrontendMentor Challenge. 3 Column Preview Card Component using HTML and CSS.",
            technologies: ['HTML', 'CSS']
        }
    ];

    const sendMail = async (e: React.FormEvent<HTMLFormElement>, data: IEmail) => {
        e.preventDefault();

        try {
            await axios.post('/api/contact', data)

            //if sucess do whatever you like, i.e toast notification
            setTimeout(() =>
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your message has been sended',
                    showConfirmButton: false,
                    timer: 1500
                }), 2000);
        } catch (error) {
            await Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!'
            })
        }
    }

    const updateField = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setEmailData({
            ...emailData,
            [e.target.name]: e.target.value
        });
        console.log(emailData)
    };

    const jumpTo = (target: String) => {
        jump(`.${target}`)
    }

    // @ts-ignore
    return <div>
        <Head>
            <title>Doni Dominguez Hernandez | Software Engineer</title>
            <meta name="description" content="Hi, I´m Doni! I'm a software engineer specialized in both front-end and back-end. I'm a passionate about web development and I really love Javascript. I live in Cuba and I'm currently looking for work outside my country." />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
            <Navigation />

            <section id="about" className="about h-screen mt-14 flex flex-col md:flex-row bg-gray-900 justify-center items-center text-white p-10">
                <div className="md:w-1/2 md:pl-14 md:pr-4 text-center md:text-justify">
                    <h1 className="font-Nicollast font-bold text-7xl md:text-9xl" style={{ textShadow: "1px 2px 3px rgba(0,0,0,0.5)" }}>Hi, I´m <span className="text-yellow-400">Doni!</span></h1>
                    <p className="font-Montserrat-Thin py-5 mb-10 text-2xl">
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        I'm a <span className="font-Montserrat-Bold text-yellow-500">software engineer</span> specialized in both <span className="font-Montserrat-Bold text-yellow-500">front-end</span> and <span className="font-Montserrat-Bold text-yellow-500">back-end</span>. I'm a passionate about web development and I really love Javascript. I live in Cuba and I'm currently looking for work outside my country.
                    </p>
                    <a href="https://donihernandez.s3.amazonaws.com/Adonai's+Resume.pdf" target="_blank" className="bg-yellow-500 font-Montserrat-Bold text-white p-4 rounded-md hover:bg-gray-900 border-gray-900 hover:border-yellow-500 border transition-all duration-150 delay-150" rel="noreferrer">
                        Download cv
                    </a>
                </div>
                <div className="md:w-1/2 mt-16 md:flex justify-center items-center hidden">
                    <div>
                        <Image src={Avatar} className="rounded-full" width={500} height={500} alt="Doni Hernández"/>
                    </div>
                </div>
            </section>

            <section id="skills" className="skills md:h-screen text-center flex flex-col justify-center items-center md:p-32 p-16">
                <h2 className="text-7xl md:text-9xl font-bold font-Nicollast">My <span className="text-yellow-400">Skills</span></h2>

                <div className="flex md:flex-row flex-col md:justify-between justify-center items-center h-full mt-10 md:mt-0 md:space-x-6 md:space-y-0 space-y-4">
                    <div className="border border-yellow-300 w-full rounded-lg p-5" style={{ maxHeight: "600px", height: "400px" }}>
                        <h3 className="font-Montserrat-Bold text-2xl">Front-End</h3>

                        <ul className="mt-6 font-Montserrat-Light">
                            <li className="border-b border-gray-200 pb-2">
                                HTML5
                            </li>
                            <li className="border-b border-gray-200 pb-2 pt-2">
                                CSS3
                            </li>
                            <li className="border-b border-gray-200 pb-2 pt-2">
                                Javascript
                            </li>
                            <li className="border-b border-gray-200 pb-2 pt-2">
                                React / Next.js
                            </li>
                            <li className="pt-2">
                                Vue / Nuxt.js
                            </li>
                        </ul>
                    </div>

                    <div className="border border-yellow-300 w-full rounded-lg p-5" style={{ maxHeight: "600px", height: "400px" }}>
                        <h3 className="font-Montserrat-Bold text-2xl">Backend-End</h3>

                        <ul className="mt-6 font-Montserrat-Light ">
                            <li className="border-b border-gray-200 pb-2">
                                PHP / Laravel
                            </li>
                            <li className="border-b border-gray-200 pb-2 pt-2">
                                Node.js / Express / Strapi / AWS Serverless
                            </li>
                            <li className="border-b border-gray-200 pb-2 pt-2">
                                Graphql
                            </li>
                            <li className="border-b border-gray-200 pb-2 pt-2">
                                MongoDB
                            </li>
                            <li className="border-b border-gray-200 pb-2 pt-2">
                                DynamoDB
                            </li>
                            <li className="pt-2">
                                MySQL / PostgreSQL
                            </li>
                        </ul>
                    </div>

                    <div className="border border-yellow-300 w-full rounded-lg p-5" style={{ maxHeight: "600px", height: "400px" }}>
                        <h3 className="font-Montserrat-Bold text-2xl">Complementary Skills</h3>

                        <ul className="mt-6 font-Montserrat-Light">
                            <li className="border-b border-gray-200 pb-2">
                                Git / Github / Gitlab
                            </li>
                            <li className="border-b border-gray-200 pb-2 pt-2">
                                Windows OS
                            </li>
                            <li className="border-b border-gray-200 pb-2 pt-2">
                                Linux / Debian
                            </li>
                            <li className="border-b border-gray-200 pb-2 pt-2">
                                Spanish (Native) / English (Fluent)
                            </li>
                            <li className="pt-2">
                                Digital Marketing / SEO
                            </li>
                        </ul>
                    </div>
                </div>

                <a href="#" onClick={() => jumpTo('projects')} className="mt-6">
                    <ChevronDoubleDownIcon className="md:h-14 md:w-14 h-10 w-10 hover:text-yellow-400 cursor-pointer animate-bounce transition-all duration-150 delay-150"/>
                </a>


            </section>

            <section id="projects" className="projects md:h-full text-center bg-gray-900 text-white md:pt-32 md:pb-16 p-16">
                <h2 className="text-7xl md:text-9xl font-bold font-Nicollast">My <span className="text-yellow-400">Projects</span></h2>

                <div className="flex flex-col md:flex-row mt-10">
                    <div className="border-b md:w-1/2 md:border-r md:border-b-0 border-gray-400 p-8">
                        <h3 className="font-Montserrat-Bold text-3xl">Sample Projects</h3>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-14">
                            {
                                sampleProjects.map((project, index) => {
                                    return <Card key={index} name={project.name} background={project.background} url={project.url} description={project.description} technologies={project.technologies} />
                                })
                            }
                        </div>
                    </div>
                    <div className="md:w-1/2 p-8">
                        <h3 className="font-Montserrat-Bold text-3xl">Personal Projects</h3>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-14">
                            {
                                personalProjects.map((project, index) => {
                                    return <Card key={index} name={project.name} background={project.background} url={project.url} description={project.description} technologies={project.technologies} />
                                })
                            }
                        </div>
                    </div>
                </div>

                <a href="#" onClick={() => jumpTo('contact')} className="mt-14 flex justify-center items-center">
                    <ChevronDoubleDownIcon className="md:h-14 md:w-14 h-10 w-10 hover:text-yellow-400 cursor-pointer animate-bounce transition-all duration-150 delay-150"/>
                </a>

            </section>

            <section id="contact" className="contact h-screen text-center flex flex-col justify-center items-center md:p-32 pb-16 p-16">
                <h2 className="text-7xl md:text-9xl font-bold font-Nicollast mb-8">Contact <span className="text-yellow-400">Me!</span></h2>
                <form className="flex flex-col justify-center items-center w-full space-y-5" onSubmit={(e) => sendMail(e, emailData)}>
                    <input className="border border-gray-300 rounded-lg p-4 md:w-1/4 w-full" name="name" type="text" value={emailData.name} onChange={(e) => {
                        updateField(e);
                    }} placeholder="your name is..." />
                    <input className="border border-gray-300 rounded-lg p-4 md:w-1/4 w-full" type="email" name="from" value={emailData.from}  onChange={(e) => {
                        updateField(e);
                    }} placeholder="your email is..." />
                    <input className="border border-gray-300 rounded-lg p-4 md:w-1/4 w-full" type="text" name="subject" value={emailData.subject}  onChange={(e) => {
                        updateField(e);
                    }} placeholder="subject..." />
                    <textarea className="border border-gray-300 rounded-lg p-4 md:w-1/4 w-full" name="text" value={emailData.text}  onChange={(e) => {
                        updateField(e);
                    }} placeholder="message"/>
                    <input className="md:w-1/4 w-full cursor-pointer bg-yellow-500 font-Montserrat-Bold text-white p-2 rounded-md hover:bg-white border-white hover:border-yellow-400 hover:text-gray-900 border transition-all duration-150 delay-150" type="submit" value="send" />
                </form>
            </section>

        </main>

        <footer className="bg-gray-800 flex md:flex-row flex-col justify-center items-center text-white pt-6 pb-6">
            <div className="md:w-1/2 flex justify-center items-center border-b pb-4 md:pb-0 md:border-r md:border-b-0 border-gray-400">
                <span>Doni Domínguez Hernández &copy; { new Date().getFullYear() }</span>
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0 flex justify-center items-center">
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
        </footer>
    </div>
}
