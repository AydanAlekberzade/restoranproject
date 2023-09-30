import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { productType } from "../config";


interface propType {
    children:any
}

export const  ProductContext = createContext<any>(null);
export const ProductProvider = (props:propType)=>{
        const [productitem,setProductitem] = useState<productType[]>([]);
        useEffect(()=>{
            axios
            .get('https://mocki.io/v1/1bd07270-37f9-4ae3-8ef3-93aa7f1f8da4')
            .then((res:any)=>{setProductitem(res.data)})
    },[])

    return <ProductContext.Provider value={[productitem,setProductitem]}>
            {props.children}
    </ProductContext.Provider>
    
  }