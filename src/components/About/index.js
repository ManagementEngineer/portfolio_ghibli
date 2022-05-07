import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGit, faHtml5, faJs, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
import tossSprite from '../../assets/images/toss.svg';
import { h1 } from 'react-bootstrap'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, []);


    return (
        <>
            <div className='container-fluid about-page'>
                <div className='container'>
                    <div className='col-12 mx-auto '>
                        <h1 className='my-auto'>
                            <AnimatedLetters
                                letterClass={letterClass}
                                strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                                idx={15}
                            />
                        </h1>
                    </div>
                    <div className='content-wrap'>
                        <div className='row  my-auto'>
                            <div className='col-lg-6 col-md-12'>
                                <div className='text-zone'>
                                    <p>
                                        I'm a University of Waterloo Engineering graduate passionate with building things and makking life easier.
                                    </p>
                                    <p>
                                        I'm a Universiasdadasith building things and makking life easier.
                                    </p>
                                    <p>
                                        asda aasdadadsa.
                                    </p>
                                    <p>
                                        I'm a University of Waterloo Engineering graduate passionate with building things and makking life easier.
                                    </p>
                                    <p>
                                        I'm a University of Waterloo Engineering graduate passionate with building things and makking life easier.
                                    </p>
                                    <p>
                                        I'm a Universiasdadasith building things and makking life easier.
                                    </p>
                                    <p>
                                        asda aasdadadsa.
                                    </p>

                                </div>
                            </div>
                            <div className='col-lg-6 col-md-12'>
                                <div className='row-cols-2 stage-cube-cont'>
                                    <div className='col cubespinner'>
                                        <div className='face1'>
                                            <FontAwesomeIcon icon={faJsSquare} color='#EFD18D' />
                                        </div>
                                        <div className='face2'>
                                            <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                                        </div>
                                        <div className='face3'>
                                            <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                                        </div>
                                        <div className='face4'>
                                            <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                                        </div>
                                        <div className='face5'>
                                            <FontAwesomeIcon icon={faPython} color='#FFE873' />
                                        </div>
                                        <div className='face6'>
                                            <FontAwesomeIcon icon={faGit} color='#EC4D28' />
                                        </div>

                                    </div>
                                    <div className='col sprite'>
                                        <img src={tossSprite} />
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>

                </div>

                <div>
                    <Loader type='pacman'></Loader>
                </div>
            </div >









        </>
    )
}

export default About;