import Moment from 'react-moment';

//Стиль
import { PromoCardBlock, PromoExpired, PromoCard, Title } from '../../style/style';
import { Badge } from 'react-bootstrap';
//


export default function Activated({ data }){
    return(
        <>
            <Title>
                <h4>Активированые промокоды:</h4>
            </Title>
            {data.map((promo) => (
                <PromoCard key={promo._id}>
                    <PromoCardBlock>
                        {promo.code}
                        <PromoExpired>
                            <Badge variant="purple">
                                Действует до: &nbsp; 
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