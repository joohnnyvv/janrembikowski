import {PrivateProject} from "../consts/projects";
import {AnimatePresence, motion} from "framer-motion";
import {useAtom} from "jotai/index";
import {currentThemeAtom, themeAtom} from "../atoms/theme";
import {ReactTyped} from "react-typed";
import React from "react";
import {useTranslation} from "react-i18next";

export function ProjectAccordion(props: {
    project: PrivateProject,
    i: number,
    expanded: false | number,
    setExpanded: React.Dispatch<React.SetStateAction<number>>
    initAnimComplete: boolean
}) {
    const isOpen = props.i === props.expanded;
    const [currentTheme] = useAtom(currentThemeAtom);
    const [theme] = useAtom(themeAtom);
    const [, setExpandComplete] = React.useState(false);
    const {t} = useTranslation();

    return (
        <div className={`flex w-full flex-col`}>
            <motion.header
                initial={false}
                animate={{
                    backgroundColor: isOpen
                        ? (theme === 'light' ? "#000000" : "#FFFFFF")
                        : (theme === 'light' ? "#FFFFFF" : "#000000"),
                    color: isOpen
                        ? (theme === 'light' ? "#ffffff" : "#000000")
                        : (theme === 'light' ? "#000000" : "#ffffff")
                }}
                onClick={() => props.i !== props.expanded && props.setExpanded(props.i)}
                className={`h-14 px-2 w-full ${currentTheme.text} border flex justify-between overflow-x-scroll items-center`}
            >
                {props.initAnimComplete && (
                    <>
                        <h1 className={`text-xl select-none cursor-default whitespace-nowrap`}>
                            <ReactTyped
                                cursorChar="_"
                                startDelay={100}
                                strings={[`> ` + props.project.name]}
                                typeSpeed={40}
                            />
                        </h1>
                        <motion.div className={`flex gap-3`}
                                    initial="hidden"
                                    animate="visible"
                                    variants={{
                                        hidden: {opacity: 1, scale: 0},
                                        visible: {
                                            opacity: 1,
                                            scale: 1,
                                            transition: {
                                                delayChildren: 0.3,
                                                staggerChildren: 0.2
                                            }
                                        }
                                    }}>
                            {props.project.stackIcons.map((icon, index) => {
                                const StackIcon = icon.icon;
                                return (
                                    <motion.div variants={{
                                        hidden: {y: 20, opacity: 0},
                                        visible: {
                                            y: 0,
                                            opacity: 1
                                        }
                                    }} whileHover={{scale: 1.1}} key={index}>
                                        < StackIcon size={24} color={icon.color}/>
                                    </motion.div>
                                )
                            })
                            }
                        </motion.div>
                    </>
                )}
            </motion.header>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.section
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: {opacity: 1, height: "auto"},
                            collapsed: {opacity: 0, height: 0}
                        }}
                        transition={{duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98]}}
                        className={`px-2`}
                        onAnimationStart={() => setExpandComplete(false)}
                        onAnimationComplete={() => {
                            setExpandComplete(true)
                        }}
                    >
                        <motion.div variants={{collapsed: {scale: 0.8}, open: {scale: 1}}}
                                    transition={{duration: 0.8}} className={`flex flex-col xl:flex-row mt-3`}>
                            <h1 className={`${currentTheme.textSecondary}`}>{t(`${props.project.description}`)}</h1>
                        </motion.div>
                    </motion.section>
                )}
            </AnimatePresence>
        </div>
    )
}