import React, { PureComponent } from 'react';

class HabitAddForm extends PureComponent {
  formRef = React.createRef();
  inputRef = React.createRef();
  onSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.formRef.current.value.reset();
  }; 
  render() {
    return (
      <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
      <input
        ref={this.inputRef} 
        type="text" 
        placeholder="Habit" 
        className="add-input" 
        required
        />
      <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;