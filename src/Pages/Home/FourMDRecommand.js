import React, { Component } from "react";
import Slider from "react-slick";
import "./config/MDRcommandSlide.scss";
import { Link } from "react-router-dom";
class FourMDRecommand extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
    };
    const { filtering } = this.props;

    return (
      <div>
        <Slider {...settings}>
          {filtering?.map(data => {
            return (
              <div className="MDRcommanCard">
                <Link className="MDLink" to="/">
                  <img src={data.image_url} alt={data.subcategory_name}></img>
                </Link>
                <div className="recommand__desc">
                  <Link className="recommand__link" to="/">
                    <span>{data.companyName}</span>
                    <span>{data.productName}</span>{" "}
                  </Link>
                  <span>{data.price}</span>
                  <span className="savePrice">{data.savePrice}</span>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
export default FourMDRecommand;
