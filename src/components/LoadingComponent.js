import React from 'react';
import { SpinnerInfinity } from 'spinners-react';

function LoadingComponent() {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <SpinnerInfinity
                size={70}
                thickness={180}
                speed={100}
                color="rgba(172, 136, 57, 1)"
                secondaryColor="rgba(57, 172, 161, 0.5)"
            />
        </div>
    );
}

export default LoadingComponent;
