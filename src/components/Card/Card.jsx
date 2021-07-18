import React from 'react';
import { format } from 'date-fns';

//Style
import { Badge } from 'react-bootstrap';
import { PromoCardBlock, PromoExpired, PromoCard } from '../../style/style';
//


const Card = {

    Label: function Label(props){
        return(
            <PromoCard>
                {props.children}
            </PromoCard>
        );
    },

    Body: function Body(props){
        return(
            <PromoCardBlock onClick={props.onClick}>
                {props.children}
            </PromoCardBlock>
        );
    },

    Time: function Time(props){
        const date = format(props.expired, 'dd.MM.yyyy HH:MM')
        return(
            <PromoExpired>
                <Badge variant="purple">
                    {props.children}
                    {date}
                </Badge>
            </PromoExpired>
        );
    }
};

export default Card;