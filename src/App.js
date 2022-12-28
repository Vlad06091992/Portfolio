import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Skills } from './components/Skills/Skills';
import { Jobs } from './components/Jobs/Jobs';
import { Contacts } from './components/Contacts/Contacts';
import { Footer } from './components/Footer/Footer';




function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Jobs />
      <Skills />
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
