import React from 'react';

//Pictures
import LineLogo from '../../media/img/line.webp';
//

//Style
import { Line } from '../../style/style';
//

export default function LineComp(){
    return(
        <Line className="text-center">
            <img src={LineLogo} alt="lineLogo" width="100%" height="100%" />
        </Line>
    );
}