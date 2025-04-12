import { useTodo } from "../context/todos/TodosContext";
import Container from "./Container";
import { H1 } from "./Headings";
import InputContainer from "./InputContainer";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";

const TodoContainer = () => {
  const { todos } = useTodo();
  console.log(todos);

  return (
    <section className="todo__container">
      <main>
        <H1>To Do List</H1>
        <Container>
          <InputContainer />
          <TodoList>
            {Array.isArray(todos) && todos.length > 0
              ? todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
              : "No todos Found"}
          </TodoList>
        </Container>
      </main>
    </section>
  );
};

export default TodoContainer;
