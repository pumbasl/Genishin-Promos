import React from 'react';

//components
import { Form, InputGroup, Image, Button } from 'react-bootstrap';
import { ContainerForForm } from '../../style/style';
//

//icons
import { LoginIcon, PasswordIcon } from '../../media';
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

                <Form.Group className="mb-3">
                    <Form.Label>
                        Пароль: 
                    </Form.Label>

                    <InputGroup>
                            <InputGroup.Text>
                                <Image src={PasswordIcon} width="100%" height="100%" />
                            </InputGroup.Text>
                            <Form.Control type="password" placeholder="Пароль *" />
                        </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3">
                    <InputGroup>
                            <InputGroup.Text>
                                <Image src={PasswordIcon} width="100%" height="100%" />
                            </InputGroup.Text>
                            <Form.Control type="password" placeholder="Повторите пароль *" />
                        </InputGroup>
                </Form.Group>

                <Button className="mt-3" variant='dark-custom'>Создать акаунт</Button>
            </Form>
        </ContainerForForm>
    );
}