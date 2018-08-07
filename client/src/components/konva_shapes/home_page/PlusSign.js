import React, { Component } from "react";
import Konva from "konva";
import { Shape } from "react-konva";

 export default class PlusSign extends React.Component {
    state = {
      color: "blue"
    };
    handleClick = () => {
      this.setState({
        color: Konva.Util.getRandomColor()
      });
    };
    render() {
      return (
        <Shape
            sceneFunc={(context, shape) => {
              context.beginPath();
              context.moveTo(0,0);
              context.lineTo(0, 25);
              context.lineTo(-25, 25);
              context.lineTo(-25, 35);
              context.lineTo(0, 35);
              context.lineTo(0, 60);
              context.lineTo(10, 60);
              context.lineTo(10, 35);
              context.lineTo(35, 35);
              context.lineTo(35, 25);
              context.lineTo(10, 25);
              context.lineTo(10, 0);
              context.closePath();
              context.fillStrokeShape(shape);
            }}
          fill={this.state.color}
          shadowBlur={5}
          onClick={this.handleClick}
          draggable={true}
          x={120}
          y={100}
        />
      );
    }
  }