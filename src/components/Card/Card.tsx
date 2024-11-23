import { useState } from 'react';
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from 'motion/react';
import styles from './Card.module.scss';

export default function Card(props: any) {
  const [show, setShow] = useState<boolean>(true);
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-50, 0, 50], [0, 1, 0]);
  const rotate = useTransform(x, [-150, 150], [-15, 15]);

  const handleDragEnd = (): void => {
    if (Math.abs(x.get()) > 50) {
      setShow(!show);
    };
  };

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          onDragEnd={handleDragEnd}
          className={styles.card}
          drag='x'
          exit={{ opacity: 0 }}
          dragConstraints={{ left: 0, right: 0 }}
          style={{ x, opacity, rotate }}
        >
          <img
            className={styles.card__img}
            src={props.card.url}
            draggable='false'
          />
          <div className={styles.card__info}>
            <h2>Sakura</h2>
            <p>Tokyo, Japan</p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};