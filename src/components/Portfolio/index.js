import './index.scss';
import WebCard from './WebCard';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import YelpCampImg from '../../assets/images/yelp-camp.PNG';
import RJBlogImg from '../../assets/images/RJBlog.PNG';

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, []);

    return (
        <div className='container-fluid portfolio-page'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h1>
                            <AnimatedLetters
                                letterClass={letterClass}
                                strArray={['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']}
                                idx={15}
                            />
                        </h1>
                    </div>
                    <div className='container card-wrap'>
                        <div className='row'>
                            <div className="col-lg-4">
                                <WebCard
                                    image={YelpCampImg}
                                    cardText={'Yelp Camp'}
                                    webLink={'https://yelp-camp-rj.herokuapp.com/'}
                                    githubLink={'webLink'} />
                            </div>

                            <div className="col-lg-4">
                                <WebCard
                                    image={RJBlogImg}
                                    cardText={'RJ Blog'}
                                    webLink={'https://rj-blog.herokuapp.com/'}
                                    githubLink={'webLink'} />
                            </div>

                            <div className="col-lg-4">
                                <WebCard
                                    image={RJBlogImg}
                                    cardText={'card3Text'}
                                    webLink={'https://rj-blog.herokuapp.com/'}
                                    githubLink={'webLink'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;