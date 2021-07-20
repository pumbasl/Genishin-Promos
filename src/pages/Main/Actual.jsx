import React from 'react';

// Locales
import { useTranslation } from 'react-i18next';
//

//Components
import Card from '../../components/Card/Card';
import Server from './Server';
//

//Уведомления
import { NotificationManager } from 'react-notifications';
//

//graphql
import Request from '../../js/fetch';
const { EditUserPromos } = require('../../graphql/query');
//

const clipboardy = require('clipboardy');

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

export default function Actual({
    data,
    callback
}) {
    const { t } = useTranslation();
    const handleClick = async (promo) => {
        clipboardy.write(promo.code);
        NotificationManager.info('Вы будете перенаправлены на страницу ввода промокода через 2 секунды.');

        let tempArray = callback.activated.slice(0), tempRequestArray = [];
        tempArray.push(promo);
        callback.setActivate(tempArray);

        tempArray.forEach((value) => {
            tempRequestArray.push(value._id);
        });

        callback.setIsLoaded(callback.sortActivatedCodes(tempArray, callback.isLoaded));

        Request({
            query: EditUserPromos,
            variables: JSON.stringify({
                uuid: localStorage.getItem('uuid'),
                promos: tempRequestArray
            })
        });

        await sleep(2000);
        try {
            const win = window.open('https://genshin.mihoyo.com/en/gift', '_blank');
            win.focus();
        } catch (e) {
            throw new Error(e);
        }
    };

    const newCallBack = {
        server: callback.server,
        setServer: callback.setServer
    };

    return (
        <>
            <h4>{t('Актуальные промокоды')}:</h4>
            <Server callback={newCallBack} />
            {data.map((promo) => (
                <Card.Label key={promo._id}>
                    <Card.Body onClick={() => { handleClick(promo) }}>
                        {promo.code}
                        <Card.Time expired={promo.expired}>
                            {t('Действует до')}: &nbsp;
                        </Card.Time>
                    </Card.Body>
                </Card.Label>
            ))}
        </>
    );
}