import React from 'react';
import { NavLink } from 'react-router-dom';

import { Navbar, Nav } from "react-bootstrap";

//Уведомление
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
//

//Style
import { Header as HeaderStyle } from '../../style/style';
import './style.scss';
//

export default function Header(){
    return(
        <HeaderStyle>
            <Navbar collapseOnSelect expand="lg" variant="dark" className="navbar-custom">
            <NavLink to="/" className="navbar-brand ms-2">Genshin Promo</NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink to="/contatcs" className="nav-link">Контакты</NavLink>
                        <NavLink to="/help" className="nav-link">Помощь</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <NotificationContainer/>
        </HeaderStyle>
    );
}