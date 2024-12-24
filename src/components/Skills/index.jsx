import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders'; 
import AnimateLetters from '../AnimateLetters';
import './index.scss';
import CV from '../../assets/documents/MyFinalResume.pdf';

const Skills = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [isTagCloudInitialized, setIsTagCloudInitialized] = useState(false); // Track initialization

    useEffect(() => {
      if (!isTagCloudInitialized) { // Initialize only if not already done
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/TagCloud@2.5/dist/TagCloud.min.js';
        script.async = true;
        script.onload = () => {
            if (window.TagCloud) {
                console.log("TagCloud library loaded successfully.");
                const myTags = [
                    'JavaScript', 'CSS', 'HTML5','Tailwind CSS','Sass',
                    'Bootstrap', 'React','MySQL', 'jQuery','PHP','GitHub', 'GitHub Pages',
                    'Wordpress','Canva', 'Figma', 
                ];

                window.TagCloud('.content', myTags, {
                    radius: 250,
                    maxSpeed: 'fast',
                    initSpeed: 'fast',
                    direction: 135,
                    keep: true,
                });

                const colors = ['#34A853', '#FBBC05', '#4285F4', '#7FBC00', '#FFBA01', '#01A6F0'];
                const randomColor = colors[Math.floor(Math.random() * colors.length)];
                document.querySelector('.content').style.color = randomColor;

                console.log("Tag cloud created.");
                setIsTagCloudInitialized(true); // Mark as initialized
            } else {
                console.error("TagCloud script not loaded properly.");
            }
        };
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
      }
    }, [isTagCloudInitialized]);

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    }, []);

    return (
        <>
            <div className="container skills-page">
                <div className="text-zone">
                    <h1>
                        <AnimateLetters
                            letterClass={letterClass}
                            strArray={['S', 'k', 'i', 'l', 'l', 's' ,' ', '&', ' ', 'E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>Expert in front-end development including technologies like </p>
                    <p className="skills">HTML5, CSS3, JavaScript, jQuery, Tailwind CSS, React, Bootstrap, Sass, Git, Wordpress etc.</p>
                    <p>I’m not a designer but I have a good sense of aesthetics, and experience in responsive, mobile-first web design. I put special effort into optimizing my code and providing the best user experience. 
                    I would love to give you any kind of support also after the project's completion. 
                    I guarantee a commitment during work on your project.</p>
                    <p>Visit my <a href="https://www.linkedin.com/in/swati-salunke-563576228/" className='links'>LinkedIn</a> profile for more details. Also you can checkout my <a href={CV} className='links'>CV</a> on this link, or feel free to give a peek on some of my blog posts.</p>
                </div>

                <div className="content"></div>
            </div>

            <Loader type="pacman" /> 
        </>
    );
};

export default Skills;
