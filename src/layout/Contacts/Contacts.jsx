//Компоненты
import Container from "../../components/Container/Container";
//

//логотипы
import VKLogo from '../../media/img/contactsLogos/logo-vk.svg';
import TELEGRAMLogo from '../../media/img/contactsLogos/logo-telegram.svg';
import MAILLogo from '../../media/img/contactsLogos/mail-ios.svg';
//

//Style
import './style.scss';
//

export default function Contacts(){
    return(
        <Container>
            <h2>Контакты:</h2>
            <a href="https://vk.com/niklauswiberg">
                <img src={VKLogo} width="30px" alt="vklogo" />
            </a>
            <a href="https://t.me/deniswiberg">
                <img src={TELEGRAMLogo} width="30px" alt="tglogo" />
            </a>
            <a href="malito: localhost@mail.ru">
                <img src={MAILLogo} width="30px" alt="maillogo" />
            </a>
        </Container>
    );
}