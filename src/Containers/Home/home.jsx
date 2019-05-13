import React, { Component } from "react";
import Navbar from "../../Components/Navbar/navbar";
import Bodyhome from "../../Components/Bodyhome/bodyhome";

export default class home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Bodyhome />
      </div>
    );
  }
}
