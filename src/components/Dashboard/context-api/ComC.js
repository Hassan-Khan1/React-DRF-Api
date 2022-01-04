import React   from 'react';
import { FirstName ,LastName} from '../../../App';

const ComCC = () =>{
  return (
  <>
    <FirstName.Consumer>
      {(fname) => {
        return (
          <LastName.Consumer>
            {(lanme) => {
              return (
                <h1>
                  My Name is {fname} {lanme}
                </h1>
              )
            }}
          </LastName.Consumer>
        )
      }}
    </FirstName.Consumer>
  </>
  );
};

export default  ComCC


