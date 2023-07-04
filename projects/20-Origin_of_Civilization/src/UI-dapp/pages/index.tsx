import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import favicon from './favicon.ico';
import 'bootstrap/dist/css/bootstrap.min.css';
// comp
import FirstCard from './comp/HeroCard';
import UserRegist from './comp/Registcomp';
import CreateTeam from './comp/BuildTeamComp';
import CreatePlayer from './comp/CreatePlayer';
// import AllowedContract from './comp/SetAllowedContract';
import Footer from "./comp/Footer";
import GameDataPanel from './comp/GameDataPanel';
import MintNFT1 from './comp/MintNFT';
import FightComp from './comp/FightComp';
import AdminSetPanel from './comp/AdminPanel';
import EnhanceRole from './comp/EnhancedTherole';

const Home: NextPage = () => (
  <div className={styles.container}>
    <Head>
      <title>Origin of Civilization</title>
      <meta
        // content="Generated by @rainbow-me/create-rainbowkit"
        name="description" />
      <link href={favicon.src} rel="icon" />
    </Head>
    <main className={styles.main}>
    <ConnectButton />
      <div className={styles.grid}>
            <FirstCard/>
            <UserRegist/>
            <CreatePlayer/>
            <CreateTeam/>
            <MintNFT1/>
            <FightComp/>
            <EnhanceRole/>

            <GameDataPanel/>
            <AdminSetPanel/>
            <Footer/>
      </div> 
    </main>    
  </div>
);

export default Home;
