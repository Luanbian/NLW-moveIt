import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styled from '../styles/components/levelUpModal.module.css';

export function LevelUp(){
    const {level, closeLevelUpModal} = useContext(ChallengesContext)
    return(
        <div className={styled.overlay}>
            <div className={styled.levelContainer}>
                <header>{level}</header>
                <p>Parabéns</p>
                <p>Você alcançou um novo level</p>
                <button type='button' onClick={closeLevelUpModal}>
                    <img src='/icons/close.svg' alt="fechar modal" />
                </button>
            </div>
        </div>
    )
}