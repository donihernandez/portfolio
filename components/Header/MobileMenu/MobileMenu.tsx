import { forwardRef } from 'react';

import { XIcon } from '@heroicons/react/solid';

import { LINKS } from '../../../utils';
import { SocialMediaLinks } from '@/components/SocialMediaLinks';

interface IMobileMenuProps {
    hideMenu: (target: string) => void;
}

const MobileMenu = forwardRef<HTMLElement, IMobileMenuProps>(
    ({ hideMenu }, ref) => {
        return (
            <nav
                className="md:hidden fixed -left-full 
                top-0 bg-gray-900 w-full h-screen
                 z-10 pt-6 pb-6 transition-all duration-500"
                ref={ref}
            >
                <XIcon
                    className="h-10 w-10 absolute 
                    right-8 cursor-pointer hover:text-yellow-400 text-white"
                    onClick={() => hideMenu('')}
                />

                <div
                    className="flex flex-col justify-center
                 text-2xl font-bold text-center items-center h-full"
                >
                    <ul className="space-y-10">
                        {LINKS.map(({ link }, index) => {
                            return (
                                <li
                                    className="hover:text-yellow-400 
                                    text-white
                        transition-all ease-in duration-150"
                                    key={index}
                                >
                                    <a
                                        href="#"
                                        onClick={() => hideMenu(`${link}`)}
                                    >
                                        {link}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>

                    <div className="flex bottom-10 absolute">
                        <SocialMediaLinks />
                    </div>
                </div>
            </nav>
        );
    },
);

export { MobileMenu };
