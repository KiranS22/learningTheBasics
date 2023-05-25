import CreateUser from "../Form/CreateUser";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="info">
        <h1 className="page-heading">Display User Data</h1>
        <p>
          {" "}
          Submitting this form will display non-sensitive information on the
          screen
        </p>
      </div>

      <CreateUser />
    </div>
  );
}

export default App;
