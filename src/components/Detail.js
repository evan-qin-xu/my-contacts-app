import React from "react";

function Detail(props) {
  return <p className="info">{props.textLabel}{props.detailInfo}</p>;
}

export default Detail;