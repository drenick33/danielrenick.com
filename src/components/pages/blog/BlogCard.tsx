import React from 'react';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import { Card, Avatar } from 'antd';

const { Meta } = Card;

const BlogCard = (props: any) => {
  let post = get(props, 'post', {});

  // let dummyPosts = [
  //   {
  //     title: 'Title 1',
  //     description: 'This is the first title',
  //     _id: 1,
  //     image: 'https://item-shopping.c.yimg.jp/i/f/or-box_71161205082001',
  //   },
  //   {
  //     title: 'Title 2',
  //     description: 'This is the 2nd title',
  //     _id: 2,
  //     image:
  //       'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Krokodill_Gena.png/250px-Krokodill_Gena.png',
  //   },
  //   {
  //     title: 'Title 3',
  //     description: 'This is the 3rd title',
  //     _id: 3,
  //     image: 'https://i.ytimg.com/vi/Gl1_uGW_Teo/hqdefault.jpg',
  //   },
  // ];

  return (
    <div className='site-card-wrapper mt-4 container-fluid'>
      <div className='col'>
        <div className='row d-flex justify-content-center'>
          <Link to={'blog/' + post._id}>
            <Card
              className='mr-3 mt-3 card-1'
              bordered={false}
              title={post.title}
              cover={
                <Avatar
                  shape='square'
                  src={post.image}
                  alt={''}
                  className='img-fluid'
                  style={{
                    minHeight: '300px',
                    minWidth: '300px',
                    maxHeight: '300px',
                    maxWidth: '300px',
                  }}
                />
              }
            >
              <Meta description={post.description}></Meta>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
