import React from "react";
import styled from "styled-components";
import Container from "./Container"
import Logo from "../../assets/icons/Logo.svg"

const Navigation = styled.nav`
    width: 100%;
    background: transparent;
    padding: 1.875rem 0;
    position: absolute;
`

const LogoImage = styled.img`
    height: 2.5rem;
    width: 2.5rem;
`

export default function Nav() {

    return (
        <Navigation>
            <Container>
                <LogoImage src={Logo.src} alt="manual logo"/>
            </Container>
        </Navigation>  
    );
}