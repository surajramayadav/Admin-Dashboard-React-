import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Sidebar from "./Components/Sidebar";
import Feed from "./Components/Feed";
import Endbar from "./Components/Endbar";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import FavoriteIcon from "@material-ui/icons/Favorite";
import NavigationIcon from "@material-ui/icons/Navigation";
import { AiFillExclamationCircle } from "react-icons/ai";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));
function App() {
  const classes = useStyles();
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
