import React from "react";
import {userContext} from "../Context";
import Head from "next/head"
import GlobalStyles from "../../styles/globalStyles";

import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout(props) {

    return (
        <>
            <Head>
                <title>Discover Effective Hair Loss Treatments Online | Manual.co</title>
                <meta name="title" content="Discover Effective Hair Loss Treatments Online | Manual.co" />
                <meta name="description" content="Looking for hair loss treatment? Buy medication and treatments online from Manual.co, a licensed UK pharmacy. GMC accredited clinicians offer free next day delivery. Get your hair back now!" />
                <meta name="robots" content="index,follow" />
            </Head>
            <GlobalStyles />
            <Nav />
            <userContext.Provider value={{isLoggedin: true}}>
                {props.children}
            </userContext.Provider>
            <Footer/>
        </>
    );
  }
  