import Header from "./Components/Header";
import Form from "./Components/Form";
import { useState } from "react";
// import Todo from "./Components/Todo";
import TodoList from "./Components/TodoList";


function App() {
  const [todo,setTodo]= useState("");
  const [todoList,setTodoList]= useState([]);
  return (
    <div className="App">
     <Header></Header>
     <Form 
    todo={todo}
    setTodo={setTodo} 
    todoList={todoList}
    setTodoList={setTodoList}
    ></Form>
    {/* <Todo></Todo> */}
    <TodoList setTodoList={setTodoList} todoList={todoList}></TodoList>
    </div>
  );
}

export default App;
