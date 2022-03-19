import React, { useEffect } from 'react';
import QuestionCard from 'components/QuestionCard';
import './index.scss'

const Questions = () => {
    return (
        <div className='question_box'>
            <QuestionCard/>
        </div>
    );
}

export default Questions;