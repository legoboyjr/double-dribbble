import React from 'react';
import PropTypes from 'prop-types';

function NavLink (props) {
    return (
        <li className="nav-item active">
            <a className="nav-link" href={props.href}>{props.title}</a>
        </li>
    );
}

NavLink.propTypes = {
    title: PropTypes.string.isRequired,
    href: PropTypes.string
};

export default NavLink;