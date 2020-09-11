import React, {Component} from 'react';
import NavItem from "./NavItem/NavItem";
import classes from './Navigations.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome} from "@fortawesome/free-solid-svg-icons";
import { faChartBar } from "@fortawesome/free-solid-svg-icons";

class Navigations extends Component {
    render() {
        return (
            <div className={classes.Navigation}>
                <NavItem link={"/submit"} ><FontAwesomeIcon icon={faHome} className={classes.Icon}/>Dashboard</NavItem>
                <NavItem link={"/chart"} ><FontAwesomeIcon icon={faChartBar} className={classes.Icon}/>Todo List</NavItem>
            </div>
        );
    }
}

export default Navigations;