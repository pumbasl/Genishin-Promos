import React, { useEffect, useState } from 'react';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { fetchPromoCodes, fetchUserPromoCodes } from '../../store/thunks/userThunks';
//

//service
import CheckCodes from '../../service/CheckPromoCodes';
//

//error
import ErrorBoundary from '../../errors/ErrorBoundary';
//

//components
import ActualPromo from './ActualPromo';
import UsedPromo from './UsedPromo';
import HistoryPromo from './HistoryPromo';
import { Preloader } from '../index';
//

function PromoCodes(){
    const dispatch = useDispatch();
    const promocodes = useSelector((state) => state.user.promocodes);
    const userPromocodes = useSelector((state) => state.user.userPromocodes);
    const server = useSelector((state) => state.user.server);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ resultCodes, setResultCodes ] = useState({});

    useEffect(() => { // начало загрузки данных
        dispatch(fetchPromoCodes(server));
        if(localStorage.getItem('token')){
            dispatch(fetchUserPromoCodes());
        }

    }, [dispatch, server]);

    useEffect(() => { // проверка на загрузку данных
        if(promocodes.length && userPromocodes.length){
            setIsLoading(true);
            setResultCodes(CheckCodes(promocodes, userPromocodes));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [promocodes.length, userPromocodes.length]);

    if(!isLoading) {
        return(
            <Preloader />
        )
    }

    return(
        <ErrorBoundary>
            <ActualPromo data={resultCodes.actualCodes} />
            <UsedPromo data={userPromocodes} />
            <HistoryPromo data={resultCodes.history.reverse()} />
        </ErrorBoundary>
    );
}

export default PromoCodes;