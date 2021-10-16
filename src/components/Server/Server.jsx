import React from 'react';

// Locales
import { useTranslation } from 'react-i18next';
//

//redux
import { useDispatch, useSelector } from 'react-redux';
import { fetchChangeServer } from '../../store/thunks/userThunks';
import { setServer } from '../../store/actions/userActions';
//

//styles
import { Form, FloatingLabel, Dropdown } from 'react-bootstrap';
import { ButtonChangeServerStyle } from '../../style/style';
//

export default function Server(){
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const server = useSelector((state) => state.user.server);

    const handleChange = async (event) => {
        localStorage.setItem('server', event.target.value);
        if(localStorage.getItem('token')){
            dispatch(fetchChangeServer(event.target.value))
        } else {
            dispatch(setServer(event.target.value));
        }
    };

    const ChangeServer = () => (
        <div>
            <FloatingLabel controlId="floatingSelect" label={t('Изменить сервер')}>
                <Form.Select value={server} onChange={handleChange}>
                    <option value="Europe">Europe</option>
                    <option value="America">America</option>
                    <option value="Asia">Asia</option>
                </Form.Select>
            </FloatingLabel>
        </div>
    );
    
    return(
        <ButtonChangeServerStyle>
            <Dropdown>
                <Dropdown.Toggle variant="dark-custom" id="dropdown-server">
                    {t('Сервер?')}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <ChangeServer />
                </Dropdown.Menu>
            </Dropdown>
        </ButtonChangeServerStyle>
    );
}