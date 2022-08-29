import type { FC } from 'react';

interface IHeaderContainerProps {
    offset: number;
}

const HeaderContainer: FC<IHeaderContainerProps> = ({ offset, children }) => {
    const getHeaderStyles = () => {
        if (offset === 0) {
            return {
                backgroundColor: 'transparent',
            };
        }

        return {
            backgroundColor: 'rgba(17,24,39,1)',
            color: '#fff',
            transition: 'all 0.4s ease-in-out',
        };
    };

    return (
        <header
            className="h-12 md:h-16 md:px-20 px-10 py-10 font-Montserrat 
            text-gray-900 fixed top-0 left-0 
             flex justify-between 
             items-center z-20 w-full"
            style={getHeaderStyles()}
        >
            {children}
        </header>
    );
};

const Logo: FC = () => {
    return (
        <div>
            <h4 className="font-bold text-4xl font-Nicollast">
                <span className="text-yellow-400">DD</span>H
            </h4>
        </div>
    );
};

export { Logo, HeaderContainer };
