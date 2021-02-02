import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Button, Avatar } from 'antd';
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import NavDrawer from './NavDrawer';

const Navbar = () => {
  const avatarSrc = `${process.env.PUBLIC_URL}/profile.jpeg`;

  return (
    <Menu theme='light' mode='horizontal' className='header'>
      <Menu.Item key='1'>
        <a href='/'>
          <Avatar src={avatarSrc} size='large' />
          <span style={{ paddingLeft: '12px' }}>Daniel Renick</span>
        </a>
      </Menu.Item>
      <Menu.Item key='2' style={{ float: 'right' }}>
        <NavDrawer></NavDrawer>
      </Menu.Item>
      <Menu.Item key='3' style={{ float: 'right' }}>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://github.com/drenick33'
        >
          <GithubOutlined />
        </a>
      </Menu.Item>
      <Menu.Item key='4' style={{ float: 'right' }}>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.linkedin.com/in/drenick/'
        >
          <LinkedinOutlined />
        </a>
      </Menu.Item>
      <Menu.Item key='5' style={{ float: 'right' }}>
        <Link to='/about'>
          <Button type='text'>About</Button>
        </Link>
      </Menu.Item>
      <Menu.Item key='6' style={{ float: 'right' }}>
        <Link to='/portfolio'>
          <Button type='text'>Portfolio</Button>
        </Link>
      </Menu.Item>
      <Menu.Item key='7' style={{ float: 'right' }}>
        <Link to='/blog'>
          <Button type='text'>Blog</Button>
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
