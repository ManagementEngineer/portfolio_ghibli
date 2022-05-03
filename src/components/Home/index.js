import { Link } from 'react-router-dom';

import { Fragment, useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import LogoTitle from '../../assets/images/logo-s.png';
import Logo from './Logo';
import { Button } from 'react-bootstrap';

import './index.scss';
import ParticlesBackground from '../ParticlesBackground.js';



const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = [' ', ' ', 'R', 'a', 'm', 'u', 'e', 'l', ','];
    const jobArray = ['w', 'e', 'b', ' ', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.'];

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
            <ParticlesBackground />
            <div className='container home-page'>
                <div className='row'>

                    <div className='col-6'>
                        <div className='text-zone'>
                            <h1>
                                <span className={letterClass}>H</span>
                                <span className={`${letterClass} _12`}>i, </span>
                                <br />
                                <span className={`${letterClass} _13`}>I</span>
                                <span className={`${letterClass} _14`}>'</span>
                                <span className={`${letterClass} _15`}>m </span>
                                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={16} />
                                <br />
                                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={23} />
                            </h1>
                            <h2>Front-end/Process Improvement/Data Analysis</h2>
                            <Button variant='primary' className='custom-btn'>
                                Contact Me
                            </Button>
                        </div>
                    </div>
                    <div className='col-6'>
                        <Logo />
                    </div>
                </div>
            </div>

            <Loader type='pacman' />
        </>
    )
}

export default Home;