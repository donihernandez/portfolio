import type { FC } from 'react';

import { SOCIAL_MEDIA } from 'utils';

const SocialMediaLinks: FC = () => {
    return (
        <ul className="flex space-x-6 items-center">
            {SOCIAL_MEDIA.map((social_media, index) => {
                return (
                    <li key={index}>
                        <a
                            href={social_media.link}
                            rel="noreferrer"
                            target="_blank"
                        >
                            <i className={social_media.icon} />
                        </a>
                    </li>
                );
            })}
        </ul>
    );
};

export { SocialMediaLinks };
