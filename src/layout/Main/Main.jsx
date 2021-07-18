import React, { useEffect, useState } from 'react';
import Moment from 'react-moment';

//Компонент
import Container from '../../components/Container/Container';
import Line from '../../components/Line/Line';
import History from './History';
import Activated from './Activated';
//

// Locales
import { useTranslation } from 'react-i18next';
//

//Стиль
import { PromoCardBlock, PromoExpired, PromoCard } from '../../style/style';
import { Badge } from 'react-bootstrap';
//

//Уведомления
import { NotificationManager } from 'react-notifications';
//

//graphql
import Request from '../../js/fetch';
const { GetPromos, AddUser, UserByUuid, EditUser } = require('../../graphql/query');
//

const clipboardy = require('clipboardy');

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

let HistoryPromo = [];

export default function Main(){
    const { t } = useTranslation();
    const [ isLoaded, setIsLoaded ] = useState(false);
    const [ error, setError ] = useState(false);
    const [ activated, setActivate ] = useState([]);

    const handleClick = async (promo) => {
        clipboardy.write(promo.code);
        NotificationManager.info('Вы будете перенаправлены на страницу ввода промокода через 2 секунды.');

        let tempArray = activated.slice(0), tempRequestArray = [];
        tempArray.push(promo);
        setActivate(tempArray);

        tempArray.forEach((value) => {
            tempRequestArray.push(value._id);
        });

        setIsLoaded(sortActivatedCodes(tempArray, isLoaded));

        Request({
            query: EditUser,
            variables: JSON.stringify({
                uuid: localStorage.getItem('uuid'),
                promos: tempRequestArray
            })
        });

        await sleep(2000);
        const win = window.open('https://genshin.mihoyo.com/en/gift', '_blank');
        win.focus();
    };

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
                <h4>{t('Актуальные промокоды')}:</h4>
                {isLoaded.map((promo) => (
                    <PromoCard key={promo._id}>
                        <PromoCardBlock onClick={() => {handleClick(promo)}}>
                            {promo.code}
                            <PromoExpired>
                                <Badge variant="purple">
                                    {t('Действует до')}: &nbsp; 
                                    <Moment
                                        format="DD.MM.YYYY HH:MM"
                                    >
                                        {promo.expired}
                                    </Moment>
                                </Badge>
                            </PromoExpired>
                        </PromoCardBlock>
                    </PromoCard>
                ))}

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