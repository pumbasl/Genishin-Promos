import styled from 'styled-components';

import papper from '../media/img/papper-min.jpg';

const Background = styled.div({
    background: 'no-repeat center center fixed',
    backgroundSize: 'cover',
    zIndex: -99,
    position: 'fixed'
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
    marginTop: '40px',
    marginBottom: '40px'
});

const Footer = styled.div({
    flex: '0 0 auto',
    backgroundColor: 'black',
    color: 'white'
});

const Line = styled.div`
    img{
        width: 30%;
    }
`;


const Papper = styled.div`
    background: url(${papper});
    background-repeat: repeat-y;
    background-size: 100%;
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

const PromoCard = styled.div`
    &:not(:last-child){
        margin-bottom: 15px;
    }
`;

const PromoCardBlock = styled.div`
    border: 1px solid #000;
    padding: 15px;
    display: block;
    
    &:after {
        display: block;
        content: "";
        clear: both;
    }

    &:hover{
        text-decoration: none;
        color: inherit;
        transition: all 0.3s ease;
        background-color: rgba(255, 255, 255, .3);
    }
`;

const PromoExpired = styled.div({
    float: 'right'
});

const FooterContainer = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;
    align-content: center;

    @media (min-width: 320px) and (max-width: 529px) {
        flex-direction: column;
    }
`;

const FooterCardTitle = styled.div`
    width: 250px;

    @media (min-width: 320px) and (max-width: 529px) {
        &:not(:first-child){
            margin-top: 20px;
        }
    }

    @media (min-width: 530px) and (max-width: 991px){
        margin-top: 0px;
        &:nth-child(3){
            margin-top: 20px;
        }
        &:nth-child(4){
            margin-top: 20px;
        }
    }

    @media (min-width: 992px) and (max-width: 1199px){
        &:nth-child(4){
            margin-top: 20px;
        }
    }
`;

const FooterCardBody = styled.div`
    font-weight: 300;
    font-size: 90%;

    @media (min-width: 1200px){
        &:first-child{
            margin-top: 20px;
        }
    }
`;

const FooterCardElement = styled.a`
    color: inherit;

    &:hover{
        text-decoration: none;
    }
`;

export { Line, FooterCardElement, FooterContainer, FooterCardTitle, FooterCardBody, Background, PromoCard, PromoCardBlock, PromoExpired, Wrapper, Header, Main, Footer, Papper };