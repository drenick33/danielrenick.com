import React from 'react';
import { Carousel } from 'antd';

const PortfolioCarousel = (props: any) => {
  //   let post = get(props, 'post', {
  //     title: 'Site Name',
  //     description: 'Site Description',
  //     image: 'https://i.ytimg.com/vi/j_sHEhPTiFs/maxresdefault.jpg',
  //     githubLink: 'www.google.com',
  //     siteLink: 'www.google.com',
  //   });

  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  return (
    <Carousel autoplay>
      <h1>
        111111111111111111111111111111111111111111111111111111111111111111111111
      </h1>

      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
    </Carousel>
  );
};

export default PortfolioCarousel;
