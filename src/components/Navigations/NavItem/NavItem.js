import React, {Component} from 'react';
import classes from './NavItem.module.css';
import {NavLink} from "react-router-dom";

class NavItem extends Component {
    render() {
        const {link, children} = this.props;
        return (
            <li className={classes.NavItem}>
                <NavLink exact activeClassName={classes.active} to={link} >{children}</NavLink>
            </li>
        );
    }
};

export default NavItem;