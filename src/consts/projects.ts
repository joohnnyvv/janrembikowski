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
    description: 'The Ableton Setlist Manager is a React-based client application designed to work in tandem with the Setlist Management Server for managing setlists and controlling playback in Ableton Live. It provides an intuitive user interface for interacting with Ableton Live and accessing real-time updates through WebSocket communication.',
    stackIcons: [{icon: FaReact, color: '#61DAFB'}, {icon: SiTypescript, color: '#007ACC'}, {icon: FaNode, color: '#4B9642'}]
}, {
    name: 'Fish Monsters',
    url: 'https://github.com/joohnnyvv/FishMonsters',
    img: fishImg,
    description: 'A mobile game for the android platform allowing you to explore an alternative aquatic reality full of monsters and rewards. The gameplay involves walking around the neighborhood and avoiding water monsters, the application was developed using the Google Maps API.',
    stackIcons: [{icon: SiAndroid, color: '#3DDC84'}, {icon: SiKotlin, color: '#0095D5'}, {icon: SiJetpackcompose, color: '#4285F4'}]
}, {
    name: 'Breath Guard',
    url: 'https://github.com/joohnnyvv/breath-guard',
    img: breathGuardImg,
    description: 'BreathGuard is a react web application that uses a machine learning model to predict lung cancer risk. The graphical interface is provided through an application written in React. The machine learning model was created and trained as a college credit project.',
    stackIcons: [{icon: FaPython, color: '#3776AB'}, {icon: FaReact, color: '#61DAFB'}, {icon: SiScikitlearn, color: '#F7931E'}, {icon: SiScipy, color: '#8CAAE6'}]
}, {
    name: 'Image to ASCII',
    url: 'https://github.com/joohnnyvv/image_to_ascii_converter',
    img: imageToAsciiImg,
    description: 'A simple Python application that converts images into cool ASCII art. Converts images of various formats (e.g., JPG, PNG) into text-based ASCII image representation and saves the generated ASCII art to a .txt file.',
    stackIcons: [{icon: FaPython, color: '#3776AB'}]
}, {
    name: 'Library Management App',
    url: 'https://github.com/joohnnyvv/LibraryWebApplication',
    img: libraryMgmtImg,
    description: 'This is a web application built using React and React Bootstrap that allows you to manage library. All data is stored locally in your browser\'s Local Storage. It uses a public API, making thousands of books available.',
    stackIcons: [{icon: FaReact, color: '#61DAFB'}]
}, {
    name: 'Y App',
    url: 'https://github.com/joohnnyvv/y-web-app',
    img: yAppImg,
    description: 'An X-like application consisting of a mobile app, a web app and a backend written in java. Deployment to Azure was done via container registry. We implemented WebSocket allowing real-time comment updates.',
    stackIcons: [{icon: FaReact, color: '#61DAFB'}, {icon: SiAndroid, color: '#3DDC84'}, {icon: SiKotlin, color: '#0095D5'}, {icon: SiJetpackcompose, color: '#4285F4'}, {icon: FaJava, color: '#007396'}, {icon: SiSpringboot, color: '#6DB33F'}, {icon: FaDocker, color: '#2496ED'}, {icon: SiMicrosoftazure, color: '#0078D4'}]
}]