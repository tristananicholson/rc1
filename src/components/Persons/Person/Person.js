import React, {Component} from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Aux.js';

class Person extends Component {
    componentWillUnmount() {
        console.log('[Person.js] componentWillUnmount');
    }
    render(){
        console.log('[Person.js] rendering...');
        return (
                <Aux>
                    <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                    <p>{this.props.children}</p>
                    <input type="text" onChange={this.props.change} value={this.props.name}></input>
                </Aux>
        );
    };
};
//<div className={classes.Person}>
export default Person;