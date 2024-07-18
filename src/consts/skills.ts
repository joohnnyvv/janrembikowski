import { FaReact, FaAngular, FaJava, FaPython, FaAws, FaDocker } from 'react-icons/fa';
import { SiTypescript, SiSpringboot, SiPostman, SiDotnet, SiKotlin, SiJetpackcompose, SiScikitlearn, SiScipy, SiMicrosoftazure, SiKubernetes, SiBitbucket, SiJira, SiScrumalliance, SiJetbrains, SiFastapi, SiCypress, SiAndroid } from 'react-icons/si';
import { IconType } from 'react-icons';

interface Skill {
    name: string;
    icon: IconType;
    color: string;
    description: string;
}

interface Skills {
    [category: string]: Skill[];
}

export const skills: Skills = {
    "frontend": [
        { name: "React", icon: FaReact, color: '#61DAFB', description: 'react' },
        { name: "React Native", icon: FaReact, color: '#61DAFB', description: 'reactNative' },
        { name: "Angular", icon: FaAngular, color: '#DD0031', description: 'angular' },
        { name: "TypeScript", icon: SiTypescript, color: '#007ACC', description: 'typeScript' },
        { name: "Cypress", icon: SiCypress, color: '#8EE0BE', description: 'cypress' },
    ],
    "backend": [
        { name: "Java", icon: FaJava, color: '#007396', description: 'java' },
        { name: "Spring Boot", icon: SiSpringboot, color: '#6DB33F', description: 'springBoot' },
        { name: "JPA", icon: SiSpringboot, color: '#6DB33F', description: 'jpa' },
        { name: ".NET", icon: SiDotnet, color: '#512BD4', description: '.net' },
        { name: "Python", icon: FaPython, color: '#3776AB', description: 'python' },
        { name: "FastAPI", icon: SiFastapi, color: '#009688', description: 'fastAPI' },
        { name: "Postman", icon: SiPostman, color: '#FF6C37', description: 'postman' }
    ],
    "mobile": [
        { name: "Android", icon: SiAndroid, color: '#3DDC84', description: 'android' },
        { name: "Kotlin", icon: SiKotlin, color: '#0095D5', description: 'kotlin' },
        { name: "Jetpack Compose", icon: SiJetpackcompose, color: '#4285F4', description: 'jetpackCompose' }
    ],
    "machineLearning": [
        { name: "Python", icon: FaPython, color: '#3776AB', description: 'python' },
        { name: "Scikit-learn", icon: SiScikitlearn, color: '#F7931E', description: 'scikit-learn' },
        { name: "SciPy", icon: SiScipy, color: '#8CAAE6', description: 'sciPy' },
    ],
    "devOps": [
        { name: "Azure", icon: SiMicrosoftazure, color: '#0078D4', description: 'azure' },
        { name: "AWS", icon: FaAws, color: '#FF9900', description: 'aws' },
        { name: "Kubernetes", icon: SiKubernetes, color: '#326CE5', description: 'kubernetes' },
        { name: "Docker", icon: FaDocker, color: '#2496ED', description: 'docker' }
    ],
    "tools": [
        { name: "Bitbucket", icon: SiBitbucket, color: '#0052CC', description: 'bitbucket' },
        { name: "Jira", icon: SiJira, color: '#0052CC', description: 'jira' },
        { name: "Scrum", icon: SiScrumalliance, color: '#5B9BD5', description: 'scrum' },
        { name: "JetBrains IDEs", icon: SiJetbrains, color: '#F1019F', description: 'jetBrainsIDEs' }
    ]
};