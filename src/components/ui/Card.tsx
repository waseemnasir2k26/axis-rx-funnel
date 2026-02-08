import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export default function Card({
  children,
  className = '',
  hover = false,
  glow = false,
}: CardProps) {
  return (
    <motion.div
      className={`
        rounded-axis-lg bg-white p-6 md:p-8 shadow-soft border border-accent-silver/30
        ${glow ? 'ring-2 ring-royal-blue/20 shadow-glow' : ''}
        ${hover ? 'transition-all duration-300 hover:shadow-glow hover:-translate-y-1' : ''}
        ${className}
      `}
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : undefined}
    >
      {children}
    </motion.div>
  );
}
