import React from 'react';

//components
import { ButtonGroup, Button } from 'react-bootstrap';
//

export default function ActionButtons(){
    return(
        <div className="text-center">
            <ButtonGroup>
                <Button variant="dark-custom">
                    Добавить новость
                </Button>

                <Button variant="dark-custom">
                    Добавить промокод
                </Button>
            </ButtonGroup>
        </div>
    );
}