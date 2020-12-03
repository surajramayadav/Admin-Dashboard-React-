import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Feed from "./Components/Feed";
import Endbar from "./Components/Endbar";

function App() {
  return (
    <div className="App">
      <div className="container ">
        <Sidebar />
      </div>
      <div className="container1 ">
        <Feed />
      </div>
      <div className="container2 ">
        <Endbar />
      </div>
    </div>
  );
}

export default App;
