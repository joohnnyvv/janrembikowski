import {FaEnvelope, FaFacebook, FaGithub, FaLinkedin} from 'react-icons/fa';
import {IconType} from "react-icons";

interface ContactItem {
    id: number;
    icon: IconType;
    url: string;
}

export const contactItems: Record<string, ContactItem> = {
    linkedin: {
        id: 1,
        icon: FaLinkedin,
        url: 'https://www.linkedin.com/in/jan-rembikowski/',
    },
    github: {
        id: 2,
        icon: FaGithub,
        url: 'https://github.com/joohnnyvv',
    },
    facebook: {
        id: 3,
        icon: FaFacebook,
        url: 'https://www.facebook.com/joohnnyvv/',
    },
    email: {
        id: 4,
        icon: FaEnvelope,
        url: 'mailto:janekrembikowski@gmail.com',
    },
};