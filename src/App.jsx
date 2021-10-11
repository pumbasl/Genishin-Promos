import React, { useEffect } from 'react';

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

//firebase
import './config/firebase';
//

export default function App(){
    //alerts push
    window.OneSignal = window.OneSignal || [];
    const OneSignal = window.OneSignal;

    useEffect(() => {
        OneSignal.push(() => {
            OneSignal.init({
                appId: "c3d3e99e-6f5b-4bb6-b5d4-814b036c9802"
            })
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    //

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