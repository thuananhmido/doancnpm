import React from 'react'
import './style.css'
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    UserOutlined,
  } from '@ant-design/icons';
import { Layout} from 'antd';
import { useState } from 'react';
import HeaderComponent from './components/HeaderComponent/header';
import SliderComponent from './components/SliderComponent/slider';
import FooterComponent from './components/FooterComponent/footer';
import ContentComponent from './components/ContentComponent/content';


function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }
  
const items = [
    getItem('Users Manage', '1', <PieChartOutlined />),
    getItem('Product Manage', '2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
      getItem('Tom', '3'),
      getItem('Bill', '4'),
      getItem('Alex', '5'),
    ]),
    getItem('Files', '9', <FileOutlined />),
  ];
export default function AdminDashBoard() {
    const [collapsed, setCollapsed] = useState(false);
    return (
      <Layout
        style={{
          minHeight: '100vh',
        }}
      >
        <SliderComponent items = {items} collapsed = {collapsed} setCollapsed = {setCollapsed}/>
        <Layout className="site-layout">
            <HeaderComponent/>
            <ContentComponent/>
            <FooterComponent/>
        </Layout>
      </Layout>
    );
}
