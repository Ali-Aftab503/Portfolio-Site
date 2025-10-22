"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode, useEffect } from "react";

function ForceTheme() {
  useEffect(() => {
    // Force dark mode on mount and override system theme
    document.documentElement.classList.add('dark');
    document.documentElement.style.colorScheme = 'dark';
    
    // Override any theme changes
    const observer = new MutationObserver(() => {
      if (!document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.add('dark');
      }
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, []);

  return null;
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider 
      attribute="class" 
      defaultTheme="dark" 
      forcedTheme="dark" 
      enableSystem={false}
      storageKey="theme"
      disableTransitionOnChange
    >
      <ForceTheme />
      {children}
    </ThemeProvider>
  );
}