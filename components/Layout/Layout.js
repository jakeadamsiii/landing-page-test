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
                <title>Hello jake</title>
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
  