import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { GithubFilled, LinkedinFilled, MailFilled } from '@ant-design/icons';
import Contact from './Contact';

const About = (props: any) => {
  const [disableSubmit, setDisableSubmit] = useState(true);

  return (
    <div className='mainContainer container-fluid mt-4'>
      <div className='formContainer justify-content-center justify-items-center mt-4'>
        <Contact />

        <h1>Other Ways to Contact Me</h1>
        <h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='mailto: renickdaniel@gmail.com'
          >
            <MailFilled style={{ fontSize: '42px', marginRight: '10px' }} />
            renickdaniel@gmail.com
          </a>
        </h3>
        <h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.linkedin.com/in/drenick/'
          >
            <LinkedinFilled style={{ fontSize: '42px', marginRight: '10px' }} />
            https://www.linkedin.com/in/drenick/
          </a>
        </h3>

        <h3>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/drenick33'
          >
            <GithubFilled style={{ fontSize: '42px', marginRight: '10px' }} />
            https://github.com/drenick33
          </a>
        </h3>
      </div>
    </div>
  );
};

export default About;
