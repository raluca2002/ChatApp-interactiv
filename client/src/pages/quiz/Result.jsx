import React, { useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import ResultTable from "./ResultTable";
import { resetAllAction } from "../../redux/question_reducer";
import { resetResultAction } from "../../redux/result_reducer";
import { attempts_Number, earnPoints_Number, flagResult } from "../../helper/helper";
import { usePublishResult } from "../../hooks/setResult";
import { AuthContext } from "../../context/AuthContext";
import "./style/Result.css";
import "./style/index.css"
import "./style/Main.css"
import "./style/App.css"

const Result = () => {
    const dispatch = useDispatch();
    const { questions: { queue, answers }, result: { result } } = useSelector(state => state);
    const totalPoints = queue.length * 10;
    const attempts = attempts_Number(result);
    const earnPoints = earnPoints_Number(result, answers, 15);
    const flag = flagResult(totalPoints, earnPoints);
    const { user, logoutUser } = useContext(AuthContext);

    /** store user result */
    usePublishResult({
        username: user.name,
        result,
        attempts,
        points: earnPoints,
        achived: flag ? "Passed" : "Failed"
    });

    const onRestart = (option) => {
        dispatch(resetAllAction());
        dispatch(resetResultAction());
    };

    return (
        <div className="container">
            <h1 className='title text-light'>Result</h1>
            
            <div className='result'>
                <div className='result-item'>
                    <span>Username: </span>
                    <span className='bold'>{user?.name || ""}</span>
                </div>
                <div className='result-item'>
                    <span>Total Quiz Points: </span>
                    <span className='bold'>{totalPoints || 0}</span>
                </div>
                <div className='result-item'>
                    <span>Total Questions: </span>
                    <span className='bold'>{queue.length || 0}</span>
                </div>
                <div className='result-item'>
                    <span>Total Attempts: </span>
                    <span className='bold'>{attempts || 0}</span>
                </div>
                <div className='result-item'>
                    <span>Total Earn Points: </span>
                    <span className='bold'>{earnPoints || 0}</span>
                </div>
                <div className='result-item'>
                    <span>Quiz Result: </span>
                    <span style={{ color: `${flag ? "#2aff95" : "#ff2a66"}` }} className='bold'>{flag ? "Passed" : "Failed"}</span>
                </div>
            </div>

            <div className="start">
                <Link className='btn' to={'/single-player'} onClick={onRestart}>Restart</Link>
            </div>

            {/* <div className="result-table">
                <ResultTable />
            </div> */}
        </div>
    );
}

export default Result;
