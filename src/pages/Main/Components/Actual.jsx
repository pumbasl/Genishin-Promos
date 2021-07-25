import React from 'react';

// Locales
import { useTranslation } from 'react-i18next';
//

//Components
import Card from '../../../components/Card/Card';
import Server from './Server';
//

//Уведомления
import toast from "react-hot-toast";
//

//graphql
import Request from '../../../js/fetch';
const { EditUserPromos } = require('../../../graphql/query');
//

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

export default function Actual({
    data,
    callback
}) {
    const { t } = useTranslation();

    const handleClick = async (promo) => {
        navigator.clipboard.writeText(promo.code)

        toast({title: t('Уведомление'), body: t('Вы будете перенаправлены на страницу ввода промокода через 2 секунды.'), time: t('Несколько секунд назад')});

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
            win?.focus();
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
            <h4>
                <b>{t('Актуальные промокоды')}:</b>
            </h4>
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