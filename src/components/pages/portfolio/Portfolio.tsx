import React, { useEffect, useState } from 'react';
import PortfolioCard from './PortfolioCard';
import Slider from 'react-slick';
import { get } from '../../../utils/httpMethods';

const Portfolio = (props: any) => {
  const [portfolios, setPortfolios] = useState([]);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    centerPading: '900px',
    //adaptiveHeight: true,
    //variableWidth: true,
  };

  useEffect(() => {
    getPortfolios();
  }, []);

  const getPortfolios = async () => {
    let data = await get({ url: '/portfolio' });
    setPortfolios(data.portfolios);
  };

  console.log(portfolios);
  return (
    <Slider {...settings}>
      {portfolios &&
        portfolios.map((el: any) => (
          <div>
            <PortfolioCard post={el} />
          </div>
        ))}
    </Slider>
  );
};

export default Portfolio;
