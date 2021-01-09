import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './components/ValidationComponent';
import CharComponent from './components/CharComponent';

class App extends Component {
  state = {
    inputText: '',
    charMin: 5
  }


handleInputChange = (event) => {
  this.setState(
    {inputText: event.target.value}
  );
}

deleteCharHandler = (index) => {
  const char = this.state.inputText.split('');
  char.splice(index, 1);
  const updatedInput = char.join('');
  this.setState({inputText: updatedInput})
}


  render() {
    const outputText = this.state.inputText.length <= this.state.charMin ? 'Text too short' : 'Text long enough';

    let letters = null;

    if(this.state.inputText.length > 0) {
      letters = (
        <div>
          {this.state.inputText.split('').map((letter, index) => {
            return <CharComponent
            key={index}
            character={letter}
            delete={() => this.deleteCharHandler(index)}/>
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <input type="text" onChange={this.handleInputChange} value={this.state.inputText}/>
        <p>This text is {this.state.inputText.length} characters long</p>
        <ValidationComponent textLength={outputText} />
        {letters}
        <ol>
          {/* <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li> */}
          {/* <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li> */}
          {/* <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li> */}
          {/* <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li> */}
          {/* <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li> */}
          {/* <li>When you click a CharComponent, it should be removed from the entered text.</li> */}
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      </div>
    );
  }
}

export default App;
