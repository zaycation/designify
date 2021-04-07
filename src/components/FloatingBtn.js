import React, { Component } from "react";
import {
  FloatingMenu,
  MainButton,
  ChildButton,
} from "react-floating-button-menu";
import ReactTooltip from "react-tooltip";
import MdAdd from "@material-ui/icons/Add";
import MdClose from "@material-ui/icons/Clear";
import DialpadIcon from "@material-ui/icons/Dialpad";
import DraftsIcon from "@material-ui/icons/Drafts";

export default class FloatingBtn extends Component {
  state = {
    isOpen: false,
  };
  render() {
    return (
      <FloatingMenu
        slideSpeed={1050}
        direction="up"
        spacing={12}
        isOpen={this.state.isOpen}
        className="floating__btn"
      >
        <MainButton
          iconResting={<MdAdd style={{ fontSize: 20 }} />}
          iconActive={<MdClose style={{ fontSize: 20 }} />}
          onClick={() => this.setState({ isOpen: !this.state.isOpen })}
          size={45}
          data-tip="Click me for contact info!"
          className="plusIcon"
        />
        <ChildButton
          icon={<DialpadIcon style={{ fontSize: 20, color: "#ef8e38" }} />}
          size={40}
          data-tip="Give us a ring"
          onClick={() => window.open("tel:773-420-8593", "_blank")}
        />
        <ChildButton
          icon={
            <DraftsIcon
              style={{
                fontSize: 20,
                color: "#ef8e38",
              }}
            />
          }
          size={40}
          data-tip="Shoot us an email"
          onClick={() =>
            window.open("mailto:isaiahthomas098@gmail.com", "_blank")
          }
        />
        <ReactTooltip />
      </FloatingMenu>
    );
  }
}
