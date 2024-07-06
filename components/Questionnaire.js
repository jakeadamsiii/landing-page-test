import React, {useState} from "react";
import styled from "styled-components";
import Container from "./Layout/Container"
import Arrow from "../assets/icons/arrow.svg"
import localFont from '@next/font/local'
import breakpoints from "../styles/breakpoints";

const TTNormsBold = localFont({ src: '../assets/fonts/TTNorms-Bold.woff'});

const QuestionContainer = styled.div`
    background-color: var(--questionnaire);
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
    height: 3.5rem;
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
    height: 2rem;
    width: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${Arrow.src});
    transform: rotate(180deg);
    background-position: center;
    background-repeat: no-repeat;
`

const Content = styled.div`
    padding: 1.5rem;
    width: 100%;
    box-sizing: border-box;
    margin: 0px auto;

    @media only screen and (min-width: ${breakpoints.md}){
        width: 33rem;
    }
`

const Question = styled.div`
    h2 {
        font-size: 1.5rem;
        line-height: 2.25rem;
        letter-spacing: -1px;
        margin: 0;

        @media only screen and (min-width: ${breakpoints.md}){
            font-size: 1.75rem;
        }
    }
`

const Options = styled.ul`

    display: ${props => props.isImage ? "grid" : "block"};

    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: .75rem; 

    input {
        display: none;
    }

    @media only screen and (min-width: ${breakpoints.md}){
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
    }
`

const Label = styled.label`
    display: flex;
    align-items: center;
    border-radius: .5rem;
    margin-top: .75rem;
    box-shadow: rgba(11, 59, 60, 0.05) 0px 2px 4px;
    cursor: pointer;
    transition: all 300ms cubic-bezier(0.25, 0.1, 0.25, 1) 0s;
    outline: rgb(227, 225, 223) solid 1px;
    padding: 1.25rem;
    box-sizing: border-box;
    background-color: var(--white);

    &:hover {
        background-color: rgb(248, 247, 246);
        outline: rgb(227, 225, 223) solid 2px;
    }

    &.active {
        outline: rgb(11, 59, 60) solid 2px;
    }

    grid-column-start: ${props => props.isImage ? "auto" : "1"};
    grid-column-end: ${props => props.isImage ? "auto" : "3"};

    @media only screen and (min-width: ${breakpoints.md}){
        grid-column-end: ${props => props.isImage ? "auto" : "4"};
    }
`;

const Text = styled.p`
    font-size: 1rem;
    line-height: 1.75rem;
    font-weight: 400;
    margin: ${props => props.isImage ? "0" :"0 0 0 2.5rem"};
    display: grid;
    width: 100%;
    grid-column-start: 1;
    grid-column-end: 4;

    img {
        display: flex;
        justify-self: center;
        height: 6.688rem;
        width: 6.688rem;
        object-fit: cover;
    }
`;

const Circle = styled.div`
    display: ${props => props.isImage ? "none" : "block"};
    border: 1px solid rgb(121, 151, 138);
    position: absolute;
    border-radius: 1.25rem;
    height: 1.25rem;
    width: 1.25rem;
    background-color: rgb(255, 255, 255); 
`

const Button = styled.button`
    width: 100%;
    height: 3.25rem;
    padding: .75rem 1rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    border-radius: .5rem;
    position: relative;
    background-color: rgb(255, 141, 125);
    border: none;
    font-size: 1rem;
    line-height: 1.75rem;
`

const Results = styled.div`
    p {
        outline: rgb(11, 59, 60) solid 2px;
        padding: 1.25rem;
        border-radius: .5rem;
        margin-top: .75rem;
        box-shadow: rgba(11, 59, 60, 0.05) 0px 2px 4px;
        background: var(--white);
        font-size: 1rem;
        line-height: 1.75rem;
    }

    a {
        color: var(--primary);
    }
`


export default function Questionnaire({questionnaireModalVisable, handleShowModal, questions}) {
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
        {questionnaireModalVisable &&<QuestionContainer data-cy="questionnaire">
            <Header>
                <Container>
                    <Flex>
                        <Back onClick={handleBack} aria-label="Back"/>
                    </Flex>
                </Container>
            </Header>
            <Content>
                {/* map over questions */}
                {questions.questions && questions.questions.length > 0 && questions.questions.map((question, index)=> {
                    
                    return (
                        <>
                            {activeQuestion === index && <Question key={index} >
                                {question.question && <h2 className={TTNormsBold.className}>{question.question}</h2>}

                                <Options index={index} isImage={question.options.some((option) => option.display.includes("<img"))}>
                                    {/* map over options */}

                                    {question.options && question.options.length > 0 && question.options.map((option, optionIndex) => {
                                        let value = option.display
                                        // get a value for the input for images 
                                        // brittle as it expects image to have the alt attribute before the src attribute
                                        if (option.display.includes("alt=")) value = option.display.split("alt=")[1].split(" src=")[0]; 

                                        return(
                                            <Label data-cy={optionIndex} key={optionIndex} isImage={option.display.includes("<img")} onClick={() => handleAnswer(value, index, option.isRejection)} className={answers[index] && answers[index].value === value ? "active" : ""}>
                                                <input type="radio" aria-label={value} value={value} />
                                                <Circle index={index} isImage={option.display.includes("<img")}/>
                                                <Text isImage={option.display.includes("<img")} className={TTNormsBold.className} dangerouslySetInnerHTML={{__html: option.display}}></Text>
                                            </Label>
                                        )
                                    })}
                                </Options>

                                { answers[index] && <Button aria-label="Continue" onClick={ () => setActiveQuestion(index + 1)} className={TTNormsBold.className}>Continue</Button>} 
                            </Question> }
                        </>
                    )
                }) }

                {activeQuestion === questions.questions.length &&
                    <Results>
                        {Object.values(answers).some((answer) => answer.isRejection === true ) ? 
                            <p>Unfortunately, we are unable to prescribe this medication for you. This is because finasteride can alter the PSA levels, which may be used to monitor for cancer. You should discuss this further with your GP or specialist if you would still like this medication</p> :
                            <p>Great news! We have the perfect treatment for your hair loss. Proceed to <a href="https://www.manual.co" target="_blank">www.manual.co</a>, and prepare to say hello to your new hair!</p>
                        }
                    </Results>
                }
                
            </Content>
        </QuestionContainer>}
        </>
    );
}