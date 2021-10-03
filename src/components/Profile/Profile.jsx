import React from 'react';

//router
import { Link } from 'react-router-dom';
//

//style
import { Button, ButtonGroup } from 'react-bootstrap';
//

//locales
import { useTranslation } from 'react-i18next';
//

//redux
import { useSelector } from 'react-redux';
//

export default function ProfileButtons(){
    const { t } = useTranslation();
    const token = useSelector((state) => state.token);
    if(!token){
        return(
            <ButtonGroup className="me-2">
                <Button as={Link} to="/auth/login" variant="dark-custom">
                    {t('Авторизация')}
                </Button>
    
                <Button as={Link} to="/auth/reg" variant="dark-custom">
                    {t('Создать профиль')}
                </Button>
            </ButtonGroup>
        );
    } else {
        return(
            <Button as={Link} to="/profile" className="me-2" variant="dark-custom">
                {t('Профиль')}
            </Button>
        );
    }
}