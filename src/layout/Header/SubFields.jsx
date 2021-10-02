import React, { useEffect } from 'react';

//Style
import { Badge, Nav, Navbar, Spinner } from "react-bootstrap";
//

//Pictures
import { MapLogo, WikiLogo, GenshinLogo, EventLogo } from '../../media';
//

// Locales
import { useTranslation } from 'react-i18next';
//


//redux
import { useDispatch, useSelector } from 'react-redux';
import { fetchSubfields } from '../../store/thunks/thunks';
//

const DefaultEvents = () => {
    const { t } = useTranslation();
    return(
        <>
            <Nav.Link
                className="custom-link"
                href="https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html"
                target="_blank"
            >
                <img src={MapLogo} width="18px" height="100%" className="me-2 mb-1" alt="mapLogo" />
                {t('Интерактивная карта')}
            </Nav.Link>

            <Nav.Link
                className="custom-link"
                href="https://genshin-impact.fandom.com/wiki/Genshin_Impact_Wiki"
                target="_blank"
            >
                <img src={WikiLogo} width="18px" height="100%" className="me-2 mb-1" alt="wikiLogo" />
                {t('Вики')}
            </Nav.Link>

            <Nav.Link
                className="custom-link"
                href="https://genshin-helper.com/"
                target="_blank"
            >
                <img src={GenshinLogo} width="18px" height="100%" className="me-2 mb-1" alt="genshinLogo" />
                Genshin Helper
            </Nav.Link>
        </>
    );
};

export default function Subfields(){
    const dispatch = useDispatch();
    const subfields = useSelector((state) => state.subfields);

    const { t } = useTranslation();

    useEffect(() => {
        dispatch(fetchSubfields());
    }, []);

    if(!subfields){
        return(<Spinner animation="grow" variant="purple" />);
    } else {
        return(
            <Navbar.Collapse className="justify-content-center">
                
                <DefaultEvents />

                {subfields.map((subfield) => (
                    <Nav.Link
                        key={subfield._id}
                        className="web-events"
                        href={subfield.link}
                        target="_blank"
                    >
                        <img src={EventLogo} width="18px" className="me-2" alt="eventLogo" />
                        <Badge variant="purple">{t('Веб событие')}</Badge> &nbsp;
                        {subfield.name}
                    </Nav.Link>
                ))}
            </Navbar.Collapse>
        );
    }
}