import React from 'react';

//components
import { Button } from 'react-bootstrap';
//

export default function ActionButtons(){
    return(
        <div className="text-center">
            <Button variant="dark-custom me-2">
                Добавить новость
            </Button>

            <Button variant="dark-custom">
                Добавить промокод
            </Button>
        </div>
    );
}