import React, {useCallback} from "react";
import {loadFull} from "tsparticles";
import Particles from "react-particles";
import css from "./Particle.module.scss";


const options = {
    fullScreen:{
        enable:false,
        zIndex:-1
    },
    background: {
        color: {
            value: "inherit",
        },
    },
    fpsLimit: 120,
    particles: {
        color: {
            value: "#44CBE1",
        },

        move: {
            directions: "none",
            enable: true,
            random: true,
            speed: 1.2,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 80,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 1, max: 5 },
        },
    },
    detectRetina: true,
}




export const Particle = (props) => {

    const particlesInit = useCallback(async (engine) => {
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        // await console.log(container);
    }, []);


    return (
        <Particles className={css.particles}
                   id="tsparticles"
                   init={particlesInit}
                   loaded={particlesLoaded}
                   options={options}
        />
    )
}