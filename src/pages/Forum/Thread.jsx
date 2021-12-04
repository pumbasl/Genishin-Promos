import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import { Container, Preloader } from '../../components';
import { ThreadContainer } from '../../style/style';
import Interweave from 'interweave';

import { useDispatch, useSelector } from 'react-redux';
import { fetchThread } from '../../store/thunks/threadsThunks';

export default function Thread({ match }){
    const dispatch = useDispatch();
    const thread = useSelector((state) => state.threads.thread);
    const idThread = match.params.idThread || false;

    useEffect(() => {
        dispatch(fetchThread(idThread));
    }, [dispatch, idThread]);

    if(!thread){
        if(thread === undefined) return (<Redirect to="/forum/unknown" />);

        return(
            <Container>
                <Preloader />
            </Container>
        );
    } 

    return(
        <Container>
            <ThreadContainer>
                <div className="title">
                    <h1>
                        {thread?.title}
                    </h1>
                </div>
                
                <hr />

                <div>
                    <Interweave content={thread?.content} />
                </div>
            </ThreadContainer>
        </Container>
    );
}