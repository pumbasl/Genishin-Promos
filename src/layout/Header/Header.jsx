import React from 'react';
import { NavLink } from 'react-router-dom';

import { Navbar, Nav, DropdownButton, Dropdown } from "react-bootstrap";

// Locales
import { useTranslation } from 'react-i18next';
//

//Уведомление
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
//

//Style
import { Header as HeaderStyle } from '../../style/style';
import './style.scss';
//

export default function Header(){
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('i18nextLng', lng);
    };

    return(
        <HeaderStyle>
            <Navbar collapseOnSelect expand="lg" variant="dark" className="navbar-custom">
            <NavLink to="/" className="navbar-brand ms-2">Genshin Promo</NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink to="/contacts" className="nav-link">{t('Контакты')}</NavLink>
                    </Nav>
                    <Nav className="ml-auto">
                        <DropdownButton drop="left" id="dropdawn" title="Language">
                            <Dropdown.Item as="button" onClick={() => changeLanguage('ru-RU')}>Русский</Dropdown.Item>
                            <Dropdown.Item as="button" onClick={() => changeLanguage('en-US')}>English</Dropdown.Item>
                        </DropdownButton >
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <NotificationContainer/>
        </HeaderStyle>
    );
}