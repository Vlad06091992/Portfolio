import logo from './logo.svg';
import './App.css';
import {Header} from './components/Header/Header';
import {Main} from './components/Main/Main';
import {Skills} from './components/Skills/Skills';
import {Projects} from './components/Projects/Projects';
import {Contacts} from './components/Contacts/Contacts';
import {Footer} from './components/Footer/Footer';
import ScrollToTop from "react-scroll-to-top";


export function App() {
    return (
        <div id={'home'} className="App">
            <Header/>
            <Main/>
            <Projects/>
            <Skills/>
            <Contacts/>
            <Footer/>
            <ScrollToTop smooth color="#44CBE1" />
        </div>
    );
}

export default App;
//
// import Particles from "react-particles";
// import { loadFull } from "tsparticles";
// import { useCallback } from "react";
// import {Header} from "./components/Header/Header";
//
// export const App = () => {
//     const particlesInit = useCallback(async (engine) => {
//         console.log(engine);
//         // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
//         // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
//         // starting from v2 you can add only the features you need reducing the bundle size
//         await loadFull(engine);
//     }, []);
//
//     const particlesLoaded = useCallback(async (container) => {
//         await console.log(container);
//     }, []);
//
//     const particleOptions = {
//         background: {
//             color: {
//                 value: "#0d47a1",
//             },
//         },
//         fpsLimit: 60,
//             interactivity: {
//             events: {
//                 onClick: {
//                     enable: true,
//                         mode: "push",
//                 },
//                 onHover: {
//                     enable: true,
//                         mode: "repulse",
//                 },
//                 resize: true,
//             },
//             modes: {
//                 push: {
//                     quantity: 4,
//                 },
//                 repulse: {
//                     distance: 200,
//                         duration: 0.4,
//                 },
//             },
//         },
//         particles: {
//             color: {
//                 value: "#ffffff",
//             },
//             links: {
//                 color: "#ffffff",
//                     distance: 150,
//                     enable: true,
//                     opacity: 0.5,
//                     width: 1,
//             },
//             collisions: {
//                 enable: true,
//             },
//             move: {
//                 directions: "none",
//                     enable: true,
//                     outModes: {
//                 default: "bounce",
//                 },
//                 random: false,
//                     speed: 6,
//                     straight: false,
//             },
//             number: {
//                 density: {
//                     enable: true,
//                         area: 800,
//                 },
//                 value: 80,
//             },
//             opacity: {
//                 value: 0.4,
//             },
//             shape: {
//                 type: "circle",
//             },
//             size: {
//                 value: { min: 1, max: 5 },
//             },
//         },
//         detectRetina: true,
//     }
//
//     return (
//         <div>
//         <Particles
//             id="tsparticles"
//             init={particlesInit}
//             loaded={particlesLoaded}
//             options={particleOptions}
//         />
//             <Header/>
//         </div>
//     );
// };