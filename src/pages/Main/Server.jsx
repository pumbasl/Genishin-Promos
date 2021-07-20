import React from 'react';

// Locales
import { useTranslation } from 'react-i18next';
//

//styles
import { SelectCustom } from '../../style/style';
//

//graphql
import Request from '../../js/fetch';
const { EditUserServer } = require('../../graphql/query');
//

export default function Server({ callback }){
    const { t } = useTranslation();
    const { server, setServer } = callback;
    const handleChange = (event) => {
        setServer(event.target.value);
        localStorage.setItem('server', event.target.value);
        Request({
            query: EditUserServer,
            variables: JSON.stringify({
                uuid: localStorage.getItem('uuid'),
                server: event.target.value
            })
        });
    };

    return(
        <label>
            {t('Сервер')}: &nbsp;
            <SelectCustom value={server} onChange={handleChange}>
                <option disabled>{t('Выберите свой сервер')}</option>
                <option value="Europe">Europe</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
            </SelectCustom>
        </label>
    );
}