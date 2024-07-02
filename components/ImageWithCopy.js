import React from "react";
import styled from "styled-components";
import Container from "./Layout/Container"
import Image from 'next/image'
import localFont from '@next/font/local'
import breakpoints from "../styles/breakpoints";

const TTNormsBold = localFont({ src: '../assets/fonts/TTNorms-Bold.woff'});

const FlexContainer = styled.div`
    display: flex;

    flex-direction: column;

    @media only screen and (min-width: ${breakpoints.md}){
        flex-direction: ${props => props.alignRight ? "row-reverse" : "row"};
        margin-bottom: 90px;
        padding-top: ${props => props.alignRight ? "90px" : "0"};
    }
`

const Left = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &:after {
        content: "${props => props.number}";
        
        color: var(--numbers);
        position: absolute;
        
        z-index: -1;
        font-weight: 700;
        top: 100%;
        left: -20%;
        font-size: 260px;
    }

    img {
        max-width: 470px;
        object-fit: contain;
        width: 100%;
        height: 100%;
    }

    @media only screen and (min-width: ${breakpoints.md}){
        width: unset;

        &:after {
            font-size: 450px;
            top: unset;
            right: ${props => props.alignRight ? "initial" : "-100%"};
            left: ${props => props.alignRight ? "-130%" : "initial"};
        }

        img {
            object-fit: cover;
            width: 370px;
            height: 445px;
        }
    }

    @media only screen and (min-width: 940px){
        width: 50%;
        &:after {
            right: ${props => props.alignRight ? "initial" : "-60%"};
            left: ${props => props.alignRight ? "-80%" : "initial"};
        }
       
    }
`

const Right = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (min-width: ${breakpoints.md}){
        width: unset;
        margin-left: 20px;
    }

    @media only screen and (min-width: 940px){
        width: 50%;
     }

`
const Content = styled.div`
    max-width: 370px;
    padding: 40px 0 80px;

    h3 {
        margin: 10px 0 22px;
        font-size: 25px;
        line-height: 35px;
    }

    p {
        font-size: 18px;
        line-height: 30px;
    }

    @media only screen and (min-width: ${breakpoints.md}){
        padding: 0;

        h3 {
            font-size: 28px;
            line-height: 40px;
        }
    }

`
const Title = styled.span`
    font-size: 10px;
    line-height: 15px;
    letter-spacing: 2px;
    color: var(--copyright);
    text-transform: uppercase;
`

export default function ImageWithCopy({title, subtitle, copy, image, number, alignRight}) {

    return (
        <Container>
            <FlexContainer alignRight={alignRight}>
                <Left number={number} alignRight={alignRight}>
                    <Image
                        src={image}
                        width={370}
                        height={445}
                        alt="Picture of a man with a thinning crown"
                    />
                </Left>
                <Right>
                    <Content>
                        <Title className={TTNormsBold.className}>{title}</Title>
                        <h3>{subtitle}</h3>
                        <p>{copy}</p>
                    </Content>
                </Right>
            </FlexContainer>
        </Container> 
    );
}