import "./scss/app.scss";
import Task from "./components/Task";

function App() {
  return (
    <>
      <div className="wrapper">
        <h1>Personal</h1>
        <p className="wrapper__text">
          A board to keep track of personal tasks.
        </p>
        <div className="content">
          <Task />
        </div>
      </div>
    </>
  );
}

export default App;
