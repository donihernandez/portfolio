import type { FC } from 'react';
import Image from 'next/image';

interface IWelcome {
    jumpTo: (url: string) => void;
}

const Welcome: FC<IWelcome> = ({ jumpTo }) => {
    return (
        <section
            className="about min-h-screen h-full mt-14 
            flex flex-col-reverse md:flex-row 
             justify-center items-center text-gray-900 p-10"
            id="about"
        >
            <div
                className="
            md:w-1/2 md:pl-14 md:pr-4 text-center md:text-justify"
            >
                <h1
                    className="font-Nicollast 
                font-black text-8xl md:text-7xl lg:text-9xl"
                >
                    Hi, I´m <span className="text-yellow-600">Doni!</span>
                </h1>
                <p className="font-Montserrat-Light py-5 mb-10 text-2xl">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    I'm a{' '}
                    <span className="font-Montserrat-Bold text-yellow-600">
                        software engineer
                    </span>{' '}
                    with over 4 years of experience creating{' '}
                    <span className="font-Montserrat-Bold text-yellow-600">
                        awesome websites.{' '}
                    </span>
                    If you&apos;re looking for a{' '}
                    <span className="font-Montserrat-Bold text-yellow-600">
                        web developer
                    </span>{' '}
                    who knows how to work in a team, who is independent and
                    obtains efficient results, then I&apos;m what you&apos;re
                    looking for.
                </p>
                <div className="flex">
                    <a
                        className="
                    hover:bg-yellow-600 font-Montserrat-Bold
                    text-white px-14 py-5 rounded-md
                    bg-gray-900  
                    transition-all duration-500 ease-in-out"
                        href="#"
                        onClick={() => jumpTo('contact')}
                    >
                        Hire Me
                    </a>
                    <a
                        className="
                    ml-10
                    bg-yellow-600 font-Montserrat-Bold
                    text-white px-14 py-5 rounded-md
                    hover:bg-gray-900  
                    transition-all duration-500 ease-in-out"
                        href="/cv.pdf"
                        target="_blank"
                    >
                        Download CV
                    </a>
                </div>
            </div>
            <div
                className="
            md:w-1/2 mt-16 flex justify-center items-center "
            >
                <div>
                    <Image
                        alt="Doni Hernández"
                        className="object-cover"
                        height={500}
                        src="/images/welcome.svg"
                        width="500px"
                    />
                </div>
            </div>
        </section>
    );
};

export { Welcome };
