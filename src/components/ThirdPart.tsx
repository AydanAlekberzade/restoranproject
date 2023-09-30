import React from 'react'
import { LangContext } from "../context/LangContext";
import { useContext } from "react";
const ThirdPart = () => {
  const [lang] = useContext(LangContext)
  return (
    <div className='thirdpart'>
      {lang === "en" ? (
        <>
<p className='text-center '>SOUL KITCHEN, founded in 2022, is dedicated to all those who love to <br />
 wander far and wide. We invite you on a wholesome culinary <br />
 adventure, where you’ll explore undiscovered gourmet experiences.</p>

<p className='text-center'>Thank you for creating lasting memories with us.</p>
</>
      ) : (
<>
<p className='text-center '>2022-ci ildə qurulan SOUL KITCHEN bütün sevənlərə həsr olunub <br />
uzaq və geniş gəzmək. Sizi faydalı kulinariyaya dəvət edirik <br />
kəşf edilməmiş macəralı təcrübələrinizi kəşf edəcəyiniz məkan..
</p>

<p className='text-center'>Bizimlə qalıcı xatirələr yaratdığınız üçün təşəkkür edirik.</p>
</>
      )}
    </div>
  )
}

export default ThirdPart