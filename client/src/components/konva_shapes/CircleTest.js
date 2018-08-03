import React, { Component } from "react";
import Konva from "konva";
import { Stage, Layer, Circle, Text } from "react-konva";

class ColorFunction extends React.Component {
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
      <Circle
        draggable={true}
        x={40}
        y={50}
        height={60}
        fill={this.state.color}
        shadowBlur={5}
        onClick={this.handleClick}
      />
    );
  }
}

export default class CircleTest extends Component {
  render() {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Text text="Try click on rect" />
          <ColorFunction />
        </Layer>
      </Stage>
    );
  }
}