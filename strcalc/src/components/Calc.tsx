import React, { useState } from 'react'
import { addNumbers } from '../utils/calculator';

const Calc = () => {
    const [val, setVal] = useState<string>("");
    const [result, setResult] = useState<number>();

    const handleClick = () => {
        const res = addNumbers(val);
        setResult(res);
    }

    return (
        <>
            <div style={{ height: '40vmin' }}>
                <div className='d-flex align-items-center justify-content-between'>
                    <input onChange={(e) => setVal(e.target.value)} style={{ marginRight: '10px' }} />
                    <button style={{ marginLeft: '10px' }} onClick={handleClick}>Submit</button>
                </div>
                <div className='mt-3'>
                    <label className='d-flex align-items-center justify-content-center'>{result}</label>
                </div>
            </div>
        </>
    )
}

export default Calc;
