import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Стиль
import './style/mainStyle.scss';
import { Wrapper } from './style/style';
//

//Предохранитель
import ErrorBoundary from './errors/ErrorBoundary';
//

// Locales
import { useTranslation } from 'react-i18next';
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

const Main = lazy(() => import("./pages/Main/Main"));
const Policy = lazy(() => import("./pages/Policy/Policy"));
const Errors = lazy(() => import("./errors/error"));

//lazy components
const CoockieContainer = lazy(() => import("./components/CookieAccept/CoockieAccept"));
//

export default function App(){
    const { t } = useTranslation();
    return(
        <ErrorBoundary>
            <Background />
            <Wrapper>
                <Router>
                    <Header />
                    <Suspense fallback={<Container>{t('Загрузка...')}</Container>}>
                        <Switch>
                            <Route exact path='/' component={Main} />
                            <Route exact path='/policy' component={Policy} />
                            <Route exact path="*">
                                <Errors id="404" />
                            </Route>
                        </Switch>

                        <CoockieContainer />
                    </Suspense>
                    <Footer />
                </Router>
            </Wrapper>
        </ErrorBoundary>
    );
}