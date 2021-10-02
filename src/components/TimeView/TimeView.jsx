import React from 'react';
import { format } from 'date-fns';

export default function TimeSee({ children, time }){
    const date = format(time, 'dd.MM.yyyy HH:mm')

    return(
        <>
            {children}
            {date}
        </>
    );
}