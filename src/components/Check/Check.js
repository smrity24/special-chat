import { Link } from "react-router-dom";
import React, { Component, Fragment } from "react";
import { Button } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import { Dialog } from "@material-ui/core";
import "./Check.css";

const style = {
  fab: {
    position: "fixed",
    right: 10,
    bottom: 10,
    border_radius: 50,
    width: 50,
    height: 50,
    background: "purple",
  },
};
export default class extends Component {
  state = {
    open: false,
    input: {
      name: "",
      room: "",
    },
  };
  handleToggle = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  handleChange = (name) => ({ target: { value } }) => {
    this.setState({
      input: {
        ...this.state.input,
        [name]: value,
      },
    });
  };

  render() {
    const {
      open,
      input: { name, room },
    } = this.state;

    return (
      <Fragment>
        <Dialog open={open} onClose={this.handleToggle}>
          <div className="joinOuterContainer">
            <div className="joinInnerContainer">
              <h1 className="heading">Join</h1>
              <div>
                <input
                  placeholder="Name"
                  className="joinInput"
                  type="text"
                  value={name}
                  label="name"
                  onChange={this.handleChange("name")}
                />
              </div>
              <div>
                <input
                  placeholder="Room"
                  className="joinInput mt-20"
                  type="text"
                  value={room}
                  label="room"
                  onChange={this.handleChange("name")}
                />
              </div>
              <Link onClick={this.handleToggle} to={`/chat?`}>
                <button className={"button mt-20"} type="submit">
                  Sign In
                </button>
              </Link>
            </div>
          </div>
        </Dialog>

        <Button onClick={this.handleToggle} variant="fab" style={style.fab}>
          <ChatIcon />
        </Button>
      </Fragment>
    );
  }
}
