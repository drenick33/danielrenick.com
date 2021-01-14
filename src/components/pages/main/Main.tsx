import React from 'react';

const Main = (props: any) => {
  return (
    <div className='mainContainer container-fluid'>
      <div className='col' style={{ paddingTop: '250px' }}>
        <div className='row d-flex justify-content-center'>
          <h1
            className='font-weight-bold'
            style={{
              fontSize: '6rem',
              fontFamily: 'serif',
              textShadow: '5px 5px 0px #eee, 7px 7px 0px #707070',
            }}
          >
            Daniel Renick
          </h1>
        </div>
        <div className='col'>
          <div className='row d-flex justify-content-center'>
            <h4 className='pb-4' style={{ fontStyle: 'oblique' }}>
              Front End Developer
            </h4>
          </div>
          <div className='col'>
            <div className='row d-flex justify-content-center'>
              <span>WIP</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
