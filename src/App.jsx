import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Стиль
import './style/mainStyle.scss';

import { Wrapper } from './style/style';
//

//Предохранитель
import ErrorBoundary from './errors/ErrorBoundary';
//

//Компонент
import Container from './components/Container/Container';
//

//Background
import Background from './components/background/background';
//

//Страница
import Header from './layout/Header/Header';
import Footer from './layout/Footer/Footer';

const Main = lazy(() => import("./layout/Main/Main"));
const Contacts = lazy(() => import("./layout/Contacts/Contacts"));
const Help = lazy(() => import("./layout/Help/Help"));
const Errors = lazy(() => import("./errors/error"));
//

export default function App(){
    return(
        <ErrorBoundary>
            <Background />
            <Wrapper>
                <Header />
                <Router>
                    <Suspense fallback={<Container>Загрузка...</Container>}>
                        <Switch>
                            <Route exact path='/' component={Main} />
                            <Route exact path='/' component={Contacts} />
                            <Route exact path='/' component={Help} />
                            <Route exact path="*">
                                <Errors id="404" />
                            </Route>
                        </Switch>
                    </Suspense>
                </Router>
                <Footer />
            </Wrapper>
        </ErrorBoundary>
    );
}