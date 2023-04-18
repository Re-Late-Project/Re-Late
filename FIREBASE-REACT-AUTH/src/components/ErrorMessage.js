import React from 'react';

const ErrorMessage = ({ error }) => {
  return (
    <div style={{ color: 'red', fontWeight: 'bold', marginBottom: '10px' }}>
      {error}
    </div>
  );
};

export default ErrorMessage;