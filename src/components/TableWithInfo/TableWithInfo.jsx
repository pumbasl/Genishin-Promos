import React from 'react';
import { Table } from 'react-bootstrap';

export default function TableWithInfo(){
    return(
        <Table>
            <tbody>
                <tr>
                    <td>Имя: </td>
                    <td>ПУШКИН</td>
                </tr>
                <tr>
                    <td>Логин: </td>
                    <td>ПУШКИН</td>
                </tr>
                <tr>
                    <td>Игровой ник: </td>
                    <td>ПУШКИН</td>
                </tr>
                <tr>
                    <td>Ранг приключений:  </td>
                    <td>ПУШКИН</td>
                </tr>
                <tr>
                    <td>Ваш мейн персонаж: </td>
                    <td>ПУШКИН</td>
                </tr>
                <tr>
                    <td>Дата последнего входа: </td>
                    <td>ПУШКИН</td>
                </tr>
                <tr>
                    <td>Дата регистрации: </td>
                    <td>
                        ПУШКИН
                    </td>
                </tr>
            </tbody>
        </Table>
    );
}