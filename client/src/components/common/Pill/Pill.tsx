import React, { useState } from 'react';
import { Transition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlusSquare,
  faWindowClose,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import './Pill.scss';

interface Props {
  text: string;
  onClick?: Function;
}

const Pill = ({ text, onClick }: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const duration = 400;

  const defaultStyle = {
    transition: `transform ${duration}ms cubic-bezier(0.75, 0.02, 0.4, 2)`,
    transform: 'translateY(-100%)',
  };

  const transitionStyles = {
    entering: { transform: 'translateY(0)' },
    entered: { transform: 'translateY(0)' },
    exiting: { transform: 'translateY(-100%)' },
    exited: { transform: 'translateY(-100%)' },
  };
  // if element's position > 50% of screen height, put menu on bottom & vice-versa
  // const calculateScreenPosition

  return (
    <button
      className="pill"
      onClick={() => setMenuOpen(!menuOpen)}
      type="button"
    >
      <div className="pill__text">{text}</div>
      <Transition
        in={menuOpen}
        timeout={duration}
        unmountOnExit
        mountOnEnter
        appear
      >
        {state => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
            className="pill__menu"
          >
            <span className="icon" style={{ marginRight: '1rem' }}>
              <FontAwesomeIcon
                icon={faPlusSquare}
                color="#6930c3"
                className="recipe__ingredient--menu-add icon"
                onClick={() => console.log('Added to shopping list.')}
              />
            </span>
            <span className="icon">
              <FontAwesomeIcon
                icon={faSearch}
                color="#6930c3"
                className="recipe__ingredient--menu-close icon"
                onClick={() => console.log('clicked')}
              />
            </span>
          </div>
        )}
      </Transition>
    </button>
  );
};

export default Pill;

Pill.defaultProps = {
  onClick: () => null,
};
