import React from 'react';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { addtodo } from '../action/todo';
import { connect } from 'react-redux';


const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark" className="mt-5">
        <Form
          inline
          className="form-width"
          onSubmit={(e) => {
            e.preventDefault();
            if (!input.value.trim()) {
              return
            }
            dispatch(addtodo(input.value));
            input.value = '';
          }}
        >
          <FormControl type="text" placeholder="todo" ref={dom => (input = dom)} className="mr-sm-3 input-per" />
          <Button variant="outline-info" type="submit">ADD</Button>
        </Form>
      </Navbar>
    </React.Fragment>
  )
}

export default connect()(AddTodo)
