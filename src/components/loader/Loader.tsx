import React from "react";

import "./Loader.module.css";
import Header from "../header/Header";

type LoaderProps = {
  style?: number;
};

const Loader: React.FC<LoaderProps> = (props) => {
  return (
    <section className="wrapper style2 special">
      <Header size={5} title={"Laster inn..."} />
      {getStyle(props.style ?? 4)}
    </section>
  );
};

function getStyle(style: number) {
  switch (style) {
    case 1:
      return (
        <div className="lds-circle">
          <div></div>
        </div>
      );
    case 2:
      return <div className="lds-dual-ring"></div>;
    case 3:
      return (
        <div className="lds-facebook">
          {" "}
          <div></div> <div></div> <div></div>{" "}
        </div>
      );
    case 4:
      return (
        <div className="lds-heart">
          {" "}
          <div></div>{" "}
        </div>
      );
    case 5:
      return (
        <div className="lds-ring">
          {" "}
          <div></div> <div></div> <div></div> <div></div>{" "}
        </div>
      );
    case 6:
      return (
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      );
    case 7:
      return (
        <div className="lds-default">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      );
    case 8:
      return (
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      );
    case 9:
      return (
        <div className="lds-grid">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      );
    case 10:
      return <div className="lds-hourglass"></div>;
    case 11:
      return (
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      );
    case 12:
      return (
        <div className="lds-spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      );
    default:
      throw Error("Invalid style number");
  }
}

export default Loader;
