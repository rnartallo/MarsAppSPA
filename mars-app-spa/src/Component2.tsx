
import React, { createContext, useContext, useEffect, useState } from 'react'
import { valueContext } from './Component1';


const Component2: React.FC = () => {
    let { value, setValue } = useContext(valueContext)
    return (
        <>
            <button onClick={
                () => {
                    setValue(value + 1);
                    value += 1;
                    // <valToPass.Provider value={value} />
                }
            }></button>
            <button />
        </>)
}
export default Component2
