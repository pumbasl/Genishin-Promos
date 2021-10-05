import React from 'react';

import { Image } from 'react-bootstrap';

//media
import { AvatarImage } from '../../media/';
//

export default function Avatar({ type, width }){
    if(type === 'rounded'){
        return(
            <Image className="mt-4" src={AvatarImage} width="250px" height="250px" rounded alt="avatar" />
        );
    }

    if(type === 'roundedCircle'){
        return(
            <Image src={AvatarImage} width={width} height="100%" roundedCircle alt="avatar" />
        );
    }
}