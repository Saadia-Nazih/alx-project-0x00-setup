// File: components/Button.tsx

import React from 'react';
import { ButtonProps } from '../interfaces'; // Importiamo il nostro "contratto"

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    <button 
      type="button" 
      className={`font-semibold text-white ${styles}`} // Combiniamo stili di base con quelli personalizzati
    >
      {title}
    </button>
  );
};

export default Button;