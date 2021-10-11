import React, { useState } from 'react';

//components
import { Modal, Button, Form } from 'react-bootstrap';
//

//locales
import { useTranslation } from 'react-i18next';
//

//firebase
import { ref, uploadBytes } from "firebase/storage";
import { storage } from '../../../config/firebase';
//

//uuid
import { v4 as uuidv4 } from 'uuid';
//

export default function UploadAvatar({ show, close }){
    const { t } = useTranslation();
    const [ image, setImage ] = useState(false);

    const upload = () => {
        if(!image) return;
        
        const fileExt = image.name.split('.').pop();

        const randomName = `${uuidv4()}.${fileExt}`;

        const imageRef = ref(storage, `/avatars/${randomName}`);
        uploadBytes(imageRef, image).then((snapshot) => {
            console.log('succ upload');
        });
    }

    return(
        <Modal centered show={show} onHide={close}>
            <Modal.Header closeButton>
                <Modal.Title>
                    {t('Изменение аватарки')}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Control
                    type="file"
                    accept="image/*"
                    onChange={(e) => { setImage(e.target.files[0]) }}
                />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={close}>
                    {t('Закрыть')}
                </Button>
                <Button variant="dark-custom" onClick={upload}>
                    {t('Изменить аватарку')}
                </Button>
            </Modal.Footer>
      </Modal>
    );
}