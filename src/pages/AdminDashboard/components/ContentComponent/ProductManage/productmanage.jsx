import React from 'react'
import { Table , Space, Popconfirm,Button, Form } from 'antd'
import Title from 'antd/lib/typography/Title';
import { EditOutlined, DeleteOutlined} from '@ant-design/icons';
import { useState ,useEffect  } from 'react';
import EditProduct from './editproduct';
import AddProduct from './addproduct';
export default function ProductManage() {
    const columns = [
        {
          title: 'ID',
          dataIndex: 'key',
          sorter: {
              compare: (a, b) => a.key - b.key,
              multiple: 3,
            },
        },
        {
          title: 'Name',
          dataIndex: 'name',
          sorter: {
            compare: (a, b) => a.name - b.name,
            multiple: 3,
          },
        },
        {
          title: 'Math Score',
          dataIndex: 'math',
          sorter: {
            compare: (a, b) => a.math - b.math,
            multiple: 2,
          },
        },
        {
          title: 'English Score',
          dataIndex: 'english',
          sorter: {
            compare: (a, b) => a.english - b.english,
            multiple: 1,
          },
        },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Space size="middle">
              <a><EditOutlined onClick={() => {showModal(record.key)}} /></a>
              <Popconfirm title={`"Sure to delete product" ${record.key} ?`} onConfirm={() => handleDelete(record.key)}>
                  <a><DeleteOutlined  style={{color: 'red' }} /></a>
              </Popconfirm>
            </Space>
          ),
        },
      ];
      const dataTable = [
        {
          key: '1',
          name: 'John Brown',
          math: 60,
          english: 70,
        },
        {
          key: '2',
          name: 'Jim Green',
          math: 66,
          english: 89,
        },
        {
          key: '3',
          name: 'Joe Black',
          math: 90,
          english: 70,
        },
        {
          key: '4',
          name: 'Jim Red',
          math: 99,
          english: 89,
        },
      ];
    
    const [data, setData] = useState(dataTable)
    useEffect(() => {
        setData(dataTable);
    }, []);

    const handleDelete = (key) => {
        const newData = data.filter((item) => item.key !== key);
        console.log(newData);
        setData(newData);
    }
    const onChange = (pagination, filters, sorter, extra) => {
      console.log('params', pagination, filters, sorter, extra);
    };

    //Modal edit
    const [isModalVisible, setIsModalVisible] = useState(false);
     
    const [curentDataEdit, setCurentDataEdit] = useState(null);


    const showModal = (id) => {
        console.log(id,'id');
        const currentRow = data.find(item => item.key === id);
        // const productUpdate = {
        //     key : currentRow.key,
        //     name: currentRow.name,
        //     math: currentRow.math,
        //     english: currentRow.english,
        // }
        setIsModalVisible(true);
        console.log(currentRow);
        setCurentDataEdit(curentDataEdit)
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    //endModal
    //Modal add product
    const [isModalAddVisible, setIsModalAddVisible] = useState(false);

    const showModalAdd = () => {
        setIsModalAddVisible(true);
    };
    const handleCancelAdd = () => {
        setIsModalAddVisible(false);
    };
    const addProductHandle = (e) => {
       const newProduct = {
        key: parseInt(Math.random() * 1000),
        name: e.username,
        math: e.mathcore,
        english: e.englishcore,
      }
      setData(prev => {
        return [...prev, newProduct]
      })
    };
    //form

    const editProductHandle = () => {
        
     };
    return(
        <>
        <Title className='product-manage' level={3}>Product Manage
        <Button onClick={showModalAdd} type="primary" className='add-product' danger>
            Add
        </Button>
        </Title>
        
        <Table columns={columns} dataSource={data} onChange={onChange} />
        {/* Modal edit */}
        <EditProduct  curentDataEdit = {curentDataEdit} showModal = {showModal} visible={isModalVisible}  editProductHandle = {editProductHandle} onCancel={handleCancel} />
        <AddProduct visible ={isModalAddVisible} addProductHandle = {addProductHandle}  onCancel={handleCancelAdd} />
        </>
    )
    };
