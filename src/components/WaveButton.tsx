"use client";
import { useState } from 'react';
import styles from './WaveButton.module.scss';

interface WaveButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  style?: React.CSSProperties;
}

export const WaveButton = ({
  onClick,
  disabled = false,
  children,
  type = 'button',
  className = '',
  style,
}: WaveButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleMouseDown = () => setIsPressed(true);
  const handleMouseUp = () => setIsPressed(false);
  const handleMouseLeave = () => setIsPressed(false);

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${styles.waveButton} ${isPressed ? styles.pressed : ''} ${disabled ? styles.disabled : ''} ${className}`}
      style={style}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      <span className={styles.content}>
        {children}
      </span>
    </button>
  );
};
