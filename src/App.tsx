import React, {useEffect, useState} from 'react';
import { useAtom } from 'jotai';
import {currentThemeAtom, themeAtom} from './atoms/theme';
import {themes} from "./consts/theme";
import {NavBar} from "./components/NavBar";
import {WelcomePage} from "./components/WelcomePage";

function App() {
  const [theme] = useAtom(themeAtom);
  const [currentTheme, setCurrentTheme] = useAtom(currentThemeAtom);

  useEffect(() => {
    setCurrentTheme(themes[theme])
  }, [theme]);

    return (
        <div className={`min-h-screen w-screen ${currentTheme.background}`}>
          <NavBar />
            <WelcomePage />
        </div>
    );
}

export default App;