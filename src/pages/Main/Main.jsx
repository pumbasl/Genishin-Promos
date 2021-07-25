import React, { useEffect, useState } from 'react';

//Компонент
import Container from '../../components/Container/Container';
import Line from '../../components/Line/Line';
import Actual from './Components/Actual';
import History from './Components/History';
import Activated from './Components/Activated';
//

// Locales
import { useTranslation } from 'react-i18next';
//

//graphql
import Request from '../../js/fetch';
const { GetPromoByServer, AddUser, UserByUuid } = require('../../graphql/query');
//

export default function Main(){
    const { t } = useTranslation();
    const [ isLoaded, setIsLoaded ] = useState(false);
    const [ error, setError ] = useState(false);
    const [ activated, setActivate ] = useState([]);
    const [ history, setHistory ] = useState(null);
    const [ server, setServer ] = useState(localStorage.getItem('server') ? localStorage.getItem('server') : 'Europe');

    document.title = 'Genshin Promo | Get Promo code!'; // TITLE PAGE

    const sortCodes = (a, b) => {
        //сортировка от истёкших кодов
        const tempHistory = [];

        b.forEach((value) => {
            if(Date.now() > value.expired){
                tempHistory.push(value);
                a = a.filter((item) => item._id !== value._id);
            }
        });

        setHistory(tempHistory.reverse());
        return a;
    };

    const sortActivatedCodes = (a, b) => {
        //сортировка активированых кодов
        a.forEach((value) => {
            b = b.filter((item) => item._id !== value._id);
        });
        return b;
    };

    useEffect(() => {
        Request({
            query: GetPromoByServer,
            variables: JSON.stringify({
                server: server
            })
        })
        .then(
            (result) => {

                let tempSecondArray = sortCodes(result.data.promosByServer.slice(0), result.data.promosByServer); // сортировка от просроченных кодов

                //проверка на регистрацию
                if(!localStorage.getItem('uuid')){

                    Request({
                        query: AddUser,
                        variables: JSON.stringify({
                            promos: [],
                            server: 'Europe',
                            ua: navigator.userAgent
                        })
                    })
                    .then(
                        (result) => {
                            localStorage.setItem('uuid', result.data.addUser.uuid);
                            localStorage.setItem('server', 'Europe');
                        },

                        (error) => {
                            setError(error);
                        }
                    );
                    setIsLoaded(tempSecondArray);

                } else {
                    //получение данных активированых промокодов юзера
                    Request({
                        query: UserByUuid,
                        variables: JSON.stringify({
                            uuid: localStorage.getItem('uuid')
                        })
                    })
                    .then(
                        (result) => {

                            tempSecondArray = sortActivatedCodes(result.data.usersByUuid.promos, tempSecondArray); //сортировка активированых промокодов

                            setActivate(result.data.usersByUuid.promos);
                            setIsLoaded(tempSecondArray);
                        },
                        (error) => {
                            setError(error);
                        }
                    );

                }
            },
            (error) => {
                setError(error);
            }
        );
    }, [server])

    if(!isLoaded){
        return(
            <Container>
                {t('Загрузка...')}
            </Container>
        );
    } else if(!error){
        const CallBack = {
            activated: activated,
            setActivate: setActivate,
            setIsLoaded: setIsLoaded,
            sortActivatedCodes: sortActivatedCodes,
            isLoaded: isLoaded,
            server: server,
            setServer: setServer

        };
        
        return(
            <Container>
                <Actual data={isLoaded} callback={CallBack} />

                <Line />

                <Activated data={activated} />

                <Line />

                <History data={history} />
            </Container>
        );
    } else {
        return(
            <Container>
                Error #2
            </Container>
        );
    }
}