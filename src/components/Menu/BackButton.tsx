import React from 'react';
import { useHistory } from 'react-router-dom';

function BackButton({ children }: { children: React.ReactNode; }) {
  const history = useHistory();
  const handleClick = () => history.goBack();

  return (
    <button type="button" onClick={handleClick} className="goBack">
      {children}
    </button>
  );
}

export default BackButton;