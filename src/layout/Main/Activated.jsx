import React from 'react';
import Moment from 'react-moment';

// Locales
import { useTranslation } from 'react-i18next';
//

//Стиль
import { PromoCardBlock, PromoExpired, PromoCard } from '../../style/style';
import { Badge } from 'react-bootstrap';
//


export default function Activated({ data }){
    const { t } = useTranslation();
    return(
        <>
            <h4>{t('Активированые промокоды')}:</h4>
            {data.map((promo) => (
                <PromoCard key={promo._id}>
                    <PromoCardBlock>
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
        </>
    );
}