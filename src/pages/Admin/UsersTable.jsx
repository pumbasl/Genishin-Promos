import React, { useEffect } from 'react';

//components
import { Table, Button } from 'react-bootstrap';
//

//redux
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdminAllUsers } from '../../store/thunks/adminThunks';
//

// Locales
import { useTranslation } from 'react-i18next';
//

export default function UsersTable(){
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const users = useSelector((state) => state.admin.users);

    const handleClick = (user) => {
        console.log(user);
    };

    const tableRender = (user, index) => {
        return(
            <tr key={user._id}>
                <td>{++index}</td>
                <td>{user.login}</td>
                <td>{t(user.roles)}</td>
                <td className="text-center">
                    <Button size="sm" variant="dark-custom" onClick={() => handleClick(user)}>
                        Изменить
                    </Button>
                </td>
            </tr>
        );
    };

    useEffect(() => {
        dispatch(fetchAdminAllUsers());
    }, [dispatch]);

    return(
        <>
            <div className="text-center">Таблица пользователей</div>
            <Table responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Логин</th>
                        <th>Разрешение</th>
                        <th className="text-center">Действие</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(tableRender)}
                </tbody>
        </Table>
        </>
    );
}