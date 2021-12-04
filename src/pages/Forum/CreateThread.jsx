import React, { useState, useEffect } from 'react';

//componentns
import { Editor } from '@bit/primefaces.primereact.editor';
import { Form, Button } from 'react-bootstrap';
import Interweave from 'interweave';
import { Container, ErrorsForm } from '../../components';
//

//style
import './style.scss';
//

//useform
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
//

//notify
import { toast } from 'react-hot-toast';
//

//redux
import { useDispatch, useSelector } from 'react-redux';
import { fetchAddThread } from '../../store/thunks/threadsThunks';
import { setErrors } from '../../store/actions/userActions';
//

export default function CreateThread(){
    const dispatch = useDispatch();
    const errorsAuth = useSelector((state) => state.user.errorsAuth);
    const schema = yup.object({
        title: yup.string().required("Это поле обязательно для заполнения!")
    }).required();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const [ content, setContent ] = useState(null);

    const onSubmit = data => {
        data.content = content;
        if(!data.content){
            dispatch(setErrors('Поле с информацией пусто.'))
            return;
        }

        dispatch(fetchAddThread(data));
    };

    const PreCheck = () => {
        return(
            <div className="precheck">
                <br />
                <div className="mb-2">Предпросмотр: </div>
                <Interweave content={content} />
            </div>
        );
    };

    useEffect(() => {
        if(errorsAuth){
            toast({title: "Уведомление", body: errorsAuth, time: "Несколько секунд назад"}); //уведомление
            dispatch(setErrors(null));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [errorsAuth]);

    return(
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Control
                    className="mb-2"
                    type="text"
                    style={{backgroundColor: "rgba(255, 255, 255, 0)"}}
                    placeholder="Title"
                    {...register("title", { required: true })}
                />
                <ErrorsForm message={errors.title?.message} />

                <Editor
                    style={{ height: '250px' }}
                    placeholder="Type your text"
                    value={content}
                    theme="snow"
                    onTextChange={e => setContent(e.htmlValue)}
                />

                <PreCheck />

                <Button type="submit" variant="info" className="mt-3 text-light">
                    Создать
                </Button>
            </Form>
        </Container>
    );
}