import React, { useContext} from 'react'
import {valueContext } from './Component1'

const Component4: React.FC = () => {
    let value = useContext(valueContext)
    console.log(value);
    return (
        <>
            <p> {value}</p>
        </>)
}
export default Component4