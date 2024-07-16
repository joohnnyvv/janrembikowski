import React from 'react';
import logo from './logo.svg';
import {useTranslation} from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string | undefined) => {
    i18n.changeLanguage(lng);
  };

  return (
      <div className='w-screen h-14 bg-indigo-400'>
      </div>
  );
}

export default App;
