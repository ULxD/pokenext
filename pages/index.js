import Footer from '../components/footer/index';
import Header from '../components/header/index';
import Main from '../components/main/index'
import SectionHome from '../components/sections/home';

export default function Home() {
  return (
    <>
    <Header/>
    <Main>
      <SectionHome/>
    </Main>
    <Footer/>
    </>
  )
}
