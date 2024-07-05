import React from "react";
import styled from "styled-components";
import Container from "./Layout/Container"
import localFont from '@next/font/local'
import Image from 'next/image'
import HeroPic from "../assets/images/bg-image.png"
import breakpoints from "../styles/breakpoints";

const TTNormsBold = localFont({ src: '../assets/fonts/TTNorms-Bold.woff'});

const HeroContainer = styled.section`
    width: 100%;
    height: 37.875rem;
    background: var(--background);
    @media only screen and (min-width: ${breakpoints.md}){
        height: 46.875rem;
    }
`

const Flex = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        display: flex;
        align-self: end;
        display: none; 
        @media only screen and (min-width: 990px){
            display: block;
        }
    }

`


const Content = styled.div`
    max-width: 30rem;

    h1 {
        font-size: 4.625rem;
        line-height: 4.625rem;
        letter-spacing: -.168rem;
        margin: 0;
    }

    p {
        margin-top: 1.25rem;
        font-size: 1.125rem;
        line-height: 1.875rem;
    }

    button {
        text-transform: uppercase;
        color: var(--white);
        padding: .938rem 1.875rem;
        font-size: .625rem;
        line-height: .938rem;
        letter-spacing: .063rem;
        background: var(--button);
        margin-top: 2.25rem;
    }

    @media only screen and (min-width: ${breakpoints.md}){
        h1 {
            font-size: 5.625rem;
            line-height: 5.625rem;
        }
    }

`

export default function Hero({handleShowModal}) {

    return (
        <HeroContainer>
            <Container>
                <Flex>
                <Content>
                    <h1>
                        Be good<br />
                        to yourself
                    </h1>
                    <p>We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.</p>
                    <button aria-label="take the quiz" onClick={() => handleShowModal(true)} className={TTNormsBold.className}>
                        Take the quiz
                    </button>
                </Content>
                <Image 
                    src={HeroPic}
                    width={600}
                    height={600}
                    alt="Picture of a smiling happy customer"
                />
                </Flex>
            </Container>
        </HeroContainer>  
    );
}