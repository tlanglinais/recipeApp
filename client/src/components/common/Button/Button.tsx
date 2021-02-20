import React from 'react';

import './Button.scss';

const Button = ({ children, className, ariaState, onClick, ...otherProps }) => (
  <button
    className={`button--${className}`}
    onClick={onClick}
    onKeyDown={e => {
      if (e.key === '13') onClick();
    }}
    role="switch"
    tabIndex={0}
    aria-checked={ariaState}
    {...otherProps}
  >
    {children}
  </button>
);

export default Button;
