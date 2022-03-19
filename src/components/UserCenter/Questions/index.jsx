import React, { useEffect } from 'react';
import QuestionCard from '../QuestionCard';
import './index.scss'

const Questions = () => {
    return (
        <div className='question_box'>
            <QuestionCard/>
            <QuestionCard/>
            <QuestionCard/>
            <QuestionCard/>
            <QuestionCard/>
            <QuestionCard/>
        </div>
    );
}

export default Questions;