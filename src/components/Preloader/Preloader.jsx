import React from 'react';

import { Spinner } from 'react-bootstrap';

//components
import { Background } from '../index';
//

export default function Preloader({ fetch }){
    if(!fetch){
        return(
            <>
                <Background />
                <Spinner animation="grow" variant="purple" />
            </>
        );
    }

    return(
        <Spinner animation="grow" variant="purple" />
    );
}