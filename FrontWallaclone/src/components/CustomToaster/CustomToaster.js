import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';

function CustomToaster({ message, reset, ...props }) {
  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      gutter={8}
      containerClassName=""
      containerStyle={{}}
      toastOptions={{
        // Define default options
        className: '',
        duration: 5000,
        style: {
          background: '#363636',
          color: '#fff'
        },
        // Default options for specific types
        success: {
          duration: 3000,
          theme: {
            background: '#363636',
            primary: 'green',
            secondary: 'black'
          }
        }
      }}
    />
  );
}

export default CustomToaster;
