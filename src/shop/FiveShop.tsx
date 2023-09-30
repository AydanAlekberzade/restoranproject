import React, { useContext } from 'react';
import { LangContext } from '../context/LangContext';

const FiveShop = () => {
  const [lang] = useContext(LangContext)
  return (
    <section className='fiveshop'>
    
      <div className="content">
        {lang === "en" ? (
          <>
        <h1>SoulKitchen in</h1>
        <h2>Your Soul</h2>
        <p className='mt-5 text-center'>Our asian specialities from Ramen to Miso Beef <br />
          are prepared in our kitchen with only the best ingredients and filled into containers. They can be <br /> stored in the fridge for up to 3 months.</p>
      </>
      ) : (
          <>
          <h1>SoulMətbəx</h1>
          <h2>Ruhunuzda</h2>
          <p className='mt-5 text-center'>Ramendən Miso Mal ətinə qədər Asiya spesiyalitələrimiz<br />
          mətbəximizdə yalnız ən yaxşı inqrediyentlərlə hazırlanır və qablara doldurulur. Onlar ola bilər <br /> soyuducuda 3 aya qədər saxlanılır.</p>
            </>

        )}
    
    
    </div>
    </section>
  );
};

export default FiveShop;
