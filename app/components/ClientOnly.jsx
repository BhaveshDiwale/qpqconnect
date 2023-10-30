'use client';

import React, { useState, useEffect } from 'react';
import { Provider as ReduxProvider } from "react-redux";
import Store from '../redux/store';

const ClientOnly = ({
  children
}) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, [])

  if (!hasMounted) return null;

  return (
    <ReduxProvider store={Store}>
      {children}
    </ReduxProvider>
  );
};

export default ClientOnly;
