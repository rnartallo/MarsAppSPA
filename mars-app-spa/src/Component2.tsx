
import React, { createContext, useContext, useEffect, useState } from 'react'
import { valueContext } from './Component1';


const Component2: React.FC = () => {
    let {count,click} = useContext(valueContext)
    return (
        <>
            <button onClick={
                () => {
                    click();
                }
            }>Press me to apply context</button>
        </>)
}
export default Component2
