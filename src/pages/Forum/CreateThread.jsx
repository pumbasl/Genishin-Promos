import React, { useState } from 'react';

//componentns
import { Editor } from '@bit/primefaces.primereact.editor';
import { Form, Button } from 'react-bootstrap';
import Interweave from 'interweave';
import { Container } from '../../components';
//

//style
import './style.scss';
//

export default function CreateThread(){
    const [ newThread, setNewThread ] = useState({
        title: '',
        content: null
    });

    console.log(newThread)

    const PreCheck = () => {
        return(
            <div className="precheck">
                <br />
                <div className="mb-2">Предпросмотр: </div>
                <Interweave content={newThread.content} />
            </div>
        );
    };

    return(
        <Container>
            <Form>
                <Form.Control
                    className="mb-2"
                    type="text"
                    style={{backgroundColor: "rgba(255, 255, 255, 0)"}}
                    placeholder="Title"
                    value={newThread.title}
                    onChange={(e) => setNewThread({ ...newThread, title: e.target.value })}
                />

                <Editor
                    style={{ height: '250px' }}
                    value={newThread.content}
                    placeholder="Type your text"
                    onTextChange={e => setNewThread({ ...newThread, content: e.htmlValue })}
                />

                <PreCheck />

                <Button type="submit" variant="info" className="mt-3 text-light">
                    Создать
                </Button>
            </Form>
        </Container>
    );
}