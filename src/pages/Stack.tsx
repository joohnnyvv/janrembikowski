import {motion} from 'framer-motion';
import React, {useEffect, useRef, useState} from 'react';
import {useAtom} from "jotai";
import {currentThemeAtom, themeAtom} from "../atoms/theme";
import {skills} from "../consts/skills";
import {useTranslation} from "react-i18next";
import {ReactTyped} from "react-typed";

export function Stack() {
    const [theme] = useAtom(themeAtom);
    const [currentTheme] = useAtom(currentThemeAtom);
    const [initialAnimEnd, setInitialAnimEnd] = useState(false);
    const [, setRectangleDrawn] = useState(false);
    const {t} = useTranslation();
    const containerRef = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState({width: 0, height: 0});
    const [skillHovered, setSkillHovered] = useState(false);

    useEffect(() => {
        const updateDimensions = () => {
            if (containerRef.current) {
                setDimensions({
                    width: containerRef.current.offsetWidth,
                    height: containerRef.current.offsetHeight,
                });
            }
        };

        updateDimensions();
        window.addEventListener('resize', updateDimensions);

        return () => {
            window.removeEventListener('resize', updateDimensions);
        };
    }, []);

    const variants = {
        initial: {y: 3000},
        animate: {y: 0, transition: {duration: 1}},
        exit: {y: -3000, transition: {duration: 1}},
    };

    const draw = {
        hidden: {pathLength: 0, opacity: 0},
        visible: (i: number) => {
            const delay = 1 + i * 0.5;
            return {
                pathLength: 1,
                opacity: 1,
                transition: {
                    pathLength: {delay, type: "spring", duration: 1.5, bounce: 0},
                    opacity: {delay, duration: 0.01}
                }
            };
        }
    };

    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            className="w-screen pb-8 pt-28 px-8 md:px-24 flex flex-col justify-center items-center lg:flex-row lg:items-start relative "
            onAnimationComplete={() => setInitialAnimEnd(true)}
        >
            {initialAnimEnd && (
                <motion.svg
                    width={dimensions.width + 60}
                    height={dimensions.height + 60}
                    initial="hidden"
                    animate="visible"
                    className="absolute"
                >
                    <motion.rect
                        width="100%"
                        height="100%"
                        x="0"
                        y="0"
                        rx="2"
                        stroke={theme === 'light' ? '#000000' : '#ffffff'}
                        variants={draw}
                        fill="none"
                        onAnimationComplete={() => setRectangleDrawn(true)}
                    />
                </motion.svg>
            )}
            <div ref={containerRef}
                 className={`z-0 w-full h-full grid pt-4 px-8 sm:pt-12 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8`}
            >
                {Object.keys(skills).map((category) => (
                    <div key={category}>
                        <div className="flex items-center justify-between">
                            <h1 className={`${currentTheme.text} text-xl cursor-default select-none`}>
                                {t(`stack.${category}`)}
                            </h1>
                        </div>
                        <div className={`flex flex-col items-center md:items-start`}>
                            {skills[category].map(({name, icon: Icon, color, description}, index) => (
                                <motion.div
                                    whileHover={{scale: 1.15}}
                                    key={index}
                                    className="flex items-center justify-between py-3"
                                >
                                    <div className="flex group items-center gap-x-3"
                                         onMouseEnter={() => setSkillHovered(true)}
                                         onMouseLeave={() => setSkillHovered(false)}
                                         onTouchStart={() => setSkillHovered(true)}
                                         onTouchEnd={() => {
                                             setSkillHovered(false)
                                         }}>
                                        <Icon size={24} color={color}/>
                                        <div>
                                            <h6 className={`${currentTheme.text} cursor-default select-none`}>
                                                {name}
                                            </h6>
                                            {skillHovered && (
                                                <span
                                                    className={`absolute z-50 border top-10 scale-0 transition-all w-32 rounded ${currentTheme.background} p-2 text-xs ${currentTheme.text} group-hover:scale-100`}>
                                                <ReactTyped
                                                    cursorChar="_"
                                                    startDelay={100}
                                                    strings={[t(`stack.desc.${description}`)]}
                                                    typeSpeed={30}
                                                />
                                            </span>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}