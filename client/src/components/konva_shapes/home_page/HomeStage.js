import React, { Component } from "react";
import Konva from "konva";
import { Stage, Layer, Star } from "react-konva";
import PlusSign from "./PlusSign";
import Multiply from "./Multiply";
import RightParenth from "./RightParenth";
import LeftParenth from "./LeftParenth";

class StarPlacer extends React.Component {
  state = {
    color: "green"
  };
  handleClick = () => {
    this.setState({
      color: Konva.Util.getRandomColor()
    });
  };
  render() {
    return (
      <Star
        draggable={true}
        x={40}
        y={50}
        innerRadius={40}
        outerRadius={20}
        rotation={40}
        fill={this.state.color}
        shadowBlur={5}
        onClick={this.handleClick}
      />
    );
  }
}

export default class HomeStage extends Component {
  render() {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <StarPlacer/>
          <PlusSign/>
          <Multiply/>
          <RightParenth/>
          <LeftParenth/>
        </Layer>
      </Stage>
    );
  }
}