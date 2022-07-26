import type { FC } from 'react';

const HeaderContainer: FC = ({ children }) => {
    return (
        <header
            className="h-12 md:h-16 md:p-10 p-8 font-Montserrat 
            text-white fixed top-0 left-0 w-full
             flex justify-between md:justify-around 
             items-center bg-gray-900 z-20"
        >
            {children}
        </header>
    );
};

const Logo: FC = () => {
    return (
        <div>
            <h4 className="font-bold text-4xl font-Nicollast">
                <span className="text-yellow-500">DD</span>H
            </h4>
        </div>
    );
};

export { Logo, HeaderContainer };
