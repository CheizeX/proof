import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Navbar } from '../components/Navbar/Navbar';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className="flex justify-center items-start h-full ">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex justify-center items-start h-full w-[430px]">
        <Navbar />
      </main>
    </div>
  );
};

export default Home;
