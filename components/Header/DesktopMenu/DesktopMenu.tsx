import type { FC } from 'react';

import { SocialMediaLinks } from '@/components/SocialMediaLinks';

import { LINKS } from '../../../utils';

interface IDesktopMenuProps {
    jumpTo: (value: string) => void;
}

const DesktopMenu: FC<IDesktopMenuProps> = ({ jumpTo }) => {
    return (
        <>
            <nav className="hidden md:flex">
                <div>
                    <ul
                        className="flex translate-y-0 justify-center
                         space-x-6 items-center"
                    >
                        {LINKS.map(({ link }, index) => {
                            return (
                                <li
                                    className="hover:text-yellow-400 
                                        transition-all 
                                        ease-in duration-150"
                                    key={index}
                                >
                                    <a
                                        href="#"
                                        onClick={() => jumpTo(`${link}`)}
                                    >
                                        {link}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </nav>
            <div className="hidden md:flex">
                <SocialMediaLinks />
            </div>
        </>
    );
};

export { DesktopMenu };
