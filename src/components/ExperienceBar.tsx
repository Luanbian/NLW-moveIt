import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/experienceBar.module.css';

export function ExperienceBar(){
    const {currentExperiente, experienceToNextLevel} = useContext(ChallengesContext);

    const percentToNextLevel = Math.round(currentExperiente * 100) / experienceToNextLevel

    return(
        <header className={styles.experienceBar}>
            <span> 0 xp</span>
            <div>
                <div style={{width: `${percentToNextLevel}%`}} />
                <span className={styles.currentExperience} style={{left: `${percentToNextLevel}%`}}>
                    {currentExperiente} xp
                </span>
            </div>
            <span> {experienceToNextLevel} xp</span>
        </header>
    );
}