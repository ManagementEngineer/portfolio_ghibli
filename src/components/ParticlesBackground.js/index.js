import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import ParticlesConfig from './particle-config';
import './index.scss'
import assets from '../../assets/images/sprites_svg';

const ParticlesBackground = () => {
    const images = assets;
    const particlesInit = async (main) => {
        console.log(main);
        await loadFull(main);
    }

    const particlesLoaded = (container) => {
        console.log(container);
    };


    return (
        <Particles id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                backgroundMode: {
                    enable: true,
                    zIndex: -1
                },
                background: {
                    color: "#fff"
                },
                fpsLimit: 60,
                interactivity: {
                    detectsOn: "canvas",
                    events: {
                        onClick: { enable: true, mode: "repulse" },
                        onHover: {
                            enable: true,
                            mode: "snow",
                            parallax: { enable: false, force: 2, smooth: 10 }
                        },
                        resize: true
                    },
                    modes: {
                        snow: {
                            distance: 400,
                            duration: 0.3,
                            opacity: 1,
                            size: 12,
                            speed: 3
                        },
                        grab: { distance: 400, line_linked: { opacity: 0.5 } },
                        push: { particles_nb: 4 },
                        remove: { particles_nb: 2 },
                        repulse: { distance: 200, duration: 0.4 }
                    }
                },
                particles: {
                    color: { value: "#38527BE6" },
                    links: {
                        color: "#ffffff",
                        distance: 500,
                        enable: false,
                        opacity: 0.4,
                        width: 2
                    },
                    move: {
                        attract: { enable: false, rotateX: 600, rotateY: 1200 },
                        direction: "bottom",
                        enable: true,
                        outMode: "out",
                        random: false,
                        size: true,
                        speed: 4,
                        straight: false
                    },
                    number: { density: { enable: true, area: 1080 }, value: 10 },
                    opacity: {
                        random: true,
                        value: 1
                    },
                    shape: {
                        type: "images",
                        options: {
                            images: images.map(img => ({
                                src: img,
                                height: 100,
                                width: 100
                            }))
                        }
                    },
                    size: {
                        random: true,
                        value: 10
                    }
                },
                detectRetina: true
            }}
        />
    )
}

export default ParticlesBackground