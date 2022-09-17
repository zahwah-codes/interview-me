import React, {useEffect, useState } from 'react'
import data from '../data/brainteaser.json';
import Countdown from '../components/Countdown';
import { useNavigate } from "react-router-dom";



function BrainTeaser() {
  const [questions, setQuestions] = useState(data);
  const [randomQuestion, setRandomQuestion] = useState(''); //one more hook for storing current random post
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const fetchingQuestions = await fetch(data);
        const questions = await fetchingQuestions.json();

        setQuestions(questions);
      } catch (err) {
        console.log(err);
      }
    };
    const random = questions[Math.floor(Math.random() * questions.length)];
    setRandomQuestion(random);//
    fetchQuestions();
  }, []);


  return (
    <div>
      <h1><span className="interview-question">{randomQuestion.question}</span></h1>
      <Countdown />
      <div className="question-page_btn">
       <button className="black-btn" onClick={() => navigate(-1)}> <span className="garamond-font">back</span> to categories</button>
       </div>
    </div>
  );
}

export default BrainTeaser;