//Компонент
import Container from '../components/Container/Container';
//

const Error = (props) => {
    let errorid = 0;
    if(props.id === '404'){
        errorid = 404;
        return(
            <Container>
                <h1>404 - Not Fround</h1>
            </Container>
        );
    }
    if(props.match.params.iderror === '1'){
        errorid = 1;
        return(
            <Container>
                <h1>Authorization error</h1>
            </Container>
        );
    }
    if(errorid === 0){
        return(
            <Container>
                <h1>Error undefined</h1>
            </Container>
        );
    }
};

export default Error;