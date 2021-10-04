import React from 'react';

// Locales
import { useTranslation } from 'react-i18next';
//

//notify
import { toast } from 'react-hot-toast';
//

//Components
import { Card } from '../index';
//

//redux
import { useDispatch, useSelector } from 'react-redux';
import { fetchClickPromo } from '../../store/thunks/thunks';
//

import sleep from '../../js/sleep';

export default function ActualPromo({ data }){
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const userPromos = useSelector((state) => state.userPromocodes);

    const handleClick = async (promo) => {
        navigator.clipboard.writeText(promo.code)

        if(localStorage.getItem('token')){
            toast({title: t('Уведомление'), body: t('Вы будете перенаправлены на страницу ввода промокода через 2 секунды.'), time: t('Несколько секунд назад')}); //уведомление

            let tempArray = [];

            userPromos.forEach((promoOld) => {
                tempArray.push(promoOld._id);
            })

            tempArray.push(promo._id);
            dispatch(fetchClickPromo(tempArray));

            await sleep(2000);
            
            try {
                const win = window.open('https://genshin.mihoyo.com/en/gift', '_blank');
                win?.focus();
            } catch (e) {
                throw new Error(e);
            }
        } else {
            toast({title: t('Уведомление'), body: t('Для сохранения промокодов Вам нужно авторизоваться или зарегистрировать свой аккаунт. Через две секунды Вас перенаправит на ввод промокода.'), time: t('Несколько секунд назад')}); //уведомление

            await sleep(2000);
            
            try {
                const win = window.open('https://genshin.mihoyo.com/en/gift', '_blank');
                win?.focus();
            } catch (e) {
                throw new Error(e);
            }
        }
    };

    if(data.length === 0){
        return (
           <>
                <h4>
                    <b>{t('Актуальные промокоды')}:</b>
                </h4>

                <div className="mb-2">
                    {t('Пока что пусто)')}
                </div>
           </>
        );
    }

    return(
        <>
            <h4>
                <b>{t('Актуальные промокоды')}:</b>
            </h4>

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