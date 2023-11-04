// Dot.js
import React, {useEffect, useLayoutEffect, useRef} from 'react';
import '../styles/Dot.css'; // Import the CSS for styling
import gsap from 'gsap';

function Dot({ x, y }) {
    const dotRef = useRef();

    //Fires after all DOM mutations
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to(dotRef.current, {
                x: Math.random() * 50,
                y: Math.random() * 50,
                repeat: -1, //indefinitely
                ease: "none",
                duration: 4,
            });
        });

        return () => ctx.revert();
    }, []);
    
  const dotStyle = {
    left: `${x}%`,
    top: `${y}%`,
  };

  return (<div ref={dotRef} className="dot" style={dotStyle}/>)
}

export default Dot;
