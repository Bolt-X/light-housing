'use client';
import React from 'react';

/**
 * @deprecated This component is redundant as ScrollSmootherProvider now handles Lenis globally.
 * It is kept as a simple pass-through to avoid build errors if referenced elsewhere.
 */
export default function ScrollSmoothWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
