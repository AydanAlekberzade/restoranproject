import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBlog } from '../../redux/action/blogAction';
import { Button, Table } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { RootState } from '../../redux/store/configureStore';
import { ProductContext } from '../../context/ProductContext';

const Dashboard: React.FC = () => {
  const blogs = useSelector((state: RootState) => state.blog); 
  const dispatch = useDispatch();

const [productitem] =useContext(ProductContext)
  useEffect(()=>{
    console.log(productitem);
    
  },[])
  return (
    <div className='dashboard'>
      <h1 className="text-center ">Admin Panel</h1>
      <LinkContainer to="/admin/dashboard/add">
        <Button variant="dark" className="bitn mb-3">
          Add Your Meal
        </Button>
      </LinkContainer>
      <Table className='mt-3' striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Meal photo</th>
            <th>Meal Name</th>
            <th>Meal desc</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {productitem.map((item: any, index: number) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>
                <img width={100} src={item.img} alt="" />
              </td>
              <td>{item.title.substring(0, 30)}...</td>
              <td>{item.desc.substring(0, 30)}...</td>
              <td>
                <LinkContainer to={`/admin/dashboard/edit/${item.id}`}>
                  <Button variant="warning">Edit</Button>
                </LinkContainer>
              </td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => {
                    dispatch(removeBlog({ comingid: item.id }));
                  }}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Dashboard;
