import React from "react";
import Konva from "konva";
import { Circle } from "react-konva";

 export default class CirclePlace extends React.Component {
    state = {
      color: Konva.Util.getRandomColor()
    };
    handleClick = () => {
      this.setState({
        color: Konva.Util.getRandomColor()
      });
    };
    render() {
      return (
        <Circle
            height={60}
            fill={this.state.color}
            shadowBlur={5}
            onClick={this.handleClick}
            draggable={true}
            x={210}
            y={160}
        />
      );
    }
  }