import { useEffect, useState } from "react";
import React from 'react';
// import axios from 'axios';

function Home(props) {

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


    const handleSubmit = (e) => {
        e.preventDefault()
        try{
        fetch("http://localhost:8000/questions/", {
  "headers": {
    "content-type": "application/json",
  },
  "body": JSON.stringify({question:question, "csrfmiddlewaretoken": "mTqdPljNmlWUekEY3VQPgGuMyHtxYs0FavJmT5hhbB2APAQukPmmhQqj8OQhUdAy"}),
  "method": "POST",
//   "mode": "cors",
//   "credentials": "include"
});

} catch {
    console.log("err")
}
    }

useEffect(() => {
    fetch('http://localhost:8000/questions/')
    .then(res => res.json())
    .then(res => {
        setQuestions(res)
        console.log(res)
    })

}, [])

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


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name='question' type='text' onChange={handleChange} color='gray' />
                <input type='submit' />
            </form>
            {/* mapping through to display information */}
            <div className="question">
            {questions && (
                    questions.map((question) => {
                      return  (<h2>{question.question}</h2>)
                    }
                    ))}
                    
                    </div>
            <div>
                <button onChange={deleteQuestion}>Delete</button>
            </div>
            {/* <form onSubmit={handleSubmit}>
                <input name='answer' type='text' onChange={handleChange} />
                <input type='submit' />
            </form>
            <div className="answer">
                    {answers && (
                        answers.map((answer) => {
                            return (<h2>{answer.answer}</h2>)
                        })
                    )}
                </div> */}
        </div>
    );
}

export default Home;