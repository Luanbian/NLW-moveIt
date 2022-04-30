import { useState, useEffect } from 'react';
import styled from '../styles/components/countdown.module.css';

let countDownTimeout: NodeJS.Timeout;

export function Countdown(){
    const [time, setTime] = useState(0.1 * 60) //25 minutos 
    const [isActive, setisActive] = useState(false)
    const [hasfinished, setHasfinished] = useState(false)

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2,'0').split('');
    const [secondsLeft, secondsRight] = String(seconds).padStart(2,'0').split('');

    function startCountdown(){
        setisActive(true);
    }   

    function resetCountDown(){
        clearTimeout(countDownTimeout);
        setisActive(false);
        setTime(0.1*60);
    }

    useEffect(()=>{
        if(isActive && time > 0){
            countDownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000) // 1 segundo
        } else if(isActive && time == 0){
            setHasfinished(true);
            setisActive(false);
        }
    }, [isActive, time])


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