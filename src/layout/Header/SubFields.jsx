import React, { useEffect, useState } from 'react';

//Style
import { Badge, Nav, Navbar, Spinner } from "react-bootstrap";
//

//Pictures
import MapLogo from '../../media/img/svgLogo/map.svg';
import WikiLogo from '../../media/img/svgLogo/wiki.svg';
import GenshinLogo from '../../media/img/svgLogo/g.svg';
import EventLogo from '../../media/img/svgLogo/confetti.svg';
//

// Locales
import { useTranslation } from 'react-i18next';
//

//graphql
import Request from '../../js/fetch';
const { getSubfields } = require('../../graphql/query');
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
                <img src={MapLogo} width="18px" className="mr-2 mb-1" alt="mapLogo" />
                {t('Интерактивная карта')}
            </Nav.Link>

            <Nav.Link
                className="custom-link"
                href="https://genshin-impact.fandom.com/wiki/Genshin_Impact_Wiki"
                target="_blank"
            >
                <img src={WikiLogo} width="18px" className="mr-2 mb-1" alt="wikiLogo" />
                {t('Вики')}
            </Nav.Link>

            <Nav.Link
                className="custom-link"
                href="https://genshin-helper.com/"
                target="_blank"
            >
                <img src={GenshinLogo} width="18px" className="mr-2 mb-1" alt="genshinLogo" />
                Genshin Helper
            </Nav.Link>
        </>
    );
};

export default function Subfields(){
    const [ isLogged, setIsLogged ] = useState(false);
    const [ error, setError ] = useState(false);
    const { t } = useTranslation();

    useEffect(() => {
        Request({
            query: getSubfields,
            variables: {}
        })
        .then(
            (result) => {
                setIsLogged(result.data.subfields);
            },

            (error) => {
                setError(error);
            }
        );
    }, [])

    if(!isLogged){
        return(<Spinner animation="grow" variant="purple" />);
    } else if(error){
        return(<>Error #2</>)
    } else {
        return(
            <Navbar.Collapse className="justify-content-center">
                
                <DefaultEvents />

                {isLogged.map((subfield) => (
                    <Nav.Link
                        key={subfield._id}
                        className="web-events"
                        href={subfield.link}
                        target="_blank"
                    >
                        <img src={EventLogo} width="18px" className="mr-2 mb-1" alt="eventLogo" />
                        <Badge variant="purple">{t('Веб событие')}</Badge> &nbsp;
                        {subfield.name}
                    </Nav.Link>
                ))}
            </Navbar.Collapse>
        );
    }
}