import React, { Component } from 'react';
import { Modal, Button, Form, InputGroup } from 'react-bootstrap';

//captcha
import Reaptcha from 'reaptcha';
//

//components
import FormErrors from '../../../components/FormErrors/FormErrors';
//

//Уведомления
import toast from "react-hot-toast";
//

//media
import userLoginIcon from '../../../media/img/modalsPicks/user.svg';
import passwordIcon from '../../../media/img/modalsPicks/key.svg';
//

//service
import AuthService from '../../../service/AuthService';
//

//REDUX
import Redux from '../../../store/connect';
//-----

class SignIn extends Component{
    state = {
        login: '',
        password: '',
        verified: false,
        showErrors: false,
        errors: []
    };

    handleClick = async () => {
        const result = await AuthService.AuthUser({ login: this.state.login, password: this.state.password, verified: this.state.verified });

        if(result.code === 'OK'){
            toast({title: 'Уведомление', body: 'Вы успешно авторизовались.', time: 'Несколько секунд назад'});

            //обновление редакса
            const tempObj = Object.assign({}, this.props.data);
            tempObj.token = result.token;
            this.props.change_data(tempObj);

        } else if(result.code === 'ERROR_VALID'){
            console.log(result)
            this.setState({
                errors: result.errors,
                showErrors: result.showErrors
            });
            console.log('ERROR VALID');
            //сообщения об присутствие ошибок валидации
        }

        if(result.error){
            //пользователь с не найден, или пароль или логин не верны
            this.setState({
                errors: [{ code: result.code, message: result.message }],
                showErrors: true
            });
        }

        if(result.code === 'ERROR'){
            this.props.close();
            toast({title: 'Ошибка', body: 'Возникла непредвиденная ошибка.', time: 'Несколько секунд назад'});
            console.log(result.message);
        }
    }

    onVerify = () => {
        setTimeout(() => {
            this.setState({
                verified: false
            });
        }, 60000);

        this.setState({
            verified: true
        });
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value.split(' ').join('')
        });
    }

    changeShowAlert = (state) => {
        this.setState({
            showErrors: state
        });
    }

    render(){
        return(
            <Modal show={this.props.show} onHide={this.props.close} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Авторизация</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="AuthFormLogin">
                            <Form.Label>Логин:</Form.Label>
                            <InputGroup>
                                <InputGroup.Text>
                                    <img src={userLoginIcon} width="15px" height="100%" alt="user login" />
                                </InputGroup.Text>
                                <Form.Control type="text" name="login" value={this.state.login} onChange={this.handleChange} placeholder="Введите Ваш логин" />
                            </InputGroup>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Пароль:</Form.Label>
                            <InputGroup>
                                <InputGroup.Text>
                                    <img src={passwordIcon} width="15px" height="100%" alt="user password" />
                                </InputGroup.Text>
                                <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Введите Ваш пароль" />
                            </InputGroup>

                        </Form.Group>

                        <Reaptcha sitekey={process.env.REACT_APP_RECAPTCHAKEY} onVerify={this.onVerify} />

                        <FormErrors errors={this.state.errors} callback={{change_state: this.changeShowAlert, show: this.state.showErrors}} />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.close}>
                        Закрыть
                    </Button>
                    <Button variant="dark" onClick={this.handleClick}>
                        Войти
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default Redux.connect(Redux.mapStateToProps("DATA"), Redux.mapDispatchToProps("DATA"))(SignIn);