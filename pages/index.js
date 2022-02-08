import Footer from '../components/footer/index';
import Header from '../components/header/index';
import Main from '../components/main/index'
import SectionHome from '../components/sections/home';
import Head from 'next/head';

export default function Home() {
  return (
    <>
    <Head>
      <link rel="shortcut icon" href="/imgs/pokeball.jpg"/>
      <title>Poke NextJS</title>
    </Head>
    <Header/>
    <Main>
      <SectionHome/>
    </Main>
    <Footer/>
    </>
  )
}
