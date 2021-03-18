import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Scrollspy from "react-scrollspy";

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default function SideMenu({ items, className }) {
  return (
    <nav className={className}>
      <Scrollspy items={items.map(({ id }) => id)} currentClassName="selected">
        {items.map(({ id, label }) => (
          <li>
            <a href={`#${id}`} key={id}>
              {label}
            </a>
          </li>
        ))}
      </Scrollspy>
    </nav>
  );
}

SideMenu.defaultProps = {};

SideMenu.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * An array of id, label
     */
    items: PropTypes.array.isRequired,

    /**
     * Navbar class name
     */
    className: PropTypes.string
};
