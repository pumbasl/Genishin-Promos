import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

// Locales
import { useTranslation } from 'react-i18next';
//

//логотипы
import VKLogo from '../../media/img/contactsLogos/logo-vk.svg';
import TELEGRAMLogo from '../../media/img/contactsLogos/logo-telegram.svg';
import MAILLogo from '../../media/img/contactsLogos/mail-ios.svg';
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
                            <a href="https://vk.com/niklauswiberg" className="custom-contact">
                                    <img src={VKLogo} width="30px" alt="vklogo" />
                            </a>
                            <a href="https://t.me/deniswiberg" className="custom-contact">
                                <img src={TELEGRAMLogo} width="30px" alt="tglogo" />
                            </a>
                            <a href="malito: localhost@mail.ru" className="custom-contact">
                                <img src={MAILLogo} width="30px" alt="maillogo" />
                            </a>
                        </FooterCardBody>
                    </FooterCardTitle>
                </FooterContainer>
            </Container>
        </FooterStyle>
    );
}