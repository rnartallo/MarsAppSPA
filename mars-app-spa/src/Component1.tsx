import React, { createContext, useState } from "react";
import Component2 from "./Component2"
import Component3 from "./Component3";


export const valueContext = createContext({ value: 0, setValue: IDK ndefined);



const Commponent1: React.FC = () => {
    const Provider = valueContext.Provider;
    const [value, setValue] = useState(0);
    let pass = { value, setValue }
    return (
        <>
            <Provider value={pass}
            <Component2 />
            <Component3 />
        </Provider>

        </>)
}
export default Commponent1
