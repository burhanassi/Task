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
            date: null
        };
    }
    changeHandler(event) {
        event.preventDefault();
        this.setState({[event.target.name]: event.target.value});
    }

    submitHandler() {
        if(this.state.name && this.state.date){
            this.props.onAddTodo(this.state.name, this.state.date);
        } else {
            alert("ENTER A VALID TITLE AND DATE FOR TODO YOU WANT TO ADD IT!");
        }
    }

    componentDidMount() {
        this.props.onGetTodos();
    }

    render() {
        let listItems;
        if(this.props.todosss){
             listItems = this.props.todosss.map(item =>
                <li className={classes.ListItem} key={item.id}>Task Name: {item.name}, Date: {item.date}</li>
            )
        }
        return(
            <div>
                <form className={classes.FormClass}>
                    <input name={"name"} type={"text"} className={classes.Input} onChange={this.changeHandler} placeholder={"Add To Do Item"}  />
                    <input name={"date"} type={"date"} className={classes.Input} onChange={this.changeHandler} placeholder={"Due Date"}  />
                    <Button btnType={"Success"} clicked={this.submitHandler}>Submit</Button>
                </form>
                <ul>
                    {listItems}
                </ul>
            </div>
        )
    }

};

const mapStateToProps = state => {
    return {
        todosss: state.todos
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onGetTodos: () => dispatch(actions.getTodos()),
        onAddTodo: (name, date) => dispatch(actions.addTodo(name, date))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubmitForm);