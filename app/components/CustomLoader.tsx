import Image from 'next/image';
import React from 'react'
import { LoaderIcon } from 'react-hot-toast';

interface CustomPanelProps {
    loading: boolean;
}

interface CustomLoaderProps {
    loading: boolean;
}

export default function CustomLoader({ loading }: CustomLoaderProps) {
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

export const CustomPanel = ({ loading }: CustomPanelProps) => {
    return (
        loading && <div style={{
            justifyContent: 'center',
            width: "400px",
            height: "400px",
            paddingBottom: 10,
            backgroundColor: 'rgba(0,0,0,0.3)',
            // position: 'absolute',
            // top: 0, bottom: 0,
            // right: 0, left: 0
        }} />
    );
}

const loaderStyle: React.CSSProperties | undefined = {
    backgroundColor: 'transparent',
    position: 'absolute',
    width: window.innerWidth,
    height: window.innerHeight,
    justifyContent: 'center',
    alignItems: 'center',
}
