import React from 'react';

//components
import { Container, PromoCodes } from '../../components';
//

export default function Main(){
    document.title = 'Genshin Promo | Main';
    
    return(
        <Container>
            <PromoCodes />
        </Container>
    );
}