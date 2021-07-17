import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

// Locales
import { useTranslation } from 'react-i18next';
//

//Style
import { 
    Footer as FooterStyle,
    FooterContainer,
    FooterCardTitle,
    FooterCardBody,
    FooterCardElement
} from '../../style/style';

import './style.scss';
//

export default function Header(){
    const { t } = useTranslation();
    return(
        <FooterStyle>
            <Container>
                <FooterContainer>
                    <FooterCardTitle>
                        {t('Карта сайта')}:
                        <FooterCardBody>
                            <FooterCardElement href="#">
                                XML {t('карта')}
                            </FooterCardElement>
                        </FooterCardBody>
                    </FooterCardTitle>

                    <FooterCardTitle>
                        {t('О нас')}:
                        <FooterCardBody>
                            <Link to="/" className="custom-link">
                                {t('Главная')}
                            </Link>
                        </FooterCardBody>

                        <FooterCardBody>
                            <Link to="/help" className="custom-link">
                                {t('Помощь в проекте')}
                            </Link>
                        </FooterCardBody>
                    </FooterCardTitle>

                    <FooterCardTitle>
                        {t('Информация')}:
                        <FooterCardBody>
                            <Link to="/policy" className="custom-link">
                                {t('Условия использования')}
                            </Link>
                        </FooterCardBody>
                    </FooterCardTitle>

                    <FooterCardTitle>
                        {t('Контакты')}:
                        <FooterCardBody>
                            <FooterCardElement href="mailto: email@localhost">
                                Email: email@localhost
                            </FooterCardElement>
                        </FooterCardBody>
                    </FooterCardTitle>
                </FooterContainer>
            </Container>
        </FooterStyle>
    );
}