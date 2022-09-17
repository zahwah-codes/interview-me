import React from "react";
import { useNavigate } from "react-router-dom";

const Instructions = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="how-to"> <span className="garamond-font"> How </span> <span className="biau-font">to</span></h1>
      <p className="instructions"> &#8226; Pick the type of interview question you would like to practice. </p>
      <p className="instructions"> &#8226; A random question will pop up on the screen and you will have 2 minutes to answer the question. </p>
      <p className="instructions"> &#8226; Congrats! You answered the question. You can now go back to the category list and pick a new type of interview question to practice.</p>
      <br />
      <div className="back-home_btn">
      <button className="black-btn go-back_btn" onClick={() => navigate(-1)}><span className="garamond-font">go</span> back</button>
      </div>
    </>
  );
};

export default Instructions;