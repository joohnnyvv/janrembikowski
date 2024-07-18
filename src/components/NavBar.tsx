import {AiFillCode} from "react-icons/ai";
import React from "react";
import {useTranslation} from "react-i18next";
import {useAtom} from "jotai/index";
import {currentThemeAtom, themeAtom} from "../atoms/theme";
import {FaLanguage} from "react-icons/fa6";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import {ReactTyped} from "react-typed";
import {MdDarkMode, MdOutlineDarkMode} from "react-icons/md";

export function NavBar(props: { header: string }) {
    const {t, i18n} = useTranslation();
    const [currentTheme] = useAtom(currentThemeAtom);
    const [theme, setTheme] = useAtom(themeAtom);

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };
    return (
        <div
            className={`w-screen z-10 h-20 ${currentTheme.background} flex flex-row justify-between px-8 md:px-24 py-5 items-center fixed`}>
            <div className={`flex items-center ${currentTheme.text} gap-4`}>
                <Link to={'/'}>
                    <AiFillCode color={currentTheme.iconColor} size={50}/>
                </Link>
            </div>
            <h1 className={`leading-relaxed text-2xl md:text-4xl tracking-wider ${currentTheme.text} cursor-default select-none`}>
                <ReactTyped
                    cursorChar="_"
                    startDelay={100}
                    strings={[t(`${props.header}`)]}
                    typeSpeed={40}
                />
            </h1>
            <div className={`flex gap-4`}>
                <motion.div whileHover={{scale: 1.1}} className='flex items-center mt-0 gap-4'>
                    <FaLanguage
                        onClick={() => {
                            changeLanguage(i18n.language === 'en' ? 'pl' : 'en');
                        }}
                        size={40}
                        className={`${currentTheme.text} cursor-pointer`}
                    />
                </motion.div>
                <motion.div whileHover={{scale: 1.1}} className='flex items-center mt-0 gap-4'>
                    {theme === 'light' ? (
                        <MdDarkMode
                            onClick={() => {
                                setTheme('dark')
                            }}
                            size={40}
                            className={`${currentTheme.text} cursor-pointer`}
                        />
                    ) : (
                        <MdOutlineDarkMode
                            onClick={() => {
                                setTheme('light')
                            }}
                            size={40}
                            className={`${currentTheme.text} cursor-pointer`}
                        />
                    )}
                </motion.div>
            </div>
        </div>)
}