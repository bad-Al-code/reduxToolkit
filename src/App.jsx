import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <h1 className="text-3xl bg-slate-200 rounded-lg shadow-md text-center m-4 p-2 ">
        Redux TODOS
      </h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
