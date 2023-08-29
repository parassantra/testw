import React, { useEffect, useState } from 'react'
import {nanoid} from "nanoid"

const QUIZ_API_BASE_URL = 'https://api.frontendexpert.io/api/fe/quiz';

const Child6 = () => {
    const[questions, setQuestions] = useState([])
    const[currentQuestion, setCurrentQuestions] = useState(0)
    const[currentAnswer, setCurrentAnswer] = useState(null)
    const[selectedAnswers, setSelectedAnswers] = useState({})
    const[complete, setComplete] = useState(false)
    const[corrAnswers, setCorrAnswers] = useState(0)
    const fetchQuiz = async () => {
        try{
            const res = await fetch(QUIZ_API_BASE_URL)
            const data = await res.json()
            console.log(data)
            setQuestions(data)
        }catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        fetchQuiz()
    },[])

    useEffect(()=>{
        setCurrentAnswer(null)
    },[currentQuestion])

    const nextHandler = () => {
        setCurrentQuestions(currentQuestion + 1)
    }

    const backHandler = () => {
        setCurrentQuestions(currentQuestion - 1)
    }

    const submitHandler = () => {
        let correctAnswer = 0;
       Object.entries(selectedAnswers).map(([key, value]) => {
        if(questions[parseInt(key)].correctAnswer === value){
            correctAnswer++
        }
       })
       setCorrAnswers(correctAnswer)
       setComplete(true)
    }

    const onAnswerChange = (e) => {
        console.log(currentQuestion)
        setCurrentAnswer(parseInt(e.target.value))
        setSelectedAnswers({
            ...selectedAnswers,
            [String(currentQuestion)]: parseInt(e.target.value)
        })
        console.log(selectedAnswers)
    }

    if(questions.length === 0) return(
        <div>Loading...</div>
    )

    if(complete){
        return(
            <div>Correct Answers {corrAnswers}/{questions.length}</div>
        )
    }

    const {question, answers, correctAnswer} = questions[currentQuestion]
  return (
    <>
     
     <h1>{question}</h1>
     {
        answers.map((answer,index) => (
            <div key={nanoid()}>
                <input 
                type="radio" 
                value={index}
                checked={currentAnswer === index}
                onChange={(e) => onAnswerChange(e)}
                ></input>
                <label><h2 >{answer}</h2></label>
            </div>
        ))
     }
     <button 
     disabled={currentQuestion === 0}
     onClick={backHandler}
     >
        Back</button>
     <button 
     disabled={currentQuestion === questions.length -1 || currentAnswer === null}
     onClick={nextHandler}
     >
    Next</button>
    {(currentQuestion === questions.length -1 &&  currentAnswer !== null) && <button 
     onClick={submitHandler}
     >
    Submit</button>}
    </>
    
   
  )
}

export default Child6