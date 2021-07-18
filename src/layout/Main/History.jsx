import React, { useState } from 'react';

import InfiniteScroll from 'react-infinite-scroll-component';

// Locales
import { useTranslation } from 'react-i18next';
//

//Components
import Card from '../../components/Card/Card';
//

//Стиль
import { Button, Spinner } from 'react-bootstrap';
//


export default function History({ data }){
    const [ t ] = useTranslation();
    const [hasMore, setHasMore] = useState(false);
    const [items, setItems] = useState(data.slice(0, 20));

    const fetchMoreData = () => {
        if(items.length >= data.length){
            setHasMore(false);
            return;
        }
        
        setHasMore(true);
        setTimeout(() => {
            setHasMore(false);
            setItems(items.concat(data.slice(items.length, items.length + 20)));
        }, 1500);
    };

    return(
        <>
            <h4>{t('Истёкшие промокоды')}:</h4>
            <InfiniteScroll
                dataLength={items.length}
                hasMore={hasMore}
                loader={<div className="text-center"><Spinner animation="grow" variant="purple" /></div>}
                endMessage={<div className="text-center"><Button variant="purple" onClick={fetchMoreData}>{t('Загрузить еще?')}</Button></div>}
            >
                {items.map((promo, index) => (
                    <Card.Label key={promo._id}>
                        <Card.Body>
                            {promo.code}|{index}
                            <Card.Time expired={promo.expired}>
                                {t('Действовал до')}: &nbsp; 
                            </Card.Time>
                        </Card.Body>
                    </Card.Label>
                ))}
            </InfiniteScroll>
        </>
    );
}