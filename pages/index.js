import React, {useState} from "react";
import styled from "styled-components";
import Layout from "../components/Layout/Layout"
import Hero from "../components/Hero"
import Questionaire from "../components/Questionaire"
import Subheading from "../components/Subheading"
import ImageWithCopy from "../components/ImageWithCopy"
import localFont from '@next/font/local'
import HairlossImage from "../assets/images/hairloss2.png"
import edImage from "../assets/images/ed-image.png"

const TTNorms = localFont({ src: '../assets/fonts/TTNorms-Regular.woff'});

export default function Landing() {
  const [questionaireModalVisable, setQuestionaireModalVisable] = useState(false);

  const handleShowModal = (showModal) => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    setQuestionaireModalVisable(showModal)
  }

  const questions = {
    "questions": [
      {
        "question": "Which image best matches your hair loss?",
        "type": "ChoiceType",
        "options": [
          {
            "display": "<img alt=\"Temples\" src=\"https://s3-eu-west-1.amazonaws.com/manualco/questions/temples-hairloss.png\" srcset=\"https://s3-eu-west-1.amazonaws.com/manualco/questions/temples-hairloss%402x.png 2x\" />",
            "value": "Temples",
            "isRejection": false
          },
          {
            "display": "<img alt=\"Temples & Crown\" src=\"https://s3-eu-west-1.amazonaws.com/manualco/questions/templescrown-hairloss.png\" srcset=\"https://s3-eu-west-1.amazonaws.com/manualco/questions/templescrown-hairloss%402 x.png 2x\"/>",
            "value": "Temples & Crown",
            "isRejection": false
          },
          {
            "display": "<img alt=\"Patchy\" src=\"https://s3-eu-west-1.amazonaws.com/manualco/questions/patchy-hairloss.png\" srcset=\"https://s3-eu-west-1.amazonaws.com/manualco/questions/patchy-hairloss%402x.png 2x\"/>",
            "value": "Patchy",
            "isRejection": true
          },
          {
            "display": "<img alt=\"Moderate\" src=\"https://s3-eu-west-1.amazonaws.com/manualco/questions/moderate-hairloss.png\" srcset=\"https://s3-eu-west-1.amazonaws.com/manualco/questions/moderate-hairloss%402x.pn g 2x\" />",
            "value": "Moderate",
            "isRejection": false
          },
          {
            "display": "<img alt=\"Extensive\" src=\"https://s3-eu-west-1.amazonaws.com/manualco/questions/extensive-hairloss.png\" srcset=\"https://s3-eu-west-1.amazonaws.com/manualco/questions/extensive-hairloss%402x.pn g 2x\"/>",
            "value": "Extensive",
            "isRejection": true
          },
          {
            "display": "<img alt=\"Complete\" src=\"https://s3-eu-west-1.amazonaws.com/manualco/questions/complete-hairloss.png\" srcset=\"https://s3-eu-west-1.amazonaws.com/manualco/questions/complete-hairloss%402x.pn g 2x\" />",
            "value": "Complete",
            "isRejection": true
          }
        ]
      },
      {
        "question": "Have you ever been diagnosed with prostate cancer, or are you currently undergoing PSA/Prostate monitoring?",
        "type": "ChoiceType",
        "options": [
          {
            "display": "Yes",
            "value": true,
            "isRejection": true
          },
          {
            "display": "No",
            "value": false,
            "isRejection": false
          }
        ]
      },
      {
        "question": "Have you ever been diagnosed with breast cancer or noticed any changes in your breast tissue such as lumps, pain, nipple discharge or swelling?",
        "type": "ChoiceType",
        "options": [
          {
            "display": "Yes",
            "value": true,
            "isRejection": true
          },
          {
            "display": "No",
            "value": false,
            "isRejection": false
          }
        ]
      }
    ]
  }

  return (
    <div className={TTNorms.className}>
      <Layout>
        <Hero 
          handleShowModal={handleShowModal}
        />
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
        <Questionaire 
          questionaireModalVisable={questionaireModalVisable}
          handleShowModal={handleShowModal}
          questions={questions}
        />
      </Layout>
    </div>
  );
}
