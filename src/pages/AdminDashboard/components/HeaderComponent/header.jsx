import React from 'react'
import Title from 'antd/lib/typography/Title';
import {UserOutlined} from '@ant-design/icons';
import {Layout,Avatar } from 'antd';
const { Header } = Layout;
export default function HeaderComponent() {
  return (
    <Header
        className="site-layout-background"
        style={{
        padding: 0,
        }}
    >
        <Title 
            className='brand'
            level={3}>ECONOMY
            <Avatar className='avatar' icon={<UserOutlined />} />
        </Title>
    </Header>
  )
}
