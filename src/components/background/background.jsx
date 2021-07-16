import { Background as BackgroundStyle } from '../../style/style';

import background from '../../media/img/genshinBackground.jpg';

export default function Background(){
    return(
        <BackgroundStyle>
            <img src={background} alt="background" />
        </BackgroundStyle>
    );
}