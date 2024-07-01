import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout/Layout"
import localFont from '@next/font/local'

const TTNorms = localFont({ src: '../assets/fonts/TTNorms-Regular.woff'});



const Title = styled.h1`
  color: red;
`

export default function Landing() {

  return (
    <div className={TTNorms.className}>
      <Layout>
      </Layout>
    </div>
  );
}
