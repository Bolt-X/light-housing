'use client';
import { createContext, useContext } from 'react';

type MetadataType = {
  top_navigation: any[];
  bottom_navigation: any[];
  contact_information: any;
  [key: string]: any;
};

const MetadataContext = createContext<MetadataType | null>(null);

export function MetadataProvider({
  value,
  children,
}: {
  value: MetadataType | undefined | null;
  children: React.ReactNode;
}) {
  return (
    <MetadataContext.Provider value={value ?? null}>
      {children}
    </MetadataContext.Provider>
  );
}

export function useMetadata(): MetadataType {
  const context = useContext(MetadataContext);
  return (
    context || {
      top_navigation: [],
      bottom_navigation: [],
      contact_information: null,
    }
  );
}
