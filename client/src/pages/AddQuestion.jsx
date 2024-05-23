import React, { useContext, useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
//import { GameContext, useGame } from '../context/GameContext';

const AddQuestionPage = () => {
    //const { addQuestion } = useGame();
    const {questionInfo, updateQuestionInfo, addQuestion, questionError, isQuestionLoading} = useContext(GameContext);
    const [questionText, setQuestionText] = useState('');
    const [options, setOptions] = useState(['']);
    const [correctAnswer, setCorrectAnswer] = useState('');

    // const handleChangeOption = (index, value) => {
    //     const updatedOptions = [...options];
    //     updatedOptions[index] = value;
    //     setOptions(updatedOptions);
    // };
    const handleAddOption = () => {
        setOptions([...options, '']);
    };

    // const handleSubmit = (e) => {
    //     //e.preventDefault();
    //     const newQuestion = {
    //         text: questionText,
    //         options: options.filter(option => option.trim() !== ''),
    //         correctAnswer
    //     };
    //     addQuestion(newQuestion);
    // };

    return (
        <div>
            <h2 className="mb-4">Add a New Question</h2>
            <Form onSubmit={addQuestion}>
                <Form.Group controlId="questionText">
                    <Form.Label>Question Text:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder='Question'
                        onChange={(e) => 
                            updateQuestionInfo({...questionInfo, text: e.target.value})
                        }
                    />
                </Form.Group>
                <Form.Group controlId="options">
                    <Form.Label>Options:</Form.Label>
                    {options.map((option, index) => (
                        <Form.Control
                            key={index}
                            type="text"
                            placeholder='Option'
                            value={option}
                            onChange={(e) => {
                                const updatedOptions = [...questionInfo.options];
                                updatedOptions[index] = e.target.value;
                                updateQuestionInfo({ ...questionInfo, options: updatedOptions });
                            }}
                            className="mb-2"
                        />
                    ))}
                <Button variant="secondary" onClick={handleAddOption}>Add Option</Button>
                </Form.Group>
                <Form.Group controlId="correctAnswer">
                    <Form.Label>Correct Answer:</Form.Label>
                    <Form.Control
                        type="correctAnswer"
                        placeholder='Correct Answer'
                        onChange={(e) => 
                            updateQuestionInfo({...questionInfo, correctAnswer: e.target.value})
                        }                    />
                </Form.Group>
                <Button variant="primary" type="submit">{isQuestionLoading ? "Upload the question" : "Adduestion"}</Button>
                {
                    questionError?.error && <Alert variant='danger'>
                        <p>{questionError?.message}</p>
                    </Alert>
                }
            </Form>
        </div>
    );
};

export default AddQuestionPage;
