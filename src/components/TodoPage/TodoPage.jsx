import { Component } from "react";
import PrioritySelect from "../PrioritySelect/PrioritySelect";
import ToDoForm from "../TodoForm/TodoForm";
import ToDoList from "../TodoList/TodoList";
import { todo as todoList } from "../../data/todo";
import { v4 } from "uuid";

class TodoPage extends Component {
  state = {
    todo: [], // 4 + 15
    priority: "all",
    isOpen: false,
  };

  getSnapshotBeforeUpdate() {
    return document.body.clientHeight;
  }

  componentDidMount() {
    const savedTodo = JSON.parse(localStorage.getItem("todo")) || todoList;
    this.setState({ todo: savedTodo });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log("Todo Page CDU");

    if (prevState.todo !== this.state.todo) {
      localStorage.setItem("todo", JSON.stringify(this.state.todo));
      window.scrollTo({
        top: snapshot,
        behavior: "smooth",
      });
    }
    if (prevState.priority !== this.state.priority) {
      this.setState({ isOpen: true });
    }
  }

  changePriority = (e) => {
    const { value } = e.target;
    this.setState({ priority: value });
  };

  addTodo = (todo) => {
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

  handleAddMoreTodo = () => {
    const newTodo = { ...this.state.todo[0] };
    const todoList = Array(15)
      .fill("")
      .map((el) => ({ ...newTodo, id: v4() }));
    this.setState((prev) => ({ todo: [...prev.todo, ...todoList] }));
  };

  filterTodo = () => {
    const { todo, priority } = this.state;
    if (priority === "all") return todo;
    return todo.filter((el) => el.priority === priority);
  };

  render() {
    // console.log("TodoPage render");
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
        <button type="button" onClick={this.handleAddMoreTodo}>
          Add more todo
        </button>
      </>
    );
  }
}

export default TodoPage;
