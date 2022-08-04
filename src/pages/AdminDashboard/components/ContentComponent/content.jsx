import React from 'react'
import { Breadcrumb, Layout} from 'antd';
import ProductManage from './ProductManage/productmanage';
const { Content} = Layout;
export default function ContentComponent() {
  return (
    <Content
        style={{
            margin: '0 16px',
        }}
        >
        <Breadcrumb
            style={{
            margin: '16px 0',
            }}
        >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Product</Breadcrumb.Item>
        </Breadcrumb>
        <div
            className="site-layout-background"
            style={{    
            padding: 24,
            minHeight: 360,
            }}
        >
            <ProductManage/>
        </div>
    </Content>
  )
}
