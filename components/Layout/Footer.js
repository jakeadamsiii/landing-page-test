import React from "react";
import styled from "styled-components";
import Container from "./Container"
import Logo from "../../assets/icons/Logo.svg"
import Google from "../../assets/icons/google.svg"
import Facebook from "../../assets/icons/facebook.svg"
import Twitter from "../../assets/icons/twitter.svg"
import Arrow from "../../assets/icons/arrow.svg"
import localFont from '@next/font/local'
import breakpoints from "../../styles/breakpoints";

const TTNormsBold = localFont({ src: '../../assets/fonts/TTNorms-Bold.woff'});

const Foot = styled.footer`
    width: 100%; 
    background: var(--secondary);
`

const LogoImage = styled.img`
    height: 2.688rem;
    width: 2.688rem;
    margin: 0 0 2.25rem;

    @media only screen and (min-width: ${breakpoints.md}){
        height: 4.688rem;
        width: 4.688rem;
    }

    @media only screen and (min-width: ${breakpoints.desktop}){
        margin: 0;    
    }
`

const SocialIcon = styled.img`
    height: 1.5rem;
    width: 1.5rem;
`

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2.25rem 0;

    @media only screen and (min-width: ${breakpoints.md}){
        padding: 4.25rem 0;
    }

    @media only screen and (min-width: ${breakpoints.desktop}){
        flex-direction: row;
    }
`

const Menu = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2.25rem 0 0;
    border-top: 1px solid var(--line);

    @media only screen and (min-width: ${breakpoints.md}){
        flex-direction: row;
        padding: 4.25rem 0 0;
    }

    @media only screen and (min-width: ${breakpoints.desktop}){
        margin: 0;
        padding: 0;
        border: none;
    }
`

const LinkContainer = styled.div`
    width: 100%;
    
    &:last-of-type {
        margin-right: 0;
    }

    @media only screen and (min-width: ${breakpoints.md}){
        width: 10.875rem;
        margin-right: 1.563rem;
    }
`

const Subtitle = styled.h4`
    text-transform: uppercase;
    margin: 0 0 .5rem 0;
    font-size: .625rem;
    line-height: .938rem;
    letter-spacing: .15rem;

    @media only screen and (min-width: ${breakpoints.md}){
        margin: 0 0 1.5rem 0;
    }

`

const Links = styled.ul`
    margin: 0;
    padding: 0 0 2.25rem;
    width: 100%;
    display: ${props => props.social ? "flex" : "block"};
    
    @media only screen and (min-width: ${breakpoints.md}){
        padding: 0;
    }

`

const Li = styled.li`
    margin: ${props => props.social ? "0 1.5rem 0 0" : "0 0 .5rem"};
    font-size: 1rem; 
    line-height: 1.875rem;
    width: ${props => props.social ? "unset" :"100%"};
    position: relative;

    &:last-of-type {
        margin: 0;
    }

    &:after {
        content: "";
        background-image: url(${Arrow.src});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        height: .625rem;
        width: .375rem;
        display: ${props => props.social ? "none" : "block"};
        position: absolute;
        right: 0;
        top: 0;
    }

    @media only screen and (min-width: ${breakpoints.md}){
        margin: ${props => props.social ? "0 1.5rem 0 0" : "0 0 1.5rem"};

        &:after {
            display: none;
        }
    }
`

const CopyrightContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.563rem 0;
    box-sizing: border-box;
    border-top: 1px solid var(--line);

    p {
        font-size: 1rem;
        line-height: 1.875rem;
        color: var(--copyright);
    }
`

export default function Footer() {

    return (
        <Foot>
            <Container>
                <FlexContainer>
                    <LogoImage src={Logo.src} alt="manual logo"/>
                    <Menu>
                        <LinkContainer>
                            <Subtitle className={TTNormsBold.className}>
                                Product
                            </Subtitle>
                            <Links>
                                <Li>Popular</Li>
                                <Li>Trending</Li>
                                <Li>Guided</Li>
                                <Li>Products</Li>
                            </Links>
                        </LinkContainer>

                        <LinkContainer>
                            <Subtitle className={TTNormsBold.className}>
                                Company
                            </Subtitle>
                            <Links>
                                <Li>Press</Li>
                                <Li>Mission</Li>
                                <Li>Strategy</Li>
                                <Li>About</Li>
                            </Links>
                        </LinkContainer>

                        <LinkContainer>
                            <Subtitle className={TTNormsBold.className}>
                                Info
                            </Subtitle>
                            <Links>
                                <Li>Support</Li>
                                <Li>Customer Service</Li>
                                <Li>Get started</Li>
                            </Links>
                        </LinkContainer>
                        <LinkContainer >
                            <Subtitle className={TTNormsBold.className}>
                                Follow us
                            </Subtitle>
                            <Links social={true}>
                                <Li social={true}>
                                    <SocialIcon src={Facebook.src} alt="facebook logo"/>
                                </Li>
                                <Li social={true}>
                                    <SocialIcon src={Google.src} alt="google logo"/>
                                </Li>
                                <Li social={true}>
                                    <SocialIcon src={Twitter.src} alt="twitter logo"/>
                                </Li>
                            </Links>
                        </LinkContainer>
                    </Menu>
                </FlexContainer>
                <CopyrightContainer>
                    <p>© {new Date().getFullYear()} Manual. All rights reserverd</p>
                </CopyrightContainer>
            </Container>
        </Foot>  
    );
}