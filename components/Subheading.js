import React from "react";
import styled from "styled-components";
import Container from "./Layout/Container"
import breakpoints from "../styles/breakpoints";

const Heading = styled.h2`
    padding: 2.5rem 0;
    font-size: 1.875rem;
    line-height: 3.125rem;
    letter-spacing: -1px;
    display: flex;
    justify-content: center;
    margin: 0;

    @media only screen and (min-width: ${breakpoints.md}){
        padding: 4.375rem 0; 
        font-size: 2.5rem;
        line-height: 3.75rem;
    }

`


export default function Hero({title}) {

    return (
        <>
        {title && <Container>
            <Heading>{title}</Heading>
        </Container> }
        </>
    );
}