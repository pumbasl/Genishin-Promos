import React from 'react';

//router
import { BrowserRouter as Router } from 'react-router-dom';
//

//styles
import './style/mainStyle.scss';

import { Wrapper } from './style/style';
//

//Предохранитель
import ErrorBoundary from './errors/ErrorBoundary';
//

//components
import { Background, Notifications, CookieNotify } from './components';
//

//layout

import Header from './layout/Header/Header';
import Main from './layout/Main/Main';
import Footer from './layout/Footer/Footer';
//

export default function App(){
    return(
        <ErrorBoundary>
            <Background />
            
            <Notifications />
            <CookieNotify />

            <Wrapper>
                <Router>
                    <Header />
                    <Main />
                    <Footer />
                </Router>
            </Wrapper>
        </ErrorBoundary>
    );
}