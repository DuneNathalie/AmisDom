import React from 'react';
import ReactConfetti from "react-confetti";
import "../styles/adoption/Confetti.css"

const Confetti = () => {
    return (
        <div className='confetti'>
            <ReactConfetti />
        </div>
    );
};

export default Confetti;