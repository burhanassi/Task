import React, {Component} from "react";
import {connect} from "react-redux";
import {Bar} from "react-chartjs-2";
import * as actions from '../../store/actions/index';
import classes from '../SubmitForm/SubmitForm.module.css';

class MyChart extends Component{


    componentDidMount() {
        this.props.onGetTodos();
    }

    render() {
        const {todos, error} = this.props;

        const state = {
            labels: [],
            datasets: [
                {
                    label: 'todo',
                    backgroundColor: 'rgba(20,92,92,1)',
                    borderColor: 'rgba(0,0,0,1)',
                    borderWidth: 2,
                    data: []
                }
            ]
        }

        let titles = [];
        for (let key in todos) {
            titles.push(todos[key].date);
        }

        let count = {};
        titles.forEach((i) => {
            count[i] = (count[i]||0) + 1;
        })

        titles = [];
        for (let key in count) {
            titles = [...titles, count[key]];
        }

        let labels = []
        for (let key in todos) {
            labels.push(todos[key].date);
        }

        labels = Array.from(new Set(labels));
        for (let i = 0; i < labels.length; i++) {
            state.labels.push(labels[i]);
        }

        if(!state.datasets.data){
            for (let i = 0; i <titles.length ; i++) {
                state.datasets[0].data.push(titles[i]);
            }
        }

        return (
            <div className={classes.MainDiv}>
                <h2>ToDos List Chart</h2>
                {error && <div><p>{error.message}</p></div>}
                <Bar
                    data={state}
                    options={{
                        title:{
                            display:false,
                            text:'ToDos',
                            fontSize:20
                        },
                        legend:{
                            display:true,
                            position:'right'
                        }
                    }}
                />
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        todos: state.todos,
        error: state.error
    }
};

const mapDispatchToProps =dispatch => {
    return {
        onGetTodos: () => dispatch(actions.getTodos())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MyChart);