// import React, {createContext} from "react";



// const BioData = createContext();

// const ComA = () => {
//     return (
//         <BioData.Provider value={"Hassan Khan"}>
//         </BioData.Provider>
//     )
// }

// export default ComA
// export { BioData};

import React, { useContext }   from 'react';
import { FirstName ,LastName } from '../../App';


const ComCOnt = () =>{

  const fname = useContext(FirstName);
  const lname = useContext(LastName);

  return (
    <h1>
      My name is {fname} {lname}
    </h1>
  );
};

export default  ComCOnt


