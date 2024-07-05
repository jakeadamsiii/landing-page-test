import React, {useState} from "react";
import Layout from "../components/Layout/Layout"
import Hero from "../components/Hero"
import Questionnaire from "../components/Questionnaire"
import Subheading from "../components/Subheading"
import ImageWithCopy from "../components/ImageWithCopy"
import localFont from '@next/font/local'
import HairlossImage from "../assets/images/hairloss2.png"
import edImage from "../assets/images/ed-image.png"

const TTNorms = localFont({ src: '../assets/fonts/TTNorms-Regular.woff'});

export default function Landing() {
  //toggling the questionnaire modal
  const [questionnaireModalVisable, setquestionnaireModalVisable] = useState(false);

  const handleShowModal = (showModal) => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    setquestionnaireModalVisable(showModal)
  }

  // JSON list 
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
      },

      // uncomment to add extra questions 
      // questionnaire should still work with additional questions
      // mix media (e.g. text with images etc.) questions supported in the UI

      // {
      //   "question": "Are you a cool guy?",
      //   "type": "ChoiceType",
      //   "options": [
      //     {
      //       "display": "Yes",
      //       "value": true,
      //       "isRejection": false
      //     },
      //     {
      //       "display": "No",
      //       "value": false,
      //       "isRejection": true
      //     }
      //   ]
      // },
      // {
      //   "question": "Please select your favourite hobbit",
      //   "type": "ChoiceType",
      //   "options": [
      //     {
      //       "display": "<img alt=\"Samwise\" src=\"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTKkSsNkMexOxCpfXUkIxzwA-Nq59cBI08m4dR93cbPGY5N3xv_ui3gxLKaKDhjhONaDKcO1KTWbHI7buNHFEQmxSJqZ379HeVu93KVG88\" />",
      //       "value": "Samwise",
      //       "isRejection": false
      //     },
      //     {
      //       "display": "<img alt=\"Frodo\" src=\"https://static.miraheze.org/greatcharacterswiki/thumb/8/81/FRODO.jpeg/640px-FRODO.jpeg\" />",
      //       "value": "Frodo",
      //       "isRejection": false
      //     },
      //     {
      //       "display": "<img alt=\"Merry\" src=\"https://openpsychometrics.org/tests/characters/test-resources/pics/LOTR/4.jpg\" />",
      //       "value": "Merry",
      //       "isRejection": false
      //     },
      //     {
      //       "display": "<img alt=\"Pippin\" src=\"https://i.pinimg.com/originals/65/8f/5d/658f5db3b7aaac7504addd46af70587f.jpg\" />",
      //       "value": "Pippin",
      //       "isRejection": false
      //     },
      //     {
      //       "display": "<img alt=\"Bilbo\" src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsZfwD42lVKaP_shFXjJmRZYKaqCiEqDWrNGHMrf2JhwZehU8mir9raxRbhhFi28fhTQU&usqp=CAU\" />",
      //       "value": "Bilbo",
      //       "isRejection": false
      //     },
      //     {
      //       "display": "<img alt=\"Gollum\" src=\"https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Gollum.PNG/180px-Gollum.PNG\" />",
      //       "value": "Gollum",
      //       "isRejection": true
      //     },
      //     {
      //       "display": "What's a hobbit?",
      //       "value": "Loser",
      //       "isRejection": true
      //     },
      //   ]
      // }
    ]
  }

  return (
    // attaching the font using @next/font
    // more info here: https://nextjs.org/docs/pages/api-reference/components/font
    <div className={TTNorms.className}>
      <Layout>
        <Hero 
          handleShowModal={handleShowModal}
        />
        <Subheading
          title="What we can help with"
        />
        {/* Imagewithcopy component can be rendered either right or left aligned
            and will collapse on mobile with the image always on top
        */}
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
        <Questionnaire 
          questionnaireModalVisable={questionnaireModalVisable}
          handleShowModal={handleShowModal}
          questions={questions}
        />
      </Layout>
    </div>
  );
}
