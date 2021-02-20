import React, { useState } from 'react';
import { Transition } from 'react-transition-group';
import MenuToggle from 'components/common/Toggle/Toggle';
import './Sidebar.scss';

const Sidebar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const duration = 500;

  const defaultStyle = {
    // transition: `transform ${duration}ms cubic-bezier(0.75, 0.02, 0.2, 2)`,
    transition: `transform ${duration}ms ease-in-out`,
    transform: 'translateX(30%)',
  };

  const transitionStyles = {
    entering: { transform: 'translateX(0)' },
    entered: { transform: 'translateX(0)' },
    exiting: { transform: 'translateX(30%)' },
    exited: { transform: 'translateX(30%)' },
  };

  return (
    <>
      <MenuToggle
        onClick={() => setIsVisible(!isVisible)}
        className="sidebar"
        isChecked={isVisible}
      />
      <Transition
        in={isVisible}
        timeout={duration}
        // unmountOnExit
        // mountOnEnter
        // appear
      >
        {state => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            <div className="sidebar">Um</div>
          </div>
        )}
      </Transition>
    </>
  );
};

export default Sidebar;
