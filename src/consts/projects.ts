import {IconType} from "react-icons";
import {FaDocker, FaJava, FaNode, FaPython, FaReact} from "react-icons/fa";
import {
    SiAndroid,
    SiJetpackcompose,
    SiKotlin,
    SiMicrosoftazure,
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

export interface PrivateProject {
    name: string,
    url: string,
    img?: string,
    description: string,
    stackIcons: { icon: IconType, color: string }[]
}

export interface CommercialProject {
    name: string,
    description: string,
    stack: string[],
    responsibilities: string[]
}

export const projects: PrivateProject[] = [{
    name: 'Ableton Setlist Manager',
    url: 'https://github.com/joohnnyvv/ableton-setlist-manager-web',
    img: abletonImg,
    description: 'projects.desc.ableton',
    stackIcons: [{icon: FaReact, color: '#61DAFB'}, {icon: SiTypescript, color: '#007ACC'}, {
        icon: FaNode,
        color: '#4B9642'
    }]
}, {
    name: 'Fish Monsters',
    url: 'https://github.com/joohnnyvv/FishMonsters',
    img: fishImg,
    description: 'projects.desc.fish',
    stackIcons: [{icon: SiAndroid, color: '#3DDC84'}, {icon: SiKotlin, color: '#0095D5'}, {
        icon: SiJetpackcompose,
        color: '#4285F4'
    }]
}, {
    name: 'Breath Guard',
    url: 'https://github.com/joohnnyvv/breath-guard',
    img: breathGuardImg,
    description: 'projects.desc.breath',
    stackIcons: [{icon: FaPython, color: '#3776AB'}, {icon: FaReact, color: '#61DAFB'}, {
        icon: SiScikitlearn,
        color: '#F7931E'
    }, {icon: SiScipy, color: '#8CAAE6'}]
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
    stackIcons: [{icon: FaReact, color: '#61DAFB'}, {icon: SiAndroid, color: '#3DDC84'}, {
        icon: SiKotlin,
        color: '#0095D5'
    }, {icon: SiJetpackcompose, color: '#4285F4'}, {icon: FaJava, color: '#007396'}, {
        icon: SiSpringboot,
        color: '#6DB33F'
    }, {icon: FaDocker, color: '#2496ED'}, {icon: SiMicrosoftazure, color: '#0078D4'}]
}]

export const commercialProjects: CommercialProject[] = [
    {
        name: 'e-signature app',
        description: 'A Polish client application that allows both individuals and companies to store, view and authorize the signing of documents. Authorization consisted of adding an identity document and verification through a selfie or video call.',
        stack: ['Angular', 'Java', 'Spring', 'Microsoft SQL Server'],
        responsibilities: ['I implemented accessibility according to WCAG standards', 'I added sorting and filtering of documents on the page', 'I optimized the loading of long lists of documents and added pagination']
    }, {
        name: 'energy bank management app',
        description: 'Solution to collect, distribute and settle production and consumption data from the roof with integrated solar cells and the subsequent distribution to the individual housing units. This will be done by setting up smart meters and connecting via mobile data network in a platform and user interface for the housing association and the individual resident.',
        stack: ['Kotlin', 'Android', 'iOS', 'Swift', 'Angular', 'Java', 'Spring'],
        responsibilities: ['I worked on improving the calculations carried out on the backend regarding the transfer of energy from solar panels', 'I have made changes regarding data visualization on charts in mobile applications and in the administrative web application']
    }, {
        name: 'power plant energy management app',
        description: 'System that integrates several types of power sources to give a reliable overall power supply. The sources often form a cluster of different types of dispatchable and non-dispatchable, controllable or flexible load, distributed generation (DG), small-scale wind power plants (WPP)s, photovoltaics (PVs), run-of-river hydroelectricity plants, small hydro, biomass, back-up gensets, and energy storage systems (ESS).',
        stack: ['Angular', 'Java', 'Spring', 'PostgreSQL'],
        responsibilities: ['I worked on migrating Angular and Java to version 17 ', 'I wrote E2E tests for a web application using the Cypress tool', 'I have implemented changes related to errors in displaying data representation in the administrative application']
    }
]