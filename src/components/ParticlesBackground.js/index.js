import React from 'react';
import Particles from "react-tsparticles";
import ParticlesConfig from './particle-config';

const ParticlesBackground = () => {
    return (
        <Particles options={ParticlesConfig} height="50vh" width='50vw' />
    )
}

export default ParticlesBackground