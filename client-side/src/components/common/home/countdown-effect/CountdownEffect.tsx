import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./CountdownEffect.module.scss";

const CountdownEffect = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let current = 0;
    const increment = value / 50;
    const interval = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, 30);

    return () => clearInterval(interval);
  }, [isInView, value]);

  return (
    <motion.p ref={ref} className={styles.number}>
      {count}+
    </motion.p>
  );
};

export default CountdownEffect;
