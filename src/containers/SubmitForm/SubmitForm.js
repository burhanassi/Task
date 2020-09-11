import React, {Component} from "react";
import Button from "../../components/UI/Button/Button";
import classes from './SubmitForm.module.css';
import * as actions from '../../store/actions/index';
import {connect} from "react-redux";

class SubmitForm extends Component{
    constructor(props) {
        super(props);
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.state = {
            name: '',
            date: null,
            alert: false
        };
    }
    changeHandler(event) {
        event.preventDefault();
        this.setState({[event.target.name]: event.target.value});
    }

    submitHandler() {
        if(this.state.name && this.state.date){
            this.props.onAddTodo(this.state.name, this.state.date);
            this.setState({alert: true});
        }
    }

    componentDidMount() {
        this.props.onGetTodos();
    }

    render() {
        const {todosss, error} = this.props;

        let listItems;
        if(todosss){
             listItems = todosss.map(item =>
                <li className={classes.ListItem} key={item.id}>Task Name: {item.name}, Date: {item.date}</li>
            )
        }
        return(
            <div className={classes.MainDiv}>
                <h3>Add ToDo </h3>
                <form className={classes.FormClass}>
                    <label>ToDo Title:</label>
                    <input name={"name"} type={"text"} className={classes.Input} onChange={this.changeHandler} placeholder={"Add To Do Item"}  />
                    <label>Due Date:</label>
                    <input name={"date"} type={"date"} className={classes.Input} onChange={this.changeHandler} placeholder={"Due Date"}  />
                    <Button disabled={!this.state.name || !this.state.date} btnType={"Success"} clicked={this.submitHandler}>Submit</Button>
                </form>
                {this.state.alert && <div className={classes.AlertS}>YOUR TODO WAS ADDED!</div>}
                <div className={classes.List}>
                    <ul>
                        {error ?  <div className={classes.AlertF}>{error.message}</div>: listItems}
                    </ul>
                </div>
            </div>
        )
    }

};

const mapStateToProps = state => {
    return {
        todosss: state.todos,
        error: state.error
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onGetTodos: () => dispatch(actions.getTodos()),
        onAddTodo: (name, date) => dispatch(actions.addTodo(name, date))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubmitForm);