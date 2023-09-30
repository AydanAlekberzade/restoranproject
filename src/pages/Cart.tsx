import { Button} from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { ToastContainer, toast } from 'react-toastify';
import { useCart } from 'react-use-cart';
import 'react-toastify/dist/ReactToastify.css';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { LangContext } from '../context/LangContext';
import Modal from "react-bootstrap/Modal";

const Cart = () => {
  const { items, updateItemQuantity, isEmpty, removeItem, cartTotal } = useCart();

const notif = ()=>{ toast.error('Product was deleted..', {
    position: "bottom-right",
    autoClose: 4949,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
}

const navigate = useNavigate();
const [show, setShow] = useState(false);

const handleShow = () => {
  if (localStorage.getItem("admin") !== null) {
    setShow(true);
  } else {
    navigate("/admin");
  }
};

const handleClose = () => {
  localStorage.removeItem("react-use-cart");
  window.location.reload();
  setShow(false);
};



const [lang] = useContext(LangContext);
  return (
    <div className='cart'>
      {isEmpty ? (
        <div className='d-flex justify-content-center align-items-center'>
          <img src='https://media4.giphy.com/media/fscIxPfKjPyShbwUS5/giphy.gif?cid=790b7611912ad2ba2721459fb7cf39ade5cea1e8414760ac&rid=giphy.gif&ct=s' />
        </div>
      ) : (
        <>
          <h1 className='text-center '>Products</h1>
          <Table className='container tablem mt-5' striped bordered hover>
            <thead>
              <tr style={{color:"violet"}}>
                <th>#</th>
                <th>Photo</th>
                <th>Title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody >
              {items.map((item, c) => {
                return (
                  <tr key={item.id}>
                    <td>{c + 1}</td>
                    <td>
                      <img width={50} src={item.img} alt={item.title} />
                    </td>
                    <td>{item.title}</td>
                    <td>{(item.price * (item.quantity ?? 0)).toFixed(2).toString()}$</td>
                    <td>
                      <Button onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) - 1)}>-</Button>
                      <span className='mx-2'>{item.quantity ?? 0}</span>
                      <Button onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) + 1)}>+</Button>
                    </td>
                    <td>
                      <Button variant='danger' onClick={() => {removeItem(item.id); notif()}}>
                        X
                      </Button>
                      <ToastContainer/>

                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <h4 className='mt-5'>Total Price:{cartTotal.toFixed(2).toString()} $</h4>

          <Button   variant="outline-success" onClick={handleShow} className="buttof mt-3">
              {lang === "az" ? "Satın Al" : "Buy"}
            </Button>
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
              
            >
            <Modal.Body style={{'color':'black'}} className='text-center'>Shopping successfully completed!</Modal.Body>
              <Modal.Footer>
                <Button variant="dark" onClick={handleClose}>
                  <i className="fa-solid fa-check"></i>
                </Button>
              </Modal.Footer>
            </Modal>
        </>
      )}
    </div>
  );
};

export default Cart;





