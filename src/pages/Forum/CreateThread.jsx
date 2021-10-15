import React, { useState } from 'react';

//componentns
import { Form, Button } from 'react-bootstrap';
import Interweave from 'interweave';
import { Container } from '../../components';

import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
//

export default function CreateThread(){
    const [ editor, setEditor ] = useState('');

    const PreCheck = () => {
        return(
            <>
                <br />
                <div>Предпросмотр: </div>
                <Interweave content={editor} />
            </>
        );
    };

    return(
        <Container>
            <Form>
                <Form.Control className="mb-2" type="text" placeholder="Title" />

                <SunEditor 
                    setAllPlugins={true}
                    defaultValue={editor}
                    onChange={setEditor}
                    height="300px"
                    setOptions={config}
                />

                <PreCheck />

                <Button type="submit" variant="info" className="text-light">
                    Создать
                </Button>
            </Form>
        </Container>
    );
}

const config = {
    buttonList: [
        ['undo', 'redo'],
        ['font', 'fontSize', 'formatBlock'],
        ['paragraphStyle', 'blockquote'],
        ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
        ['fontColor', 'hiliteColor', 'textStyle'],
        ['removeFormat'],
        '/',
        ['outdent', 'indent'],
        ['align', 'horizontalRule', 'list', 'lineHeight'],
        ['table', 'link', 'image', 'video', 'audio'],
        ['fullScreen', 'showBlocks', 'codeView'],
        ['preview', 'print'],
        ['save', 'template']
    ]
};