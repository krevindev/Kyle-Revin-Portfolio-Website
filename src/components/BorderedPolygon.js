import React from 'react';

const BorderedPolygon = ({ points, width, height, borderColor, backgroundColor, children }) => {
    const containerStyle = {
        width: width,
        height: height,
        position: 'relative'
    };

    const svgStyle = {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0
    };

    return (
        <div className='poly' style={containerStyle}>
            <svg viewBox={`0 0 ${width} ${height}`}>
                <polygon points={points} fill={backgroundColor} stroke={borderColor} strokeWidth="1" />
            </svg>
            <div style={svgStyle}>
                <svg viewBox={`0 0 ${width} ${height}`}>
                    <polygon id='test-poly' points={points} fill="none" stroke={borderColor} strokeWidth="1" />
                </svg>
            </div>
            {children}
        </div>
    );
};

export default BorderedPolygon;
