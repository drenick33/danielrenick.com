import React, { useEffect, useState } from 'react';
import { Input } from 'antd';
import BlogCard from './BlogCard';
import { get } from '../../../utils/httpMethods';

const { Search } = Input;

const BlogBrowser = (prop: any) => {
  const [posts, setPosts] = useState([{}]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    let data = await get({ url: '/post' });
    console.log(data.posts);
    setPosts(data.posts);
  };

  return (
    <div className='mainContainer'>
      <div className='col'>
        <div className='row d-flex justify-content-center'>
          <h1>Browse Posts here</h1>
        </div>
        <div className='row d-flex justify-content-center'>
          <Search
            style={{
              maxWidth: '42%',
              minWidth: '120px',
              height: '42px',
            }}
          />
        </div>

        {posts &&
          posts.map((el: any, index: number) => (
            <BlogCard post={posts[index]} />
          ))}
      </div>
    </div>
  );
};

export default BlogBrowser;
