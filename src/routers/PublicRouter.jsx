import React, { Suspense, lazy } from 'react';

//router
import { Route } from 'react-router-dom';
//

//lazy pages
const Main = lazy(() => import('../pages/Main/Main'));
const Policy = lazy(() => import('../pages/Policy/Policy'));
const Help = lazy(() => import('../pages/Help/Help'));
//

export default function PublicRouter(){
    return(
        <Suspense fallback={<div>Loading...</div>}>
            <Route exact path="/" component={Main} />
            <Route exact path="/policy" component={Policy} />
            <Route exact path="/help" component={Help} />
        </Suspense>
    );
}