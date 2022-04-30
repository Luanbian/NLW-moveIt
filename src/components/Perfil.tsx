import styles from '../styles/components/profile.module.css';

export function Profile(){
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/Luanbian.png" alt="img-perfil"/>
            <div>
                <strong>Luan Almeida</strong>
                <p>Level 1</p>
            </div>
        </div>
    )
}