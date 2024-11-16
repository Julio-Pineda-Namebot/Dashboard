import React, { useState, useEffect } from 'react';

type RouterProps = {
  children: (props: { currentPath: string; navigate: (to: string) => void }) => React.ReactNode;
};

export function ClientRouter({ children }: RouterProps) {
  const [currentPath, setCurrentPath] = useState('/');

  useEffect(() => {
    const handleRouteChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleRouteChange);
    setCurrentPath(window.location.pathname);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  const navigate = (to: string) => {
    window.history.pushState({}, '', to);
    setCurrentPath(to);
  };

  return <>{children({ currentPath, navigate })}</>;
}