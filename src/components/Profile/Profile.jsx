import React from 'react';

//router
import { Link } from 'react-router-dom';
//

//style
import { Button, ButtonGroup, DropdownButton, Dropdown } from 'react-bootstrap';
//

//locales
import { useTranslation } from 'react-i18next';
//

//redux
import { useDispatch, useSelector } from 'react-redux';
import { fetchLogout } from '../../store/thunks/thunks';
//

export default function ProfileButtons(){
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const token = useSelector((state) => state.token);

    const handleLogout = () => {
        dispatch(fetchLogout());
    };

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
            <DropdownButton id="dropdown-basic-button" title={t('Профиль')} className="me-2" variant="dark-custom">
                <Dropdown.Item as={Link} to="/profile">{t('Личный кабинет')}</Dropdown.Item>
                <Dropdown.Item as={Link} to="/profile/settings">{t('Настройки')}</Dropdown.Item>
                <Dropdown.Item onClick={handleLogout}>{t('Выйти')}</Dropdown.Item>
            </DropdownButton>
        );
    }
}