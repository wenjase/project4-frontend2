import { useEffect, useState } from "react";
import React from 'react';
import axios from 'axios';
import {Button, Form} from 'semantic-ui-react'
// import axios from 'axios';

function Home() {



   const [question, setQuestion] = useState("")
   const [questions, setQuestions] = useState([])
//    const [user, setUser] = useState("")
//    const [answer, setAnswer] = useState("")
//    const [answers, setAnswers] = useState([]) 

// async function handleSubmit() {
//     axios.post('http://localhost:8000/questions/', {
//         user: user.id,
//         question:question
//     })
// }

const url = "http://localhost:8000/questions/"

const getQuestions = () => {
    axios.get(`${url}`)
    .then((res) => {
        const allQuestions = res.data.question.allQuestions;
        setQuestions(allQuestions)
    })
    .catch(error => console.error(`error: ${error}`))
}



useEffect(() => {
    getQuestions();
}, []);

// axios({
//     method: 'get',
//     url: 'http://localhost:8000/questions/'
// })
// .then((res) => setQuestions(res))
// .catch((err) => console.log(err))





// useEffect(() => {
//     fetch('http://localhost:8000/answers/')
//     .then(res => res.json())
//     .then(res => {
//         setAnswers(res)
//         console.log(res)
//     })

// }, [])



const handleChange = (e) => {
    console.log(e.target.value)
    setQuestion(e.target.value)
}

const deleteQuestion = (e) => {
    setQuestion(e.target.value)
}

const sendData = () => {
    axios.post(url, {
        question,
        questions
    })
}

if (question.length > 0) {
    return (
        question.localeCompare(() => {
            console.log(question);
            return (
                <div className='question' key={question.id}></div>
            )
        })
    )
}


    return (
        <div>

            <Form>
                <Form.Field>
                <label></label>
                <input placeholder='Question' onChange={handleChange} />
                </Form.Field>
                <Button type='submit' onClick={sendData}>Submit</Button>
            </Form>
        </div>
    );
}

export default Home;