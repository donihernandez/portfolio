import Image from 'next/image';
import type { FC } from 'react';

import react_logo from '../../public/images/skills/react.svg';
import chakra_logo from '../../public/images/skills/chakra-ui.svg';
import firebase_logo from '../../public/images/skills/firebase.svg';
import git_logo from '../../public/images/skills/git.svg';
import grahpql_logo from '../../public/images/skills/graphql.svg';
import mongodb_logo from '../../public/images/skills/mongodb.svg';
import nextjs_logo from '../../public/images/skills/nextjs.svg';
import nodejs_logo from '../../public/images/skills/nodejs.svg';
import shopify_logo from '../../public/images/skills/shopify.svg';
import wordpress_logo from '../../public/images/skills/wordpress.svg';
import tailwind_logo from '../../public/images/skills/tailwind.svg';
import typescript_logo from '../../public/images/skills/typescript.svg';

const Skills: FC = () => {
    const skills = [
        tailwind_logo,
        chakra_logo,
        typescript_logo,
        react_logo,
        nextjs_logo,
        nodejs_logo,
        firebase_logo,
        grahpql_logo,
        mongodb_logo,
        shopify_logo,
        wordpress_logo,
        git_logo,
    ];

    return (
        <section
            className="
            skills
            md:h-screen flex 
            flex-col md:flex-row md:p-32 p-10 bg-gray-900
            md:justify-center items-center
            "
            id="skills"
        >
            <div className="w-full md:w-1/2 text-white">
                <div className="mb-10">
                    <h2
                        className="
                    font-Nicollast md:text-9xl
                    text-8xl font-bold"
                    >
                        My
                        <span className="ml-5 text-yellow-400">Skills</span>
                    </h2>
                </div>
                <div className="space-y-4">
                    <p className="font-Montserrat text-lg">
                        My career as a{' '}
                        <span className="font-Montserrat font-bold">
                            software engineer
                        </span>{' '}
                        began almost four years ago, and I have worked remotely
                        for agencies and startups such as{' '}
                        <span className="font-Montserrat font-bold">
                            YOKE Global Inc.
                        </span>{' '}
                        It has been my goal to help people learn how to code
                        since I started a Youtube Channel called Doni Spot in
                        2019.
                    </p>
                    <p className="font-Montserrat text-lg">
                        The websites I design are fast, easy to use, and built
                        according to best practices. I specialize in front-end
                        development, HTML, CSS, JS, coding interactive layouts,
                        custom plugins, features, animations, and building small
                        and medium web apps.
                    </p>
                    <p className="font-Montserrat text-lg">
                        Visit my{' '}
                        <span className="text-blue-700 hover:text-yellow-600">
                            {/* eslint-disable-next-line max-len */}
                            <a href="https://www.linkedin.com/in/adonai-dominguez-hernandez/">
                                LinkedIn profile
                            </a>
                        </span>{' '}
                        for more details or just contact me.
                    </p>
                </div>
            </div>
            <div
                className="w-full md:w-1/2 
                my-10 md:my-0
            grid grid-cols-3 
            md:grid-cols-4 items-center justify-center space-x-5"
            >
                {skills.map((skill, index) => (
                    <div
                        className="flex items-center justify-center"
                        key={index}
                    >
                        <Image
                            alt="skill"
                            height="120px"
                            src={skill}
                            width="120px"
                        />
                    </div>
                ))}
                ;
            </div>
        </section>
    );
};

export { Skills };
