import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', alignItems: 'center' }}>
            <span>
                <button onClick={() => setCount(count - 1)}>-</button>
            </span>
            <h2>{count}</h2>
            <span>
                <button onClick={() => setCount(count + 1)}>+</button>
            </span>
        </div>
    );
};

export default Counter;
