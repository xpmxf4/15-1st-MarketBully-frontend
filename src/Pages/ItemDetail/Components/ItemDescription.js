import React, { Component } from "react";
import ItemDetailMenu from "./ItemDetailMenu";
import "./ItemDescription.scss";

class ItemDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="ItemDescription">
        <ItemDetailMenu />
      </div>
    );
  }
}

export default ItemDescription;