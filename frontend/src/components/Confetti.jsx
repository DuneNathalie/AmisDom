import React, {useEffect, useState} from 'react';
import ReactConfetti from "react-confetti";
import "../styles/Confetti.css"

const Confetti = () => {
    return (
        <div className='confetti'>
            <ReactConfetti />
        </div>
    );
};

export default Confetti;