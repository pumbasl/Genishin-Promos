import React from 'react';

import { Spinner } from 'react-bootstrap';

//components
import { Background } from '../../style/style';
//

export default function Preloader(){
    return(
        <>
            <Background />
            <Spinner animation="grow" variant="purple" />
        </>
    );
}