import React, { useEffect } from 'react';
import QuestionCard from './QuestionCard';
import './index.scss'

const Questions = () => {
    return (
        <div className='question_box'>
            <div className="question_title">常见问题解答</div>
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