import type { FC } from 'react';
import { useRef } from 'react';
import { MenuAlt1Icon, XIcon } from '@heroicons/react/solid';
import jump from 'jump.js';
import { HeaderContainer, Logo } from './Header.components';
import { DesktopMenu } from './DesktopMenu';
import { MobileMenu } from './MobileMenu';

const Header: FC = () => {
    const navMenu = useRef<HTMLDivElement>(null);

    const hideMenu = (target?: string) => {
        if (!navMenu.current) {
            throw Error('navMenu is not assigned');
        }
        navMenu.current.style.left = '-100%';
        if (target !== '') {
            jump(`.${target}`);
        }
    };

    const showMenu = () => {
        if (!navMenu.current) {
            throw Error('navMenu is not assigned');
        }
        navMenu.current.style.left = '0';
    };

    const jumpTo = (target: string) => {
        jump(`.${target}`);
    };

    return (
        <HeaderContainer>
            <Logo />

            <MenuAlt1Icon
                className="h-10 w-10 cursor-pointer md:hidden"
                onClick={showMenu}
            />
            <DesktopMenu jumpTo={jumpTo} />
            <MobileMenu hideMenu={hideMenu} ref={navMenu} />
        </HeaderContainer>
    );
};

export { Header };
