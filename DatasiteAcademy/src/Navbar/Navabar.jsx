import React, { useState, useEffect } from 'react'
import './Navbar.css'
import logo from "../assets/logo.png"
import { useTranslation } from 'react-i18next'
import { MdLanguage } from "react-icons/md";
import { CiDark } from "react-icons/ci";
import { GoSun } from "react-icons/go";

function Navbar() {
    const { t, i18n } = useTranslation();
    const [darkMode, setDarkMode] = useState(false);
    const [langOpen, setLangOpen] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [darkMode]);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setLangOpen(false);
    };

    return (
        <div className='Big'>
            <div className="Navbar">
                <ul>
                    <li><img src={logo} alt="" /></li>
                </ul>
                <ul>
                    <li onClick={() => document.getElementById('bosh-sahifa').scrollIntoView({ behavior: 'smooth' })}>
                        {t('navbar.home')}
                    </li>
                    <li onClick={() => document.getElementById('kurslar').scrollIntoView({ behavior: 'smooth' })}>
                        {t('navbar.courses')}
                    </li>
                    <li onClick={() => document.getElementById('natijalar').scrollIntoView({ behavior: 'smooth' })}>
                        {t('navbar.results')}
                    </li>
                    <li onClick={() => document.getElementById('xizmatlar').scrollIntoView({ behavior: 'smooth' })}>
                        {t('navbar.services')}
                    </li>
                </ul>
                <ul>
                    <li className="lang-switcher">
                        <MdLanguage onClick={() => setLangOpen(!langOpen)} />
                        {langOpen && (
                            <div className="lang-dropdown">
                                <span onClick={() => changeLanguage('uz')}>UZ</span>
                                <span onClick={() => changeLanguage('ru')}>RU</span>
                                <span onClick={() => changeLanguage('en')}>EN</span>
                            </div>
                        )}
                    </li>
                    <li onClick={() => setDarkMode(!darkMode)}>
                        {darkMode ? <GoSun /> : <CiDark />}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar