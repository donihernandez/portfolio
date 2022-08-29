/* eslint-disable max-len */
import { FC } from 'react';

import jump from 'jump.js';

import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills/Skills';
import { Welcome } from '@/components/Welcome';
import { Header } from '../components/Header';
import { Contact } from '@/components/Contact';

const Home: FC = () => {
    const jumpTo = (target: string) => {
        jump(`.${target}`);
    };

    return (
        <div>
            <main>
                <Header />
                <Welcome jumpTo={jumpTo} />
                <Skills />
                <Projects jumpTo={jumpTo} />
                <Contact />
            </main>

            <footer
                className="bg-gray-800
             flex md:flex-row flex-col justify-center
             items-center text-white pt-6 pb-6"
            >
                <div
                    className="md:w-1/2 flex 
                justify-center items-center
                border-b pb-4 md:pb-0 md:border-r
                md:border-b-0 border-gray-400"
                >
                    <span>
                        Adonai Domínguez Hernández &copy;{' '}
                        {new Date().getFullYear()}
                    </span>
                </div>
                <div
                    className="md:w-1/2 
                mt-4 md:mt-0 flex justify-center
                items-center"
                >
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
