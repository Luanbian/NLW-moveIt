import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import { CountDownContext } from '../contexts/CountDownContext';
import styles from '../styles/components/challengeBox.module.css';

export function ChallengeBox(){
    const {activeChallenge, resetChallenge, completeChallenge} = useContext(ChallengesContext);
    const {resetCountDown} = useContext(CountDownContext)

    function handleChallengeSucceeded(){
        completeChallenge();
        resetCountDown();
    }
    function handleChallengeFailed(){
        resetCountDown();
        resetChallenge();
    }

    return(
        <div className={styles.challengeBoxContainer}>
            {activeChallenge ?(
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} />
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                    <footer>
                        <button 
                            type='button' 
                            className={styles.challangeFailedButton} 
                            onClick={handleChallengeFailed}
                        >
                            Falhei
                        </button>
                        <button 
                        type='button' 
                        className={styles.challangeCompletedButton}
                        onClick={handleChallengeSucceeded}
                        >
                            Completei
                        </button>
                    </footer>
                </div> 
            ) : (
            <div className={styles.challangeNotActive}>
                <strong>Finalize um ciclo para receber um desafio</strong>
                <p>
                    <img src='icons/level-up.svg' alt='Level up icon'/>
                    Avance de level completando desafios
                </p>
            </div>
            )}
        </div>
    );
}