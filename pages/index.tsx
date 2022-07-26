/* eslint-disable max-len */
import Head from 'next/head';

import { FC } from 'react';
import { Navigation } from '../components/Navigation';

const Home: FC = () => {
    return (
        <div>
            <Head>
                <title>Doni Dominguez Hernandez | Software Engineer</title>
                <meta
                    // eslint-disable-next-line max-len
                    content="Hi, I´m Doni! I'm a software engineer specialized in both front-end and back-end. I'm a passionate about web development and I really love Javascript. I live in Cuba and I'm currently looking for work outside my country."
                    name="description"
                />
                <link href="/favicon.ico" rel="icon" />
            </Head>

            <main>
                <Navigation />
            </main>

            <footer className="bg-gray-800 flex md:flex-row flex-col justify-center items-center text-white pt-6 pb-6">
                <div className="md:w-1/2 flex justify-center items-center border-b pb-4 md:pb-0 md:border-r md:border-b-0 border-gray-400">
                    <span>
                        Doni Domínguez Hernández &copy;{' '}
                        {new Date().getFullYear()}
                    </span>
                </div>
                <div className="md:w-1/2 mt-4 md:mt-0 flex justify-center items-center">
                    <ul className="flex space-x-6 items-center">
                        <li>
                            <a
                                href="https://github.com/donihernandez"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <i className="fab fa-github" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/adonai-dominguez-hernandez/"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <i className="fab fa-linkedin-in text-blue-600" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://youtube.com/c/donispot"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <i className="fab fa-youtube text-red-500" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://twitter.com/donidhernandez"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <i className="fab fa-twitter text-blue-400" />
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};
export default Home;
