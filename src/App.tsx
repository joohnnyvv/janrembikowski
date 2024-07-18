import React, {useEffect} from 'react';
import {useAtom} from 'jotai';
import {currentThemeAtom, themeAtom} from './atoms/theme';
import {themes} from "./consts/theme";
import {NavBar} from "./components/NavBar";
import {WelcomePage} from "./pages/WelcomePage";
import {Link, useLocation, useRoutes} from "react-router-dom";
import {AnimatePresence, motion} from "framer-motion";
import {FaChevronDown} from "react-icons/fa6";
import {Stack} from "./pages/Stack";
import {FaChevronUp} from "react-icons/fa";
import {Projects} from "./pages/Projects";

function App() {
    const [theme] = useAtom(themeAtom);
    const [currentTheme, setCurrentTheme] = useAtom(currentThemeAtom);

    const element = useRoutes([
        {
            path: "/",
            element: <WelcomePage/>
        },
        {
            path: "/stack",
            element: (
                <Stack/>
            )
        },
        {
            path: "/projects",
            element: (
                <Projects/>
            )
        },]);

    const location = useLocation();

    // @ts-ignore
    useEffect(() => {
        setCurrentTheme(themes[theme])
        // eslint-disable-next-line
    }, [theme]);

    if (!element) return null;

    const headerMap: { [key: string]: string } = {
        "/": "pageHeader.home",
        "/stack": "pageHeader.stack",
        "/projects": "pageHeader.projects",
    };

    const nextPathMap: { [key: string]: string } = {
        "/": "/stack",
        "/stack": "/projects"
    };

    const prevPathMap: { [key: string]: string } = {
        "/stack": "/",
        "/projects": "/stack"
    };

    const currentHeader = headerMap[location.pathname];
    const nextPath = nextPathMap[location.pathname];
    const prevPath = prevPathMap[location.pathname];

    return (
        <div className={`min-h-screen min-w-screen ${currentTheme.background}`}>
            <NavBar header={currentHeader}/>
            <AnimatePresence mode="wait">
                {React.cloneElement(element, {key: location.pathname})}
            </AnimatePresence>
            <motion.div
                className={`fixed bottom-4 flex h-12 justify-center w-screen gap-16 align-center`}
            >
                {location.pathname !== "/" && (
                    <Link to={prevPath}
                          className={`cursor-pointer ${currentTheme.background} border flex items-center px-3 z-50`}>
                        <FaChevronUp
                            size={30} className={`${currentTheme.text}`}/>
                    </Link>)}
                <Link to={nextPath}
                      className={`cursor-pointer ${currentTheme.background} border flex items-center px-3`}>
                    <FaChevronDown
                        size={30} className={`${currentTheme.text}`}/>
                </Link>
            </motion.div>
        </div>
    );
}

export default App;