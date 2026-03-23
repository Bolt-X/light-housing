'use client';
import { CommonSection } from '@/src/types/pageBuilder';
import React, { useEffect, useRef, useState } from 'react';
import CustomLink from '../../common/custom-link';

export default function SideBarRightBasic({ data }: CommonSection) {
  const sidebarRef = useRef<HTMLDivElement>(null!);
  const [hasSidebarContainer, setHasSidebarContainer] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const sidebarContainer = document.querySelector('.sidebar-container');
    const sidebarEl = sidebarRef.current;

    if (!sidebarEl) return;

    if (sidebarContainer && !sidebarContainer.contains(sidebarEl)) {
      try {
        sidebarContainer.appendChild(sidebarEl);
        setHasSidebarContainer(true);
      } catch (err) {
        console.error('Sidebar append error:', err);
        setHasSidebarContainer(false);
      }
    } else {
      setHasSidebarContainer(!!sidebarContainer);
    }

    return () => {
      if (sidebarContainer && sidebarContainer.contains(sidebarEl)) {
        sidebarContainer.removeChild(sidebarEl);
      }
    };
  }, []);

  return <section></section>;
}
