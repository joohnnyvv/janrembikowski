import {AiFillCode} from "react-icons/ai";
import React from "react";
import {useTranslation} from "react-i18next";
import {useAtom} from "jotai/index";
import {currentThemeAtom, themeAtom} from "../atoms/theme";
import {TbFileCv} from "react-icons/tb";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import {ReactTyped} from "react-typed";
import {MdDarkMode, MdOutlineDarkMode} from "react-icons/md";
import {FaLanguage} from "react-icons/fa";
import i18n, {changeLanguage} from "i18next";

export function NavBar(props: { header: string }) {
    const {t} = useTranslation();
    const [currentTheme] = useAtom(currentThemeAtom);
    const [theme, setTheme] = useAtom(themeAtom);

    return (
        <div
            className={`w-screen z-10 h-20 ${currentTheme.background} flex flex-row justify-between px-4 md:px-24 py-5 items-center fixed`}>
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
                        size={25}
                        className={`${currentTheme.text} cursor-pointer`}
                    />
                    <a href='/jan rembikowski cv.pdf' download='/jan rembikowski cv.pdf'><TbFileCv size={25}
                                                                                                   className={`${currentTheme.text} cursor-pointer`}/></a>
                </motion.div>
                <motion.div whileHover={{scale: 1.1}} className='flex items-center mt-0 gap-4'>
                    {theme === 'light' ? (
                        <MdDarkMode
                            onClick={() => {
                                setTheme('dark')
                            }}
                            size={25}
                            className={`${currentTheme.text} cursor-pointer`}
                        />
                    ) : (
                        <MdOutlineDarkMode
                            onClick={() => {
                                setTheme('light')
                            }}
                            size={25}
                            className={`${currentTheme.text} cursor-pointer`}
                        />
                    )}
                </motion.div>
            </div>
        </div>)
}