import React from 'react';

//components
import { TimeView } from '../index';
//

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
        return(
            <PromoExpired>
                <Badge bg="purple">
                    <TimeView time={props.expired}>
                        {props.children}
                    </TimeView>
                </Badge>
            </PromoExpired>
        );
    }
};

export default Card;