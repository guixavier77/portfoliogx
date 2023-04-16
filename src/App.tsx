import Contacts from './page/sections/Contacts';
import Header from './page/sections/Header';
import Home from './page/sections/Home';
import Projects from './page/sections/Projects';
import Skills from './page/sections/Skills';
import Footer from './page/sections/Footer';
import Progress from './page/components/Progress';

const App = () => {
  return (
    <div className='h-screen bg-bgprimary '>
      <div className='bg-bgprimary'>
        <Progress />
        <Header></Header>
        <Home></Home>
        <Skills></Skills>
        <Projects></Projects>
        <Contacts></Contacts>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default App;
