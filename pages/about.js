import Footer from "../components/footer";
import Header from "../components/header";
import Main from "../components/main";
import SectionAbout from "../components/sections/about";
import Head from "next/head";


export default function About(){

    return(
        <>
        <Head>
            <link rel="shortcut icon" href="/imgs/pokeball.jpg"/>
            <title>Sobre PokeNextJS</title>
        </Head>
        <Header/>
        <Main>
            <SectionAbout/>
        </Main>
        <Footer/>

        </>

    )
}