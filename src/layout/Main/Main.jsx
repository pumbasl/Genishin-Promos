import React, { useEffect, useState } from 'react';
import Moment from 'react-moment';

//Компонент
import Container from '../../components/Container/Container';
//

//Стиль
import { PromoCardBlock, PromoExpired, PromoCard } from '../../style/style';
//

//Уведомления
import { NotificationManager } from 'react-notifications';
//

//graphql
const { GetPromos } = require('../../graphql/query');
const Request = require('../../js/fetch');
//

const clipboardy = require('clipboardy');

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

export default function Main(){
    const [ isLoaded, setIsLoaded ] = useState(false);
    const [ error, setError ] = useState(false);

    const handleClick = async (promo) => {
        clipboardy.write(promo.code);
        NotificationManager.info('Вы будете перенаправлены на страницу ввода промокода через 2 секунды.');
        await sleep(2000);
        const win = window.open('https://genshin.mihoyo.com/en/gift', '_blank');
        win.focus();
    };

    useEffect(() => {
        Request({
            query: GetPromos,
            variables: {}
        }, [])
        .then(
            (result) => {
                setIsLoaded(result.data.promos);
            },
            (error) => {
                setError(error);
            }
        )
    }, [])

    if(!isLoaded){
        return(
            <Container>
                Загрузка...
            </Container>
        );
    } else if(!error){
        console.log(isLoaded)
        return(
            <Container>
                {isLoaded.map((promo) => (
                    <PromoCard key={promo._id}>
                        <PromoCardBlock onClick={() => {handleClick(promo)}}>
                            {promo.code}
                            <PromoExpired>
                                Действителен до: 
                                <Moment
                                    format="DD.MM.YYYY HH:MM"
                                >
                                    {promo.expired}
                                </Moment>
                            </PromoExpired>
                        </PromoCardBlock>
                    </PromoCard>
                ))}
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