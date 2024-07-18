import {useTranslation} from "react-i18next";
import {useAtom} from "jotai";
import {currentThemeAtom, themeAtom} from "../atoms/theme";
import React, {useState} from "react";
import {ReactTyped} from "react-typed";
import {contactItems} from "../consts/contact";
import {motion} from "framer-motion";
// @ts-ignore
import Donut from 'react-spinning-donut';

export function WelcomePage() {
    const {t} = useTranslation();
    const [theme] = useAtom(themeAtom);
    const [currentTheme] = useAtom(currentThemeAtom);
    const [presentationCompleted, setPresentationCompleted] = useState<boolean>(false);
    const [bioCompleted, setBioCompleted] = useState<boolean>(false);

    const contactContainer = {
        hidden: {opacity: 1, scale: 0},
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const contactItem = {
        hidden: {y: 20, opacity: 0},
        visible: {
            y: 0,
            opacity: 1
        }
    };
    const variants = {
        initial: {y: -3000},
        animate: {y: 0, transition: {duration: 1}},
        exit: {y: -3000, transition: {duration: 1}},
    };

    return (
        <div className={`flex flex-col gap-4`}>
            <motion.div
                className="w-screen pb-16 pt-28 px-8 md:px-24 flex flex-col items-center lg:flex-row lg:items-start"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={variants}>
                <div className="w-full lg:w-1/2 text-center lg:text-left lg:flex lg:flex-col lg:items-start">
                    <h1 className={`text-5xl md:text-7xl lg:text-9xl tracking-wider ${currentTheme.text}`}>
                        <ReactTyped
                            showCursor={false}
                            onBegin={() => {
                                setPresentationCompleted(false);
                                setBioCompleted(false);
                            }}
                            onComplete={() => setPresentationCompleted(true)}
                            strings={[t('welcomePage.presentation', {name: 'Jan'})]}
                            typeSpeed={80}
                        />
                    </h1>
                    {presentationCompleted && (
                        <h1 className={`mt-8 md:mt-12 leading-relaxed text-2xl md:text-4xl tracking-wider ${currentTheme.text}`}>
                            <ReactTyped
                                onBegin={() => setBioCompleted(false)}
                                onComplete={() => setBioCompleted(true)}
                                cursorChar="_"
                                startDelay={100}
                                strings={['> ', t('welcomePage.bio')]}
                                typeSpeed={40}
                            />
                        </h1>
                    )}
                    {bioCompleted && (
                        <motion.div
                            variants={contactContainer}
                            initial="hidden"
                            animate="visible"
                            className="w-full flex justify-center lg:justify-start gap-8 md:gap-16 lg:gap-24 pt-12 md:pt-16 lg:pt-24"
                        >
                            {Object.keys(contactItems).map((key) => {
                                const ContactIcon = contactItems[key].icon;
                                return (
                                    <motion.a
                                        key={contactItems[key].id}
                                        href={contactItems[key].url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xl"
                                        variants={contactItem}
                                        whileHover={{scale: 1.1}}
                                    >
                                        <ContactIcon size={60} className={`${currentTheme.text}`}/>
                                    </motion.a>
                                );
                            })}
                        </motion.div>
                    )}
                </div>
                <div className="w-full lg:w-1/2 flex justify-center mt-12 lg:mt-0 cursor-default select-none">
                    <Donut color={theme === 'light' ? '#000000' : '#ffffff'} scaleX={1} scaleY={1} fontSize={12}
                           frameInterval={50}/>
                </div>
            </motion.div>
        </div>
    );
}

export default WelcomePage;