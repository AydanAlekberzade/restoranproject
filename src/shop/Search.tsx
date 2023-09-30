import React, { useContext, useState } from 'react';
import { ProductContext } from '../context/ProductContext';
import ProductsCard from '../components/ProductsCard';
import { LangContext } from '../context/LangContext';

const Search: React.FC = () => {
  const [ productitem ] = useContext(ProductContext);
  const [query, setQuery] = useState<string>();
  const [lang] = useContext(LangContext)

  return (
    <div className='d-flex align-items-center justify-content-center flex-column'>
      <h1 className='text-center mt-5' style={{color:"whitesmoke",fontSize:"30px"}}> {lang === "en" ? "Search Products" : "Məhsulu seçin "}</h1>

      <div className='col-6 mt-4'>
        <div className='input-group mb-3'>
          <input
            onChange={(e) => setQuery(e.target.value)}
            type='text'
            className='form-control'
            placeholder="Recipient's username" 
            aria-label="Recipient's username"
            aria-describedby='basic-addon2'
          />
          <div className='input-group-append'>
            <button className='btn btn-outline-secondary' type='button'>
             {lang === "en" ? "  Click" : "Klik et"}
            </button>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row g-5'>
          {productitem
            .filter((fd:any) => fd.title.toLowerCase().includes(query))
            .map((item:any, index:any) => (
              <ProductsCard
              key={item.id}
              alldata={item}
              desc={item.desc}
              price={item.price}
              img={item.img}
              title={item.title}
              url={item.id}
              allItem={item}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Search;

