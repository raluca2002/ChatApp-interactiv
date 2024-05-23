import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFetchQuestion } from '../../hooks/useFetchQuestion';
import { updateResult } from '../../hooks/setResult';
import './style/App.css';

export default function Questions({ onChecked }) {
    const [checked, setChecked] = useState(undefined);
    const { trace } = useSelector(state => state.questions);
    const result = useSelector(state => state.result.result);
    const [{ isLoading, apiData, serverError }] = useFetchQuestion();
    const questionsQueue = useSelector(state => state.questions.queue);
    const questions = questionsQueue && questionsQueue[trace];
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateResult({ trace, checked }));
    }, [checked]);

    function onSelect(i) {
        onChecked(i);
        setChecked(i);
        dispatch(updateResult({ trace, checked }));
    }

    if (isLoading) return <h3 className='text-light'>Loading...</h3>;
    if (serverError) return <h3 className='text-light'>{serverError.message || "Unknown Error"}</h3>;

    return (
        <div className='questions-container'>
            <h2 className='text-light question-title'>{questions?.question}</h2>
            <ul key={questions?.id} className='options-list'>
                {questions?.options.map((q, i) => (
                    <li key={i} className='option-item'>
                        <input 
                            type="radio"
                            value={false}
                            name="options"
                            id={`q${i}-option`}
                            onChange={() => onSelect(i)}
                        />
                        <label className='text-primary option-label' htmlFor={`q${i}-option`}>{q}</label>
                        <div className={`check ${result[trace] == i ? 'checked' : ''}`}></div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
