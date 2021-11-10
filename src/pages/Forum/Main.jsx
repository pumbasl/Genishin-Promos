import React, { useState } from 'react';
import { useHistory } from 'react-router';

import { Badge } from 'react-bootstrap';
import { Container, Pagination } from '../../components';
import { CardThread } from '../../style/style';

const massive = [];

export default function MainForum(props){
    const [ items, setItems ] = useState([]);
    const history = useHistory();

    const handleClick = (id) => {
        console.log(`/forum/thread/${id}`);
        history.push(`/forum/thread/${id}`);
    };

    const Threads = (thread) => {
        return(
            <CardThread
                className="clearfix"
                key={thread.id}
                onClick={() => {handleClick(thread.id)}}
            >
               {thread.title}

                <div className="information">
                    <Badge bg='dark-custom'>
                        Автор: <span className="authorName">{thread.author}</span>
                    </Badge>
                </div>
            </CardThread>
        );
    };

    if(massive.length < 1) return (
        <Container>
            Empty
        </Container>
    );

    return(
        <Container>
            {items.map((Threads))}

            <Pagination
                items={massive}
                setPageItems={setItems}
                itemsPerPage={4}
                activePage={props.match.params.page}
            />
        </Container>
    );
}