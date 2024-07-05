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
        margin-bottom: 5.625rem;
        padding-top: ${props => props.alignRight ? "5.625rem" : "0"};
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
        font-size: 16.25rem;
    }

    img {
        max-width: 29.375rem;
        object-fit: contain;
        width: 100%;
        height: 100%;
    }

    @media only screen and (min-width: ${breakpoints.md}){
        width: unset;

        &:after {
            font-size: 28.125rem;
            top: unset;
            right: ${props => props.alignRight ? "initial" : "-100%"};
            left: ${props => props.alignRight ? "-130%" : "initial"};
        }

        img {
            object-fit: cover;
            width: 23.125rem;
            height: 27.813rem;
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
        margin-left: 1.25rem;
    }

    @media only screen and (min-width: 940px){
        width: 50%;
     }

`
const Content = styled.div`
    max-width: 23.125rem;
    padding: 2.5rem 0 5rem;

    h3 {
        margin: 0.625rem 0 1.375rem;
        font-size: 1.563rem;
        line-height: 2.188rem;
    }

    p {
        font-size: 1.125rem;
        line-height: 1.875rem;
    }

    @media only screen and (min-width: ${breakpoints.md}){
        padding: 0;

        h3 {
            font-size: 1.75rem;
            line-height: 2.5rem;
        }
    }

`
const Title = styled.span`
    font-size: 0.625rem;
    line-height: 0.938rem;
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