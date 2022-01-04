import React, { useRef, } from "react";


function RefTutorial() {
    const inputRef = useRef(null);

    const onClick = () =>{
        // inputRef.current.value = "";
        console.log(inputRef.current.value)

    };
    return(
        <div>
            <h1>Use Ref</h1>
            <input type="text" placeholder="Ex..." ref={inputRef} />
            <button onClick={onClick}>Change NAmes</button>

        </div>
    );
}


export default RefTutorial;