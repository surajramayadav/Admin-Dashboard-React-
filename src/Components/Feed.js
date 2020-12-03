import React from "react";
import "./Feed.css";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import {
  AiOutlineCalendar,
  AiOutlineHeart,
  AiOutlineHome,
  AiOutlineLoading3Quarters,
} from "react-icons/ai";
import { RiCupLine, RiTShirt2Line, RiPencilRuler2Line } from "react-icons/ri";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "10ch",
      },
    },
  },
}));

export default function Feed() {
  const classes = useStyles();
  return (
    <div className="feed">
      <div className="searchbar">
        <div className="left">
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </div>
        <div className="right">
          <h5 style={{ marginTop: 5, fontSize: 15 }}>
            <AiOutlineCalendar /> Set Date
          </h5>
        </div>
      </div>
      <div className="middle-bar">
        <div className="outside">
          <h1 style={{ marginTop: 15, color: "white" }}>Laa Mocha</h1>
          <h5 style={{ marginTop: 15, color: "white" }}>Summary</h5>
          <p style={{ marginTop: 15, color: "white" }}>
            laa mocha is a brand to crate dresses and other things laa mocha is
            a brand to crate dresses and other things.
          </p>
          <h5 style={{ marginTop: 15, color: "white" }}>Bussiness helath</h5>
          <div className="box">
            <div
              className="inside-box"
              style={{
                marginTop: 15,
                height: 50,
                width: 120,
                backgroundColor: "white",
              }}
            >
              <div className="inside-box-1">
                <AiOutlineHeart size={30} color="white" style={{ margin: 5 }} />
              </div>
              <div className="inside-box-2">
                <h5>24%</h5>
                <p style={{ fontSize: 10 }}>YR Grwoth</p>
              </div>
            </div>
            <div
              className="inside-box-main"
              style={{
                marginTop: 15,
                paddingleft: 30,
                height: 50,
                width: 120,
                backgroundColor: "white",
              }}
            >
              <div className="inside-box-3">
                <AiOutlineHome size={30} color="white" style={{ margin: 5 }} />
              </div>
              <div className="inside-box-4">
                <h5>75%</h5>
                <p style={{ fontSize: 10 }}>Stockout</p>
              </div>
            </div>
          </div>
        </div>
        <div className="inside">
          <AiOutlineLoading3Quarters
            size={40}
            color="white"
            style={{ margin: 30 }}
          />
          <h6 style={{ color: "white", marginTop: 35, paddingLeft: 20 }}>
            Unit stock (K)
          </h6>
          <h1 style={{ color: "white", marginTop: 5, paddingLeft: 20 }}>
            525 Units
          </h1>
          <h6 style={{ color: "white", marginTop: 10, paddingLeft: 20 }}>
            Stock exceeding
          </h6>
          <h6 style={{ color: "white", paddingLeft: 20 }}>sales By 25%</h6>
        </div>
      </div>
      <div className="end-bar">
        <div className="img-side">
          <div className="img-side-inside-1"></div>
          <div className="img-side-inside-2">
            <h6 style={{ paddingLeft: 10, marginTop: 5 }}>MONTHLY EMPLOYEE</h6>
            <h4 style={{ paddingLeft: 10, marginTop: 10 }}>Neil P. Harrison</h4>
            <h6 style={{ paddingLeft: 10, marginTop: 3 }}>Laa Mocha Cafe</h6>
          </div>
        </div>
        <div className="img-outside">
          <div className="img-outside-inside-1">
            <h5 style={{ paddingLeft: 40, marginTop: 10 }}>
              Top Selling Product
            </h5>
            <p style={{ paddingLeft: 40, marginTop: 10, fontSize: 12 }}>
              I have collected the best attitude status collection in hindi
              which you guys will surely love and enjoy and your friends will
              also appreciate it.
            </p>
          </div>
          <div className="img-outside-inside-2">
            <div className="img-outside-inside-2-1">
              <RiCupLine size={50} style={{ marginTop: 10 }} />
              <h6 style={{ marginTop: 10 }}>BLACK COFFIE </h6>
              <p style={{ marginTop: 5, fontSize: 10 }}>250 wats </p>
              <p style={{ fontSize: 10 }}>5120 </p>
            </div>
            <div className="img-outside-inside-2-2">
              <RiTShirt2Line size={50} style={{ marginTop: 10 }} />
              <h6 style={{ marginTop: 10 }}>NIKE SWEAT </h6>
              <p style={{ marginTop: 5, fontSize: 10 }}>250 wats </p>
              <p style={{ fontSize: 10 }}>5120 </p>
            </div>
            <div className="img-outside-inside-2-3">
              <RiPencilRuler2Line size={50} style={{ marginTop: 10 }} />
              <h6 style={{ marginTop: 10 }}>SKET CHAIR </h6>
              <p style={{ marginTop: 5, fontSize: 10 }}>250 wats </p>
              <p style={{ fontSize: 10 }}>5120 </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
