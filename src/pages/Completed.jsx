import React from 'react';
import { useNavigate } from 'react-router-dom';
import JSConfetti from 'js-confetti'


const Completed = (props) => {
  const navigate = useNavigate();

  const jsConfetti = new JSConfetti()
  jsConfetti.addConfetti({
    emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
  })

  return (
    <>
      <h1><span className="garamond-font">That</span> took you <span className="biau-font">long</span> enough!</h1>

      {/* Button */}
      <div className="completed-page_btn">
      <button className="black-btn" onClick={() => navigate("/category")}> <span className="garamond-font">back</span> to categories</button>
      </div>

    </>
  );
};

export default Completed;