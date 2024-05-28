import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getServerData } from "../helper/helper";
import * as Action from '../redux/question_reducer';
import { baseUrl } from "../utils/services.js";

/** Helper function to get random questions */
const getRandomQuestions = (questions, numQuestions) => {
    const shuffled = questions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numQuestions);
};

/** fetch question hook to fetch api data and set value to store */
export const useFetchQuestion = () => {
    const dispatch = useDispatch();   
    const [getData, setGetData] = useState({ isLoading: false, apiData: [], serverError: null });

    useEffect(() => {
        setGetData(prev => ({ ...prev, isLoading: true }));

        /** async function fetch backend data */
        (async () => {
            try {
                const [{ questions, answers }] = await getServerData(`${baseUrl}/questions`, (data) => data);
                console.log("Date preluate:", { questions, answers });

                if (questions.length > 0) {
                    // Select 15 random questions
                    const randomQuestions = getRandomQuestions(questions, 15);
                    
                    setGetData(prev => ({ ...prev, isLoading: false }));
                    setGetData(prev => ({ ...prev, apiData: randomQuestions }));

                    /** dispatch an action */
                    dispatch(Action.startExamAction({ question: randomQuestions, answers }));

                } else {
                    throw new Error("No Question Available");
                }
            } catch (error) {
                setGetData(prev => ({ ...prev, isLoading: false }));
                setGetData(prev => ({ ...prev, serverError: error }));
            }
        })();
    }, [dispatch]);

    return [getData, setGetData];
};

/** MoveAction Dispatch function */
export const MoveNextQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.moveNextAction()); /** increase trace by 1 */
    } catch (error) {
        console.log(error);
    }
}

// /** PrevAction Dispatch function */
export const MovePrevQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.movePrevAction()); /** decrease trace by 1 */
    } catch (error) {
        console.log(error);
    }
}
