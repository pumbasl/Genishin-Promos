import React, { useEffect, useState } from 'react';

//Компонент
import Container from '../../components/Container/Container';
import Line from '../../components/Line/Line';
import Actual from './Actual';
import History from './History';
import Activated from './Activated';
//

// Locales
import { useTranslation } from 'react-i18next';
//

//graphql
import Request from '../../js/fetch';
const { GetPromos, AddUser, UserByUuid } = require('../../graphql/query');
//

let HistoryPromo = [];

export default function Main(){
    const { t } = useTranslation();
    const [ isLoaded, setIsLoaded ] = useState(false);
    const [ error, setError ] = useState(false);
    const [ activated, setActivate ] = useState([]);

    const sortCodes = (a, b) => {
        //сортировка от истёкших кодов
        for(const value of b){
            if(Date.now() > value.expired){
                HistoryPromo.push(value);
                a = a.filter((item) => item._id !== value._id);
            }
        };
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
            query: GetPromos,
            variables: {}
        })
        .then(
            (result) => {

                let tempSecondArray = sortCodes(result.data.promos.slice(0), result.data.promos); // сортировка от просроченных кодов

                //проверка на регистрацию
                if(!localStorage.getItem('uuid')){

                    Request({
                        query: AddUser,
                        variables: JSON.stringify({
                            promos: [],
                            server: 'EU',
                            ua: navigator.userAgent
                        })
                    })
                    .then(
                        (result) => {
                            localStorage.setItem('uuid', result.data.addUser.uuid);
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
    }, [])

    if(!isLoaded){
        return(
            <Container>
                {t('Загрузка...')}
            </Container>
        );
    } else if(!error){
        return(
            <Container>
                <Actual data={isLoaded} activated={activated} setActivate={setActivate} setIsLoaded={setIsLoaded} sortActivatedCodes={sortActivatedCodes} isLoaded={isLoaded} />

                <Line />

                <Activated data={activated} />

                <Line />

                <History data={HistoryPromo} />
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