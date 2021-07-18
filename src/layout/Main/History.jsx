import React, { useState } from 'react';
import Moment from 'react-moment';

import InfiniteScroll from 'react-infinite-scroll-component';

// Locales
import { useTranslation } from 'react-i18next';
//

//Стиль
import { PromoCardBlock, PromoExpired, PromoCard } from '../../style/style';
import { Badge, Button, Spinner } from 'react-bootstrap';
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
                    <PromoCard key={promo._id}>
                        <PromoCardBlock>
                            {promo.code}|{index}
                            <PromoExpired>
                                <Badge variant="purple">
                                    {t('Действовал до')}: &nbsp; 
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
            </InfiniteScroll>
        </>
    );
}