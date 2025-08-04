import React from 'react';

export const H1 = ({
  children,
  color = "#23282B",
  style
}: {
  children: React.ReactNode;
  color?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <h1
      style={{
        color: color,
        ...style,
        fontSize: "2.5rem",
        fontWeight: 700,
        lineHeight: "3rem",
        letterSpacing: "0.85px",
        fontFamily: "Marianne",
      }}
    >
      {children}
    </h1>
  );
}

export const H2 = ({
  children,
  color = "#23282B",
  style
}: {
  children: React.ReactNode;
  color?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <h2
      style={{
        ...style,
        color: color,
        fontSize: "2rem",
        fontWeight: 700,
        lineHeight: "2.5rem",
        letterSpacing: "0.85px",
        fontFamily: "Marianne",
      }}
    >
      {children}
    </h2>
  );
};

export const H3 = ({
  children,
  color = "#23282B",
  style
}: {
  children: React.ReactNode;
  color?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <h3
      style={{
        ...style,
        color: color,
        fontSize: "1.75rem",
        fontWeight: 700,
        lineHeight: "2rem",
        letterSpacing: "0.85px",
        fontFamily: "Marianne",
      }}
    >
      {children}
    </h3>
  );
};

export const H4 = ({
  children,
  color = "#23282B",
  style
}: {
  children: React.ReactNode;
  color?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <h4
      style={{
        ...style,
        color: color,
        fontSize: "1.25rem",
        fontWeight: 700,
        lineHeight: "1.5rem",
        letterSpacing: "0.85px",
        fontFamily: "Marianne",
      }}
    >
      {children}
    </h4>
  );
};

export const SousTitre1 = ({
  children,
  htmlTag = 'p',
  color = "#23282B",
  style
}: {
  children: React.ReactNode;
  htmlTag?: 'p' | 'h2' | 'h3' | 'h4' | 'h5';
  color?: string;
  style?: React.CSSProperties;
}) => {
  const styles = {
    ...style,
    color: color,
    fontSize: "1.25rem",
    fontWeight: 400,
    letterSpacing: "0.85px",
    fontFamily: "Marianne",
    textTransform: "uppercase",
    margin: "0"
  };

  return React.createElement(htmlTag, { style: styles }, children);
};

export const SousTitre2 = ({
  children,
  htmlTag = 'p',
  color = "#23282B",
  style
}: {
  children: React.ReactNode;
  htmlTag?: 'p' | 'h2' | 'h3' | 'h4' | 'h5';
  color?: string;
  style?: React.CSSProperties;
}) => {
  const styles = {
    ...style,
    color: color,
    fontSize: "0.75rem",
    fontWeight: 500,
    letterSpacing: "0.85px",
    fontFamily: "Marianne",
    textTransform: "uppercase",
    margin: "0"
  };
  return React.createElement(htmlTag, { style: styles }, children);
};

export const Body = ({
  children,
  weight = 'regular',
  size = 'md',
  color = "#23282B",
  style
}: {
  children: React.ReactNode;
  weight?: 'regular' | 'medium' | 'bold';
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <p
      style={{
        ...style,
        color: color,
        fontSize: size === 'sm' ? '14px' : size === 'md' ? '1rem' : '18px',
        fontWeight: weight === 'bold' ? 700 : weight === 'medium' ? 500 : 400,
        letterSpacing: "0.4px",
        fontFamily: "Marianne",
        margin: "0"
      }}
    >
      {children}
    </p>
  );
}
