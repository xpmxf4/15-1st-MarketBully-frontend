import React, { Component } from "react";
import ItemDetailMenu from "./ItemDetailMenu";
import "./ItemImage.scss";

class ItemImage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="ItemImage">
        <ItemDetailMenu menuTabId={2} />
        <img src="images/tomato.jpg" alt="tomato" />
        <p className="simple-description">무농약 토마토(1kg/3~6개입)</p>
      </div>
    );
  }
}

export default ItemImage;
