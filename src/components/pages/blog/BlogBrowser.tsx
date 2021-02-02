import React from 'react';
import { Input } from 'antd';
import BlogCard from './BlogCard';

const { Search } = Input;

const BlogBrowser = (prop: any) => {
  return (
    <div className='mainContainer'>
      <div className='col'>
        <div className='row d-flex justify-content-center'>
          <h1>Browse Posts here</h1>
        </div>
        <div className='row d-flex justify-content-center'>
          <Search style={{ maxWidth: '42%', height: '42px' }} />
        </div>
        <BlogCard />
      </div>
    </div>
  );
};

export default BlogBrowser;
