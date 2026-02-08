import { motion } from 'framer-motion';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'outline';
  className?: string;
}

export default function Badge({
  children,
  variant = 'default',
  className = '',
}: BadgeProps) {
  const variants = {
    default: 'bg-royal-blue text-white',
    success: 'bg-green-600 text-white',
    outline: 'border-2 border-royal-blue text-royal-blue bg-transparent',
  };

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-axis font-satoshi font-bold text-sm uppercase tracking-wide ${variants[variant]} ${className}`}
    >
      {children}
    </motion.span>
  );
}
