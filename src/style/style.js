import styled from 'styled-components';

import papper from '../media/img/papper-min.jpg';

const Background = styled.div({
    background: 'no-repeat center center fixed',
    backgroundSize: 'cover',
    position: 'fixed',
    zIndex: -99,
    filter: 'blur(5px)',
    transform: 'scale(1.1)'
});

const Wrapper = styled.div({
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
});

const Header = styled.div({
    flex: '0 0 auto'
});

const Main = styled.div({
    flex: '1 0 auto',
    marginTop: '40px'
});

const Footer = styled.div({
    flex: '0 0 auto'
});

const Papper = styled.div`
    background: url(${papper});
    background-size: cover;
    padding: 15px;
    position: relative;
    border: 1px solid black;
    
    &:before, &:after{
        box-shadow: 1px 1px 1px rgba(0,0,0,0.25);
        border: 1px solid black;
    }

    &:before, &:after{
        content: "";
        position: absolute;
        height: 95%;
        width: 99%;
        background: url(${papper});
        background-size: cover;
    }

    &:before {
        right: 15px;
        top: 0;
        transform: rotate(-1deg);
        z-index: -1;
    }

    &:after {
        top: 5px;
        right: -5px;
        transform: rotate(1deg);
        z-index: -2;
    }
    
`;


const PromoCard = styled.a`
    text-decoration: none;
    color: inherit;
    border: 1px solid #000;
    padding: 15px;
    display: block;

    &:not(:last-child){
        margin-bottom: 15px;
    }

    &:hover{
        text-decoration: none;
        color: inherit;
        transition: all 0.3s ease;
        background-color: rgba(255, 255, 255, .3);
    }
`;

export { Background, PromoCard, Wrapper, Header, Main, Footer, Papper };