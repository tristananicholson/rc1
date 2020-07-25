import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components';

const StyledButton = styled.button`
            background-color: ${props=>props.alt ? 'red' : 'green'};
            font: inherit;
            border: 1px solid blue;
            padding: 8px;
            cursor: pointer;
            color: white;
            &:hover {
                background-color: ${props=>props.alt?'salmon':'lightgreen'};
                color: black;
            }`;
class App extends Component {
    state = {
        persons: [
            {id: 'asdf', name: "Max", age: 28},
            {id: 'asdf1', name: "Manu", age: 29},
            {id: 'asdf2', name: "Stephanie", age: 26}
      ],
      showPersons: false
    };
    
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
        const style = {
            backgroundColor: 'green',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
            color: 'white',
            ':hover': {
                backgroundColor: 'lightgreen',
                color: 'black'
            }
        };
        
        let persons = null;
        
        if(this.state.showPersons){
            persons = (<div>
                        {this.state.persons.map((person,index) => {
                                return <Person 
                                    click={()=>this.deletePersonHandler(index)}
                                    name={person.name} 
                                    age={person.age} 
                                    key={person.id}
                                    change={(event)=>this.nameChangedHandler(event,person.id)}/>
                            })}

                    </div>);
        }
        
        const classes = [];
        
        if(this.state.persons.length <= 2){
            classes.push('red');
        };
        if(this.state.persons.length <= 1){
            classes.push('bold');
        };
        
        return (
                <div className="App">
                    <h1>Hello, I am a React App!</h1>
                    <p className={classes.join(' ')}>This is really working!</p>
                    <StyledButton alt={this.state.showPersons} onClick={this.togglePersonHandler}>Toggle Persons</StyledButton>
                    {persons}
                </div>
        );
    }
        //return React.createElement('div',{className: 'App'},React.createElement('h1',null,'Hello, I am a React App!!!'))
}


    

export default App;
