import {IconType} from "react-icons";
import {FaDocker, FaJava, FaNode, FaPython, FaReact} from "react-icons/fa";
import {
    SiAndroid,
    SiJetpackcompose,
    SiKotlin, SiMicrosoftazure,
    SiScikitlearn,
    SiScipy,
    SiSpringboot,
    SiTypescript
} from "react-icons/si";
import abletonImg from '../assets/ableton-manager.png';
import breathGuardImg from '../assets/breath-guard.png';
import imageToAsciiImg from '../assets/image-to-ascii.jpeg';
import libraryMgmtImg from '../assets/library-management.png';
import yAppImg from '../assets/y-app.png';
import fishImg from '../assets/fish-monsters.png';

export interface Project {
    name: string,
    url: string,
    img?: string,
    description: string,
    stackIcons: { icon: IconType, color: string }[]
}

export const projects: Project[] = [{
    name: 'Ableton Setlist Manager',
    url: 'https://github.com/joohnnyvv/ableton-setlist-manager-web',
    img: abletonImg,
    description: 'projects.desc.ableton',
    stackIcons: [{icon: FaReact, color: '#61DAFB'}, {icon: SiTypescript, color: '#007ACC'}, {icon: FaNode, color: '#4B9642'}]
}, {
    name: 'Fish Monsters',
    url: 'https://github.com/joohnnyvv/FishMonsters',
    img: fishImg,
    description: 'projects.desc.fish',
    stackIcons: [{icon: SiAndroid, color: '#3DDC84'}, {icon: SiKotlin, color: '#0095D5'}, {icon: SiJetpackcompose, color: '#4285F4'}]
}, {
    name: 'Breath Guard',
    url: 'https://github.com/joohnnyvv/breath-guard',
    img: breathGuardImg,
    description: 'projects.desc.breath',
    stackIcons: [{icon: FaPython, color: '#3776AB'}, {icon: FaReact, color: '#61DAFB'}, {icon: SiScikitlearn, color: '#F7931E'}, {icon: SiScipy, color: '#8CAAE6'}]
}, {
    name: 'Image to ASCII',
    url: 'https://github.com/joohnnyvv/image_to_ascii_converter',
    img: imageToAsciiImg,
    description: 'projects.desc.ascii',
    stackIcons: [{icon: FaPython, color: '#3776AB'}]
}, {
    name: 'Library Management App',
    url: 'https://github.com/joohnnyvv/LibraryWebApplication',
    img: libraryMgmtImg,
    description: 'projects.desc.library',
    stackIcons: [{icon: FaReact, color: '#61DAFB'}]
}, {
    name: 'Y App',
    url: 'https://github.com/joohnnyvv/y-web-app',
    img: yAppImg,
    description: 'projects.desc.y',
    stackIcons: [{icon: FaReact, color: '#61DAFB'}, {icon: SiAndroid, color: '#3DDC84'}, {icon: SiKotlin, color: '#0095D5'}, {icon: SiJetpackcompose, color: '#4285F4'}, {icon: FaJava, color: '#007396'}, {icon: SiSpringboot, color: '#6DB33F'}, {icon: FaDocker, color: '#2496ED'}, {icon: SiMicrosoftazure, color: '#0078D4'}]
}]