import { Dropdown, Button, ButtonGroup, Image } from "react-bootstrap";

// Locales
import { useTranslation } from 'react-i18next';
//

//Pictures
import { Earth } from '../../media';
//

export default function LanguageButton(){
    const { i18n } = useTranslation();
    
    const changeLanguage = (lng, hrefLang) => {
        i18n.changeLanguage(lng);
        document.documentElement.lang = hrefLang;
        localStorage.setItem('i18nextLng', lng);
        localStorage.setItem('hrefLang', hrefLang);
    };

    document.documentElement.lang = localStorage.getItem('hrefLang') ? localStorage.getItem('hrefLang') : 'en';

    return(
        <Dropdown drop="start">
            <ButtonGroup className="h-100 me-2">
                <Button variant="purple">
                    <Image src={Earth} width="25px" height="100%" alt="languageLogo" />
                </Button>

                <Dropdown.Toggle variant="purple">
                    Language
                </Dropdown.Toggle>
            </ButtonGroup>
            <Dropdown.Menu>
                <Dropdown.Item as="button" onClick={() => changeLanguage('ru-RU', 'ru')}>Русский</Dropdown.Item>
                <Dropdown.Item as="button" onClick={() => changeLanguage('en-US', 'en')}>English</Dropdown.Item>
                <Dropdown.Item as="button" onClick={() => changeLanguage('de', 'de')}>Deutsch</Dropdown.Item>
                <Dropdown.Item as="button" onClick={() => changeLanguage('fr-FR', 'fr')}>Français</Dropdown.Item>
                <Dropdown.Item as="button" onClick={() => changeLanguage('ko', 'ko')}>한국어</Dropdown.Item>
                <Dropdown.Item as="button" onClick={() => changeLanguage('zh-TW', 'zh')}>中文（繁體）</Dropdown.Item>
                <Dropdown.Item as="button" onClick={() => changeLanguage('ja', 'ja')}>日本語</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}