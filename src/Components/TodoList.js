import React from "react";

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listOfTodos: [],
      toDoInput: "Just something to put in",
    };
    this.clickAddTodoButton = this.addTodo.bind(this);

    this.inputOnChangehandler = this.inputOnChangehandler.bind(this);
  }

  addTodo(newTask) {
    console.log("added Todo");
    let newstate = { ...this.state };
    newstate.listOfTodos.push(this.state.toDoInput);
    this.setState(newstate);
  }
  inputOnChangehandler(e) {
    let newstate = { ...this.state };
    newstate.toDoInput = e.target.value;
    this.setState(newstate);
  }

  finishedTodo() {}

  render() {
    return (
      <div className="Todos">
        <h2>To-Do-List</h2>
        <input
          type="text"
          name="Inputfield"
          id="OneTodoElement"
          onChange={this.inputOnChangehandler}
        ></input>
        <button onClick={this.clickAddTodoButton}>AddTodo</button>
        <button onClick={() => console.log(this.state)}>StateCheck</button>
        {this.state.listOfTodos.map((element, index) => {
          return <p>{element}</p>;
        })}
      </div>
    );
  }
}

export default TodoList;
