import React, {Component} from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Aux.js';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }
    static contextType = AuthContext;

    componentDidMount() {
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }
    render(){
        console.log('[Person.js] rendering...');
        return (
                <Aux>
                    {this.context.authenticated?<p>Authenticated</p>:<p>Please Log In</p>}
                    <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                    <p>{this.props.children}</p>
                    <input 
                        ref={this.inputElementRef}
                        //ref={(inputEl)=>{this.inputElement=inputEl}} 
                        type="text" 
                        onChange={this.props.change} 
                        value={this.props.name}></input>
                </Aux>
        );
    };
};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person,classes.Person);