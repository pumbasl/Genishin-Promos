import React from 'react';

import { Spinner } from 'react-bootstrap';

import { ProgressBar } from '../';

export default function Preloader({ fetch }){
    return(
        fetch ? (<Spinner animation="grow" variant="purple" />) : (<ProgressBar />)
    );
}