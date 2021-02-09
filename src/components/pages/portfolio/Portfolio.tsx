import React from 'react';
import PortfolioCard from './PortfolioCard';

const Portfolio = (props: any) => {
  return (
    <div className='mainContainer container-fluid'>
      <div className='col'>
        <div className='row d-flex justify-content-center'>
          <PortfolioCard />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
