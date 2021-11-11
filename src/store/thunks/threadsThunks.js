import Fetch from '../../fetch/fetch';
import ErrorCatch from '../../js/ErrorCatcher';

import {
    setThreads,
    setThread
} from '../actions/threadsActions';

import {
    allThreads,
    getThreadById
} from '../../graphql';

export function fetchThread(id){
    return async (dispatch) => {
        await Fetch({
            query: getThreadById,
            variables: JSON.stringify({ id })
        }, 'api')
        .then(
            (response) => {
                dispatch(setThread(response?.getThreadById));
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