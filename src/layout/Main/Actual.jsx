import React from 'react';

// Locales
import { useTranslation } from 'react-i18next';
//

//Components
import Card from '../../components/Card/Card';
//

//Уведомления
import { NotificationManager } from 'react-notifications';
//

//graphql
import Request from '../../js/fetch';
const { EditUser } = require('../../graphql/query');
//

const clipboardy = require('clipboardy');

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

export default function Actual({
    data,
    activated,
    setActivate,
    setIsLoaded,
    sortActivatedCodes,
    isLoaded
}) {
    const { t } = useTranslation();

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
        try {
            const win = window.open('https://genshin.mihoyo.com/en/gift', '_blank');
            win.focus();
        } catch (e) {
            throw new Error(e);
        }
    };

    return (
        <>
            <h4>{t('Актуальные промокоды')}:</h4>
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