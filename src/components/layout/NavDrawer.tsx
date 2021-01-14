import React, { useState } from 'react';
import { Drawer, Select } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { useThemeSwitcher } from 'react-css-theme-switcher';

const { Option } = Select;

const NavDrawer = (props: any) => {
  const [visible, setVisible] = useState(false);
  const { switcher, currentTheme, status } = useThemeSwitcher();

  const showDrawer = () => {
    setVisible(true);
  }; //Open
  const onClose = () => {
    setVisible(false);
  }; //Close

  if (status === 'loading') {
    return <div>Loading styles...</div>;
  } //Prevent errors if styles don't load

  const selectTheme = (newTheme: string) => {
    switcher({ theme: newTheme });
    localStorage.setItem('curTheme', newTheme);
  }; //Select Theme

  return (
    <div>
      <SettingOutlined onClick={showDrawer} />
      <Drawer
        title='Settings'
        placement='right'
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <h4 className='center'>Theme: {currentTheme}</h4>

        <Select
          placeholder='Change Theme'
          size='large'
          onSelect={(value: any) => selectTheme(value)}
        >
          <Option value='default'>Default</Option>
          <Option value='dark'>Dark</Option>
          <Option value='light'>Light</Option>
          <Option value='dracula'>Dracula</Option>
          <Option value='monokai'>Monokai</Option>
          <Option value='nord'>Nord</Option>
          <Option value='breeze'>Breeze</Option>
        </Select>
      </Drawer>
    </div>
  );
};

export default NavDrawer;
