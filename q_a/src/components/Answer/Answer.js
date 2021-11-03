import { useEffect, useState } from "react";
import axios from "axios";
import React from 'react';
import {Button, Form} from 'semantic-ui-react';

function Answer(props) {

    const [answer, setAnswer] = useState("")
    const [answers, setAnswers] = useState([]) 

    const url = "http://localhost:8000/answers/"

    const getAnswers = () => {
        axios.get(`${url}`)
        .then((res) => {
            console.log(res.data)
            setAnswer(res.data)
        })
        .catch(error => console.error(`error: ${error}`))
    }
    
    useEffect(() => {
        getAnswers();
    }, []);



const handleChange = (e) => {
    setAnswer(e.target.value)
}

const sendData = () => {
    axios.post(url, {
        answer,
        answers
    })
}

const displayAnswer = () => {
    return answer ? (answer.map((answer) => {
        return (
            <div className='answer' key={answer.id}>
                <h2 >{answer.answer}</h2>
            </div>
        );
    })
    ) : (<h2>no question</h2>)
}


    return (
        <div>
            {displayAnswer()}
            <Form>
                <Form.Field>
                <label></label>
                <input placeholder='Answer' onChange={handleChange} />
                </Form.Field>
                <Button type='submit' onClick={sendData}>Submit</Button>
            </Form>
        </div>
    );
}

export default Answer;