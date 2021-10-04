import React, { useEffect } from 'react';

//components
import { Container, Preloader, TimeView } from '../../components';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Image, Badge } from 'react-bootstrap';
//

//media
import { News as NewsIcon } from '../../media';
//

//redux
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../../store/thunks/thunks';
//

//locales
import { useTranslation } from 'react-i18next';
//

export default function News(){
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const news = useSelector((state) => state.news);

    useEffect(() => {
        dispatch(fetchNews());
    }, [dispatch]);

    if(!news) {
        return(
            <Preloader fetch />
        );
    }

    return(
        <Container>
           <VerticalTimeline>
               {news.map((value) => (
                   <VerticalTimelineElement
                        key={value._id}
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'white', color: 'black' }}
                        date={<TimeView time={value.date} customFormat='dd.MM.yyyy'>{t('Дата')}: </TimeView>}
                        iconStyle={{ background: 'indianred', color: '#fff' }}
                        icon={<Image width="100%" height="100%" src={NewsIcon} />}
                    >
                        <h3 className="vertical-timeline-element-title">{value.title}</h3>
                        <h4 className="vertical-timeline-element-subtitle">{value.subtitle}</h4>
                        <p className="mb-3">
                            {value.text}
                        </p>
                        <Badge bg="info">Author: <span style={{color: 'black'}}>{value.author.login}</span></Badge>
                    </VerticalTimelineElement>
               ))}
            </VerticalTimeline>
        </Container>
    );
}