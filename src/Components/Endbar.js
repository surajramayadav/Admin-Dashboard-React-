import React from "react";
import "./Endbar.css";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange, green } from "@material-ui/core/colors";
import AssignmentIcon from "@material-ui/icons/Assignment";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  square: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  rounded: {
    color: "#fff",
    backgroundColor: green[500],
  },
}));
export default function Endbar() {
  const classes = useStyles();
  return (
    <div className="endbar-start">
      <div className="endbar-start-1">
        <Avatar
          style={{ marginTop: 15, marginRight: 20 }}
          alt="Remy Sharp"
          src="/alex.jpg"
        />
      </div>
      <div className="endbar-start-2">
        <p style={{ marginTop: 10, fontSize: 20 }}>Business Summary</p>
        <p style={{ marginTop: 10, fontSize: 15 }}>Balance</p>
        <div className="endbar-cant-2">
          <p style={{ paddingTop: 20, paddingLeft: 30, fontSize: 30 }}>
            $3,250.00
          </p>
          <p style={{ paddingTop: 20, paddingLeft: 30, fontSize: 15 }}>
            $232000 &nbsp; &nbsp; &nbsp; &nbsp;$122200
          </p>
          <br />
        </div>
      </div>
      <div className="endbar-start-3">
        <img
          src={"/chart.png"}
          alt="chart Diagram"
          style={{ marginTop: 10, width: 300 }}
        />
      </div>
      <div className="endbar-start-4">
        <p style={{ fontSize: 12, fontWeight: "bold" }}>Location And Manager</p>
        <div className="avtar-outer">
          <div className="flex-row-1">
            <Avatar
              variant="square"
              className={classes.square}
              style={{ marginTop: 15 }}
              alt="Remy Sharp"
              src="/alex.jpg"
            />
            <p
              style={{
                marginTop: 14,
                fontSize: 15,
                paddingLeft: 15,
                fontWeight: "bold",
              }}
            >
              La Mocha Cafe
              <p
                style={{
                  fontSize: 12,
                }}
              >
                Alexandra daddario
              </p>
            </p>
          </div>
          <div className="flex-row-1">
            <Avatar
              variant="square"
              className={classes.square}
              style={{ marginTop: 15 }}
              alt="Remy Sharp"
              src="/rr.jpg"
            />
            <p
              style={{
                marginTop: 14,
                fontSize: 15,
                paddingLeft: 15,
                fontWeight: "bold",
              }}
            >
              Real Madrid
              <p
                style={{
                  fontSize: 12,
                }}
              >
                Cristiano Ronaldo
              </p>
            </p>
          </div>
          <div className="flex-row-1">
            <Avatar
              variant="square"
              className={classes.square}
              style={{ marginTop: 15 }}
              alt="Remy Sharp"
              src="/ne.jpg"
            />
            <p
              style={{
                marginTop: 14,
                fontSize: 15,
                paddingLeft: 15,
                fontWeight: "bold",
              }}
            >
              FC Barcelona
              <p
                style={{
                  fontSize: 12,
                }}
              >
                Neymar Jr
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
