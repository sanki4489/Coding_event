import React from 'react';
import { useSelector } from 'react-redux';

const Alert = () => {
  const alert = useSelector((state) => state.alert);
  return (
    <div style={{ height: '50px' }}>
      {alert && (
        <div className={`alert alert-${alert.type}`} role="alert">
          alert.msg
        </div>
      )}
    </div>
  );
};

export default Alert;
