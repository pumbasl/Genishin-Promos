import React from 'react';

//router
import { Switch } from 'react-router-dom';

import PublicRouter from './PublicRouter';
//

export default function Routers(){
    return(
        <Switch>
            <PublicRouter />
        </Switch>
    );
}