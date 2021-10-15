import React from 'react';

// Locales
import { useTranslation } from 'react-i18next';
//

//Components
import { Card } from '../index';
//

export default function Activated({ data }){
    const { t } = useTranslation();
    
    const renderPromocode = (promo) => {
        return(
            <Card.Label key={promo._id}>
                <Card.Body>
                    {promo.code}
                    <Card.Time expired={promo.expired}>
                        {t('Действует до')}: &nbsp; 
                    </Card.Time>
                </Card.Body>
            </Card.Label>
        );
    };

    const EmptyContainer = () => (
        <div className="mb-2">
            {t('Пусто.')}
        </div>
    );

    return(
        <>
            <h4>
                <b>{t('Активированные промокоды')}:</b>
            </h4>

            { data.length !== 0 ? (data.map(renderPromocode)) : (<EmptyContainer />) }
        </>
    );
}