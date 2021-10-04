import React from 'react';
import { useHistory } from 'react-router-dom';

//components
import { Container, Avatar, TableWithInfo } from '../../components';
import { Row, Col } from 'react-bootstrap';
//


//redux
import { useSelector } from 'react-redux';
//


export default function Profile(){
    const history = useHistory();
    const token = useSelector((state) => state.token);
    document.title = 'Genshin Promo | Profile';

    if(!token){
        history.push('/');
    }

    return(
        <Container>
            <Row>
                <Col className="text-center">
                    <Avatar type="rounded"/>
                </Col>
                <Col>
                    <TableWithInfo />  
                </Col>
            </Row>
        </Container>
    );
}