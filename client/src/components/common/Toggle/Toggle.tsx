import React from 'react';
import './Toggle.scss';

interface Props {
  children?: React.ReactNode;
  className: string;
  isChecked: boolean;
  onClick: Function;
}

const Toggle = ({
  children,
  className,
  isChecked,
  onClick,
  ...otherProps
}: Props) => {
  const onKeyDown = e => {
    if (e.key === '13') {
      onClick(e);
    }
  };

  return (
    <button
      className={`toggle${className ? `--${className}` : ''}`}
      onClick={e => onClick(e)}
      onKeyDown={e => onKeyDown(e)}
      role="switch"
      type="button"
      tabIndex={0}
      aria-checked={isChecked}
      {...otherProps}
    >
      <div className={`toggle${isChecked ? ' open' : ''}`}>
        <span className="toggle__line line1" />
        <span className="toggle__line line2" />
        <span className="toggle__line" />
      </div>
    </button>
  );
};

export default Toggle;

Toggle.defaultProps = {
  children: null,
};
