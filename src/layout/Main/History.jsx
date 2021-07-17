import Moment from 'react-moment';

//Стиль
import { PromoCardBlock, PromoExpired, PromoCard, Title } from '../../style/style';
import { Badge } from 'react-bootstrap';
//


export default function History({ data }){
    return(
        <>
            <Title>
                <h4>Истёкшие промокоды:</h4>
            </Title>
            {data.map((promo) => (
                <PromoCard key={promo._id}>
                    <PromoCardBlock>
                        {promo.code}
                        <PromoExpired>
                            <Badge variant="purple">
                                Действовал до: &nbsp; 
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