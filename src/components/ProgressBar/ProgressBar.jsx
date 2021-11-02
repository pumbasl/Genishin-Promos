import React, { useState, useEffect } from 'react';
import { Spinner, ProgressBar as Progress } from 'react-bootstrap';

//style
import { PreloaderCenter } from '../../style/style';
//

//redux
import { useSelector } from 'react-redux';
//

export default function ProgressBar(){
    const loading = useSelector((state) => state.user.Loading);
    const [currentCount, setCount] = useState(0);
    const [ info, setInfo ] = useState('');
    const timer = () => setCount(currentCount + 5);

    useEffect(() => {
        if (currentCount >= 100) {
            setInfo('Возникли трудности с получением данных, пожалуйста подождите.');
            return;
        }
        const id = setInterval(timer, 100);
        return () => clearInterval(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentCount]);

    if(!loading) return null;

    return(
        <PreloaderCenter>
            <div>
                <Spinner animation="grow" variant="purple" />
            </div>
            <div style={{width: "250px"}}>
                <Progress animated now={currentCount} />
                Загрузка...
            </div>
            <div>
                {info}
            </div>
        </PreloaderCenter>
    );
}