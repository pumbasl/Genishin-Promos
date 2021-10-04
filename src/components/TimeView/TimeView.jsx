import React from 'react';
import { format } from 'date-fns';

export default function TimeSee({ children, time, customFormat }){
    if(!customFormat){
        const date = format(time, 'dd.MM.yyyy HH:mm')

        return(
            <>
                {children}
                {date}
            </>
        );
    } else {
        const date = format(time, customFormat)

        return(
            <>
                {children}
                {date}
            </>
        );
    }
}