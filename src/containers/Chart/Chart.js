import React, {Component} from "react";
import {connect} from "react-redux";

class MyChart extends Component{

    render() {
        return (
            <div>
                {/*<Chart />*/}
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
};

export default connect(mapStateToProps)(MyChart);