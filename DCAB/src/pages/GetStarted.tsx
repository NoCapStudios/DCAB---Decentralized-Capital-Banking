import { useState } from "react";
import "./GetStarted.css";

export function GetStarted() {
  const [userName, setUserName] = useState("");

  return (
    <div className="get-users-name">
      <label>Hello, </label>
      <input
        type="text"
        className="name"
        value={userName}
        onChange={() => setUserName(userName)}
      />
    </div>
  );
}
