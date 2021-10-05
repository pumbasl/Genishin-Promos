import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap';

//componentns
import { TimeView } from '..';
//

//locales
import { useTranslation } from 'react-i18next';
//

export default function TableWithInfo({ data }){
    const { t } = useTranslation();
    const roles = arrayRole => 
        arrayRole.map((role, index) => (
            <b key={index}>
                {t(role)}, &nbsp;
            </b>
        ));

    return(
        <>
            <Table>
                <tbody>
                    <tr>
                        <td>{t('Логин')}: </td>
                        <td>{data.login}</td>
                    </tr>
                    <tr>
                        <td>{t('Игровой ник')}: </td>
                        <td>{data?.gameInfo?.gameNickName}</td>
                    </tr>
                    <tr>
                        <td>{t('Ранг приключений')}:  </td>
                        <td>{data?.gameInfo?.adventureLvl}</td>
                    </tr>
                    <tr>
                        <td>{t('Ваш мейн персонаж')}: </td>
                        <td>{data?.gameInfo?.mainChar}</td>
                    </tr>
                    <tr>
                        <td>{t('Статус')}: </td>
                        <td>{roles(data.roles)}</td>
                    </tr>
                    <tr>
                        <td>{t('Дата регистрации')}: </td>
                        <td>
                            <TimeView time={data.reg} />
                        </td>
                    </tr>
                </tbody>
            </Table>
            <div className="text-center">
                <Button as={Link} to="/profile/settings" variant="dark-custom">
                    {t('Изменить данные')}
                </Button>
            </div>
        </>
    );
}