import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <h1 className ="home-page_txt"><span className="garamond-font">Congratulations</span> on beginning your job search! This app will allow you to prepare for a <span className="garamond-font">variety</span> of <span className="biau-font">interview</span> questions</h1>

      {/* Button */}
      <div className="home-page_btns">
      <button className="black-btn home-btn" onClick={() => navigate("/instructions")}><span className="garamond-font">check</span> instructions</button>
      <button className="home-btn" style={{color: 'black'}} onClick={() => navigate("/category")}><span className="garamond-font">let's</span> start!</button>
      </div>

    </>
  );
};

export default Home;