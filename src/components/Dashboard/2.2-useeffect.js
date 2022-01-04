import React,{useEffect, useState} from 'react';



const UseEffect2 = () => {
  const[coutn,setcoutn ] = useState(0);


  useEffect(() => {
     document.title = `Chats (${coutn})`
    //  console.log(s)
  });

  console.log('Hello Outside')

//   };
  return (
    <div>
      <h1>{coutn}</h1>
      <button className='btn' onClick={() => setcoutn(coutn + 1)}>Inrecment</button>
      <h1>Hello Use-Effetc</h1>
    </div>
  );
};
export default UseEffect2;

