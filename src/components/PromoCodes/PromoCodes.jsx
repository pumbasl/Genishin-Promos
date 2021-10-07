import React, { useEffect, useState } from 'react';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { fetchPromoCodes, fetchUserPromoCodes } from '../../store/thunks/userThunks';
//

//service
import CheckCodes from '../../service/CheckPromoCodes';
//

//components
import ActualPromo from './ActualPromo';
import UsedPromo from './UsedPromo';
import HistoryPromo from './HistoryPromo';
import Server from './Server';
import { Preloader } from '../index';
//

export default function PromoCodes(){
    const dispatch = useDispatch();
    const promocodes = useSelector((state) => state.user.promocodes);
    const userPromocodes = useSelector((state) => state.user.userPromocodes);
    const server = useSelector((state) => state.user.server);
    const [ isLoading, setIsLoading ] = useState(false);

    useEffect(() => {
        dispatch(fetchPromoCodes(server));
        if(localStorage.getItem('token')){
            dispatch(fetchUserPromoCodes());
        }

        setIsLoading(true);
    }, [dispatch, server]);

    const resultCodes = CheckCodes(promocodes, userPromocodes);

    if(!isLoading) {
        return(
            <Preloader fetch />
        )
    }

    return(
        <>
            <Server />
            <ActualPromo data={resultCodes.actualCodes} />
            <UsedPromo data={userPromocodes} />
            <HistoryPromo data={resultCodes.history} />
        </>
    );
}