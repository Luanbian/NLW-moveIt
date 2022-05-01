import { createContext, ReactNode, useState } from "react";

interface PropsChallengeProvider{
    children: ReactNode;
}

interface ChallengeContextData{
    level: number; 
    currentExperiente: number; 
    challengesCompleteds:number; 
    levelUp: () => void;
    startNewChallenge: () => void;
}

export const ChallengesContext = createContext({} as ChallengeContextData);

export function ChallengeProvider({children}: PropsChallengeProvider){
    const [level, setLevel] = useState(1);
    const [currentExperiente, SetExperience] = useState(0);
    const [challengesCompleteds, setChallengeCompleteds] = useState(0);

    function levelUp(){
        setLevel(level + 1);
    }

    function startNewChallenge(){
        console.log('start new challenge')
    }

    return(
        <ChallengesContext.Provider 
        value={{ 
            level, 
            currentExperiente, 
            challengesCompleteds, 
            levelUp, 
            startNewChallenge
            }}
        >
            {children}
        </ChallengesContext.Provider>
    )
}