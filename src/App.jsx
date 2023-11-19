import './App.css';

import {
  About,
  Chef,
  Find,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
} from './containers';

import { NavBar } from './components';

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <About />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <Find />
      <Footer />
    </>
  );
}

export default App;
