// import React,{useState,useMemo,useEffect} from 'react';


// export default function App(){
//   const [number,setnumber] = useState(0)
//   const [dark,setDark] = useState(false)
//   const doubleNumber = useMemo(() =>{
//     return slowfunction(number)
//   },[number])
//   const themeStyles = useMemo(() =>{
//     return{
//       backgroudcolor:dark ? 'black' : 'white',
//       color:dark? 'white': 'black'

//     }
//   },[dark])
//   useEffect(() =>{
//     console.log('Theme Changed')
//   }, [themeStyles])

//   return (
//     <>
//       <input type='number' value={number} onChange={e => setNumber(parseInt
//         (e.target.value))} />
//       <button onClick={() => setDark(preDark=> !prevDark)}> Change THeme</button>
//       <div style={themeStyles}>{doubleNumber}</div>
//     </>
//   )

// }

// function slowfunction(num){
//   for (let i = 0 ,i <= 100000;i++){}
//   return num * 2
// }

import React,{useState,useMemo,useEffect} from 'react';


export default function App(){
  const [number,setnumber] = useState(0)
  const [dark,setDark] = useState(false)
  const doubleNumber = useMemo(() =>{
    return slowfunction(number)
  },[number])
  const themeStyles = useMemo(() =>{
    return{
      backgroudcolor:dark ? 'black' : 'white',
      color:dark? 'white': 'black'

    }
  },[dark])
  useEffect(() =>{
    console.log('Theme Changed')
  }, [themeStyles])

  return (
    <>
      <input type='number' value={number} onChange={e => setNumber(parseInt
        (e.target.value))} />
      <button onClick={() => setDark(preDark=> !prevDark)}> Change THeme</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  )

}

function slowfunction(num){
  for(let i = 0 ;i <= 1000000000;i++){}
  return num * 2
}