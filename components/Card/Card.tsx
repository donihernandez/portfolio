import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';

interface ICard {
    image: StaticImageData;
    name: string;
    description: string;
    url: string;
}

const Card: FC<ICard> = ({ image, name, description, url }) => {
    return (
        <div
            className="w-full
        bg-white
         rounded-lg border 
         border-gray-200 
         shadow-md 
         dark:bg-gray-800
          dark:border-gray-700 p-6"
        >
            <a
                className="w-full h-full"
                href={url}
                rel="noreferrer"
                target="_blank"
            >
                <Image
                    alt={name}
                    className="rounded-t-lg  aspect-square"
                    height="300px"
                    src={image}
                    width="500px"
                />
            </a>
            <div className="mt-6">
                <a href={url} rel="noreferrer" target="_blank">
                    <h5
                        className="mb-2 text-5xl
                     font-bold tracking-tight
                     font-Nicollast
                      text-gray-900 dark:text-white"
                    >
                        {name}
                    </h5>
                </a>
                <p
                    className="mb-3 
                font-Montserrat text-gray-700 dark:text-gray-400"
                >
                    {description}
                </p>
                <a
                    className="inline-flex 
                    items-center py-2 px-3 
                    text-sm font-medium text-center
                     text-white bg-yellow-400 rounded-lg
                      hover:bg-yellow-600 focus:ring-4 
                      focus:outline-none focus:ring-yellow-300
                    "
                    href={url}
                    rel="noreferrer"
                    target="_blank"
                >
                    View Website
                    <svg
                        aria-hidden="true"
                        className="ml-2 -mr-1 w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            clipRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 
                            0 010 1.414l-6 6a1 1 0
                             01-1.414-1.414L14.586 11H3a1 1
                              0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            fillRule="evenodd"
                        ></path>
                    </svg>
                </a>
            </div>
        </div>
    );
};

export { Card };
