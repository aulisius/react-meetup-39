import React from "react";
import { setValue } from "./redux";
import { connect } from "react-redux";
import { ConsoleFeed } from "../console";
function Counter({ value, dispatch }) {
  return (
    <React.Fragment>
      <h2>{value}</h2>
      <div>
        <button onClick={_ => dispatch(setValue(1))}>+</button>
        <button onClick={_ => dispatch(setValue(-1))}>-</button>
      </div>
      <br />
      <ConsoleFeed />
    </React.Fragment>
  );
}

let mapStateToProps = state => state.counter;

export default connect(mapStateToProps)(Counter);
