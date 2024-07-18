import {motion} from 'framer-motion';
import {projects} from "../consts/projects";
import {useAtom} from "jotai";
import {currentThemeAtom} from "../atoms/theme";
import React, {useState} from "react";
import {ProjectAccordion} from "../components/ProjectAccordion";
import {ParallaxText} from "../components/ParallaxText";
import {ProjectCard} from "../components/ProjectCard";

export function Projects() {
    const [currentTheme] = useAtom(currentThemeAtom);
    const [expanded, setExpanded] = useState<number>(0);
    const [initAnimComplete, setInitAnimComplete] = React.useState(false);

    const variants = {
        initial: {y: 3000},
        animate: {y: 0, transition: {duration: 1}},
        exit: {y: -3000, transition: {duration: 1}},
    };

    const imageVariants = {
        initial: {opacity: 0, scale: 0.8},
        animate: {opacity: 1, scale: 1, transition: {duration: 0.5}},
        exit: {opacity: 0, scale: 0.8, transition: {duration: 0.5}},
    };

    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            className={`w-screen min-h-screen pb-16 pt-28 flex flex-col gap-16 justify-center items-center lg:items-start overflow-x-hidden relative ${currentTheme.background}`}
            onAnimationComplete={() => setInitAnimComplete(true)}
        >
            <ParallaxText baseVelocity={2}>
                PRIVATE PROJECTS
            </ParallaxText>
            <motion.img
                key={projects[expanded].img}
                src={projects[expanded].img}
                className={`w-full md:w-auto md:h-80 self-center border`}
                variants={imageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
            />
            <div className={`grid grid-cols-1 lg:grid-cols-1 gap-8 w-full lg:px-48`}>
                {projects.map((project, index) => (
                    <ProjectAccordion
                        key={index}
                        i={index}
                        expanded={expanded}
                        setExpanded={setExpanded}
                        project={project}
                        initAnimComplete={initAnimComplete}
                    />
                ))}
            </div>
            <ParallaxText baseVelocity={2}>
                COMMERCIAL PROJECTS
            </ParallaxText>
            <div className={`w-screen px-1 md:px-24 lg:px-64`}>
                <ProjectCard/>
            </div>
        </motion.div>
    );
}