import React, {Component} from 'react';
import NavItem from "./NavItem/NavItem";
import classes from './Navigations.module.css';

class Navigations extends Component {
    render() {
        return (
            <div className={classes.Navigation}>
                <NavItem link={"/submit"} >Dashboard</NavItem>
                <NavItem link={"/chart"} >Todo List</NavItem>
            </div>
        );
    }
}

export default Navigations;