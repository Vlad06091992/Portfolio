import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Skills } from './components/Skills/Skills';
import { Projects } from './components/Projects/Projects';
import { Contacts } from './components/Contacts/Contacts';
import { Footer } from './components/Footer/Footer';




function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Projects />
      <Skills />
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
