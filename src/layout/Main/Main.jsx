import React from 'react';

//Компонент
import Container from '../../components/Container/Container';
//

//Стиль
import { PromoCard } from '../../style/style';
//

const Massiv = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function Main(){
    return(
        <Container>
            {Massiv.map((id) => (
                <PromoCard key={id} href="https://genshin.mihoyo.com/en/gift" target="_blank">
                    карточки
                </PromoCard>
            ))}
        </Container>
    );
}