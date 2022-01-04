import React,{useState} from 'react';



const StateTutorial = () => {
  const[counter,setcounter ] = useState(0);

  const increment = () => {
    setcounter( counter +1);
    console.log(counter);
  };
  return (
    <div>
      {counter}
      <button onClick={increment}>Increment</button>
    </div>
  );
};
export default StateTutorial;


// const StateTutorial1 = () => {
//   const [inputValue,setinputValue] = useState('Perdo')
//   // const[counter,setcounter ] = useState(0);

//   let onchange =(event) =>{
//   const newvalue =event.target.value;
//   setinputValue(newvalue)
//   // const inrecment = () => {
//   //   setcounter( counter +1);
//   //   console.log(counter);
//   };
//   return (
//     <div>
//       <input placeholder='Enetr Something' onChange={onchange} />
//       {inputValue}
//       {/* {counter}
//       <button onClick={inrecment}>Inrecment</button> */}
//     </div>
//   );
// };
// export default StateTutorial1;
