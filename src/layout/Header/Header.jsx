import React from 'react';
import { NavLink } from 'react-router-dom';

import { Navbar, Nav, Dropdown } from "react-bootstrap";

//Components
import Subfields from './SubFields';
//

// Locales
import { useTranslation } from 'react-i18next';
//

//Pictures
import Earth from '../../media/img/svgLogo/earth.svg';
//

//Style
import { Header as HeaderStyle } from '../../style/style';
//

export default function Header(){
    const { i18n } = useTranslation();

    const changeLanguage = (lng, hrefLang) => {
        i18n.changeLanguage(lng);
        document.documentElement.lang = hrefLang;
        localStorage.setItem('i18nextLng', lng);
        localStorage.setItem('hrefLang', hrefLang);
    };

    document.documentElement.lang = localStorage.getItem('hrefLang') ? localStorage.getItem('hrefLang') : 'en';

    return(
        <HeaderStyle>
            <Navbar collapseOnSelect expand="xl" variant="dark" className="navbar-custom">
            <NavLink to="/" className="navbar-brand ms-2">Genshin Promo</NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    
                    <Subfields />

                    <Nav className="ml-auto">
                        <Dropdown drop="left">
                            <Dropdown.Toggle variant="purple">
                                Language
                                <img className="ml-2" src={Earth} width="25px" height="100%" alt="languageLogo" />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item as="button" onClick={() => changeLanguage('ru-RU', 'ru')}>Русский</Dropdown.Item>
                                <Dropdown.Item as="button" onClick={() => changeLanguage('en-US', 'en')}>English</Dropdown.Item>
                                <Dropdown.Item as="button" onClick={() => changeLanguage('de', 'de')}>Deutsch</Dropdown.Item>
                                <Dropdown.Item as="button" onClick={() => changeLanguage('fr-FR', 'fr')}>Français</Dropdown.Item>
                                <Dropdown.Item as="button" onClick={() => changeLanguage('ko', 'ko')}>한국어</Dropdown.Item>
                                <Dropdown.Item as="button" onClick={() => changeLanguage('zh-TW', 'zh')}>中文（繁體）</Dropdown.Item>
                                <Dropdown.Item as="button" onClick={() => changeLanguage('ja', 'ja')}>日本語</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </HeaderStyle>
    );
}