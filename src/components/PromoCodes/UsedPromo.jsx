import React from 'react';

// Locales
import { useTranslation } from 'react-i18next';
//

//Components
import { Card, EmptyContainer } from '../index';
//

function Activated({ data }){
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

    return(
        <>
            <h4>
                <b>{t('Активированные промокоды')}:</b>
            </h4>

            { data.length !== 0 ? (data.slice(0, 5).map(renderPromocode)) : (<EmptyContainer />) }
        </>
    );
}

export default React.memo(Activated);