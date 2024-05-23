import React from 'react';
import "./quiz/style/Result.css"
import YourResults from "../pages/quiz/yourResults.jsx"

const ResultPage = () => (
  <div className="result-page-container">
    <h1 className="title">Clasament</h1>
    <YourResults />
  </div>
);

export default ResultPage;
