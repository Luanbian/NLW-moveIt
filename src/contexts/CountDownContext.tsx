import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengeContext";

interface CountDownData{
 minutes: number
 seconds: number
 hasfinished: boolean
 isActive: boolean
 startCountdown: () => void
 resetCountDown: () => void
}

interface CountDownProps{
    children: ReactNode
}

export const CountDownContext = createContext({} as CountDownData);

let countDownTimeout: NodeJS.Timeout;

export function CountDownProvider({children}: CountDownProps){
    const { startNewChallenge } = useContext(ChallengesContext);

    const [time, setTime] = useState(0.1 * 60) //25 minutos 
    const [isActive, setisActive] = useState(false)
    const [hasfinished, setHasfinished] = useState(false)

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

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
            startNewChallenge();
        }
    }, [isActive, time])



    return(
        <CountDownContext.Provider value={{
            minutes,
            seconds,
            hasfinished,
            isActive,
            startCountdown,
            resetCountDown
        }}>
            {children}
        </CountDownContext.Provider>
    )
}

