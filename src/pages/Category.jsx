import React from 'react';
import { useNavigate} from 'react-router-dom';

const Category = (props) => {
  const navigate = useNavigate();
  return (
    <div className="category-page">
      <h1 className="category-page_main-text"><span className="garamond-font">Pick</span> the type of interview <span className="biau-font">questions</span> you would like to <span className="garamond-font">practice.</span></h1>
      <br />
      <div className="category-page_btns">
      <button className="category-btn one" onClick={() => navigate("/behavioural")}><span className="garamond-font">behavioural</span> questions</button>
      <button className="category-btn two" onClick={() => navigate("/communication")}><span className="garamond-font">communication</span> questions</button>
      <button className="category-btn three" onClick={() => navigate("/performance")}><span className="garamond-font">performance </span> questions</button>
      <button className="category-btn four" onClick={() => navigate("/brainteaser")}><span className="garamond-font">brain </span> teaser</button>
      </div>

      <div className="back-home_btn">
        <button className="black-btn back-btn" onClick={() => navigate("/")}><span className="garamond-font">back</span> home</button>
      </div>
    </div>
  );
};

export default Category;