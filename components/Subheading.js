import React from "react";
import styled from "styled-components";
import Container from "./Layout/Container"
import breakpoints from "../styles/breakpoints";

const Heading = styled.h2`
    padding: 40px 0;
    font-size: 30px;
    line-height: 50px;
    letter-spacing: -1px;
    display: flex;
    justify-content: center;
    margin: 0;

    @media only screen and (min-width: ${breakpoints.md}){
        padding: 70px 0; 
        font-size: 40px;
        line-height: 60px;
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