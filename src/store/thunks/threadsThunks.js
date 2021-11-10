import Fetch from '../../fetch/fetch';
import ErrorCatch from '../../js/ErrorCatcher';

import {
    setThreads
} from '../actions/threadsActions';

import {
    allThreads
} from '../../graphql';

export function fetchThread(id){
    return async (dispatch) => {
        await Fetch({
            query: allThreads, //в беке нужно сделать запрос, что бы вытащить инфу об одной теме по ид
            variables: JSON.stringify({ id })
        }, 'api')
        .then(
            (response) => {
                console.log(response);
            },
            (error) => {
                ErrorCatch(error, dispatch);
            }
        );
    };
}

export function fetchThreads(){
    return async (dispatch) => {
        await Fetch({
            query: allThreads,
            variables: {}
        }, 'api')
        .then(
            (response) => {
                dispatch(setThreads(response?.threads.reverse()));
            },
            (error) => {
                ErrorCatch(error, dispatch);
            }
        )
    };
}