import { useEffect, useState } from "react";
import React from 'react';
import axios from 'axios';
import {Button, Form} from 'semantic-ui-react'
// import axios from 'axios';

function Home(props) {



   const [question, setQuestion] = useState("")
   const [questions, setQuestions] = useState(null)
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

useEffect(() => {
    axios.get(url)
    .then((res) => setQuestions(res))

}, []);







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