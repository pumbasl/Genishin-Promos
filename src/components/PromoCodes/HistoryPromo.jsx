import React, { useState } from 'react';

// Locales
import { useTranslation } from 'react-i18next';
//

//Components
import { Card } from '../index';
//

//Стиль
import { Button, Spinner } from 'react-bootstrap';
//

export default function History({ data }){
    const [ t ] = useTranslation();
    const [preLoader, setPreLoader] = useState(false);
    const [endMessage, setEndMessage] = useState(false);
    const [items, setItems] = useState(data.slice(0, 20));

    if(data[0] !== items[0]){
        setItems(data.slice(0, 20));
        setEndMessage(false);
    }

    const fetchMoreData = () => {
        if(items.length >= data.length){
            setEndMessage(true);
            return;
        }
        
        setPreLoader(true);
        
        (function (){
            setItems(items.concat(data.slice(items.length, items.length + 20)));
            setPreLoader(false);
        }());
    };

    const renderPromocode = (promo) => {
        return(
            <Card.Label key={promo._id}>
                <Card.Body>
                    {promo.code}
                    <Card.Time expired={promo.expired}>
                        {t('Действовал до')}: &nbsp; 
                    </Card.Time>
                </Card.Body>
            </Card.Label>
        );
    };

    return(
        <>
            <h4>
                <b>{t('Истёкшие промокоды')}:</b>
            </h4>
            {items.map((renderPromocode))}
            {
                preLoader 
                ? (<div className="text-center">
                        <Spinner animation="grow" variant="purple" />
                    </div>)
                : ( endMessage 
                    ? (null)
                    : (<div className="text-center">
                            <Button variant="purple" onClick={fetchMoreData}>
                                {t('Загрузить еще?')}
                            </Button>
                        </div>))
            }
        </>
    );
}