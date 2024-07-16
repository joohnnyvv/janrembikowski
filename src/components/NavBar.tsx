import {AiFillCode} from "react-icons/ai";
import React from "react";
import {useTranslation} from "react-i18next";
import {useAtom} from "jotai/index";
import {currentThemeAtom} from "../atoms/theme";
import { FaLanguage } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";


export function NavBar() {
    const { t, i18n } = useTranslation();
    const [currentTheme] = useAtom(currentThemeAtom);

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };
    return (
        <div className={`w-screen h-20 ${currentTheme.background} flex flex-row justify-between px-8 md:px-24 py-5 items-center fixed`}>
            <div className={`flex items-center ${currentTheme.text} gap-4`}>
                <AiFillCode color={currentTheme.iconColor} size={50}/>
                <h1 className={`text-xl`}>Jan Rembikowski</h1>
            </div>
            <div className='flex items-center mt-0 gap-4'>
                <FaLanguage
                    onClick={() => {
                        changeLanguage(i18n.language === 'en' ? 'pl' : 'en');
                    }}
                    size={40}
                    className={`${currentTheme.text} cursor-pointer`}
                />
            </div>
        </div>)
}