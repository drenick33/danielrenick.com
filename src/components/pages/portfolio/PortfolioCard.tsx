import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import { Card, Tag, Button } from 'antd';
import { useThemeSwitcher } from 'react-css-theme-switcher';
import { GithubOutlined } from '@ant-design/icons';

const PortfolioCard = (props: any) => {
  let [dark, setDark] = useState(false);
  let [windowWidth, setWindowWidth] = useState(1080);
  const { currentTheme } = useThemeSwitcher();

  let post = get(props, 'post', {
    title: 'Local Coding',
    description: 'A Coding Education Platform created by PASV',
    image: 'https://localcoding.us/static/front-illustration.6c2a8bcc.svg',
    // image: 'https://i.ytimg.com/vi/j_sHEhPTiFs/maxresdefault.jpg',
    githubLink: 'www.google.com',
    siteLink: 'www.google.com',
    tags: ['react', 'redux', 'typescript', 'mongoDB', 'nodeJS'],
  });

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    //Handle style change
    switchTheme();
  }, [currentTheme]);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
  }, []); //Make Github Icon fit

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  console.log(props);

  const switchTheme = () => {
    switch (currentTheme) {
      case 'default':
      case 'light':
      case 'breeze':
        setDark(false);
        break;
      case 'dracula':
      case 'dark':
      case 'nord':
      case 'monokai':
        setDark(true);
        break;
      default:
        break;
    }
  };

  return (
    <div className='site-card-wrapper mt-5 container-fluid'>
      <div className='col'>
        <div className='row d-flex justify-content-center'>
          <div
            style={{
              width: '75%',
              height: '600px',
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              backgroundColor: dark ? '#36373a' : 'white',
              boxShadow:
                '0 3px 9px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)',
              marginBottom: '75px',
            }}
          >
            <img
              src={post.image}
              style={{
                objectFit: 'cover',
                borderRadius: '5px',
                width: '102%',
                height: '100%',
              }}
            />
            <div
              className='card-wide justify-content-center'
              style={{
                position: 'absolute',
                backgroundColor: dark ? '#36373a' : 'white',
                bottom: '-3rem',
                width: '80%',
                borderRadius: '10px',
                height: '200px',
                textAlign: 'center',
              }}
            >
              <h1
                style={{
                  marginTop: '10px',
                  marginBottom: '0px',
                  fontWeight: 500,
                  fontSize: '3rem',
                  fontFamily: 'serif',
                }}
              >
                {post.title}
              </h1>
              <h3
                className='mt-3'
                style={{
                  fontWeight: 400,
                  fontSize: '1.5rem',
                  fontFamily: 'Raleway, sans-serif',
                  textTransform: 'capitalize',
                  color: 'GrayText',
                }}
              >
                {post.description}
              </h3>
              {post.tags.map((el: any) => (
                <Tag className='mt-3'>{el}</Tag>
              ))}
              <div>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://localcoding.us/'
                >
                  <Button
                    type='primary'
                    shape='round'
                    size='large'
                    style={{ bottom: '-1rem' }}
                  >
                    Visit Site
                  </Button>
                </a>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://github.com/drenick33'
                >
                  <GithubOutlined
                    style={{
                      position: 'absolute',
                      fontSize: '32px',
                      marginLeft: windowWidth >= 1100 ? '38.5%' : '30%',
                      //marginLeft: '27rem',
                    }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
