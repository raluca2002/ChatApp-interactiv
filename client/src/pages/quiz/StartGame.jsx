import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Questions from "./Questions";
import { useSelector, useDispatch } from 'react-redux';
import { MoveNextQuestion, MovePrevQuestion } from "../../hooks/useFetchQuestion";
import { PushAnswer } from "../../hooks/setResult";
import { Navigate } from "react-router-dom";
import "./style/App.css";
import AnswerTimer from "../../components/AnswerTimer/AnswerTimer";

const StartGamePage = () => {
    const [check, setChecked] = useState(undefined);
    const result = useSelector(state => state.result.result);
    const { queue, trace } = useSelector(state => state.questions);
    const dispatch = useDispatch();
    const [timerKey, setTimerKey] = useState(0);

    useEffect(() => {
        // Reset timer key on trace change to restart timer
        setTimerKey(prevKey => prevKey + 1);
    }, [trace]);

    const handleNext = (isTimeUp = false) => {
        if (trace < queue.length) {
            // If time is up and no answer is selected, mark the answer as false
            const answer = isTimeUp && check === undefined ? false : check;
            dispatch(MoveNextQuestion());
            if (result.length <= trace) {
                dispatch(PushAnswer(answer));
            }
            // Increment the timer key to reset the timer
            setTimerKey(prevKey => prevKey + 1);
        }
        setChecked(undefined);
    };

    const onPrev = () => {
        if (trace > 0) {
            dispatch(MovePrevQuestion());
            setTimerKey(prevKey => prevKey + 1);
        }
    };

    function onChecked(check) {
        setChecked(check);
    }

    if (result.length && result.length >= queue.length) {
        return <Navigate to={'/result'} replace={true} />;
    }

    const handleTimeUp = () => {
        handleNext(true);
    };

    return (
        <Container fluid className="quiz-container">
            <Row className="justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
                <AnswerTimer key={timerKey} duration={10} onTimeUp={handleTimeUp} />
                <Col xs={12} md={8} className="text-center">
                    <div className="container">
                        <h1 className="title">Welcome to the Game!</h1>
                        <Questions onChecked={onChecked} />
                        <div className="grid">
                            {trace > 0 ? <button className="btn prev" onClick={onPrev}>Prev</button> : null}
                            <button className="btn next" onClick={() => handleNext(false)}>Next</button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default StartGamePage;
