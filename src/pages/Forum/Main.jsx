import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

import { Badge } from 'react-bootstrap';
import { Container, Pagination, TimeView } from '../../components';
import { CardThread } from '../../style/style';

import { useDispatch, useSelector } from 'react-redux';
import { fetchThreads } from '../../store/thunks/threadsThunks';

export default function MainForum(props){
    const [ items, setItems ] = useState([]);
    const threads = useSelector((state) => state.threads.threads);
    const history = useHistory();
    const dispatch = useDispatch();

    const handleClick = (id) => {
        history.push(`/forum/thread/${id}`);
    };

    const Threads = (thread) => {
        return(
            <CardThread
                key={thread._id}
                href={`/forum/thread/${thread._id}`}
                onClick={() => {handleClick(thread._id)}}
            >
                <div className="title">
                    {thread.title}

                    <div className="subTitle">
                        Дата создания:&nbsp;
                        <TimeView
                            time={thread.createdAt}
                            customFormat="dd.MM.yyyy"
                        />
                    </div>
                </div>

                <div className="information">
                    <Badge bg='dark-custom'>
                        Автор: <span className="authorName">{thread.author.login}</span>
                    </Badge>
                </div>
            </CardThread>
        );
    };

    useEffect(() => {
        dispatch(fetchThreads());
    }, [dispatch]);

    if(threads.length < 1) return (
        <Container>
            Empty
        </Container>
    );

    return(
        <Container>
            {items.map((Threads))}

            <hr />

            <Pagination
                items={threads}
                setPageItems={setItems}
                itemsPerPage={10}
                activePage={props.match.params.page}
            />
        </Container>
    );
}