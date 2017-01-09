import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button';

const FormItem = Form.Item;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

class AddTask extends React.Component {
  state = {
    input: '',
  };

  handleInput = e => this.setState({ input: e.target.value });

  handleSubmit = (e) => {
    const { dispatch, onAdd } = this.props;
    const { input } = this.state;
    e.preventDefault();
    dispatch(onAdd({ title: input, todoId: this.props.todoId }));
    this.setState({ input: '' });
  }

  render() {
    const { input } = this.state;
    return (
      <Row>
        <Form inline onSubmit={this.handleSubmit}>
          <FormItem>
            <Input value={input} onChange={this.handleInput} placeholder="task's title" size="small" />
          </FormItem>
          <FormItem>
            <Button onClick={this.handleSubmit} icon="plus" size="small" />
          </FormItem>
        </Form>
      </Row>
    );
  }
}

AddTask.propTypes = {
  todoId: PropTypes.number,
  dispatch: PropTypes.func,
  onAdd: PropTypes.func,
};

export default AddTask;
