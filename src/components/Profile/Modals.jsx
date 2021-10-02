import React, { lazy, Suspense } from 'react';

import { Spinner } from 'react-bootstrap';

//REDUX
import Redux from '../../store/connect';
//-----

//modals
const SignUp = lazy(() => import('./modals/SignUp'));
const SignIn = lazy(() => import('./modals/SignIn'));
//

function Modals(props){
    const handleClose = props.close;
    if(props.data.modal.signin){
        return(
            <Suspense fallback={<Spinner animation="border" variant="purple" />}>
                <SignIn show={props.data.modal.signin} close={handleClose} />
            </Suspense>
        );
    }
    if(props.data.modal.signup){
        return(
            <Suspense fallback={<Spinner animation="border" variant="purple" />}>
                <SignUp show={props.data.modal.signup} close={handleClose} />
            </Suspense>
        );
    }
    return(null);
}

export default Redux.connect(Redux.mapStateToProps("DATA"), Redux.mapDispatchToProps("DATA"))(Modals);