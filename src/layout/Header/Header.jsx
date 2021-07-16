import React from 'react';

import { Navbar, Nav } from "react-bootstrap";

//Style
import { Header as HeaderStyle } from '../../style/style';
import './style.scss';
//

export default function Header(){
    return(
        <HeaderStyle>
            <Navbar collapseOnSelect expand="lg" variant="dark" className="navbar-custom">
            <Navbar.Brand href="/">Genshin Promo</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/contatcs">Контакты</Nav.Link>
                        <Nav.Link href="/help">Помощь</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </HeaderStyle>
    );
}