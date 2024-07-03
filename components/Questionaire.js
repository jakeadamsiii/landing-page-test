import React, {useState} from "react";
import styled from "styled-components";
import Container from "./Layout/Container"
import Arrow from "../assets/icons/arrow.svg"
import localFont from '@next/font/local'
import breakpoints from "../styles/breakpoints";

const TTNormsBold = localFont({ src: '../assets/fonts/TTNorms-Bold.woff'});

const QuestionContainer = styled.div`
    background-color: var(--questionaire);
    position: fixed;
    top: 0;
    left:0;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    overflow: scroll;
`

const Header = styled.div`
    top: 0;
    left: 0;
    width: 100%; 
    height: 56px;
    background: var(--white);
    display: flex;
    align-items: center;
`

const Flex = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`

const Back = styled.button`
    background-color: rgb(248, 247, 246);
    border: none;
    border-radius: 50%;
    height: 32px;
    width: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${Arrow.src});
    transform: rotate(180deg);
    background-position: center;
    background-repeat: no-repeat;
`

const Content = styled.div`
    padding: 24px;
    width: 100%;
    box-sizing: border-box;
    margin: 0px auto;

    @media only screen and (min-width: ${breakpoints.md}){
        width: 528px;
    }
`

const Question = styled.div`
    h2 {
        font-size: 24px;
        line-height: 36px;
        letter-spacing: -1px;
        margin: 0;

        @media only screen and (min-width: ${breakpoints.md}){
            font-size: 28px;
        }
    }
`

const Options = styled.ul`

    display: ${props => props.index === 0 ? "grid" : "block"};

    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 12px; 

    label {
        display: flex;
        align-items: center;
        border-radius: 8px;
        margin-top: 12px;
        box-shadow: rgba(11, 59, 60, 0.05) 0px 2px 4px;
        cursor: pointer;
        transition: all 300ms cubic-bezier(0.25, 0.1, 0.25, 1) 0s;
        outline: rgb(227, 225, 223) solid 1px;
        padding: 20px;
        box-sizing: border-box;
        background-color: var(--white);

        &:hover {
            background-color: rgb(248, 247, 246);
            outline: rgb(227, 225, 223) solid 2px;
        }

        &.active {
            outline: rgb(11, 59, 60) solid 2px;
        }
    }

    input {
        display: none;
    }

    p {
        font-size: 16px;
        line-height: 28px;
        font-weight: 400;
        margin: ${props => props.index === 0 ? "0" :"0px 0px 0px 40px"};
        display: grid;
        width: 100%;

        img {
            display: flex;
            justify-self: center;
            height: 107px;
            width: 107px;
            object-fit: cover;
        }
    }

    @media only screen and (min-width: ${breakpoints.md}){
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
    }
`

const Circle = styled.div`
    display: ${props => props.index === 0 ? "none" : "block"};
    border: 1px solid rgb(121, 151, 138);
    position: absolute;
    border-radius: 20px;
    height: 20px;
    width: 20px;
    background-color: rgb(255, 255, 255); 
`

const Button = styled.button`
    width: 100%;
    height: 52px;
    padding: 12px 16px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    border-radius: 8px;
    position: relative;
    background-color: rgb(255, 141, 125);
    border: none;
    font-size: 16px;
    line-height: 28px;
`

const Results = styled.div`
    p {
        outline: rgb(11, 59, 60) solid 2px;
        padding: 20px;
        border-radius: 8px;
        margin-top: 12px;
        box-shadow: rgba(11, 59, 60, 0.05) 0px 2px 4px;
        background: var(--white);
        font-size: 16px;
        line-height: 28px;
    }

    a {
        color: var(--primary);
    }
`


export default function Questionaire({questionaireModalVisable, handleShowModal, questions}) {
    const [answers, setAnswers] = useState({});
    const [activeQuestion, setActiveQuestion] = useState(0);

    const handleAnswer = (value, index, isRejection)=> {
        let answersObj = {...answers};
        answersObj[index] = { 
            value:value,
            isRejection: isRejection
        }
        setAnswers(answersObj)

        setActiveQuestion(index + 1)
    }

    const handleBack = () => {
        if (activeQuestion <= 0 ) {
            handleShowModal(false)
            setAnswers({});
        } else {
            setActiveQuestion(activeQuestion - 1)
        }
    }


    return (
        <>
        {questionaireModalVisable &&<QuestionContainer>
            <Header>
                <Container>
                    <Flex>
                        <Back onClick={handleBack}/>
                    </Flex>
                </Container>
            </Header>
            <Content>
                {questions.questions && questions.questions.length > 0 && questions.questions.map((question, index)=> {
                    
                    return (
                        <>
                            {activeQuestion === index && <Question key={index} >
                                {question.question && <h2 className={TTNormsBold.className}>{question.question}</h2>}
                                <Options index={index}>
                                    {question.options && question.options.length > 0 && question.options.map((option, optionIndex) => {
                                        console.log(option)
                                        let value = option.display
                                        if (option.display.includes("alt=")) value = option.display.split("alt=")[1].split("src=")[0]; 
                                        return(
                                            <label key={optionIndex} onClick={() => handleAnswer(value, index, option.isRejection)} className={answers[index] && answers[index].value === value ? "active" : ""}>
                                                <input type="radio" aria-label={value} value={value} />
                                                <Circle index={index} />
                                                <p className={TTNormsBold.className} dangerouslySetInnerHTML={{__html: option.display}}></p>
                                            </label>
                                        )
                                    })}
                                </Options>

                                { answers[index] && <Button onClick={ () => setActiveQuestion(index + 1)} className={TTNormsBold.className}>Continue</Button>} 
                            </Question> }
                        </>
                    )
                }) }

                {activeQuestion === 3 &&
                    <Results>
                        {Object.values(answers).some((answer) => answer.isRejection === true ) ? 
                            <p>Unfortunately, we are unable to prescribe this medication for you. This is because finasteride can alter the PSA levels, which may be used to monitor for cancer. You should discuss this further with your GP or specialist if you would still like this medication</p> :
                            <p>Great news! We have the perfect treatment for your hair loss. Proceed to <a href="www.manual.co" terget="_blank">www.manual.co</a>, and prepare to say hello to your new hair!</p>
                        }
                    </Results>
                }
                
            </Content>
        </QuestionContainer>}
        </>
    );
}