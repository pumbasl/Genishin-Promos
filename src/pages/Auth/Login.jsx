import React from 'react';

//components
import { Form, InputGroup, Image, Button } from 'react-bootstrap';
import { ContainerForForm } from '../../style/style';
//

//icons
import { LoginIcon, PasswordIcon } from '../../media';
import { Link } from 'react-router-dom';
//

export default function Registration(){
    return(
        <ContainerForForm>
            <Form>
                <Form.Group className="mb-3" controlId="loginForm">
                    <Form.Label>
                        Логин: 
                    </Form.Label>

                    <InputGroup>
                        <InputGroup.Text>
                            <Image src={LoginIcon} width="100%" height="100%" />
                        </InputGroup.Text>
                        <Form.Control type="text" placeholder="Логин *" />
                    </InputGroup>
                </Form.Group>

                <Form.Group>
                    <Form.Label>
                        Пароль: 
                    </Form.Label>

                    <InputGroup>
                        <InputGroup.Text>
                            <Image src={PasswordIcon} width="100%" height="100%" />
                        </InputGroup.Text>
                        <Form.Control type="password" placeholder="Пароль *" />
                    </InputGroup>

                    <Form.Text className="text-light">
                        <Link to="/auth/restore_password" className="custom-link">Забыли пароль?</Link>
                    </Form.Text>
                </Form.Group>

                <Button className="mt-3" variant='dark-custom'>Войти</Button>
            </Form>
        </ContainerForForm>
    );
}