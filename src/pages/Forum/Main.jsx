import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

import { Badge, Button } from 'react-bootstrap';
import { Container, Pagination, TimeView, Preloader } from '../../components';
import { CardThread } from '../../style/style';

import { useDispatch, useSelector } from 'react-redux';
import { fetchThreads } from '../../store/thunks/threadsThunks';
import { fetchUserInfo } from '../../store/thunks/userThunks';

export default function MainForum(props){
    const [ items, setItems ] = useState([]);
    const threads = useSelector((state) => state.threads.threads);
    const data = useSelector((state) => state.user.userinfo);
    const history = useHistory();
    const dispatch = useDispatch();

    const handleClick = (id, event) => {
        event.preventDefault();
        history.push(`/forum/thread/${id}`);
    };

    const CreateThreadButton = () => {
        if(data?.roles.includes('Admin')) return (
            <div className="text-end">
                <Button
                    className="mb-2"
                    variant='dark-custom'
                    onClick={() => history.push('/forum/create')}
                >
                    Создать статью
                </Button>
            </div>
        );

        return null;
    };

    const Threads = (thread) => {
        return(
            <CardThread
                key={thread._id}
                href={`/forum/thread/${thread._id}`}
                onClick={(event) => handleClick(thread._id, event)}
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
        dispatch(fetchUserInfo());
    }, [dispatch]);

    if(!threads) return (
        <Container>
            <Preloader />
        </Container>
    );

    if(threads?.length < 1) return (
        <Container>
            Empty
        </Container>
    );

    return(
        <Container>
            <CreateThreadButton />

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