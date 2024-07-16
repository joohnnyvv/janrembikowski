import {useTranslation} from "react-i18next";
import {useAtom} from "jotai/index";
import {currentThemeAtom, themeAtom} from "../atoms/theme";
import React, {useState} from "react";
import {ReactTyped} from "react-typed";
import {contactItems} from "../consts/contact";
import {motion} from "framer-motion";
// @ts-ignore
import Donut from 'react-spinning-donut';

export function WelcomePage() {
    const {t, i18n} = useTranslation();
    const [theme] = useAtom(themeAtom);
    const [currentTheme] = useAtom(currentThemeAtom);
    const [presentationCompleted, setPresentationCompleted] = useState<boolean>(false);
    const [bioCompleted, setBioCompleted] = useState<boolean>(false);

    const contactContainer = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    }

    const contactItem = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    }

    return (
        <div className={`w-screen min-h-screen pb-16 pt-28 px-16 md:px-24 flex flex-col md:flex-row items-center md:items-start`}>
            <div className={`w-screen text-center lg:text-left lg:w-1/2 lg:items-center md:pr-12`}>
                <h1 className={`text-7xl md:text-9xl tracking-wider ${currentTheme.text}`}>
                    <ReactTyped showCursor={false} onBegin={() => {
                        setPresentationCompleted(false);
                        setBioCompleted(false);
                    }}
                                onComplete={() => setPresentationCompleted(true)}
                                strings={[t('welcomePage.presentation', {name: 'Jan'})]} typeSpeed={80}/>
                </h1>
                {presentationCompleted && (
                    <h1 className={`mt-16 leading-relaxed text-2xl md:text-4xl tracking-wider ${currentTheme.text}`}>
                        <ReactTyped onBegin={() => {
                            setBioCompleted(false);
                        }}
                                    onComplete={() => setBioCompleted(true)} cursorChar='_' startDelay={100} strings={['> ', t('welcomePage.bio')]}
                                    typeSpeed={40}/>
                    </h1>)}
                {bioCompleted && (<motion.div
                    variants={contactContainer}
                    initial="hidden"
                    animate="visible"
                    className={`w-full lg:items-center md:pr-12 flex gap-24 pt-28`}>
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
                            >
                                <ContactIcon size={60} className={`${currentTheme.text}`}/>
                            </motion.a>
                        );
                    })}
                </motion.div>)}
            </div>
            <div className={`w-screen lg:w-1/2 flex justify-center md:pr-12`}>
                <Donut color={theme === 'light' ? '#000000' : '#ffffff'}
                       scaleX={1}
                       scaleY={1}
                       fontSize={12}
                       frameInterval={50}/>
            </div>
        </div>
    )
}