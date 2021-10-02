import React from 'react';

// Locales
import { useTranslation } from 'react-i18next';
//

//redux
import { useDispatch, useSelector } from 'react-redux';
import { fetchChangeServer } from '../../store/thunks/thunks';
import { setServer } from '../../store/actions/actions';
//

//styles
import { SelectCustom } from '../../style/style';
//

export default function Server(){
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const server = useSelector((state) => state.server);

    const handleChange = async (event) => {
        localStorage.setItem('server', event.target.value);
        if(localStorage.getItem('token')){
            dispatch(fetchChangeServer(event.target.value))
        } else {
            dispatch(setServer(event.target.value));
        }
        // await UserService.ChangeServer(event.target.value);
    };

    return(
        <label>
            <b>{t('Сервер')}: &nbsp;</b>
            <SelectCustom value={server} onChange={handleChange}>
                <option disabled>{t('Выберите свой сервер')}</option>
                <option value="Europe">Europe</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
            </SelectCustom>
        </label>
    );
}