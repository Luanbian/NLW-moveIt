import '../styles/global.css';
import { ChallengeProvider } from '../contexts/ChallengeContext'; 
import { CountDownProvider } from '../contexts/CountDownContext';

function MyApp({ Component, pageProps }) {
  return (
    <ChallengeProvider>
      <CountDownProvider>
        <Component {...pageProps} />
      </CountDownProvider>
    </ChallengeProvider>
  )
}

export default MyApp
