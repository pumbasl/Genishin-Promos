import React from 'react';

import { Container } from 'react-bootstrap';

//Style
import { Main as MainStyle, Papper } from '../../style/style';
//

export default function ContainerComp(props){
    return(
        <MainStyle>
            <Container>
                <Papper>
                    {props.children}
                </Papper>
            </Container>
        </MainStyle>
    );
}