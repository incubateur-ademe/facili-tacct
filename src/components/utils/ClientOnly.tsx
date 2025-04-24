'use client';

import HeaderImage from "@/assets/images/header.svg";
import Image from 'next/image';
import { type SuspenseProps, useEffect, useState } from 'react';

export const ClientOnly = ({ children, fallback }: SuspenseProps) => {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return <>{fallback}</>;
  }
  return <>{children}</>;
};

export function useHasMounted() {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  return hasMounted;
}

export const HeaderClientOnly = ({ children, fallback }: SuspenseProps) => {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return (
      <div className="bg-white w-full flex justify-center">
        <Image
          src={HeaderImage}
          alt="header"
          width={1232}
          height={116.5}
        />
      </div>
    );
  }
  return <>{children}</>;
};
