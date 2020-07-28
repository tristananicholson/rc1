import React, { Component } from 'react';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import WithClass from '../hoc/WithClass'

class App extends Component {

    constructor (props) {
        super(props);
        console.log('[App.js] constructor');
    }

    state = {
        persons: [
            {id: 'asdf', name: "Max", age: 28},
            {id: 'asdf1', name: "Manu", age: 29},
            {id: 'asdf2', name: "Stephanie", age: 26}
      ],
      showPersons: false,
      showCockpit: true
    };
    
    static getDerivedStateFromProps(props, state){
        console.log('[App.js] getDerivedStateFromProps');
        return state;
    }

    /*UNSAFE_componentWillMount() {
        console.log('[App.js] ComponentWillMount');
    }*/

    componentDidMount() {
        console.log('[App.js] componentDidMount');
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log('[App.js] shouldComponentUpdate');
        return true;
    }
    componentDidUpdate(){
        console.log('[App.js] componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('[App.js] componentWillUnmount');
    }

    nameChangedHandler = (event,id) => {
        const personIndex = this.state.persons.findIndex(p=>{
            return p.id === id;
        });
        
        const person = {...this.state.persons[personIndex]};
        
        person.name = event.target.value;
        
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        
        this.setState({
            persons: persons
        });
    }
    
    togglePersonHandler = () => {
        this.setState({showPersons: !(this.state.showPersons)})
    }
    
    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex,1);
        this.setState({persons: persons});
    }
    
    
    render(){  
        console.log('[App.js] rendering...')
        let persons = null;
        
        if(this.state.showPersons){
            persons = <div>
                        <Persons 
                            clicked={this.deletePersonHandler} 
                            changed={this.nameChangedHandler}
                            persons={this.state.persons}/>
                    </div>;
        }
        
        return (
                <WithClass classes={classes.App}>
                    <button onClick={()=>this.setState({showCockpit: !(this.state.showCockpit)})}>
                        Remove Cockpit
                    </button>
                    {this.state.showCockpit ? 
                        <Cockpit 
                            title={this.props.title}
                            personsLength={this.state.persons.length}
                            showPersons={this.state.showPersons}
                            clicked={this.togglePersonHandler}/>:null}
                    {persons}
                </WithClass>
        );
    }
}


    

export default App;
