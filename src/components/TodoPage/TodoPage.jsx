import { Component } from "react";
import PrioritySelect from "../PrioritySelect/PrioritySelect";
import ToDoForm from "../TodoForm/TodoForm";
import ToDoList from "../TodoList/TodoList";
import { todo as todoList } from "../../data/todo";

class TodoPage extends Component {
  state = {
    todo: todoList,
    priority: "all",
  };

  changePriority = (e) => {
    const { value } = e.target;
    console.log("value :>> ", value);
    this.setState({ priority: value });
  };

  addTodo = (todo) => {
    // find -> el | undefined || some -> true | false
    this.setState((prevState) => ({ todo: [...prevState.todo, todo] }));
  };

  removeTodo = (id) => {
    this.setState((prev) => ({ todo: prev.todo.filter((el) => el.id !== id) }));
  };

  updateTodoStatus = (id) => {
    this.setState((prev) => ({
      todo: prev.todo.map((el) =>
        el.id !== id ? el : { ...el, isDone: !el.isDone }
      ),
    }));
  };

  filterTodo = () => {
    const { todo, priority } = this.state;
    if (priority === "all") return todo;
    return todo.filter((el) => el.priority === priority);
  };

  render() {
    const filterdTodo = this.filterTodo();

    return (
      <>
        <ToDoForm addTodo={this.addTodo} />
        <PrioritySelect
          priority={this.state.priority}
          changePriority={this.changePriority}
        />
        <ToDoList
          todo={filterdTodo}
          removeTodo={this.removeTodo}
          updateTodoStatus={this.updateTodoStatus}
        />
      </>
    );
  }
}

export default TodoPage;
