import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FiMousePointer } from 'react-icons/fi';
import LottieAnim from './LottieAnim';
import { clsx } from 'clsx';

const TiltCard = ({ title, color }: { color: string, title: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ['17.5deg', '-17.5deg']
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ['-17.5deg', '17.5deg']
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: 'preserve-3d',
      }}
      className={clsx('relative h-96 w-72 mx-auto rounded-xl', color)}
    >
      <div
        style={{
          transform: 'translateZ(75px)',
          transformStyle: 'preserve-3d',
        }}
        className="absolute inset-4 p-4 gap-4 grid place-content-center rounded-xl bg-primary-foreground shadow-lg"
      >
        <div
          style={{
            transform: 'translateZ(75px)',
          }}
          className="mx-auto text-4xl rounded-lg overflow-hidden shadow-lg"
        >
          <LottieAnim />
        </div>

        <p
          style={{
            transform: 'translateZ(50px)',
          }}
          className="text-center text-2xl "
        >
          {title}
        </p>
      </div>
    </motion.div>
  );
};

export default TiltCard;
