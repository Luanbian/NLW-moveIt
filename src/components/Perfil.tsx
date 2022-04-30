import styles from '../styles/components/profile.module.css';

export function Profile(){
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/Luanbian.png" alt="img-perfil"/>
            <div>
                <strong>Luan Almeida</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level 1
                </p>
            </div>
        </div>
    )
}