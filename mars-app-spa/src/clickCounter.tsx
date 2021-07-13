import React, { useState } from 'react'

const ClickCounter: React.FC = () => {
    const [value, setValue] = useState(1);
    return (
        <div>
            <p>{value}</p>
            <button onClick={() => setValue((value + 1))}> Click here! </button >
        </div >
    );
};
export default ClickCounter