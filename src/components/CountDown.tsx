import { useContext } from 'react';
import {CountDownContext} from '../contexts/CountDownContext'
import styled from '../styles/components/countdown.module.css';


export function Countdown(){
    const {
        minutes, 
        seconds, 
        hasfinished, 
        isActive, 
        startCountdown, 
        resetCountDown
    } = useContext(CountDownContext);
    const [minuteLeft, minuteRight] = String(minutes).padStart(2,'0').split('');
    const [secondsLeft, secondsRight] = String(seconds).padStart(2,'0').split('');
    
    return (
        <div>
            <div className={styled.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondsLeft}</span>
                    <span>{secondsRight}</span>
                </div>
            </div>
            {hasfinished ? (
                <button disabled className={styled.countdownButton}>
                    Ciclo encerrado
                </button>
            ) : (
            <>
                {isActive ? (
                    <button type='button' className={`${styled.countdownButton} ${styled.countdownButtonActive}`} onClick={resetCountDown}>
                        Abandonar ciclo
                    </button>
                    ) : (
                    <button type='button' className={styled.countdownButton} onClick={startCountdown}>
                        Iniciar um ciclo 
                    </button>
                )} 
            </>  
            )}
        </div>
    );
}