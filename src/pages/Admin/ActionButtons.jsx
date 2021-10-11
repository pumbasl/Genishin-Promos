import React, { useState, lazy, Suspense } from 'react';

//components
import { Button } from 'react-bootstrap';
import { Preloader } from '../../components';
import SelectFormLoading from './Components/SelectFormLoading';
//

//lazy form
const AddPromo = lazy(() => import('./Components/AddPromo'));
const AddNews = lazy(() => import('./Components/AddNews'));
//

const FormButtons = ({ id }) => {
    if(!id) return <SelectFormLoading />;

    if(id === 1){
        return <AddPromo />;
    }

    if(id === 2){
        return <AddNews />;
    }
};

export default function ActionButtons(){
    const [ form, setForm ] = useState(false);
    return(
        <div className="text-center">

            <Button variant="dark-custom me-2" onClick={() => setForm(1)}>
                Добавить промокод
            </Button>

            <Button variant="dark-custom" onClick={() => setForm(2)}>
                Добавить новость
            </Button>

            <Suspense fallback={<Preloader fetch />}>
                <div className="mt-2 text-start">
                    <FormButtons id={form} />
                </div>
            </Suspense>
        </div>
    );
}