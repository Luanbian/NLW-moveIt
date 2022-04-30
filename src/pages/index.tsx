import { CompletedChallenges } from "../components/CompletedChallenge";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Perfil";
import styles from '../styles/pages/home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <ExperienceBar/>

      <section>
        <div>
          <Profile/>
        </div>
        <div>
          <CompletedChallenges/>
        </div>
      </section>
    </div> 
  ); 
}
