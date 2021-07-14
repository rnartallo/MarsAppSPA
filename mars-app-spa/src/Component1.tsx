import React, { createContext, useState } from "react";
import Component2 from "./Component2"
import Component3 from "./Component3";

export const valueContext = createContext({count:0,click: ()=>{} });



const Component1: React.FC = () => {
    const Provider = valueContext.Provider;
    const [count, setCount] = useState(0)

    function click(){
        setCount(count+1);
    }

    return (
        <>
        <Provider value={{count, click}}>
            <Component2 />
            <Component3 />
        </Provider>

        </>)
}
export default Component1
