import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

import Wave from './Wave';

import { titleAnimation, fade } from '../utils/animation';

import {
  LayoutStyle,
  DescriptionStyle,
  HideStyle,
} from '../utils/styles';

const AboutSection = ({ main }) => {
  return (
    <LayoutStyle>
      <DescriptionStyle>
        <motion.div className='title'>
          <HideStyle>
            <motion.h2 variants={titleAnimation}>
           
            <h4 style={{marginBottom:10}}>Hello 👋  ,</h4>
                        <h4 style={{marginBottom:25}}> I'm Ratheesh </h4>
                        
            </motion.h2>
          </HideStyle>
        </motion.div>
          
        <h1>
                        {
                            <Typewriter

                                options={{
                                    strings: [`A Full Stack Developer `,`A Passionate Programmer `],
                                    autoStart: true,
                                    loop: true,
                                    cursorClassName: 'Typewriter__cursor',
                                    cursor: ''
                                }}
                
                            />
                        }
                        </h1>
        <motion.p variants={fade}>
          {main.description}
        </motion.p>
        <div className='profile'>
        <a href={main.resumeDownload} target='_blank' rel='noopener noreferrer'>
          <motion.button variants={fade} style={{position:'relative',right:-0,bottom:-50}}>Resume</motion.button>
        </a>
        <a href={main.social} target='_blank' rel='noopener noreferrer'>
          <motion.button variants={fade} style={{position:'relative',right:-40,bottom:-50, }}>Github</motion.button>
        </a>
        </div>
      </DescriptionStyle>
      <Wave />
    </LayoutStyle>
  );
};

export default AboutSection;
