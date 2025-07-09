import React from 'react';

interface OptimalParagraphProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  maxWidth?: string;
}

export const OptimalParagraph: React.FC<OptimalParagraphProps> = ({ 
  children, 
  className = '', 
  style = {}, 
  maxWidth = '60ch'
}) => {
  const paragraphStyle = {
    maxWidth,
    wordWrap: 'normal' as const,
    overflowWrap: 'normal' as const,
    wordBreak: 'keep-all' as const,
    hyphens: 'manual' as const,
    lineHeight: '1.6',
    ...style
  };

  return (
    <p className={className} style={paragraphStyle}>
      {children}
    </p>
  );
};

// Alternative with different max widths for different use cases
export const NarrowParagraph: React.FC<OptimalParagraphProps> = (props) => (
  <OptimalParagraph {...props} maxWidth="45ch" />
);

export const WideParagraph: React.FC<OptimalParagraphProps> = (props) => (
  <OptimalParagraph {...props} maxWidth="75ch" />
);

// Default export for easy importing
export default OptimalParagraph;
