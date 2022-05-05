import './index.scss';
import { useState, useEffect, useRef } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import emailJS from '@emailjs/browser';
import Loader from 'react-loaders';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();
    const position = [43.7808054, -79.4155833];

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        emailJS
            .sendForm(
                'service_qxa757c',
                'template_pin3jbf',
                refForm.current,
                'iskVJb_6LcN1xzehZ'
            )
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again.')
                }
            )
    }

    return (
        <div className='container-fluid contact-page'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h1>
                            <AnimatedLetters
                                letterClass={letterClass}
                                strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                                idx={15}
                            />
                        </h1>
                    </div>

                    <div className='col-6'>
                        <div className='text-zone'>
                            <p>I am looking for a job!! I am looking for a job!!I am looking for a job!!I am looking for a job!!I am looking for a job!!I am looking for a job!!I am looking for a job!!</p>
                            <div className='contact-form'>
                                <form ref={refForm} onSubmit={sendEmail}>
                                    <ul>
                                        <li className='half'>
                                            <input type='text' name='name' placeholder='Name' required></input>
                                        </li>
                                        <li className='half'>
                                            <input type='email' name='email' placeholder='Email' required></input>
                                        </li>
                                        <li>
                                            <input type='text' name='subject' placeholder='Subject' required></input>
                                        </li>
                                        <li>
                                            <textarea placeholder='Message' name='message' required></textarea>
                                        </li>
                                        <li>
                                            <input type='submit' className='flat-button' value='Send' />
                                        </li>
                                    </ul>
                                </form>
                            </div>
                        </div>

                    </div>
                    <div className='col-6'>
                        <div className='info-map'>
                            Ramuel Batuigas,
                            <br />
                            Toronto, ON
                            <br />
                            <a href='https://www.linkedin.com/in/rjbatuigas'>LinkedIn</a>
                        </div>
                        <div className='map-wrap'>
                            <MapContainer center={position} zoom={10}>
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={position}>
                                    <Popup>
                                        This is the community where I live. <br /> Let's have a cup of coffee!
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </div>

                    </div>
                </div>
            </div>

            <div>
                <Loader type='pacman'></Loader>
            </div>
        </div>



















        // <Fragment>
        //     <div className='container contact-page'>
        //         <div className='text-zone'>
        //             <h1>
        //                 <AnimatedLetters
        //                     letterClass={letterClass}
        //                     strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
        //                     idx={15} />
        //             </h1>
        //             <p>I am looking for a job!! I am looking for a job!!I am looking for a job!!I am looking for a job!!I am looking for a job!!I am looking for a job!!I am looking for a job!!</p>
        //             <div className='contact-form'>
        //                 <form ref={refForm} onSubmit={sendEmail}>
        //                     <ul>
        //                         <li className='half'>
        //                             <input type='text' name='name' placeholder='Name' required></input>
        //                         </li>
        //                         <li className='half'>
        //                             <input type='email' name='email' placeholder='Email' required></input>
        //                         </li>
        //                         <li>
        //                             <input type='text' name='subject' placeholder='Subject' required></input>
        //                         </li>
        //                         <li>
        //                             <textarea placeholder='Message' name='message' required></textarea>
        //                         </li>
        //                         <li>
        //                             <input type='submit' className='flat-button' value='Send' />
        //                         </li>
        //                     </ul>
        //                 </form>
        //             </div>
        //         </div>
        //         <div className='info-map'>
        //             Ramuel Batuigas,
        //             <br />
        //             Toronto, ON
        //             <br />
        //             <a href='https://www.linkedin.com/in/rjbatuigas'>LinkedIn</a>
        //         </div>
        //         <div className='map-wrap'>
        //             <MapContainer center={position} zoom={13}>
        //                 <TileLayer
        //                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        //                 />
        //                 <Marker position={position}>
        //                     <Popup>
        //                         This is the community where I live. <br /> Let's have a cup of coffee!
        //                     </Popup>
        //                 </Marker>
        //             </MapContainer>
        //         </div>
        //     </div>

        //     <Loader type='pacman' />
        // </Fragment>
    )
};

export default Contact;
