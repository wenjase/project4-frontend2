import { useEffect, useState } from "react";
import React from 'react';


function Answer(props) {

    const [answer, setAnswer] = useState("")
    const [answers, setAnswers] = useState([]) 

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("http://localhost:8000/answers/", {
            "headers": {
                "content-type": "application/json",
            },
            "body": JSON.stringify({answer:answer}),
            "method": "POST",
        })
    }





const handleChange = (e) => {
    setAnswer(e.target.value)
}


    return (
        <div>
             <form onSubmit={handleSubmit}>
                <input name='answer' type='text' onChange={handleChange} />
                <input type='submit' />
            </form>
            <div className="answer">
                    {answers && (
                        answers.map((answer) => {
                            return (<h2>{answer.answer}</h2>)
                        })
                    )}
                </div>
        </div>
    );
}

export default Answer;