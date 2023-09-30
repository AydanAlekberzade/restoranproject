import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { LinkContainer } from 'react-router-bootstrap';
import { useCart } from 'react-use-cart';
import { ToastContainer, toast } from 'react-toastify';
import { useWishlist } from 'react-use-wishlist';
import 'react-toastify/dist/ReactToastify.css';
import { LangContext } from '../context/LangContext';
import {useContext} from 'react';
interface MySingleCardProps {
    url:any;
    img:string;
    title:string;
    price:number;
    desc:string;
    alldata:any;
    allItem:any;
}

// const {addItem} =useWishlist()
const noti=()=> toast.success('Added To Wishlist', {
  position: "bottom-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
  });

 

function ProductsCard({img,title,price,desc,url,alldata,allItem }:MySingleCardProps) {
  const {addItem} =useCart();
  const {addWishlistItem} = useWishlist();

  const handleWish =()=>{
    addWishlistItem(allItem)
    noti()
  }

  const notify = ()=>toast.success("Added products",{
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

const [lang] =useContext(LangContext);
  return (
    <div className='col-lg-3 p-3 mt-'>
   <Card className='mycard'>
      <Card.Img variant="top" src={img} />
      <Card.Body >
        <Card.Title className='cardtitle' style={{color:"whitesmoke"}}>{title}</Card.Title>
        <Card.Title className='cardtitle' style={{color:"whitesmoke"}}>{price}.00$</Card.Title>
      
   <LinkContainer to={`/shop/${url}`}>
   <Button variant="secondary" className='menimbutond mt-3' style={{marginLeft:"20px"}}> {lang === "en" ? "DISCOVER" : "Daha Ətraflı"}</Button>
   </LinkContainer>
      <Button variant="secondary" className='thisbuton mt-3' style={{marginLeft:"20px"}} onClick={()=>{addItem(alldata); notify()}} > {lang === "en" ? "Add To Cart" : "Səbətə əlavə ət"}</Button>
   <Button onClick={handleWish} className='btn heartbtn mt-2'><i className="fa-regular fa-heart"></i></Button>
  <ToastContainer/>
      </Card.Body>
    </Card>


    </div>


  )
}

export default ProductsCard