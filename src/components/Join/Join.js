import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";

import "./Join.css";

export default function SignIn() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <Button
        variant="fab"
        style={{
          position: "fixed",
          right: 10,
          bottom: 10,

          border_radius: 100,
          width: 50,
          height: 50,
          background: "purple",
        }}
        onClick={() => setShowForm((showForm) => !showForm)}
      >
        {showForm ? <ChatIcon /> : null}
      </Button>

      {showForm && (
        <div className="joinOuterContainer">
          <div className="joinInnerContainer">
            <h1 className="heading">Join</h1>
            <div>
              <input
                placeholder="Name"
                className="joinInput"
                type="text"
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div>
              <input
                placeholder="Room"
                className="joinInput mt-20"
                type="text"
                onChange={(event) => setRoom(event.target.value)}
              />
            </div>
            <Link
              onClick={(e) => (!name || !room ? e.preventDefault() : null)}
              to={`/chat?name=${name}&room=${room}`}
            >
              <button className={"button mt-20"} type="submit">
                Sign In
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
