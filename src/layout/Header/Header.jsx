import React from 'react';
import { NavLink } from 'react-router-dom';

import { Navbar, Nav } from "react-bootstrap";

//Components
import Subfields from './SubFields';
import { LanguageButton, Profile } from '../../components';
//

//Style
import { Header as HeaderStyle } from '../../style/style';
//

export default function Header(){
    return(
        <HeaderStyle>
            <Navbar collapseOnSelect expand="xl" variant="dark" className="navbar-custom">
            <NavLink to="/" className="navbar-brand ms-3">Genshin Promo</NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    
                    <Subfields />

                    <Nav className="ml-auto">
                        <Profile />
                        <LanguageButton />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </HeaderStyle>
    );
}