import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styles from "./style.module.scss"

const AnimatedCursor = () => {
  const coords = useRef({ x: 0, y: 0 });
  const cursorRef = useRef(null);
  const circlesRef = useRef([]);
  const controls = useAnimation();

  useEffect(() => {
    circlesRef.current = document.querySelectorAll(".circle");

    circlesRef.current.forEach((circle, index) => {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = "white";
    });

    const handleMouseMove = (e) => {
      coords.current.x = e.clientX;
      coords.current.y = e.clientY;
    };

    const animateCircles = () => {
      let x = coords.current.x;
      let y = coords.current.y;

      controls.start({
        x: x,
        y: y,
      });

      circlesRef.current.forEach((circle, index) => {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";
        circle.style.transform = `scale(${(circlesRef.current.length - index) / circlesRef.current.length})`;

        circle.x = x;
        circle.y = y;

        const nextCircle = circlesRef.current[index + 1] || circlesRef.current[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });

      requestAnimationFrame(animateCircles);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animateCircles();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [controls]);

  return (
    <>
      <motion.div
        className={styles.cursor}
        ref={cursorRef}
        animate={controls}
        initial={{ x: -50, y: -50 }}
      >
        {[...Array(20)].map((_, index) => (
          <div key={index} className={styles.circle}></div>
        ))}
      </motion.div>
    </>
  );
};

export default AnimatedCursor;
