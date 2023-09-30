import React from 'react'
import { useParams } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap'
import { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import ProductsCard from '../components/ProductsCard'

const ProductDetails = () => {
const {url} =useParams();
const [productitem] = useContext(ProductContext);
{
  productitem.map((item:any, index:any) => {
      return <ProductsCard 
      title={item.title} price={item.price}
       img={item.img} key={item.id} 
       alldata={item} url={item.id} desc={item.desc} allItem={item} />
  })
}
const productdetails = productitem.find((p:any) => p.id ==url);
  return (
    <section className='productdetails'>
    <div className="container col-xxl-8 px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src={productdetails.img} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">{productdetails.title}</h1>
        <p className="lead">{productdetails.desc}</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
     <LinkContainer to='/allproducts' className="btn btn-danger btn-lg px-4 me-md-2">
     <button type="button" className="btn btn-danger btn-lg px-4 me-md-2">Exit</button>
     </LinkContainer>  
     <LinkContainer to='/contact'>
     <button type="button" className="btn btn-outline-secondary btn-lg px-4">Buy now</button>
     </LinkContainer> 
       
        </div>
      </div>
    </div>
  </div>
    
    </section>
  )
}

export default ProductDetails