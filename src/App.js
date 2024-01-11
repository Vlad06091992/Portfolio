import './App.css';
import {Header} from './components/Header/Header';
import {Main} from './components/Main/Main';
import {Skills} from './components/Skills/Skills';
import {Projects} from './components/Projects/Projects';
import {Footer} from './components/Footer/Footer';
import ScrollToTop from "react-scroll-to-top";
import React from "react";
import {Analytics} from '@vercel/analytics/react';


export function App() {
    return (
        <div id={'home'} className="App">
            <Analytics/>
            <Header/>
            <Main/>
            <Projects/>
            <Skills/>
            {/*<Contacts/>*/}
            <Footer/>
            <ScrollToTop smooth color="#44CBE1"/>
        </div>
    );
}

export default App;
