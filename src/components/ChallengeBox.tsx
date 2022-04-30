import styles from '../styles/components/challengeBox.module.css';

export function ChallengeBox(){
    const hasActiveChallenge = true;

    return(
        <div className={styles.challengeBoxContainer}>
            {hasActiveChallenge ?(
                <div className={styles.challengeActive}>
                    <header>Ganhe 400 xp</header>
                    <main>
                        <img src="icons/body.svg" />
                        <strong>Novo desafio</strong>
                        <p>Levante e faça uma caminhada leve</p>
                    </main>
                    <footer>
                        <button type='button' className={styles.challangeFailedButton}>Falhei</button>
                        <button type='button' className={styles.challangeCompletedButton}>Completei</button>
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