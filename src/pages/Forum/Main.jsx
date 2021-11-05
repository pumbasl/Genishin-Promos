import React from 'react';
import { useHistory } from 'react-router';

import { Container } from '../../components';
import { CardThread } from '../../style/style';

const massive = [
    {
        id: 1,
        title: 'Forward Optimization Manager',
        author: 'Fino',
        checks: 74,
        messages: 8,
        likes: 87
    },

    {
        id: 2,
        title: 'Dynamic Communications Analyst',
        author: 'Devante',
        checks: 74,
        messages: 8,
        likes: 174
    }
];

export default function MainForum(){
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
                    Автор: {thread.author}
                    Лайки: {thread.likes}
                </div>
            </CardThread>
        );
    };

    return(
        <Container>
            {massive.map((Threads))}
        </Container>
    );
}