import React from 'react';
import { Container } from 'react-bootstrap';

//Style
import { 
    Footer as FooterStyle,
    FooterContainer,
    FooterCardTitle,
    FooterCardBody
} from '../../style/style';
//

export default function Header(){
    return(
        <FooterStyle>
            <Container>
                <FooterContainer>
                    <FooterCardTitle>
                        Карта сайта
                        <FooterCardBody>
                            XML карта
                        </FooterCardBody>
                    </FooterCardTitle>

                    <FooterCardTitle>
                        О нас
                        <FooterCardBody>
                            Главная
                        </FooterCardBody>

                        <FooterCardBody>
                            Помощь в проекте
                        </FooterCardBody>
                    </FooterCardTitle>

                    <FooterCardTitle>
                        Информация
                        <FooterCardBody>
                            Условия использования
                        </FooterCardBody>
                    </FooterCardTitle>

                    <FooterCardTitle>
                        Контакты
                        <FooterCardBody>
                            Email: email@localhost
                        </FooterCardBody>
                    </FooterCardTitle>
                </FooterContainer>
            </Container>
        </FooterStyle>
    );
}