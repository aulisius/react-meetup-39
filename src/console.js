import React, { useEffect, useState } from "react";
import { Hook, Console, Decode, Unhook } from "console-feed";

export function ConsoleFeed(props) {
  let [logs, setLogs] = useState([]);

  useEffect(() => {
    Hook(window.console, log => setLogs(logs => [...logs, Decode(log)]));
    return () => {
      Unhook(window.console);
    };
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#242424",
        width: "70%",
        margin: "0 auto"
      }}>
      <Console logs={logs} filter="log" variant="dark" />
    </div>
  );
}
