import React from 'react'
import {Layout ,Menu} from 'antd';
const {Sider } = Layout;
export default function SliderComponent(props) {
  return (
    <Sider collapsible collapsed={props.collapsed} onCollapse={(value) => props.setCollapsed(value)}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={props.items} />
    </Sider>
  )
}
