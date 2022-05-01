import { createContext, ReactNode, useEffect, useState } from "react";
import listchallenges from '../../challenges.json';

interface PropsChallengeProvider{
    children: ReactNode;
}

interface ChallengeList{
    type: 'body' | 'eye';
    description: string;
    amount: number;
}
interface ChallengeContextData{
    level: number; 
    currentExperiente: number; 
    challengesCompleteds:number; 
    levelUp: () => void;
    startNewChallenge: () => void;
    activeChallenge: ChallengeList;
    resetChallenge: () => void
    experienceToNextLevel: number
    completeChallenge: () => void
}

export const ChallengesContext = createContext({} as ChallengeContextData);

export function ChallengeProvider({children}: PropsChallengeProvider){
    const [level, setLevel] = useState(1);
    const [currentExperiente, SetExperience] = useState(0);
    const [challengesCompleteds, setChallengeCompleteds] = useState(0);
    const [activeChallenge, setActiveChallenge] = useState(null);

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

    useEffect(() => {
        Notification.requestPermission()
    }, [])

    function levelUp(){
        setLevel(level + 1);
    }

    function startNewChallenge(){
        const ramdomChallengeIndex = Math.floor(Math.random() * listchallenges.length)
        const challenge = listchallenges[ramdomChallengeIndex];
        setActiveChallenge(challenge);

        new Audio('/notification.mp3').play();

        if(Notification.permission === 'granted'){
            new Notification('Novo desafio',{
                body: `Valendo ${challenge.amount}xp`
            })
        }
    }

    function resetChallenge(){
        setActiveChallenge(null);
    }

    function completeChallenge(){
        if(!activeChallenge){
            return;
        }

        const {amount} = activeChallenge;
        let finalExperience = currentExperiente + amount;

        if(finalExperience > experienceToNextLevel){
            finalExperience = finalExperience - experienceToNextLevel;
            levelUp();
        }

        SetExperience(finalExperience);
        setActiveChallenge(null);
        setChallengeCompleteds(challengesCompleteds + 1)
    }

    return(
        <ChallengesContext.Provider 
        value={{ 
            level, 
            currentExperiente, 
            challengesCompleteds, 
            levelUp, 
            startNewChallenge,
            activeChallenge,
            resetChallenge,
            experienceToNextLevel,
            completeChallenge
            }}
        >
            {children}
        </ChallengesContext.Provider>
    )
}