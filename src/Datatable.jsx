import { Space, Table, Tag } from 'antd';
import {  useNavigate } from 'react-router-dom';
import Edit from './Edit';


const Datatable = ({datatable}) => {
    const Navigate = useNavigate();

    function handleDelete(index){
        const updatedData = [...datatable]; // Create a copy to avoid mutation
        updatedData.splice(index, 1);
    }

    function handleEdit(index){
        Navigate(`/edit/${index}`)
    }

    const columns = [
        {
          title: 'name',
          dataIndex: 'name',
          key: 'name',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Action',
          key: 'action',
          render: (_, record, index) => (
            <Space size="middle">
              <button onClick={()=>handleEdit(index)}>Edit</button>
              <a onClick={handleDelete(index)}>Delete</a>
            </Space>
          ),
        },
      ];


    return <>
                <Table columns={columns} dataSource={datatable} />
                {/* <p>{datatable[0].names}</p> */}
        </>
}

export default Datatable;