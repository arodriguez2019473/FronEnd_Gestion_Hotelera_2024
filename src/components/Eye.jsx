import React, { useState } from 'react';
import './css/Eye.css';

export const Eye = () => {
    const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });
    const eyeRef = React.useRef(null);

    const handleMouseMove = (event) => {
        const eyeRect = eyeRef.current.getBoundingClientRect();
        const eyeCenterX = eyeRect.left + eyeRect.width / 2;
        const eyeCenterY = eyeRect.top + eyeRect.height / 2;

        const mouseX = event.clientX;
        const mouseY = event.clientY;

        const deltaX = mouseX - eyeCenterX;
        const deltaY = mouseY - eyeCenterY;

        const maxDist = Math.sqrt((eyeRect.width / 2) ** 2 + (eyeRect.height / 2) ** 2);
        const distance = Math.min(maxDist, Math.sqrt(deltaX ** 2 + deltaY ** 2));

        const angle = Math.atan2(deltaY, deltaX);
        const ballX = eyeCenterX + distance * Math.cos(angle);
        const ballY = eyeCenterY + distance * Math.sin(angle);

        setEyePosition({ x: ballX - eyeRect.left, y: ballY - eyeRect.top });
    }

    return (
        <div className="eye" ref={eyeRef} onMouseMove={handleMouseMove}>
            <div className="shut">
                <span></span>
            </div>
            <div className="ball" style={{ left: eyePosition.x, top: eyePosition.y }}></div>
        </div>
    );
}
