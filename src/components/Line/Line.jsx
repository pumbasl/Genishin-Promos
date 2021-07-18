import React from 'react';

//Pictures
import LineLogo from '../../media/img/line.png';
//

//Style
import { Line } from '../../style/style';
//

export default function LineComp(){
    return(
        <Line className="text-center">
            <img src={LineLogo} alt="lineLogo" />
        </Line>
    );
}