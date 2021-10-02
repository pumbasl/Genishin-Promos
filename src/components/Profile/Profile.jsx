import React from 'react';

//router
import { Link } from 'react-router-dom';
//

//style
import { Button, ButtonGroup } from 'react-bootstrap';
//

export default function ProfileButtons(){
    if(!localStorage.getItem('token')){
        return(
            <ButtonGroup className="me-2">
                <Button as={Link} to="/auth/login" variant="dark-custom">
                    Авторизация
                </Button>
    
                <Button as={Link} to="/auth/reg" variant="dark-custom">
                    Создать профиль
                </Button>
            </ButtonGroup>
        );
    } else {
        return(
            <Button as={Link} to="/profile" className="me-2" variant="dark-custom">
                Профиль
            </Button>
        );
    }
}