import React from 'react';
import { Link } from 'react-router-dom';

//useform
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
//

//components
import { Form, InputGroup, Image, Button } from 'react-bootstrap';
import { ContainerForForm } from '../../style/style';
import { ErrorsForm } from '../../components';
//

//icons
import { LoginIcon, PasswordIcon } from '../../media';
//

//locales
import { useTranslation } from 'react-i18next';
//

export default function Registration(){
    const { t } = useTranslation();
    const schema = yup.object({
        login: yup.string().required(t('Это поле обязательно для заполнения!')).min(4).max(25),
        password: yup.string().required(t('Это поле обязательно для заполнения!')).min(4)
    }).required();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = data => {
        console.log(data)
    };

    return(
        <ContainerForForm>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="loginForm">
                    <Form.Label>
                        Логин: 
                    </Form.Label>

                    <InputGroup>
                        <InputGroup.Text>
                            <Image src={LoginIcon} width="100%" height="100%" />
                        </InputGroup.Text>
                        <Form.Control type="text" placeholder="Логин *" {...register("login", { required: true, minLength: 4, maxLength: 24 })} />
                    </InputGroup>

                    <ErrorsForm message={errors.login?.message} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>
                        Пароль: 
                    </Form.Label>

                    <InputGroup>
                        <InputGroup.Text>
                            <Image src={PasswordIcon} width="100%" height="100%" />
                        </InputGroup.Text>
                        <Form.Control type="password" placeholder="Пароль *" {...register("password", { required: true, minLength: 4 })} />
                    </InputGroup>

                    <ErrorsForm message={errors.password?.message} />

                    <br />

                    <Form.Text className="text-light">
                        <Link to="/auth/restore_password" className="custom-link">Забыли пароль?</Link>
                    </Form.Text>
                </Form.Group>

                <Button type="submit" className="mt-3" variant='dark-custom'>Авторизоваться</Button>
            </Form>
        </ContainerForForm>
    );
}