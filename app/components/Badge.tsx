import React, { useState } from 'react';
import '@/styles/components/_badge.scss';

interface BadgeProps {
  text: string;
  color?: string;
  onDismiss?: () => void;
}

const Badge: React.FC<BadgeProps> = ({ text, color = 'gray', onDismiss }) => {
  const [dismissed, setDismissed] = useState(false);

  const handleDismiss = () => {
    setDismissed(true);
    if (onDismiss) {
      onDismiss();
    }
  };

  if (dismissed) {
    return null; // Render nothing if dismissed
  }

  return (
    <span className={`badge bg-blue`}>
      <span>{text}</span>
      <button onClick={handleDismiss}>X</button>
    </span>
  );
};

export default Badge;
