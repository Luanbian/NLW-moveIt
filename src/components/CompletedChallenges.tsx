import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/completedChallenges.module.css';

export function CompletedChallenges(){
    const {challengesCompleteds} = useContext(ChallengesContext);

    return(
        <div className={styles.completedChallenges}>
            <span>Desafios completos</span>
            <span>{challengesCompleteds}</span>
        </div>
    );
}