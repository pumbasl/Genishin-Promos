import React from 'react';

// Locales
import { useTranslation } from 'react-i18next';
//

//Components
import Card from '../../../components/Card/Card';
//


export default function Activated({ data }){
    const { t } = useTranslation();
    return(
        <>
            <h4>
                <b>{t('Активированные промокоды')}:</b>
            </h4>
            {data.map((promo) => (
                <Card.Label key={promo._id}>
                    <Card.Body>
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