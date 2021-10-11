import React, { useState, useEffect } from 'react';

//components
import { Form, InputGroup, Image, Button } from 'react-bootstrap';
import { ErrorsForm } from '../../../components';
import DateTimePicker from 'react-datetime-picker';
//

//icons
import { LoginIcon } from '../../../media';
//

//useform
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
//

//redux
import { useDispatch, useSelector } from 'react-redux';
import { setErrors } from '../../../store/actions/userActions';
import { fetchAddPromoCode } from '../../../store/thunks/adminThunks';
//

//notify
import { toast } from 'react-hot-toast';
//

export default function AddPromo(){
    const dispatch = useDispatch();
    const errorsAuth = useSelector((state) => state.user.errorsAuth);
    const [ date, setDate ] = useState(null);
    
    const schema = yup.object({
        code: yup.string().required("Это поле обязательно для заполнения!"),
        server: yup.string().required("Это поле обязательно для заполнения!")
    }).required();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = data => {
        if(!date){
            toast({title: "Уведомление", body: 'Вы не выбрали дату!', time: "Несколько секунд назад"}); 
        } else {
            data.expired = Date.parse(date);
            dispatch(fetchAddPromoCode(data));
        }
    };
    
    useEffect(() => {
        if(errorsAuth){
            toast({title: "Уведомление", body: errorsAuth, time: "Несколько секунд назад"}); //уведомление
            dispatch(setErrors(null));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [errorsAuth]);

    return(
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="actionFormAddCode">
                <Form.Label>
                    Промокод:
                </Form.Label>

                <InputGroup>
                    <InputGroup.Text>
                        <Image src={LoginIcon} width="100%" height="100%" />
                    </InputGroup.Text>
                    <Form.Control type="text" placeholder="Промокод" {...register("code", { required: true })} />
                </InputGroup>

                <ErrorsForm message={errors.code?.message} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="actionFormServer">
                <Form.Label>
                    Выберите сервер:
                </Form.Label>

                <Form.Select {...register("server", { required: true })}>
                    <option>Europe</option>
                    <option>Asia</option>
                    <option>America</option>
                    <option>All</option>
                </Form.Select>

                <ErrorsForm message={errors.server?.message} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="actionFormDate">
                <Form.Label className="me-2">
                    Дата просрочки кода:
                </Form.Label>

                <DateTimePicker
                    value={date}
                    onChange={setDate}
                />

                <ErrorsForm message={errors.date?.message} />
            </Form.Group>

            <Button variant="dark-custom" type="submit">Создать</Button>
        </Form>
    );
}