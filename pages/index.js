import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout/Layout"
import Hero from "../components/Hero"
import Subheading from "../components/Subheading"
import ImageWithCopy from "../components/ImageWithCopy"
import localFont from '@next/font/local'
import HairlossImage from "../assets/images/hairloss2.png"
import edImage from "../assets/images/ed-image.png"

const TTNorms = localFont({ src: '../assets/fonts/TTNorms-Regular.woff'});

export default function Landing() {

  return (
    <div className={TTNorms.className}>
      <Layout>
        <Hero />
        <Subheading
          title="What we can help with"
        />
        <ImageWithCopy 
          title="hair loss"
          subtitle="Hair loss needn’t be irreversible. We can help! "
          copy="We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out."
          image={HairlossImage}
          number="01"
        />
        <ImageWithCopy 
          title="Erecetile dysfunction"
          subtitle="Erections can be a tricky thing. But no need to feel down!"
          copy="We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out."
          image={edImage}
          number="02"
          alignRight={true}
        />
      </Layout>
    </div>
  );
}
