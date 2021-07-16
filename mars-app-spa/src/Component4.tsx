import React, { useContext} from 'react'
import {valueContext } from './Component1'

const Component4: React.FC = () => {
    let {count} = useContext(valueContext)
    console.log(count);
    return (
        <>
            <p> {count}</p>
        </>)
}
export default Component4