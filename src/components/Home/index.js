import { Link } from 'react-router-dom';

import { Fragment, useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import LogoTitle from '../../assets/images/logo-s.png';
import Logo from './Logo';
import { Button, Container } from 'react-bootstrap';

import './index.scss';
import ParticlesBackground from '../ParticlesBackground.js';
import NoFace from '../../assets/images/no_face.svg';
import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';



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
            <div className='container-fluid home-page'>
                <div className='container  mx-auto my-auto'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-12 mx-auto my-auto text-zone title'>
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
                            <Link to='contact'>
                                <Button variant='primary' className='custom-btn'>
                                    Contact Me
                                </Button>
                            </Link>
                        </div>
                        <div className='col-lg-6 col-md-12 col-md-12 mx-auto my-auto'>
                            <Logo />
                        </div>
                    </div> </div>
            </div>

            <Portfolio />
            <Contact />

        </>
    )
}

export default Home;