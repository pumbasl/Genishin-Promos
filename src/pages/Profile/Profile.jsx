import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

//components
import { Container, Avatar, TableWithInfo, Preloader } from '../../components';
import { Row, Col } from 'react-bootstrap';
//


//redux
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserInfo } from '../../store/thunks/thunks';
//


export default function Profile(){
    const history = useHistory();
    const dispatch = useDispatch();
    const token = useSelector((state) => state.token);
    const data = useSelector((state) => state.userinfo);
    document.title = 'Genshin Promo | Profile';

    useEffect(() => {
        dispatch(fetchUserInfo());
    }, [dispatch]);

    if(!token){
        history.push('/');
    }

    if(!data){
        return(
            <Container>
                <Preloader fetch />
            </Container>
        );
    }

    return(
        <Container>
            <Row>
                <Col className="text-center">
                    <Avatar type="rounded"/>
                </Col>
                <Col>
                    <TableWithInfo data={data} />  
                </Col>
            </Row>
        </Container>
    );
}