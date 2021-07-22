import React from 'react';
import PropTypes from 'prop-types';
import Toggle from './toggle';

const Nav = ({ fastType, mode, onToggle }) => (
  <nav className="nav">
    <Toggle
      checked={fastType}
      leftLabel="سرعت تایپ سریع"
      name="fastType"
      onChange={onToggle}
      rightLabel="سرعت تایپ معمول"
    />
    <Toggle
      checked={mode}
      leftLabel="حالت تیره"
      name="dark"
      onChange={onToggle}
      rightLabel="حالت روشن"
    />
  </nav>
);

Nav.propTypes = {
  fastType: PropTypes.bool,
  mode: PropTypes.bool,
  onToggle: PropTypes.func,
};

export { Nav };
