import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import {
  AlertDialog,
  AlertDialogLabel,
  AlertDialogDescription
} from "@reach/alert-dialog";

import "@reach/dialog/styles.css";

import { actions } from "./redux";

import { Text } from "../text";

function GDPRNotice(props) {
  let cancelRef = useRef(null);

  useEffect(() => {
    props.getGDPRStatus();
  }, []);

  let { accept, reject } = props;
  let isProcessing = accept.isFetching || reject.isFetching;

  return (
    <AlertDialog isOpen={props.isOpen} leastDestructiveRef={cancelRef}>
      <AlertDialogLabel>Yo!</AlertDialogLabel>

      <AlertDialogDescription>
        This is an annoying GDPR popup!
        <br />
        Do you want this to go away?
      </AlertDialogDescription>
      <div className="alert-buttons">
        <React.Fragment>
          <button onClick={props.acceptGDPR} disabled={isProcessing}>
            Yes
          </button>
          <button
            ref={cancelRef}
            onClick={props.rejectGDPR}
            disabled={isProcessing}
          >
            No
          </button>
          {isProcessing && <Text>Action in progress</Text>}
          {!isProcessing && accept.errors && (
            <Text style={{ color: "red" }}>{accept.errors.message}</Text>
          )}
          {!isProcessing && reject.errors && (
            <Text style={{ color: "red" }}>{reject.errors.message}</Text>
          )}
        </React.Fragment>
      </div>
    </AlertDialog>
  );
}

let mapStateToProps = state => state.gdpr;

let mapDispatchToProps = actions;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GDPRNotice);
