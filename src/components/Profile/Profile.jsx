import React from 'react';

import { Link } from 'react-router-dom';

import { ButtonGroup, Button, Dropdown  } from 'react-bootstrap';

//MODALS
import Modals from './Modals';
//

//components
import Avatar from '../Avatar/Avatar';
//

//REDUX
import Redux from '../../store/connect';
//-----

//service
import AuthService from '../../service/AuthService';
//

function Profile(props){
    const handleClick = (id) => {
        let tempObj = Object.assign({}, props.data);
        if(id === 1){
            tempObj.modal.signin = true;
            props.change_data(tempObj);
        }
        if(id === 2){
            tempObj.modal.signup = true;
            props.change_data(tempObj);
        }
    };

    const handleClose = () => {
        let tempObj = Object.assign({}, props.data);
        tempObj.modal.signin = false;
        tempObj.modal.signup = false;
        props.change_data(tempObj);
    };

    const handleLogOut = async () => {
        let tempObj = Object.assign({}, props.data);
        tempObj.requestPromo = {};
        tempObj.token = null;
        tempObj.isLoaded = false;
        props.change_data(tempObj);

        await AuthService.LogOutByUser();

        window.location.href = '/';
    };

    if(localStorage.getItem('token')){
        return(
            <Dropdown>
                <ButtonGroup className="h-100">
                    <Button variant="purple">
                        <Avatar type="roundedCircle" width="30px" />
                    </Button>
                    <Dropdown.Toggle className="me-2" variant="purple" id="dropdown-basic">
                        Профиль
                    </Dropdown.Toggle>
                </ButtonGroup>

                <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/profile">Личный кабинет</Dropdown.Item>
                    <Dropdown.Item as={Link} to="/profile/settings">Настройки</Dropdown.Item>
                    <Dropdown.Item onClick={handleLogOut} >Выйти</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        );
    } else {
        return(
            <>
                <Modals close={handleClose} />
                <ButtonGroup className='me-2 profile' aria-label="Profile Buttons">
                    <Button className="text-light" variant="info" onClick={() => handleClick(1)}>Войти</Button>
                    <Button className="text-light" variant="info" onClick={() => handleClick(2)}>Создать</Button>
                </ButtonGroup>
            </>
        );
    }
}

export default Redux.connect(Redux.mapStateToProps("DATA"), Redux.mapDispatchToProps("DATA"))(Profile);