import  { useState } from 'react';
import ProductsCard from '../components/ProductsCard';

type Meal = {
    id: number;
    price: number;
   img:any;
   title:any;
   desc: any;

  };
const Filter = () => {
    
    const [meals, setMeals] = useState<Meal[]>([
        {
            "id":1,
             "img":"https://soulkitchen.redsun.design/dark/wp-content/uploads/sites/3/2020/03/scallops2.jpg",
            "title":"SEARED SCALLOPS",
            "price":9.00,
            "desc":"Seared scallops marinated in ponzu sauce and fresh herbs with fleur de sel. No artiﬁcial ﬂavors and no preservatives."
        },
        {
            "id":2,
            "img":"https://soulkitchen.redsun.design/dark/wp-content/uploads/sites/3/2020/05/soysauce3.jpg",
            "title":"DARK SOY SAUCE",
            "price":8.00,
            "desc":"This soy sauce is fermented and aged in 100-year-old barrels to produce a rich, complex flavor that’s smooth and mellow."
        },
        {
            "id":3,
            "img":"https://soulkitchen.redsun.design/dark/wp-content/uploads/sites/3/2020/01/salmon3.jpg",
            "title":"SEARED SALMON",
            "price":12.00,
            "desc":"Seared salmon marinated in ponzu sauce and fresh herbs with fleur de sel"
        },
        {
            "id":4,
            "img":"https://soulkitchen.redsun.design/dark/wp-content/uploads/sites/3/2020/01/giftcard.jpg",
            "title":"SOUL KITCHEN GIFT CARD",
            "price":25.000,
            "desc":"The perfect gift for food lovers."
        },
        {
            "id":5,
            "img":"https://soulkitchen.redsun.design/dark/wp-content/uploads/sites/3/2020/08/shrimp.jpg",
            "title":"GARLIC SHRIMP",
            "price":12.00,
            "desc":"Garlic shrimp marinated in lemon soy sauce and fresh herbs with roasted sesame seeds"
        },
        {
            "id":6,
            "img":"https://soulkitchen.redsun.design/dark/wp-content/uploads/sites/3/2020/08/sauce-orange.jpg",
            "title":"GINGER CHILI SAUCE",
            "price":7.00,
            "desc":"Our Ginger Chili sacue combines the flavors of sweet red peppers with the heat of ginger and chilies. A versatile and beautiful blend of sweet and heat."
        },
        {
            "id":7,
            "img":"https://soulkitchen.redsun.design/dark/wp-content/uploads/sites/3/2020/01/spice_dark.jpg",
            "title":"FIVE SPICES POWDER (WU XIANG FEN)",
            "price":7.00,
            "desc":"Wu xiang fen or five-spice powder is a traditional spice blend originating from China. The number five refers to the five flavors that are represented in the blend – sweet, salty, bitter, sour, and umami.INGREDIENTS        Fennel Seeds – Cinnamon – Clove – Szechuan Pepper – Star Anise"
        },
        {
            "id":8,
            "img":"https://soulkitchen.redsun.design/dark/wp-content/uploads/sites/3/2020/01/shrimpdumpling.jpg",
            "title":"SHRIMP DUMPLING",
            "price":12.00,
            "desc":"Handmade steamed shrimp dumplings with chili oil, scallions and sesame sauce"
        },
        {
            "id":9,
           "img":"https://soulkitchen.redsun.design/dark/wp-content/uploads/sites/3/2020/08/chilioil-dark.jpg",
            "title":"SZECHUAN CHILI OIL",
            "price":9.00,
            "desc":"Our Szechuan Chili Oil combines the flavors of sweet red peppers with the heat of ginger and chilies. A versatile and beautiful blend of sweet and heat."
        },
        {
            "id":10,
            "img":"https://soulkitchen.redsun.design/dark/wp-content/uploads/sites/3/2020/01/giftdark.jpg",
            "title":"SOUL KITCHEN COOKING BOX",
            "price":36.00,
            "desc":"The Soul Kitchen cooking box includes fresh, pre-measured ingredients along with step-by-step instructions to make delicious dishes quickly and comfortably."
        },
        {
            "id":11,
            "img":"https://soulkitchen.redsun.design/dark/wp-content/uploads/sites/3/2020/01/matcha.jpg",
            "title":"MATCHA GREEN TEA POWDER",
            "price":35.00,
            "desc":"The Soul Kitchen Signature matcha green tea is a great way to start your own matcha ceremonies. Directly imported from Kyoto (Japan), it offers fresh and intense flavours"
        },
        {
            "id":12,
            "img":"https://soulkitchen.redsun.design/dark/wp-content/uploads/sites/3/2020/05/baos.jpg",
            "title":"VEGETARIAN BAOS",
            "price":8.00,
            "desc":"Vegetarian Baos filled with mushrooms, garlic and ginger, with teriyaki sauce"
        }
        
    ]); // data.json 
const [filteredMeals, setFilteredMeals] = useState<Meal[]>([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(40);

  const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(Number(event.target.value));
  };

  const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(Number(event.target.value));
  };

  const filterByPrice = () => {
    const filteredMeals = meals.filter((meal) => meal.price >= minPrice && meal.price <= maxPrice);
    setFilteredMeals(filteredMeals);
  };

 
  return (
    <>
    <div className='filterbuttons mt-3'>
      <input type="number"  value={minPrice} onChange={handleMinPriceChange} />
      <input type="number" value={maxPrice} onChange={handleMaxPriceChange} />
      <button style={{backgroundColor:"black", fontSize:"16px", marginLeft:"1px"}} onClick={filterByPrice}><i style={{color:"whitesmoke" , backgroundColor:"rgb(1,1,65)" , fontSize:"15px",}} className="fa-solid fa-repeat"></i></button>
    </div>




<div className="row g-0 mt-5">
       
        {filteredMeals.map((meal:any) => {
          return (
            <>
          

            <ProductsCard
            key={meal.id}
              alldata={meal}
              desc={meal.desc}
              price={meal.price}
              img={meal.img}
              title={meal.title}
              url={meal.id}
              allItem={meal}
            />
            
            </>
      
          );
        })}




      </div>
      </>
  );
};

export default Filter;




