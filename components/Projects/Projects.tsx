import type { FC } from 'react';
import { ChevronDoubleDownIcon } from '@heroicons/react/solid';
import { Card } from '../Card';

import cbkmarketing from '../../public/images/projects/cbkmarketing.webp';
import donispot from '../../public/images/projects/donispot.webp';
import durysguns from '../../public/images/projects/durysguns.webp';
import filters4air from '../../public/images/projects/filters4air.webp';
import fun_reviews from '../../public/images/projects/fun_reviews.webp';
import getyourweb from '../../public/images/projects/getyourweb.webp';

interface IProjectsProps {
    jumpTo: (url: string) => void;
}

const Projects: FC<IProjectsProps> = ({ jumpTo }) => {
    const projects = [
        {
            description:
                'Digital Marketing Agency website made with WordPress.',
            image: cbkmarketing,
            name: 'CBK Digital Marketing',
            url: 'http://cbkmarketing.com/',
        },
        {
            description: 'Gun Shop in Texas website made with WordPress.',
            image: durysguns,
            name: 'Durys Guns',
            url: 'https://durysguns.com',
        },
        {
            description: 'Doni Spot official website made with WordPress.',
            image: donispot,
            name: 'Doni Spot',
            url: 'https://donispot.com',
        },
        {
            description: 'An Air Filters Store website made with WordPress.',
            image: filters4air,
            name: 'Filters 4 Air',
            url: 'https://filters4air.com/',
        },
        {
            description:
                'Fun Reviews is a movies and tv shows website ' +
                'focused on client reviews.Made with Nextjs',
            image: fun_reviews,
            name: 'Fun Reviews',
            url: 'https://www.funreviews.org/',
        },
        {
            description:
                'Get Your Web is my web design ' +
                'white label agency website made with WordPress.',
            image: getyourweb,
            name: 'Get Your Web',
            url: 'https://getyourweb.org/',
        },
    ];

    return (
        <section
            className="projects 
            md:h-full text-center bg-gray-800 text-white md:pt-32 md:pb-16 p-16"
            id="projects"
        >
            <h2 className="text-7xl md:text-9xl font-bold font-Nicollast mb-20">
                My <span className="text-yellow-400">Projects</span>
            </h2>

            <section
                className="grid md:grid-cols-3 grid-cols-1
                 justify-center
             items-center gap-5"
            >
                {projects.map((project, index) => (
                    <Card
                        description={project.description}
                        image={project.image}
                        key={index}
                        name={project.name}
                        url={project.url}
                    />
                ))}
            </section>

            <a
                className="mt-20 flex justify-center items-center"
                href="#"
                onClick={() => jumpTo('contact')}
            >
                <ChevronDoubleDownIcon
                    className="md:h-14 md:w-14 h-10 w-10
                 hover:text-yellow-400 cursor-pointer animate-bounce
                 transition-all duration-150 delay-150"
                />
            </a>
        </section>
    );
};

export { Projects };
