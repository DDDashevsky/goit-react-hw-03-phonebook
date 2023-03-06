import React from 'react';
import { FormInput, SubmitButton } from './Form.styled';

export default class Form extends React.Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <h2>Phonebook</h2>
          <FormInput>
            Name
            <input
              value={this.state.name}
              onChange={this.handleInputChange}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </FormInput>
          <br />
          <FormInput>
            Number
            <input
              value={this.state.number}
              onChange={this.handleInputChange}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </FormInput>
          <br />
          <SubmitButton type="submit">Add Contact</SubmitButton>
        </form>
      </>
    );
  }
}
