import React, { useEffect } from 'react';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { fetchPromoCodes, fetchUserPromoCodes } from '../../store/thunks/thunks';
//

//service
import CheckCodes from '../../service/CheckPromoCodes';
//

//components
import ActualPromo from './ActualPromo';
import UsedPromo from './UsedPromo';
import HistoryPromo from './HistoryPromo';

import { Preloader } from '../index';
//

export default function PromoCodes(){
    const dispatch = useDispatch();
    const promocodes = useSelector((state) => state.promocodes);
    const userPromocodes = useSelector((state) => state.userPromocodes);
    const server = useSelector((state) => state.server);

    useEffect(() => {
        dispatch(fetchPromoCodes(server));
        if(localStorage.getItem('token')){
            dispatch(fetchUserPromoCodes());
        }
    }, [dispatch, server]);

    const resultCodes = CheckCodes(promocodes, userPromocodes);
    console.log(resultCodes)

    if(promocodes.length === 0) {
        return(
            <Preloader fetch />
        )
    }

    return(
        <>
            <ActualPromo data={resultCodes.actualCodes} />
            <UsedPromo data={userPromocodes} />
            <HistoryPromo data={resultCodes.history} />
        </>
    );
}