import { useState } from 'react';

import { AppButton } from '@todo/ui';

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', alignItems: 'center' }}>
            <span>
                <AppButton onClick={() => setCount(count - 1)}>-</AppButton>
            </span>
            <h2>{count}</h2>
            <span>
                <AppButton onClick={() => setCount(count + 1)}>+</AppButton>
            </span>
        </div>
    );
};

export default Counter;
