import React, { useEffect, useState } from 'react'

const ClickCounter: React.FC = () => {
    let [value, setValue] = useState(1);
    useEffect(() => {
        setValue(Number(localStorage.getItem('item')))
    }, [])
    return (
        <>
            <p>{value} people liked the image</p>
            <button onClick={() => {
                setValue(value + 1);
                value += 1;
                localStorage.setItem('item', String(value));
            }}> Did you like the image? </button >
            <button onClick={() => {
                setValue(0);
                value = 0;
                localStorage.setItem('item', String(value));
            }}>Reset the likes</button>

        </>

    );
};
export default ClickCounter