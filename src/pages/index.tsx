import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/CountDown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Perfil";
import styles from '../styles/pages/home.module.css';
import Head from "next/head";
import {GetServerSideProps} from 'next';
import { ChallengeBox } from "../components/ChallengeBox";
import { ChallengeProvider } from "../contexts/ChallengeContext";
import { CountDownProvider } from "../contexts/CountDownContext";

interface PropsHome{
  level: number;
  currentExperience: number;
  challengeCompleteds: number;
}

export default function Home(props: PropsHome) {
  return (

    <ChallengeProvider 
      level={props.level} 
      currentExperience={props.currentExperience} 
      challengeCompleteds={props.challengeCompleteds}
    >
    <div className={styles.container}>
      <Head>
        <title>move.it</title>
      </Head>
      <ExperienceBar/>

    <CountDownProvider>
      <section>
        <div>
          <Profile/>
          <CompletedChallenges/>
          <Countdown/>
        </div>
        <div>
          <ChallengeBox /> 
        </div>
      </section>
    </CountDownProvider>
    </div> 
    </ChallengeProvider>
  ); 
}

export const getServerSideProps: GetServerSideProps = async(ctx) => {
  
  const {level, currentExperience, challengesCompleteds} = ctx.req.cookies;

  return{
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleteds: Number(challengesCompleteds)
    }
  }

}
