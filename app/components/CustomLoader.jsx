import Image from 'next/image';
import React from 'react'

export default function CustomLoader({ loading }) {
    return (
        loading && <div style={loaderStyle}>
            <Image
                src="/gif/loading.gif"
                alt='loading'
                width={80} height={80}
                style={{ width: "80px", height: "80px" }}
            />
        </div>
    )
}

export const CustomPanel = ({ loading }) => {
    return (
        loading && <div style={{
            justifyContent: 'center',
            width: "400px",
            height: "400px",
            paddingBottom: 10,
            backgroundColor: 'rgba(0,0,0,0.3)',
        }} />
    );
}

const loaderStyle = {
    backgroundColor: 'transparent',
    position: 'absolute',
    width: window.innerWidth,
    height: window.innerHeight,
    justifyContent: 'center',
    alignItems: 'center',
}
